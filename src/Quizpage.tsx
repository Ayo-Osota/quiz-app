import { useState } from "react";
import { useApp } from "./AppContext";
import { useNavigate } from "react-router";

export default function Quiz() {
  const { questions, answers, setAnswers } = useApp();
  const [selected, setSelected] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (option: string) => {
    setSelected(option);
    setAnswers([...answers, option]);

    if (option === q.correctAnswer) {
      // Correct → auto move to next
      setTimeout(() => {
        goNext();
      }, 500);
    } else {
      // Wrong → show correct answer + explanation
      setShowFeedback(true);
    }
  };

  const goNext = () => {
    setSelected(null);
    setShowFeedback(false);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      navigate("/result");
    }
  };

  const q = questions[current];

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-30">
      <h2 className="text-lg font-semibold mb-4">
        Question {current + 1} of {questions.length}
      </h2>
      <p className="mb-4 font-medium">{q.question}</p>
      <div className="space-y-2">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            disabled={!!selected} // Disable buttons after selection
            onClick={() => handleAnswer(opt)}
            className="w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-left"
          >
            {opt}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-sm text-yellow-800">
            ❌ Incorrect. The correct answer is:{" "}
            <span className="font-semibold">{q.correctAnswer}</span>
          </p>
          <p className="mt-2 text-gray-700 text-sm italic">{q.explanation}</p>
          <button
            onClick={goNext}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
