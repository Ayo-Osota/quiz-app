import { useState } from "react";
import { useApp } from "./AppContext";
import { modules } from "./data";
import { useNavigate } from "react-router";
import { Info, Play } from "lucide-react";
import Page from "./Page";
import { TIMER_OPTIONS } from "./timer";

// Group modules by course using their titles, e.g. "OS (PROG 2635) Wk 3" → "OS (PROG 2635)"
const courseOf = (title: string) =>
  title.replace(/\s+(?:Wk\s*\d+.*|Exam Review)$/, "");

const courses = modules.reduce((map, m) => {
  const course = courseOf(m.title);
  map.set(course, [...(map.get(course) ?? []), m]);
  return map;
}, new Map<string, typeof modules>());

const Home = () => {
  const { startQuiz, timerSeconds, setTimerSeconds } = useApp();
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  const navigate = useNavigate();

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((mid) => mid !== id) : [...prev, id]
    );
  };

  const toggleCourse = (ids: string[]) => {
    setSelectedModules((prev) =>
      ids.every((id) => prev.includes(id))
        ? prev.filter((id) => !ids.includes(id))
        : [...prev, ...ids.filter((id) => !prev.includes(id))]
    );
  };

  const questionCount = modules
    .filter((m) => selectedModules.includes(m.id))
    .reduce((total, m) => total + m.data.length, 0);

  return (
    <Page title="Choose modules">
      <form
        className="mx-auto flex max-w-4xl flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          startQuiz(selectedModules);
          navigate("/quiz");
        }}
      >
        <header className="flex flex-col gap-2">
          <h1 className="display-fluid">Practice quiz</h1>
          <p className="body-large prose-width">
            Pick the modules you want to practise. Questions are shuffled, and
            you choose how long you get for each one.
          </p>
        </header>

        <div className="flex flex-col gap-5">
          {[...courses].map(([course, items]) => {
            const ids = items.map((m) => m.id);
            const allSelected = ids.every((id) => selectedModules.includes(id));

            return (
              <fieldset key={course} className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <legend className="title-large text-ink">{course}</legend>
                  <button
                    type="button"
                    onClick={() => toggleCourse(ids)}
                    className="btn btn-compact btn-secondary"
                  >
                    {allSelected ? "Clear" : "Select all"}
                    <span className="sr-only"> {course} modules</span>
                  </button>
                </div>
                <div className="grid gap-2 md:grid-cols-2">
                  {items.map((m) => (
                    <label key={m.id} className="choice">
                      <input
                        type="checkbox"
                        checked={selectedModules.includes(m.id)}
                        onChange={() => toggleModule(m.id)}
                      />
                      <span className="flex-1">
                        {m.title.slice(course.length).trim() || m.title}
                      </span>
                      <span className="label-medium text-ink-muted">
                        {m.data.length} questions
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            );
          })}
        </div>

        <fieldset className="flex flex-col gap-2">
          <legend className="title-large text-ink">Time per question</legend>
          <div className="flex flex-wrap gap-2">
            {TIMER_OPTIONS.map((seconds) => (
              <label key={seconds ?? "off"} className="chip">
                <input
                  type="radio"
                  name="timer"
                  checked={timerSeconds === seconds}
                  onChange={() => setTimerSeconds(seconds)}
                  className="sr-only"
                />
                {seconds === null ? "No timer" : `${seconds} seconds`}
              </label>
            ))}
          </div>
        </fieldset>

        <p className="flex items-start gap-1 body-medium prose-width">
          <Info aria-hidden="true" size={16} className="mt-0.5 shrink-0" />
          AI uses course materials to generate this quiz. Please verify answers
          for accuracy.
        </p>

        <div className="action-bar -mx-3 md:-mx-5">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-3 py-2 md:px-5">
            <p role="status" className="title-small text-ink">
              {selectedModules.length === 0
                ? "Select at least one module to start"
                : `${selectedModules.length} ${
                    selectedModules.length === 1 ? "module" : "modules"
                  } · ${questionCount} questions`}
            </p>
            <button
              type="submit"
              disabled={selectedModules.length === 0}
              className="btn btn-primary"
            >
              <Play aria-hidden="true" size={16} />
              Start quiz
            </button>
          </div>
        </div>
      </form>
    </Page>
  );
};

export default Home;
