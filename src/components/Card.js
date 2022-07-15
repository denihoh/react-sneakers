function Card(props) {
  const onClickButton = () => {
    alert(props.price);
  };
  return (
    <div className="card">
      <div className="favorite">
        <img src="images/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className="button" onClick={onClickButton}>
          <img width={11} height={11} src="/images/plus.png" />
        </button>
      </div>
    </div>
  );
}

export default Card;
