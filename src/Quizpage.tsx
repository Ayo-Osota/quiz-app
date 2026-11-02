import { useEffect, useRef, useState } from "react";
import { useApp } from "./AppContext";
import { useNavigate } from "react-router";
import { Check, Clock, X } from "lucide-react";
import Page from "./Page";
import EmptyState from "./EmptyState";
import QuizTimer from "./QuizTimer";

// answering: timer running | correct: brief pause before moving on
// wrong / timeout: timer paused while the user reads the correct answer
type Status = "answering" | "correct" | "wrong" | "timeout";

export default function Quiz() {
  const { questions, answers, setAnswers, timerSeconds } = useApp();
  const [selected, setSelected] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);
  const [status, setStatus] = useState<Status>("answering");
  const [secondsLeft, setSecondsLeft] = useState(timerSeconds ?? 0);
  const nextTimeout = useRef<number | undefined>(undefined);
  const nextButton = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const q = questions[current];
  const hasQuestion = Boolean(q);
  const answered = status !== "answering";
  const isLast = current + 1 >= questions.length;

  const handleAnswer = (option: string) => {
    if (status !== "answering") return;

    setSelected(option);
    setAnswers([...answers, option]);

    if (option === q.correctAnswer) {
      // Correct → auto move to next
      setStatus("correct");
      nextTimeout.current = window.setTimeout(() => {
        goNext();
      }, 500);
    } else {
      // Wrong → show correct answer + explanation
      setStatus("wrong");
    }
  };

  const handleTimeout = () => {
    // No answer in time → counts as wrong, show correct answer + explanation
    setSelected(null);
    setAnswers([...answers, ""]);
    setStatus("timeout");
  };

  const goNext = () => {
    setSelected(null);
    setStatus("answering");
    setSecondsLeft(timerSeconds ?? 0);
    if (!isLast) {
      setCurrent(current + 1);
    } else {
      navigate("/result");
    }
  };

  // The interval always calls the latest handler (it needs the current answers)
  const onTimeUp = useRef(handleTimeout);
  useEffect(() => {
    onTimeUp.current = handleTimeout;
  });

  // Countdown: restarts at 10 seconds for every question, stops once answered
  useEffect(() => {
    if (status !== "answering" || !hasQuestion || timerSeconds === null) return;

    const deadline = Date.now() + timerSeconds * 1000;
    setSecondsLeft(timerSeconds);

    const id = window.setInterval(() => {
      const left = Math.max(0, (deadline - Date.now()) / 1000);
      setSecondsLeft(left);
      if (left === 0) {
        window.clearInterval(id);
        onTimeUp.current();
      }
    }, 100);

    return () => window.clearInterval(id);
  }, [current, status, hasQuestion, timerSeconds]);

  useEffect(() => () => window.clearTimeout(nextTimeout.current), []);

  // Move focus to Next so keyboard users can continue right away
  useEffect(() => {
    if (status === "wrong" || status === "timeout") {
      nextButton.current?.focus();
    }
  }, [status]);

  if (!q) {
    return <EmptyState title="No quiz in progress" />;
  }

  const secondsAnnouncement =
    timerSeconds !== null && status === "answering" && [5, 3].includes(Math.ceil(secondsLeft))
      ? `${Math.ceil(secondsLeft)} seconds left`
      : "";

  return (
    <Page title={`Question ${current + 1} of ${questions.length}`}>
      <div className="mx-auto flex max-w-2xl flex-col gap-3">
        <h1 className="title-medium font-text">
          Question {current + 1} of {questions.length}
        </h1>

        {timerSeconds !== null && (
          <QuizTimer
            key={current}
            limit={timerSeconds}
            secondsLeft={status === "timeout" ? 0 : secondsLeft}
            paused={answered}
          />
        )}
        <p role="status" className="sr-only">
          {secondsAnnouncement}
        </p>

        <section className="card flex flex-col gap-3 pad-big" aria-labelledby="question">
          <h2 id="question" className="title-large font-text text-ink">
            {q.question}
          </h2>

          <div role="group" aria-labelledby="question" className="flex flex-col gap-2">
            {q.options.map((opt, idx) => {
              const state = !answered
                ? undefined
                : opt === q.correctAnswer
                ? "correct"
                : opt === selected
                ? "wrong"
                : "dim";

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={answered} // Disable buttons after selection
                  data-state={state}
                  onClick={() => handleAnswer(opt)}
                  className="option"
                >
                  <span className="option-marker" aria-hidden="true">
                    {state === "correct" ? (
                      <Check size={16} />
                    ) : state === "wrong" ? (
                      <X size={16} />
                    ) : (
                      String.fromCharCode(65 + idx)
                    )}
                  </span>
                  <span>
                    {opt}
                    {state === "correct" && <span className="sr-only"> (correct answer)</span>}
                    {state === "wrong" && <span className="sr-only"> (your answer, incorrect)</span>}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <div aria-live="polite">
          {(status === "wrong" || status === "timeout") && (
            <div className="alert-error flex-col pad-small" id="feedback">
              <p className="flex items-center gap-1 title-medium text-on-error-soft">
                {status === "timeout" ? (
                  <Clock aria-hidden="true" size={24} />
                ) : (
                  <X aria-hidden="true" size={24} />
                )}
                {status === "timeout" ? "Time's up" : "Incorrect"}
              </p>
              <p className="body-medium">
                The correct answer is:{" "}
                <span className="font-medium">{q.correctAnswer}</span>
              </p>
              <p className="body-medium">{q.explanation}</p>
              <div className="pt-1">
                <button
                  ref={nextButton}
                  type="button"
                  onClick={goNext}
                  aria-describedby="feedback"
                  className="btn btn-primary"
                >
                  {isLast ? "See results" : "Next question"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Page>
  );
}
