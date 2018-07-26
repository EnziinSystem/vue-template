<template>
    <div>
        <navBar></navBar>

        <h1 style="text-align: center; margin-top: 50px;">Không tìm được trang yêu cầu.</h1>

        <div style="text-align: center; margin: 50px;">
            <router-link class="success btn-actions" tag="button" :to="{ name: 'root_path'}">
                Về trang chủ
            </router-link>
        </div>
    </div>
</template>

<script>

    import navBar from "../../components/navBar";

    export default {
        components: {navBar},
        data: function () {
            return {}
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
