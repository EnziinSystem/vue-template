<template>
    <div>
        <navBar></navBar>

        <h1 style="text-align: center; margin-top: 50px;">Edit một Organization cụ thể</h1>

        <div style="padding: 30px; margin: 50px; border: 1px solid; border-radius: 10px;">
            <form @submit.prevent="validateBeforeSubmit()">
                <v-text-field
                        v-validate="'required|max:256'"
                        v-model="editOrganization.organization.name"
                        :counter="256"
                        :error-messages="errors.collect('name')"
                        label="Name"
                        data-vv-name="name"
                        required
                ></v-text-field>

                <v-textarea
                        v-validate="'required|max:4096'"
                        v-model="editOrganization.organization.description"
                        :counter="4096"
                        :error-messages="errors.collect('description')"
                        label="Description"
                        data-vv-name="description"
                ></v-textarea>

                <v-text-field
                        v-validate="'required|max:512'"
                        v-model="editOrganization.organization.address"
                        :counter="512"
                        :error-messages="errors.collect('address')"
                        label="Address"
                        data-vv-name="address"
                        required
                ></v-text-field>

                <v-text-field
                        v-validate="'required|max:16'"
                        v-model="editOrganization.organization.phone"
                        :counter="16"
                        :error-messages="errors.collect('phone')"
                        label="Phone"
                        data-vv-name="phone"
                        required
                ></v-text-field>

                <v-text-field
                        v-validate="'required|max:128'"
                        v-model="editOrganization.organization.website"
                        :counter="128"
                        :error-messages="errors.collect('website')"
                        label="Website"
                        data-vv-name="website"
                        required
                ></v-text-field>

                <v-text-field
                        v-validate="'required|max:128'"
                        v-model="editOrganization.organization.socials"
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
                editOrganization: {
                    organization: {
                        name: '',
                        description: '',
                        address: '',
                        phone: '',
                        website: '',
                        socials: '',
                    }
                }
            };
        },
        methods: {
            validateBeforeSubmit: function () {

                this.$validator.validateAll().then((result) => {
                    if (result) {
                        const data = {
                            id: this.$route.params.organizationId,
                            organization: this.editOrganization
                        };
                        this.$store.dispatch('organization/edit', data).then(() => {
                            this.$router.push({name: 'organizations_path'})
                        });
                    }
                });
            },
            clearAll: function () {
                this.editOrganization.organization.name = '';
                this.editOrganization.organization.description = '';
                this.editOrganization.organization.address = '';
                this.editOrganization.organization.phone = '';
                this.editOrganization.organization.website = '';
                this.editOrganization.organization.socials = '';
            }
        },
        computed: {
            getOrganization() {
                return this.$store.state.organization.organizations.find(organization => organization.id === Number(this.$route.params.organizationId));
            }
        },
        mounted: function () {
            this.editOrganization.organization.name = this.getOrganization.name;
            this.editOrganization.organization.description = this.getOrganization.description;
            this.editOrganization.organization.address = this.getOrganization.address;
            this.editOrganization.organization.phone = this.getOrganization.phone;
            this.editOrganization.organization.website = this.getOrganization.website;
            this.editOrganization.organization.socials = this.getOrganization.socials;
        }
    };
</script>

<style scoped>

</style>
