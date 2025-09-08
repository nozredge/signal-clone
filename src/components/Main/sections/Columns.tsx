import { JSX, ReactNode } from "react";

function Columns(
  { children }: { children: ReactNode },
): JSX.Element {
  return (
    <div className="columns">
      {children}
    </div>
  );
}

export default Columns;
