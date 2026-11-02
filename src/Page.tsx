import { useEffect } from "react";

type PageProps = {
  title: string;
  children: React.ReactNode;
};

// Shared shell: skip link, main landmark and a unique document title per page
export default function Page({ title, children }: PageProps) {
  useEffect(() => {
    document.title = `${title} | Quiz app`;
  }, [title]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <main id="main" className="page-container section-y">
        {children}
      </main>
    </>
  );
}
