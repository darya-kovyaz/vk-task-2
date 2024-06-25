import React, { useState, useEffect } from "react";
import { fetchItem } from "../services/api";
import CommentItem from "./CommentItem";

const CommentsList: React.FC<{ ids: number[] }> = ({ ids }) => {
    const [comments, setComments] = useState<any[]>([]);

    useEffect(() => {
        const loadComments = async () => {
            const commentsData = await Promise.all(ids.map((id) => fetchItem(id)));
            setComments(commentsData);
        };
        loadComments();
    }, [ids]);

    return (
        <div className="comments-list">
            {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default CommentsList;
