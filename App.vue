<template>
    <v-app>
        <router-view></router-view>
        <footerBar></footerBar>
    </v-app>
</template>

<script>
    import footerBar from "./components/footerBar";

    export default {
        components: {footerBar},

        data: function () {
            return {
            };
        },
        mounted: function () {
            const teamChannel = this.$cable.subscriptions.create({channel: 'TeamChannel'}, {
                received(data) {
                    if (data.commit) {
                        window.store.dispatch(data.commit, JSON.parse(data.payload)).then(() => {
                        });
                    }
                }
            });
        }
    };
</script>

<style scoped>

</style>
