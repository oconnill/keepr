<template>
        <div>
                <v-flex xs12>
                  <h2>VIEW VAULT</h2>
                </v-flex>
                <div v-for="activeVaultKeep in activeVaultKeeps">
                  <v-flex xs6>
                    <div>{{activeVaultKeep.data}}</div>
                    <img :src="keep.keepImage">
                    <div>
                      <v-btn @click="deleteKeep(keep)" type="button" flat>Delete</v-btn>
                    </div>
                  </v-flex>
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
            this.$store.dispatch('getVault', this.$route.params.id)
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
            }
        },
        computed: {
            vault() {
                return this.$store.state.activeVault
            },
            keeps() {
                return this.$store.state.keeps
            },
            activeVaultKeep() {
        return this.$store.state.activeVaultKeeps
      }
        },
        components: {
        }
    }
</script>