import * as ActionTypes from '../Actions/Action-types'

const initialState = {
    loading: false,
    postItems: [],
    error: null
}

 const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_POSTS_DATA_START:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.GET_POSTS_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                postItems: action.payload
            }
        case ActionTypes.GET_POSTS_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}
export default PostReducer;