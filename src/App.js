import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="images/search.svg" alt="Search" />
            <input placeholder="Поиск ..."></input>
          </div>
        </div>
        <div className="d-flex">
          <Card />

          <div className="card">
            <div className="favorite">
              <img src="images/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/images/sneakers/2.jpg" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Стоимость:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.png" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="images/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/images/sneakers/3.jpg" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Стоимость:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.png" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="images/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/images/sneakers/4.jpg" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Стоимость:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
