export type IQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type IModule = {
  id: string;
  title: string;
  data: IQuestion[];
};

export interface IAppContextType {
  questions: IQuestion[];
  answers: string[];
  setAnswers: (answers: string[]) => void;
  // Seconds per question, or null when the timer is off
  timerSeconds: number | null;
  setTimerSeconds: (seconds: number | null) => void;
  startQuiz: (selectedModules: string[]) => void;
}
