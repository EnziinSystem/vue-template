<template>
    <div>
        <navBar></navBar>

        <h1 style="text-align: center; margin-top: 50px;">Hiển thị tất cả Organization</h1>

        <div style="text-align: center; margin: 50px;">
            <router-link class="success btn-actions" tag="button" :to="{ name: 'organization_new_path'}">
                New organization
            </router-link>
        </div>

        <div v-for="organization in organizations" :key="organization.id"
             style="padding: 30px; margin: 50px; border: 1px solid; border-radius: 10px;">

            <p>{{ organization.name }}</p>
            <p>{{ organization.description }}</p>
            <p>{{ organization.address }}</p>

            <div>
                <router-link class="success btn-actions" tag="button"
                             :to="{ name: 'organization_path', params: {organizationId: organization.id} }">
                    View Detail
                </router-link>

                <router-link class="warm btn-actions" tag="button"
                             :to="{ name: 'organization_edit_path', params: {organizationId: organization.id} }">
                    Edit
                </router-link>

                <v-btn style="padding: 0; color: white;" class="red btn-actions"
                       @click="destroyOrganization(organization.id)">
                    Destroy
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    import navBar from "../../components/navBar";

    export default {
        components: {navBar},
        data: function () {
            return {};
        },
        methods: {
            destroyOrganization: function (id) {
                const data = {
                    id: id
                };
                this.$store.dispatch('organization/destroy', data).then(() => {
                });
            }
        },
        computed: {
            organizations() {
                return this.$store.state.organization.organizations;
            }
        },
        mounted: function () {
            if (this.$store.state.organization.organizations.length === 0) {
                this.$store.dispatch('organization/index').then(() => {
                });
            }
        }
    };
</script>

<style scoped>

    .success {
        background-color: #4caf50 !important;
        border-color: #4caf50 !important;
        color: white;
    }

    .warm {
        background-color: orange !important;
        border-color: orange !important;
        color: #232f3e !important;
    }

    .btn-actions {
        text-decoration: none;
        border-radius: 10px;
        font-size: 16px;
        box-shadow: 0 3px 3px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 3px 3px 0 rgba(0, 0, 0, .12);
        padding: 10px;
        margin: 10px;
        min-width: 100px !important;
    }

</style>
