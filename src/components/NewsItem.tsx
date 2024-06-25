import React, { useState, useEffect } from "react";
import { fetchItem } from "../services/api";
import { Link } from "react-router-dom";

const NewsItem: React.FC<{ id: number }> = ({ id }) => {
    const [story, setStory] = useState<any>(null);

    useEffect(() => {
        const loadStory = async () => {
            const storyData = await fetchItem(id);
            setStory(storyData);
        };
        loadStory();
    }, [id]);

    if (!story) {
        return <p className="text-loading">Loading...</p>;
    }

    return (
        <div className="news-item">
            <div className="news-item--title-author">
                <a href={story.url} className="text-story" target="_blank" rel="noopener noreferrer">
                    {story.title}
                </a>
                <p className="text-author">by {story.by}</p>
            </div>
            <span className="text-score">Score: {story.score}</span>
            <Link className="text-comments" to={`/news/${id}`}>
                Comments
            </Link>
        </div>
    );
};

export default NewsItem;
