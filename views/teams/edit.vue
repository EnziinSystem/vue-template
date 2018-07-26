<template>
    <div>
        <navBar></navBar>

        <h1 style="text-align: center; margin-top: 50px;">Edit một Team cụ thể</h1>

        <div style="padding: 30px; margin: 50px; border: 1px solid; border-radius: 10px;">
            <form @submit.prevent="validateBeforeSubmit()">
                <v-text-field
                        v-validate="'required|max:256'"
                        v-model="editTeam.team.name"
                        :counter="256"
                        :error-messages="errors.collect('name')"
                        label="Name"
                        data-vv-name="name"
                        required
                ></v-text-field>

                <v-textarea
                        v-validate="'required|max:4096'"
                        v-model="editTeam.team.description"
                        :counter="4096"
                        :error-messages="errors.collect('description')"
                        label="Description"
                        data-vv-name="description"
                ></v-textarea>

                <v-btn type="submit">Submit</v-btn>
                <v-btn @click="clearAll()">Clear</v-btn>
            </form>
        </div>

    </div>
</template>

<script>

    import navBar from "../../components/navBar";

    export default {
        components: {navBar},
        data: function () {
            return {
                editTeam: {
                    team: {
                        name: '',
                        description: ''
                    }
                }
            };
        },
        methods: {
            validateBeforeSubmit: function () {

                this.$validator.validateAll().then((result) => {
                    if (result) {
                        const data = {
                            id: this.$route.params.teamId,
                            team: this.editTeam
                        };
                        this.$store.dispatch('team/edit', data).then(() => {
                            this.$router.push({name: 'teams_path'})
                        });
                    }
                });
            },
            clearAll: function () {
                this.editTeam.team.name = '';
                this.editTeam.team.description = '';
            }
        },
        computed: {
            getTeam() {
                return this.$store.state.team.teams.find(team => team.id === Number(this.$route.params.teamId));
            }
        },
        mounted: function () {
            this.editTeam.team.name = this.getTeam.name;
            this.editTeam.team.description = this.getTeam.description;
        }
    };
</script>

<style scoped>

</style>
