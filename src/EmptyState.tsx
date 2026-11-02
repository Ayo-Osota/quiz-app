import { useNavigate } from "react-router";
import Page from "./Page";

// Shown when a page is opened without a quiz in progress (e.g. after a refresh)
export default function EmptyState({ title }: { title: string }) {
  const navigate = useNavigate();

  return (
    <Page title={title}>
      <div className="mx-auto flex max-w-2xl flex-col gap-3">
        <h1 className="headline-medium">{title}</h1>
        <p className="body-large">
          Pick the modules you want to practise and start a new quiz.
        </p>
        <div>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="btn btn-primary"
          >
            Choose modules
          </button>
        </div>
      </div>
    </Page>
  );
}
