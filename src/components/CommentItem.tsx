import React, { useState } from "react";
import CommentsList from "./CommentsList";

const CommentItem: React.FC<{ comment: any }> = ({ comment }) => {
    const [showReplies, setShowReplies] = useState(false);

    return (
        <li className="comment-item">
            <p className="comment-author">{comment.by}</p>
            <p className="comment-text">{comment.text}</p>
            {comment.kids && (
                <button onClick={() => setShowReplies(!showReplies)}>
                    {showReplies ? "Hide replies" : "Show replies"}
                </button>
            )}
            {showReplies && comment.kids && (
                <div className="comment-replies">
                    <CommentsList ids={comment.kids} />
                </div>
            )}
        </li>
    );
};

export default CommentItem;
