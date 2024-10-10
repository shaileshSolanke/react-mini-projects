import { useEffect, useState } from "react";
import { Comment } from "./components/Comment";
import { commentsData } from "../../data/data";
import styles from "./LoadMore.module.css";

export const LoadMore = () => {
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(0);
  const [loadMore, setLoadMore] = useState(true);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchComments(url) {
    try {
      setLoading(true);
      const response = await fetch(
        `${url}?limit=${count === 0 ? 5 : (count + 1) * 5}`
      );
      const data = await response.json();

      if (data) {
        setComments(data.comments);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchComments(commentsData);
  }, [count]);

  useEffect(() => {
    if (comments.length === 30) {
      setLoadMore(false);
    }
  }, [comments]);

  return (
    <div className={styles["load-more-container"]}>
      <div className={styles["device"]}>
        <p className={styles["title"]}>Comments</p>
        <div className={styles["comments"]}>
          {errorMsg !== null && (
            <div className={styles["error-msg-container"]}>
              <p>SOMETHING WENT WRONG &#40; {errorMsg} &#41;</p>
            </div>
          )}
          {loading && (
            <div className={styles["loading-msg-container"]}>
              <img src="/assets/svg/loading.svg" />
            </div>
          )}
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
          <div className={styles["load-more-btn-outer"]}>
            {!loadMore && <span>No more comments</span>}
            {comments && (
              <button
                className={styles["load-more-btn"]}
                onClick={() => setCount(count + 1)}
                disabled={!loadMore || errorMsg!==null}
              >
                Load More Comments
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
