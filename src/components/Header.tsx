import "../css/header.scss";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header_grid_container">
          <div className="header_grid-item">
            <div className="header_logotype">
              <div className="logo">
                <p>Se</p>
              </div>
            </div>
          </div>
          <div className="header_grid-item">
            <div className="header_menu">
              <nav className="menu">
                <ul className="menu_items">
                  <li className="menu-item">Лента</li>
                  <li className="menu-item">Статьи</li>
                  <li className="menu-item">Новости</li>
                  <li className="menu-item">Гайды</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="header_grid-item">
            <div className="user_circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
