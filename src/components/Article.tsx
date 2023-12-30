function Article() {
  return (
    <div className="article">
      <div className="article_card">
        <div className="arcicle_container">
          <div className="article_title">
            <h3>Заголовок статьи</h3>
          </div>
          <div className="article_grid_container">
            <div className="article_grid-item">
              <div className="article_img">
                <img src={require("../img/article.png")} alt="" />
              </div>
            </div>
            <div className="article_grid-item">
              <div className="article_text">
                <p>
                  Но глубокий уровень погружения позволяет выполнить важные
                  задания по разработке кластеризации усилий. Сложно сказать,
                  почему предприниматели в сети интернет неоднозначны и будут
                  преданы социально-демократической анафеме. А ещё независимые
                  государства ассоциативно распределены по отраслям.
                </p>
              </div>
            </div>
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
            <div className="anonim_img">
                
            </div>
          </div>
        </div>
      </div>
      <div className="article_comment">
        <div className="article_container"></div>
      </div>
    </div>
  );
}

export default Article;
