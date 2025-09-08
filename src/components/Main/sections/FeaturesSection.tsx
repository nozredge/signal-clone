import { JSX } from "react";
import Card from "../Card.tsx";
import Col from "./Col.tsx";
import Columns from "./Columns.tsx";

function FeaturesSection(): JSX.Element {
  return (
    <div className="section has-background-white-ter">
      <div className="container">
        <Columns>
          <Col>
            <Card>
              <Card.Selfie>
                <img src="assets/Media.png" />
              </Card.Selfie>
              <Card.Title>Di lo que quieras</Card.Title>
              <Card.Content>
                Envía y recibe mensajes, notas de voz, fotos, vídeos, GIF y
                archivos de forma gratuita. Signal usa la conexión de datos de
                tu teléfono, por lo que no se generan gastos por SMS ni MMS.
              </Card.Content>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Selfie>
                <img src="assets/Calls.png" />
              </Card.Selfie>
              <Card.Title>Habla con libertad</Card.Title>
              <Card.Content>
                Haz llamadas y videollamadas de alta calidad y sin cargos de
                larga distancia para contactar con personas que viven al otro
                lado de la ciudad o al otro lado del mundo.
              </Card.Content>
            </Card>
          </Col>
        </Columns>

        {/* Second column */}
        <Columns>
          <Col>
            <Card>
              <Card.Selfie>
                <img src="assets/Stickers.png" />
              </Card.Selfie>
              <Card.Title>Habla con libertad</Card.Title>
              <Card.Content>
                Haz llamadas y videollamadas de alta calidad y sin cargos de
                larga distancia para contactar con personas que viven al otro
                lado de la ciudad o al otro lado del mundo.
              </Card.Content>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Selfie>
                <img src="assets/Groups.png" />
              </Card.Selfie>
              <Card.Title>Habla con libertad</Card.Title>
              <Card.Content>
                Haz llamadas y videollamadas de alta calidad y sin cargos de
                larga distancia para contactar con personas que viven al otro
                lado de la ciudad o al otro lado del mundo.
              </Card.Content>
            </Card>
          </Col>
        </Columns>
      </div>
    </div>
  );
}

export default FeaturesSection;
