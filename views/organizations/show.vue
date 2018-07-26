<template>
    <div>
        <navBar></navBar>

        <h1 style="text-align: center; margin-top: 50px;">Hiển thị một Organization cụ thể</h1>

        <div style="padding: 30px; margin: 50px; border: 1px solid; border-radius: 10px;">
            <p>{{ organization.name }}</p>
            <p>{{ organization.description }}</p>
            <p>{{ organization.address }}</p>

            <div>
                <router-link tag="button" class="success btn-cta" :to="{ name: 'organizations_path' }">
                    View All
                </router-link>

                <router-link class="warm btn-cta" tag="button"
                             :to="{ name: 'organization_edit_path', params: {organizationId: organization.id} }">
                    Edit
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    import navBar from "../../components/navBar";

    export default {
        components: {navBar},
        data: function () {
            return {
                organization: {}
            }
        },
        mounted: function () {
            const index = this.$store.state.organization.organizations.findIndex(organization => organization.id === Number(this.$route.params.organizationId));
            if (index === -1)
                axios.get('/api/v1/organizations/' + this.$route.params.organizationId)
                    .then(response => {
                        this.organization = response.data;
                    })
                    .catch(err => {
                        console.log(err)
                    });
            else {
                this.organization = this.$store.state.organization.organizations.find(organization => organization.id === Number(this.$route.params.organizationId));
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

    .btn-cta {
        margin: 50px 0;
        height: 70px;
        border-radius: 15px;
        font-size: 18px;
        color: #fff;
        padding: 0 16px;
        align-items: center;
        font-weight: 500;

        display: inline-flex;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        min-width: 88px;
        outline: 0;
        text-transform: uppercase;
        text-decoration: none;
        -webkit-transition: .3s cubic-bezier(.25, .8, .5, 1), color 1ms;
        transition: .3s cubic-bezier(.25, .8, .5, 1), color 1ms;
        position: relative;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
    }

    .btn-cta:hover {
        background-color: darkorange !important;
    }

    .btn-cta .v-icon {
        color: #fff;
        margin-right: 5px;
    }
</style>
