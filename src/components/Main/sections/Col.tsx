import { JSX, ReactNode } from "react";

function Col(
  { children, size = "is-half", modifiers }: {
    children: ReactNode;
    size?: string;
    modifiers?: string;
  },
): JSX.Element {
  const classnames = modifiers || size || "";

  size && !modifiers
    ? console.warn(
      'Prop "size" of Col component is deprecated. Use "modifiers" instead',
    )
    : null;

  return (
    <div className={`column ${classnames}`}>
      {children}
    </div>
  );
}

export default Col;
