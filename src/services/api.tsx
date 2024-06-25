const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const fetchStories = async (type: "beststories" | "newstories" | "topstories", limit: number) => {
    const response = await fetch(`${BASE_URL}/${type}.json`);
    const storyIds = await response.json();
    return storyIds.slice(0, limit);
};

export const fetchItem = async (id: number) => {
    const response = await fetch(`${BASE_URL}/item/${id}.json`);
    return response.json();
};
