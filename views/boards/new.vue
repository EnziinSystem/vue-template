<template>
    <div>
        <navBar></navBar>

        <h1 style="text-align: center; margin-top: 50px;">Tạo mới Board</h1>

        <div style="padding: 30px; margin: 50px; border: 1px solid; border-radius: 10px;">
            <form @submit.prevent="validateBeforeSubmit()">
                <v-text-field
                        v-validate="'required|max:256'"
                        v-model="newBoard.board.name"
                        :counter="256"
                        :error-messages="errors.collect('name')"
                        label="Name"
                        data-vv-name="name"
                        required
                ></v-text-field>

                <v-textarea
                        v-validate="'required|max:4096'"
                        v-model="newBoard.board.description"
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
                newBoard: {
                    board: {
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
                        const data = this.newBoard;
                        this.$store.dispatch('board/create', data).then(() => {
                            this.$router.push({name: 'boards_path'})
                        });
                    }
                });
            },
            clearAll: function () {
                this.newBoard.board.name = '';
                this.newBoard.board.description = '';
            }
        },
        computed: {},
        mounted: function () {
        }
    };
</script>

<style scoped>

</style>
