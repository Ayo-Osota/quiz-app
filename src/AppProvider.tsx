import { useState } from "react";
import { AppContext } from "./AppContext";
import { modules } from "./data";
import type { IQuestion } from "./interface";

const initialState = {
  questions: [],
  answers: [],
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<IQuestion[]>(
    initialState.questions
  );
  const [answers, setAnswers] = useState<string[]>(initialState.answers);

  const startQuiz = (selectedModules: string[]) => {
    // Gather questions from selected modules
    const selectedQuestions = selectedModules.flatMap((moduleId) => {
      const module = modules.find((m) => m.id === moduleId);
      return module ? module.data : [];
    });

    // Randomize questions
    const shuffledQuestions = selectedQuestions
      .map((q) => ({ q, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ q }) => q);

    setQuestions(shuffledQuestions);
  };

  return (
    <AppContext.Provider
      value={{
        questions,
        answers,
        setAnswers,
        startQuiz,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
