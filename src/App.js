import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import {
  Container,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

const styles = ["minimalist", "retro", "maximalist"];

export default function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row p="5">
          <Col style={{ gap: "10px" }}>
            <ButtonGroup>
              {styles.map((s, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  name="radio"
                  value={s}
                  //onChange={(e) => setStyle(e.currentTarget.value)}
                >
                  {s}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
        </Row>

        <Row className="p-5">
          <Col>
            <h1>Style</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
