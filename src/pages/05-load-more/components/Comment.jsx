import { useState } from "react";
import styles from "./Comment.module.css";
import { Like } from "./Like";
import { Profile } from "./Profile";

export const Comment = ({ comment }) => {

  const [liked, setLiked] = useState(false);

  return (
    <div key={comment.id} className={styles["comment"]}>
      <div className={styles["comment-user-pic"]}>
        <Profile hue={comment.user.id} />
      </div>
      <div className={styles["comment-text-data"]}>
        <div className={styles["comment-top"]}>
          <span className={styles["comment-uname"]}>
            {comment.user.fullName}
          </span>
          <span className={styles["comment-time"]}>
            {comment.id - comment.likes < 0
              ? "just now"
              : `${Math.abs(comment.id - comment.likes)} minutes ago`}
          </span>
        </div>
        <p className={styles["comment-body"]}>{comment.body}</p>
        <div className={styles["comment-bottom"]}>
          <span className={styles["comment-Likes"]}>
            <button onClick={() => setLiked(!liked)}>
              <Like liked={liked} hue={comment.user.id} />
            </button>
            <span className={styles["comment-likes-count"]}>
              {liked + comment.likes}
            </span>
          </span>
          <span className={styles["comment-reply"]}>Reply</span>
        </div>
      </div>
    </div>
  );
};
