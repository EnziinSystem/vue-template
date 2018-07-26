<template>
    <div>
        <navBar></navBar>

        <h1 style="text-align: center; margin-top: 50px;">Tạo mới Team</h1>

        <div style="padding: 30px; margin: 50px; border: 1px solid; border-radius: 10px;">
            <form @submit.prevent="validateBeforeSubmit()">
                <v-text-field
                        v-validate="'required|max:256'"
                        v-model="newTeam.team.name"
                        :counter="256"
                        :error-messages="errors.collect('name')"
                        label="Name"
                        data-vv-name="name"
                        required
                ></v-text-field>

                <v-textarea
                        v-validate="'required|max:4096'"
                        v-model="newTeam.team.description"
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
                newTeam: {
                    team: {
                        name: '',
                        description: ''
                    }
                }
            }
        },
        methods: {
            validateBeforeSubmit: function () {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        const data = this.newTeam;
                        this.$store.dispatch('team/create', data).then(() => {
                            this.$router.push({name: 'teams_path'})
                        });
                    }
                });
            },
            clearAll: function () {
                this.newTeam.team.name = '';
                this.newTeam.team.description = '';
            }
        },
        computed: {},
        mounted: function () {
        }
    };
</script>

<style scoped>

</style>
