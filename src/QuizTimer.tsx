import { Clock, Pause } from "lucide-react";

const LOW_SECONDS = 3;

type QuizTimerProps = {
  limit: number;
  secondsLeft: number;
  paused: boolean;
};

export default function QuizTimer({ limit, secondsLeft, paused }: QuizTimerProps) {
  const low = !paused && secondsLeft <= LOW_SECONDS;
  const Icon = paused ? Pause : Clock;

  return (
    <div className="timer flex flex-col gap-1" data-low={low} data-paused={paused}>
      <div className="flex items-center justify-between gap-2">
        <span className="label-large">{paused ? "Timer paused" : "Time left"}</span>
        <span className="timer-readout flex items-center gap-1 title-medium text-ink">
          <Icon aria-hidden="true" size={24} />
          {Math.ceil(secondsLeft)}s
        </span>
      </div>
      <div className="timer-track" aria-hidden="true">
        <div
          className="timer-fill"
          style={{ width: `${(secondsLeft / limit) * 100}%` }}
        />
      </div>
    </div>
  );
}
