import * as api from '../api';

import {
  FETCH_ALL_STORIES,
  CREATE_STORY,
  UPDATE_STORY,
  DELETE_STORY,
} from '../constants/actionTypes';

export const getStories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStories();
    dispatch({ type: 'FETCH_ALL_STORIES', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createStory = (story) => async (dispatch) => {
  try {
    const { data } = await api.createStory(story);
    dispatch({ type: CREATE_STORY, payload: data });
    console.log('HERE', data);
  } catch (error) {
    console.log('YOU MADE IT here', error.message);
  }
};
