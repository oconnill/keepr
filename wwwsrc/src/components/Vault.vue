<template>

    <div class="row">
        <h3>Vault View</h3>

        <div class="col-sm-3" v-for="keep in vkeeps">
                
            <div>{{keep.name}}</div>
            <img :src="keep.keepImage">
            <div class="text-xs-center">
                <v-menu offset-y>
                    <v-btn color="primary" dark slot="activator">Add to Vault</v-btn>
                    <v-list>
                        <v-list-tile v-for="vault in vaults" :key="vault.name" @click="moveToVault(keep, vault)">
                            <v-list-tile-title>{{ vault.name }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </div>
            <v-btn @click="deleteKeep(keep)" type="button" flat>Delete</v-btn>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Vault',
        data() {
            return {
                newKeep: {}
            }
        },
        mounted() {
            // this.$store.dispatch('getVault', this.$route.params.id)
        },
        methods: {
            createKeep(id) {
                this.$store.dispatch('createKeep', { id, list: this.newKeep })
                this.newList = {};
            },
            getKeeps(id) {
                this.$store.dispatch('getKeeps', id)
            },
            removeList(keep) {
                this.$store.dispatch('removeKeep', keep)
            },
            deleteKeep(keep) {
                this.$store.dispatch('deleteKeep', keep)
            },
            deleteVault(vault) {
                debugger
                this.$store.dispatch('deleteVault', vault)
            }
        },
        computed: {
            vault() {
                return this.$store.state.activeVault
            },
            keeps() {
                return this.$store.state.keeps
            },
            vkeeps() {
                return this.$store.state.activeVaultKeeps
            }
        },
        components: {
        }
    }
</script>