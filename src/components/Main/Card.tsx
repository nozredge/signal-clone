import { JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Card({ children }: Props): JSX.Element {
  return (
    <div className="box has-text-centered card-shadow has-background-white">
      {children}
    </div>
  );
}

function CardSelfie({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="mb-2 card-features is-flex is-justify-content-center">
      <figure className="image">
        {children}
      </figure>
    </div>
  );
}

function CardTitle({ children }: { children: string }): JSX.Element {
  return (
    <h3 className="title is-3 has-text-black-bis mb-1">
      {children}
    </h3>
  );
}

function CardContent({ children }: { children: string }): JSX.Element {
  return (
    <p className="subtitle is-5 pr-4 pl-4 pb-2 has-text-centered has-text-grey-dark">
      {children}
    </p>
  );
}

Card.Selfie = CardSelfie;
Card.Title = CardTitle;
Card.Content = CardContent;

export default Card;
