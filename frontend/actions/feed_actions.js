// Import Local Directory Files
import * as FeedApiUtil from '../utils/feed_utl';

// Constants
export const GET_ALL_NEWS = 'GET_ALL_NEWS';
export const GET_NEWS_ERRORS = 'GET_NEWS_ERRORS'


// Regular Action Creators // Return POJO
const getAllNews = (news) => ({
  type: GET_ALL_NEWS,
  news
});


const getNewsErrors = (errors) => ({
  type: GET_NEWS_ERRORS,
  errors 
});


// Thunk Action Creators
export const receiveAllNews = () => dispatch => (
  FeedApiUtil.getNewsFeed().then(
    newsResponse => dispatch(getAllNews(newsResponse)),
    errors => dispatch(getNewsErrors)
  )
);