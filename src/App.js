import logo from "./logo.svg";
import "./App.css";
import Card from "react-bootstrap/Card";
import Name from "./componet/Name";
import Image from "./componet/Image";
import Price from "./componet/Price";
import Description from "./componet/Description";
import { product } from "./product";
function App() {
  let userName = "Arij";
  return (
    <div className="App">
      <Card style={{ width: "30rem" }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>

          <Card.Text>
            <Price />
            <Description  />
          </Card.Text>
        </Card.Body>
      </Card>
      <h3>Hello, {userName || "there!"}</h3>
    </div>
  );
}

export default App;
