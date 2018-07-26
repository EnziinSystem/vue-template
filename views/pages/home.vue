<template>
    <div class="container-home-page">

        <navBar></navBar>

        <div class="img-banner">
            <img class="cover-banner-image" src="../../assets/images/team-cover.jpg"/>
            <div class="container-text-introduction">
                NỘI DUNG TRANG CHỦ
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
        }
    };
</script>

<style scoped>

</style>