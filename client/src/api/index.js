import axios from 'axios';

// const api = axios.create({ baseURL: 'https://instaverse-123.herokuapp.com' });
const url = 'http://localhost:5001/stories';

export const fetchStories = async () => axios.get(url);
export const createStory = async (story) => axios.post(url, story);
