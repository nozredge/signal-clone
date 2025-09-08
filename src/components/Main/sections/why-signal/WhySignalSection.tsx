import { JSX } from "react";
import Col from "../Col.tsx";
import Columns from "../Columns.tsx";

function FeaturesSection(): JSX.Element {
  return (
    <div className="section has-background-white">
      <div className="container">
        <Columns>
          <Col modifiers="has-text-centered">
            <div className="content">
              <h2 className="title is-2 mb-4">¿Por qué usar Signal?</h2>
              <p className="subtitle is-5">
                Sigue leyendo para descubrir por qué Signal es una app de
                mensajería simple, potente y segura.
              </p>
            </div>
          </Col>
        </Columns>
      </div>
    </div>
  );
}

export default FeaturesSection;
