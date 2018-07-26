import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';

import HomePage from '../views/pages/home.vue';
import NotFoundPage from '../views/pages/not_found.vue';

import OrganizationIndex from '../views/organizations/index.vue';
import OrganizationShow from '../views/organizations/show.vue';
import OrganizationEdit from '../views/organizations/edit.vue';
import OrganizationNew from '../views/organizations/new.vue';
import TeamIndex from '../views/team/index.vue';
import TeamShow from '../views/team/show.vue';
import BoardIndex from '../views/board/index.vue';
import BoardShow from '../views/board/show.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: HomePage, name: 'root_path'},

        {path: '/organizations', component: OrganizationIndex, name: 'organizations_path'},
        {path: '/organizations/:organizationId', component: OrganizationShow, name: 'organization_path'},
        {path: '/organizations/:organizationId/edit', component: OrganizationEdit, name: 'organization_edit_path'},
        {path: '/organizations/new', component: OrganizationNew, name: 'organization_new_path'},

        {path: '/team', component: TeamIndex, name: 'team_path'},
        {path: '/team/:teamId', component: TeamShow, name: 'team_path'},

        {path: '/board', component: BoardIndex, name: 'board_path'},
        {path: '/board/:boardId', component: BoardShow, name: 'board_path'},

        {path: '/not_found_404', component: NotFoundPage, name: 'not_found_path'},
        // {path: '*', component: NotFoundPage}
    ]
});

export default router;
