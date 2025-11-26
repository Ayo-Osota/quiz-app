import { useState } from "react";
import { useApp } from "./AppContext";
import { modules } from "./data";
import { useNavigate } from "react-router";

const Home = () => {
  const { startQuiz } = useApp();
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  const navigate = useNavigate();

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((mid) => mid !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold mb-4">
          Select Modules (you can select multiple)
        </h1>
        {modules.map((m) => (
          <label key={m.id} className="block mb-2">
            <input
              type="checkbox"
              checked={selectedModules.includes(m.id)}
              onChange={() => toggleModule(m.id)}
              className="mr-2"
            />
            {m.title}
          </label>
        ))}
        <button
          onClick={() => {
            startQuiz(selectedModules);
            navigate("/quiz");
          }}
          disabled={selectedModules.length === 0}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Start Quiz
        </button>
      </div>
      <p>
        Note: AI uses course materials to generate this quiz. Please verify
        answers for accuracy.
      </p>
    </div>
  );
};

export default Home;
