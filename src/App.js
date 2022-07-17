import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [];
// {
//   title: "Мужские Кроссовки Nike Blazer Mid Suede",
//   price: 12999,
//   imageUrl: "/images/sneakers/1.jpg",
// },
// {
//   title: "Мужские Кроссовки Nike Air Max 270",
//   price: 15600,
//   imageUrl: "/images/sneakers/2.jpg",
// },
// {
//   title: "Мужские Кроссовки Nike Blazer Mid Suede",
//   price: 8499,
//   imageUrl: "/images/sneakers/3.jpg",
// },
// {
//   title: "Кроссовки Puma X Aka Boku Future Rider",
//   price: 8999,
//   imageUrl: "/images/sneakers/4.jpg",
// },

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  fetch("https://62d44807cd960e45d4560155.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="images/search.svg" alt="Search" />
            <input placeholder="Поиск ..."></input>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={() => console.log("Нажали на плюс")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
