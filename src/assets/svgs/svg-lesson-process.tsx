import { CheckCircle2 } from "lucide-react";

interface SVGLessonProcessProps {
  status?: "done" | "learning" | "not-started";
}

export default function SVGLessonProcess({
  status = "not-started",
}: SVGLessonProcessProps) {
  return (
    <>
      {status === "done" ? (
        <CheckCircle2
          size={20}
          fill="var(--primary-400)"
          className="text-primary shrink-0"
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="shrink-0"
        >
          <circle cx="8" cy="8" r="7" stroke="var(--primary-400)" />

          {status === "learning" && (
            <circle cx="8" cy="8" r="3" fill="var(--primary-400)" />
          )}
        </svg>
      )}
    </>
  );
}
