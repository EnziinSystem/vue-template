<template>
    <div>
        <navBar></navBar>

        <h1 style="text-align: center; margin-top: 50px;">Hiển thị một Team cụ thể</h1>

        <div style="padding: 30px; margin: 50px; border: 1px solid; border-radius: 10px;">
            <p>{{ team.name }}</p>
            <p>{{ team.description }}</p>

            <div>
                <router-link tag="button" class="success btn-cta" :to="{ name: 'teams_path' }">
                    View All
                </router-link>

                <router-link class="warm btn-cta" tag="button"
                             :to="{ name: 'team_edit_path', params: {teamId: team.id} }">
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
                team: {}
            }
        },
        mounted: function () {
            const index = this.$store.state.team.teams.findIndex(team => team.id === Number(this.$route.params.teamId));
            if (index === -1)
                axios.get('/api/v1/teams/' + this.$route.params.teamId)
                    .then(response => {
                        this.team = response.data;
                    })
                    .catch(err => {
                        console.log(err)
                    });
            else {
                this.team = this.$store.state.team.teams.find(team => team.id === Number(this.$route.params.teamId));
            }
        }
    };
</script>

<style scoped>

</style>
