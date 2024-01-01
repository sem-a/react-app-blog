import "../css/article.scss";

function Article() {
  return (
    <div className="article">
      <div className="article_card">
        <div className="article_container">
          <div className="article_title">
            <h3 className="title">Заголовок статьи</h3>
          </div>
          <div className="article_content">
            <div className="article_text">
              <p className="text">
                <div className="article_img">
                  <img src={require("../img/article.png")} alt="" />
                </div>
                Но глубокий уровень погружения позволяет выполнить важные
                задания по разработке кластеризации усилий. Сложно сказать,
                почему предприниматели в сети интернет неоднозначны и будут
                преданы социально-демократической анафеме. А ещё независимые
                государства ассоциативно распределены по отраслям.
              </p>
            </div>
          </div>
          <div className="article_author_and_date">
            <div className="article_date">
              <p>27/12/2023</p>
            </div>
            <div className="article_author">
              <div className="author_nik">
                <p>@anonim255</p>
              </div>
              <div className="anonim_img"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="article_comment">
        <div className="article_container">
          <form action="#">
            <input type="text" className="form_input" placeholder="Оставить комментарий..." />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Article;
