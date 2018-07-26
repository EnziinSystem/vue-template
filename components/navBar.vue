<template>
    <v-toolbar dark class="nav-bar-app">
        <v-btn title="Applications" icon>
            <v-icon large>apps</v-icon>
        </v-btn>

        <v-toolbar-title class="toolbar-title-custom">
            <router-link title="Home Page" :to="{ name: 'root_path' }">
                <span id="name-logo">Logo Text</span>
            </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <router-link title="Goto e-Learning page" tag="button" :to="{ name: 'root_path' }" class="btn-nav-bar">
            <v-icon medium>school</v-icon>
            Menu-1
        </router-link>

        <router-link title="Team working tools" tag="button" :to="{ name: 'root_path' }" class="btn-nav-bar">
            <v-icon medium>group</v-icon>
            Menu-2
        </router-link>

        <router-link title="Enterprise tools" tag="button" :to="{ name: 'root_path' }" class="btn-nav-bar">
            <v-icon medium>business_center</v-icon>
            Menu-3
        </router-link>

        <router-link title="Select Plans" tag="button" :to="{ name: 'root_path' }" class="btn-nav-bar">
            <v-icon medium>cloud_done</v-icon>
            Menu-4
        </router-link>

        <router-link title="Sign Up" tag="button" :to="{ name: 'root_path' }" class="btn-nav-bar">
            <v-icon medium>person_add</v-icon>
            SIGN UP
        </router-link>

        <router-link title="Login" tag="button" :to="{ name: 'root_path' }" class="btn-nav-bar">
            <v-icon medium>lock</v-icon>
            LOGIN
        </router-link>

    </v-toolbar>
</template>

<script>
    export default {
        data: function () {
            return {};
        }
    };
</script>

<style scoped>

    .material-icons {
        margin-right: 5px;
    }

    .btn-nav-bar {
        border-radius: 5px;
        border: 1px solid currentColor;
        background: transparent !important;
        box-shadow: none;
        color: #fff;
        padding: 0 16px;
        height: 36px;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        -webkit-box-align: center;
        -ms-flex-align: center;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-transition: .3s cubic-bezier(.25, .8, .5, 1);
        transition: .3s cubic-bezier(.25, .8, .5, 1);
        white-space: nowrap;
        margin: 0 5px;
    }

    .btn-nav-bar:hover {
        background-color: darkorange !important;
        border: 1px solid darkorange;
    }

    .v-btn {
        border-radius: 5px;
    }

    .nav-bar-app {
        background-color: #232f3e !important;
        /*position: fixed;*/
        top: 0;
        z-index: 1;
    }

    #name-logo {
        color: white;
        font-size: 28px;
        font-weight: bold;
    }

    #content-logo {
        color: #232f3e;
        font-size: 28px;
        font-style: normal;
        font-stretch: ultra-expanded;
        font-weight: bold;
        background-color: #f5f5f5;
        border-radius: 8px;
        padding: 2px 4px;
        margin-left: 2px;
    }

    .toolbar-title-custom {
        margin-left: 50px;
    }

    .toolbar-title-custom a {
        text-decoration: none !important;
    }
</style>