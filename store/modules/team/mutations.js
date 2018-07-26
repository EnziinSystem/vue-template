import { GET_INDEX_TEAM } from './mutation-types';
import { GET_SHOW_TEAM } from './mutation-types';
import { CREATED_TEAM } from './mutation-types';
import { DESTROYED_TEAM } from './mutation-types';
import { UPDATED_TEAM } from './mutation-types';

export default {
    [GET_INDEX_TEAM](state, res) {
        state.teams = res;
    },
    [GET_SHOW_TEAM](state, res) {
        state.teams.push(res);
    },
    [UPDATED_TEAM](state, res) {
        const index = state.teams.findIndex(team => team.id === Number(res.id));
        state.teams.splice(index, 1, res);
    },
    [CREATED_TEAM](state, res) {
        state.teams.unshift(res);
    },
    [DESTROYED_TEAM](state, res) {
        const index = state.teams.findIndex(team => team.id === Number(res.id));
        state.teams.splice(index, 1);
    }
};