import React from "react";

const SortOptions: React.FC<{ setSortType: (type: "beststories" | "newstories" | "topstories") => void }> = ({
    setSortType,
}) => {
    return (
        <div className="sort-options">
            <button onClick={() => setSortType("beststories")}>Best</button>
            <button onClick={() => setSortType("newstories")}>New</button>
            <button onClick={() => setSortType("topstories")}>Top</button>
        </div>
    );
};

export default SortOptions;
