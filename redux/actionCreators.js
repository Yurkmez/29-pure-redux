import getCurrentTime from '../utils/getCurrentTims.js';
// import { ADD_CURRENT_TIME, CLEAR_ALL_TIME } from './actionTypes.js';
import * as actionTypes from './actionTypes.js';

function addCurrentTime() {
    return {
        type: actionTypes.ADD_CURRENT_TIME,
        payload: getCurrentTime(),
    };
}

function clearAllTimes() {
    return {
        type: actionTypes.CLEAR_ALL_TIMES,
    };
}

export { addCurrentTime, clearAllTimes };
