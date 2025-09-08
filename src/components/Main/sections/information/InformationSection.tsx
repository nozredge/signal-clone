import { JSX } from "react";
import Col from "../Col.tsx";
import Columns from "../Columns.tsx";
import Lottie from "react-lottie-player";
import privacyLottie from "../../../../../assets/lotties/privacy.json" with {
  type: "json",
};

function FeaturesSection(): JSX.Element {
  return (
    <div className="section has-background-white">
      <div className="container">
        <Columns>
          <Col size="is-one-third">
            <div className="content">
              <h2 className="title is-2 mb-4">Comparte sin miedos</h2>
              <p className="subtitle is-5">
                Hemos desarrollado un método de cifrado de extremo a extremo de
                última generación (respaldado por el protocolo de código abierto
                de Signal) para mantener tus chats seguros. No podemos leer tus
                mensajes ni escuchar tus llamadas. Ni nosotros ni nadie más. La
                privacidad no es una opción: forma parte de nuestro ADN. En
                Signal, protegemos tu privacidad en todos tus mensajes, en todas
                tus llamadas, en todo momento.
              </p>
            </div>
          </Col>
          <Col size="is-flex is-justify-content-end">
            <div
              className="box is-shadowless"
              style={{ background: "#A5CAD5" }}
            >
              <Lottie
                loop
                animationData={privacyLottie}
                play
                style={{ width: "80%", height: "100%" }}
              />
            </div>
          </Col>
        </Columns>
      </div>
    </div>
  );
}

export default FeaturesSection;
