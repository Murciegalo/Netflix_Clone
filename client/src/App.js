import Jumbotron from "./components/jumbotron/JumboTron";
import jumboData from './featured/jumbo.json'

export default function App() {
  return (
    <div className="App">
      <Jumbotron.Container>
        {jumboData.map(el => (
          <Jumbotron key={el.id} direction={el.direction}>
            <p>{el.title}</p>
            <p>{el.subTitle}</p>
            <p>{el.image}</p>
            <p>{el.alt}</p>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}
