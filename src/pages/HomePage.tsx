import React, { useState } from "react";
import NewsList from "../components/NewsList";
import SortOptions from "../components/SortOptions";

const HomePage: React.FC = () => {
    const [sortType, setSortType] = useState<"beststories" | "newstories" | "topstories">("beststories");

    return (
        <div className="home-page">
            <SortOptions setSortType={setSortType} />
            <NewsList type={sortType} limit={30} />
        </div>
    );
};

export default HomePage;
