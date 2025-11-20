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
  startQuiz: (selectedModules: string[]) => void;
}
