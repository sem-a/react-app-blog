function Comment() {
  return (
    <div className="article_comment">
      <div className="article_container">
        <div className="comment_content">
          <div className="comment_grid_container">
            <div className="comment_grid-item">
              <div className="comment_user_circle"></div>
            </div>
            <div className="comment_grid-item">
              <div className="comment_message">
                <div className="comment_text">
                  <p className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Molestiae, veniam? Hic eaque earum exercitationem? Odio
                    repudiandae placeat dolore amet natus, praesentium, vel
                    consequuntur, ullam fuga odit pariatur aliquid eius soluta!
                  </p>
                </div>
                <div className="comment_time_and_date">
                  <div className="comment_time">14:59</div>
                  <div className="comment_date">27/12/2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comment_form">
          <form action="#">
            <input
              type="text"
              className="form_input"
              placeholder="Оставить комментарий..."
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comment;