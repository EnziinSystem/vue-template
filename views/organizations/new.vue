<template>
    <div>
        <navBar></navBar>

        <h1 style="text-align: center; margin-top: 50px;">Tạo mới Organization</h1>

        <div style="padding: 30px; margin: 50px; border: 1px solid; border-radius: 10px;">
            <form @submit.prevent="validateBeforeSubmit()">
                <v-text-field
                        v-validate="'required|max:256'"
                        v-model="newOrganization.organization.name"
                        :counter="256"
                        :error-messages="errors.collect('name')"
                        label="Name"
                        data-vv-name="name"
                        required
                ></v-text-field>

                <v-textarea
                        v-validate="'required|max:4096'"
                        v-model="newOrganization.organization.description"
                        :counter="4096"
                        :error-messages="errors.collect('description')"
                        label="Description"
                        data-vv-name="description"
                ></v-textarea>

                <v-text-field
                        v-validate="'required|max:512'"
                        v-model="newOrganization.organization.address"
                        :counter="512"
                        :error-messages="errors.collect('address')"
                        label="Address"
                        data-vv-name="address"
                        required
                ></v-text-field>

                <v-text-field
                        v-validate="'required|max:16'"
                        v-model="newOrganization.organization.phone"
                        :counter="16"
                        :error-messages="errors.collect('phone')"
                        label="Phone"
                        data-vv-name="phone"
                        required
                ></v-text-field>

                <v-text-field
                        v-validate="'required|max:128'"
                        v-model="newOrganization.organization.website"
                        :counter="128"
                        :error-messages="errors.collect('website')"
                        label="Website"
                        data-vv-name="website"
                        required
                ></v-text-field>

                <v-text-field
                        v-validate="'required|max:128'"
                        v-model="newOrganization.organization.socials"
                        :counter="128"
                        :error-messages="errors.collect('socials')"
                        label="Socials"
                        data-vv-name="socials"
                        required
                ></v-text-field>

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
                newOrganization: {
                    organization: {
                        name: '',
                        description: '',
                        address: '',
                        phone: '',
                        website: '',
                        socials: ''
                    }
                }
            }
        },
        methods: {
            validateBeforeSubmit: function () {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        const data = this.newOrganization;
                        this.$store.dispatch('organization/create', data).then(() => {
                            this.$router.push({name: 'organizations_path'})
                        });
                    }
                });
            },
            clearAll: function () {
                this.newOrganization.organization.name = '';
                this.newOrganization.organization.description = '';
                this.newOrganization.organization.address = '';
                this.newOrganization.organization.phone = '';
                this.newOrganization.organization.website = '';
                this.newOrganization.organization.socials = '';
            }
        },
        computed: {},
        mounted: function () {
        }
    };
</script>

<style scoped>

</style>
