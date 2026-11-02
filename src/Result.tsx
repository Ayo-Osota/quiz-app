import { useNavigate } from "react-router";
import { Check, Clock, RotateCcw, X } from "lucide-react";
import { useApp } from "./AppContext";
import Page from "./Page";
import EmptyState from "./EmptyState";

export default function Result() {
  const { questions, answers, setAnswers } = useApp();
  const navigate = useNavigate();
  const correct = questions.filter(
    (q, i) => q.correctAnswer === answers[i]
  ).length;

  const onRestart = () => {
    setAnswers([]);
    navigate("/quiz");
  };

  if (questions.length === 0) {
    return <EmptyState title="No results yet" />;
  }

  const percent = Math.round((correct / questions.length) * 100);

  return (
    <Page title="Your score">
      <div className="mx-auto flex max-w-2xl flex-col gap-5">
        <header className="flex flex-col gap-2">
          <h1 className="headline-medium">Your score</h1>
          <p className="display-small text-ink">
            {correct} / {questions.length}
            <span className="ml-2 title-large font-text text-ink-muted">
              {percent}% correct
            </span>
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <button type="button" onClick={onRestart} className="btn btn-primary">
              <RotateCcw aria-hidden="true" size={16} />
              Try again
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="btn btn-secondary"
            >
              Choose modules
            </button>
          </div>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="headline-small">Review your answers</h2>
          <ol className="flex flex-col gap-3">
            {questions.map((q, i) => {
              const isCorrect = answers[i] === q.correctAnswer;
              const timedOut = answers[i] === "";

              return (
                <li key={i} className="card flex flex-col gap-2">
                  <span
                    className={`badge self-start ${isCorrect ? "badge-success" : "badge-error"}`}
                  >
                    {isCorrect ? (
                      <Check aria-hidden="true" size={16} />
                    ) : timedOut ? (
                      <Clock aria-hidden="true" size={16} />
                    ) : (
                      <X aria-hidden="true" size={16} />
                    )}
                    {isCorrect ? "Correct" : timedOut ? "Time ran out" : "Incorrect"}
                  </span>
                  <p className="title-medium text-ink">
                    {i + 1}. {q.question}
                  </p>
                  {!isCorrect && (
                    <p className="body-medium">
                      <span className="font-medium text-ink">Your answer: </span>
                      {timedOut ? "No answer" : answers[i]}
                    </p>
                  )}
                  <p className="body-medium">
                    <span className="font-medium text-ink">
                      {isCorrect ? "Your answer: " : "Correct answer: "}
                    </span>
                    {q.correctAnswer}
                  </p>
                  <p className="body-medium">{q.explanation}</p>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </Page>
  );
}
