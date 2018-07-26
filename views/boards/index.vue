<template>
    <div>
        <navBar></navBar>

        <h1 style="text-align: center; margin-top: 50px;">Hiển thị tất cả Board</h1>

        <div style="text-align: center; margin: 50px;">
            <router-link class="success btn-actions" tag="button" :to="{ name: 'board_new_path'}">
                New board
            </router-link>
        </div>

        <div v-for="board in boards" :key="board.id"
             style="padding: 30px; margin: 50px; border: 1px solid; border-radius: 10px;">

            <p>{{ board.name }}</p>
            <p>{{ board.description }}</p>

            <div>
                <router-link class="success btn-actions" tag="button"
                             :to="{ name: 'board_path', params: {boardId: board.id} }">
                    View Detail
                </router-link>

                <router-link class="warm btn-actions" tag="button"
                             :to="{ name: 'board_edit_path', params: {boardId: board.id} }">
                    Edit
                </router-link>

                <v-btn style="padding: 0; color: white;" class="red btn-actions"
                       @click="destroyBoard(board.id)">
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
            destroyBoard: function (id) {
                const data = {
                    id: id
                };
                this.$store.dispatch('board/destroy', data).then(() => {
                });
            }
        },
        computed: {
            boards() {
                return this.$store.state.board.boards;
            }
        },
        mounted: function () {
            if (this.$store.state.board.boards.length === 0) {
                this.$store.dispatch('board/index').then(() => {
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
