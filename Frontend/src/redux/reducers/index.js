import {
    GET_ARTIST,
    GET_ALBUMS,
    CLEAR_ALBUMS,
    SAVE_REQUEST,
    GET_LOGS
} from "../constants";

const initialState = {
    artist: {},
    albums: [],
    logs: []
}

export default function rootReducer (state = initialState, action) {
    switch(action.type) {
        case GET_ARTIST:
            return {
                ...state,
                artist: action.payload,
            }
        case GET_ALBUMS:
            return {
                ...state,
                albums: action.payload,
            }
        case CLEAR_ALBUMS:
            return {
                ...state,
                albums: [],
            }
        case SAVE_REQUEST:
            return {
                ...state,
            }
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload
            }
        default:
            return state
    }
}