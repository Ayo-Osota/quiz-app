import { useNavigate } from "react-router";
import { useApp } from "./AppContext";

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

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-16">
      <h2 className="text-xl font-bold mb-4">Your Score</h2>
      <p className="text-lg mb-4">
        {correct} / {questions.length} correct
      </p>
      <button
        onClick={onRestart}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Try Again
      </button>

      <div className="mt-6 space-y-4">
        {questions.map((q, i) => (
          <div key={i} className="border-t pt-4">
            <p className="font-semibold">{q.question}</p>
            <p
              className={`mt-1 ${
                answers[i] === q.correctAnswer
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              Your answer: {answers[i]}
            </p>
            {answers[i] !== q.correctAnswer && (
              <p className="text-green-600">Correct: {q.correctAnswer}</p>
            )}
            <p className="text-sm text-gray-500 mt-1">{q.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
