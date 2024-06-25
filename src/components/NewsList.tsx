import React, { useState, useEffect, useCallback } from "react";
import { fetchStories } from "../services/api";
import NewsItem from "./NewsItem";

const NewsList: React.FC<{ type: "beststories" | "newstories" | "topstories"; limit: number }> = ({ type, limit }) => {
    const [stories, setStories] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);

    const loadStories = useCallback(async () => {
        setLoading(true);
        const storyIds = await fetchStories(type, limit);
        setStories(storyIds);
        setLoading(false);
    }, [type, limit]);

    useEffect(() => {
        loadStories();

        const intervalId = setInterval(() => {
            loadStories();
        }, 30000);

        return () => clearInterval(intervalId);
    }, [loadStories]);

    const handleManualUpdate = () => {
        loadStories();
    };

    return (
        <div className="news-list">
            <button onClick={handleManualUpdate} disabled={loading}>
                {loading ? "Updating..." : "Update News"}
            </button>
            {loading ? <p className="text-loading">Loading...</p> : stories.map((id) => <NewsItem key={id} id={id} />)}
        </div>
    );
};

export default NewsList;
