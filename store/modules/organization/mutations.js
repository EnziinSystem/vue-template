import { GET_INDEX_ORGANIZATION } from './mutation-types';
import { GET_SHOW_ORGANIZATION } from './mutation-types';
import { CREATED_ORGANIZATION } from './mutation-types';
import { DESTROYED_ORGANIZATION } from './mutation-types';
import { UPDATED_ORGANIZATION } from './mutation-types';

export default {
    [GET_INDEX_ORGANIZATION](state, res) {
        state.organizations = res;
    },
    [GET_SHOW_ORGANIZATION](state, res) {
        state.organizations.push(res);
    },
    [UPDATED_ORGANIZATION](state, res) {
        const index = state.organizations.findIndex(organization => organization.id === Number(res.id));
        state.organizations.splice(index, 1, res);
    },
    [CREATED_ORGANIZATION](state, res) {
        state.organizations.unshift(res);
    },
    [DESTROYED_ORGANIZATION](state, res) {
        const index = state.organizations.findIndex(organization => organization.id === Number(res.id));
        state.organizations.splice(index, 1);
    }
};