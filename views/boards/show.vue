<template>
    <div>
        <navBar></navBar>

        <h1 style="text-align: center; margin-top: 50px;">Hiển thị một Board cụ thể</h1>

        <div style="padding: 30px; margin: 50px; border: 1px solid; border-radius: 10px;">
            <p>{{ board.name }}</p>
            <p>{{ board.description }}</p>

            <div>
                <router-link tag="button" class="success btn-cta" :to="{ name: 'boards_path' }">
                    View All
                </router-link>

                <router-link class="warm btn-cta" tag="button"
                             :to="{ name: 'board_edit_path', params: {boardId: board.id} }">
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
                board: {}
            }
        },
        mounted: function () {
            const index = this.$store.state.board.boards.findIndex(board => board.id === Number(this.$route.params.boardId));
            if (index === -1)
                axios.get('/api/v1/boards/' + this.$route.params.boardId)
                    .then(response => {
                        this.board = response.data;
                    })
                    .catch(err => {
                        console.log(err)
                    });
            else {
                this.board = this.$store.state.board.boards.find(board => board.id === Number(this.$route.params.boardId));
            }
        }
    };
</script>

<style scoped>

</style>
