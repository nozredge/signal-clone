import { JSX, ReactNode } from "react";

function Col(
  { children, size = "is-half" }: { children: ReactNode; size?: string },
): JSX.Element {
  return (
    <div
      className={`column ${size} is-flex`}
    >
      {children}
    </div>
  );
}

export default Col;
