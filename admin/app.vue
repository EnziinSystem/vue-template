<template>
    <v-app>
        <materials></materials>
    </v-app>
</template>

<script>

    import materials from "components/materials";

    export default {
        components: { materials },

        data: function() {
            return {
                editing: false,
                message: ""
            };
        }
    };
</script>

<style scoped>
    .dragArea {
        min-height: 10px;
    }

    .board {
        overflow-x: auto;
        white-space: nowrap;
    }

    .list {
        background: rgb(230, 227, 226);
        border-radius: 3px;
        display: inline-block;
        margin-right: 20px;
        padding: 10px;
        vertical-align: top;
        width: 270px;
    }
</style>
