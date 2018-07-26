import axios from 'axios';
import * as types from './mutation-types';

export const index = ({commit}) => {
    axios.get('/api/v1/teams/')
        .then(response => {
            commit(types.GET_INDEX_TEAM, response.data);
        })
        .catch(err => {
            console.log(err)
        });
};

export const show = ({commit}, data) => {
    axios.get('/api/v1/teams/' + data.id)
        .then(response => {
            commit(types.GET_SHOW_TEAM, response.data);
        })
        .catch(err => {
            console.log(err)
        });
};

export const edit = ({commit}, data) => {
    axios.patch('/api/v1/teams/' + data.id, data.team)
        .then(response => {
        })
        .catch(err => {
            console.log(err)
        });
};

export const updated = ({commit}, data) => {
    commit(types.UPDATED_TEAM, data);
};

export const create = ({commit}, data) => {
    axios.post('/api/v1/teams/', data)
        .then(response => {
        })
        .catch(err => {
            console.log(err)
        });
};

export const created = ({commit}, data) => {
    commit(types.CREATED_TEAM, data);
};

export const destroy = ({commit}, data) => {
    axios.delete('/api/v1/teams/' + data.id)
        .then(response => {
        })
        .catch(err => {
            console.log(err)
        });
};

export const destroyed = ({commit}, data) => {
    commit(types.DESTROYED_TEAM, data);
};

export default {
    index,
    show,
    edit,
    updated,
    destroy,
    create,
    created,
    destroyed
};