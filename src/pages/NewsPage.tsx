import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItem } from "../services/api";
import CommentsList from "../components/CommentsList";

const NewsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [news, setNews] = useState<any>(null);

    useEffect(() => {
        const loadNews = async () => {
            const newsData = await fetchItem(Number(id));
            setNews(newsData);
        };
        loadNews();
    }, [id]);

    if (!news) {
        return <p className="text-loading">Loading...</p>;
    }

    return (
        <div className="news-page">
            <h1 className="comment-title">{news.title}</h1>
            <p className="text-author">by {news.by}</p>
            {news.kids && <CommentsList ids={news.kids} />}
        </div>
    );
};

export default NewsPage;
