function Header(props) {
  return (
    <header className="d-flex justify-between align-center">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/images/logo.png" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кросовок!</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/images/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/images/user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
