import { GET_INDEX_BOARD } from './mutation-types';
import { GET_SHOW_BOARD } from './mutation-types';
import { CREATED_BOARD } from './mutation-types';
import { DESTROYED_BOARD } from './mutation-types';
import { UPDATED_BOARD } from './mutation-types';

export default {
    [GET_INDEX_BOARD](state, res) {
        state.boards = res;
    },
    [GET_SHOW_BOARD](state, res) {
        state.boards.push(res);
    },
    [UPDATED_BOARD](state, res) {
        const index = state.boards.findIndex(board => board.id === Number(res.id));
        state.boards.splice(index, 1, res);
    },
    [CREATED_BOARD](state, res) {
        state.boards.unshift(res);
    },
    [DESTROYED_BOARD](state, res) {
        const index = state.boards.findIndex(board => board.id === Number(res.id));
        state.boards.splice(index, 1);
    }
};