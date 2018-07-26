import axios from 'axios';
import * as types from './mutation-types';

export const index = ({commit}) => {
    axios.get('/api/v1/organizations/')
        .then(response => {
            commit(types.GET_INDEX_ORGANIZATION, response.data);
        })
        .catch(err => {
            console.log(err)
        });
};

export const show = ({commit}, data) => {
    axios.get('/api/v1/organizations/' + data.id)
        .then(response => {
            commit(types.GET_SHOW_ORGANIZATION, response.data);
        })
        .catch(err => {
            console.log(err)
        });
};

export const edit = ({commit}, data) => {
    axios.patch('/api/v1/organizations/' + data.id, data.organization)
        .then(response => {
        })
        .catch(err => {
            console.log(err)
        });
};

export const updated = ({commit}, data) => {
    commit(types.UPDATED_ORGANIZATION, data);
};

export const create = ({commit}, data) => {
    axios.post('/api/v1/organizations/', data)
        .then(response => {
        })
        .catch(err => {
            console.log(err)
        });
};

export const created = ({commit}, data) => {
    commit(types.CREATED_ORGANIZATION, data);
};

export const destroy = ({commit}, data) => {
    axios.delete('/api/v1/organizations/' + data.id)
        .then(response => {
        })
        .catch(err => {
            console.log(err)
        });
};

export const destroyed = ({commit}, data) => {
    commit(types.DESTROYED_ORGANIZATION, data);
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