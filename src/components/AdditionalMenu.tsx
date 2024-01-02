import "../css/additional.scss";

function AdditionalMenu() {
  return (
    <div className="additional_menu">
      <div className="additional_menu_user">
        <div className="additional_menu_title">
          <h4 className="title">Записи</h4>
        </div>
        <div className="additional_menu_items">
          <div className="additional_menu-item">
            <p className="text">Новая</p>
          </div>
          <div className="additional_menu-item">
            <p className="text">Редактировать</p>
          </div>
          <div className="additional_menu-item">
            <p className="text">Удалить</p>
          </div>
        </div>
      </div>
      <div className="additional_menu_category">
        <div className="additional_menu_title">
          <h4 className="title">Категории</h4>
        </div>
        <div className="additional_menu_items">
          <div className="additional_menu-item">
            <p className="text">Разработка</p>
          </div>
          <div className="additional_menu-item">
            <p className="text">Дизайн</p>
          </div>
          <div className="additional_menu-item">
            <p className="text">Администрирование</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditionalMenu;
