import { useDispatch } from "react-redux";
import Article from "./Article";

function Articles() {

    const dispatch = useDispatch()

    return (
        <div className="articles_list">
            <Article />
        </div>
    )
};

export default Articles;