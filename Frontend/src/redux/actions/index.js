import {
    GET_ARTIST,
    GET_ALBUMS,
    CLEAR_ALBUMS,
    SAVE_REQUEST,
    GET_LOGS
} from "../constants"

import axios from 'axios'
import SERVER from "../../server.js"

export const getArtist = (name) => async (dispatch) => {
    try {
        const response = await axios.get(`${SERVER}/artist?name=${name}`);
        return dispatch({
            type: GET_ARTIST,
            payload: response.data,
        });
    } catch(err) {
        console.log(err);
    }
}

export const getAlbums = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`${SERVER}/artist/albums/${id}`);
        return dispatch({
            type: GET_ALBUMS,
            payload: response.data,
        })
    } catch (err) { 
        console.log(err);
    }
}

export const clearAlbums = () => async (dispatch) => {
    try {
        return dispatch({
            type: CLEAR_ALBUMS,
        })
    } catch (err) {
        console.log(err);
    }
}

export const saveRequest = (ip,name) => async (dispatch) => {
    try {
        await axios.post(`${SERVER}/request?ip=${ip}&name=${name}`);
        return dispatch({
            type: SAVE_REQUEST,
        })
    } catch(err) {
        console.log(err)
    }
}

export const getLogs = () => async (dispatch) => {
    try {
        let response = await axios.get(`${SERVER}/request`);
        return dispatch({
            type: GET_LOGS,
            payload: response.data
        })
    } catch(err) {
        console.log(err)
    }
}