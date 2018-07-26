<template>
    <div>
        <navBar></navBar>

        <h1 style="text-align: center; margin-top: 50px;">Edit một Board cụ thể</h1>

        <div style="padding: 30px; margin: 50px; border: 1px solid; border-radius: 10px;">
            <form @submit.prevent="validateBeforeSubmit()">
                <v-text-field
                        v-validate="'required|max:256'"
                        v-model="editBoard.board.name"
                        :counter="256"
                        :error-messages="errors.collect('name')"
                        label="Name"
                        data-vv-name="name"
                        required
                ></v-text-field>

                <v-textarea
                        v-validate="'required|max:4096'"
                        v-model="editBoard.board.description"
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
                editBoard: {
                    board: {
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
                            id: this.$route.params.boardId,
                            board: this.editBoard
                        };
                        this.$store.dispatch('board/edit', data).then(() => {
                            this.$router.push({name: 'boards_path'})
                        });
                    }
                });
            },
            clearAll: function () {
                this.editBoard.board.name = '';
                this.editBoard.board.description = '';
            }
        },
        computed: {
            getBoard() {
                return this.$store.state.board.boards.find(board => board.id === Number(this.$route.params.boardId));
            }
        },
        mounted: function () {
            this.editBoard.board.name = this.getBoard.name;
            this.editBoard.board.description = this.getBoard.description;
        }
    };
</script>

<style scoped>

</style>
