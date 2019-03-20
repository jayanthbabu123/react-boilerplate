import * as ActionTypes from './Action-types';
import axios from 'axios';
export const getPostStart = () => {
    return {
        type: ActionTypes.GET_POSTS_DATA_START
    }
}
export const getPostSuccess = (data) => {
    return {
        type: ActionTypes.GET_POSTS_DATA_SUCCESS,
        payload: data
    }
}
export const getPostError = (error) => {
    return {
        type: ActionTypes.GET_POSTS_DATA_ERROR,
        error: error
    }
}

export const getPosts = () => {
    return dispatch => {
        dispatch(getPostStart());
        axios.get('/todos').then((response) => {
            dispatch(getPostSuccess(response.data))
        }).catch(error => {
            dispatch(getPostError(error))
        })
    }
}