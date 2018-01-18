<template>

  <div class="row">
    <div class="col-sm-12">
      <h2>My Vaults</h2>
    </div>
    <div v-for="vault in vaults">
      <div>{{vault.name}}</div>
      <v-btn @click="getVaultKeep(vault.id)" type="submit" flat>GO</v-btn>
      <v-btn @click="deleteVault(vault)" type="button" flat>Delete This Vault</v-btn>
    </div>
  </div>
</template>


</template>
<script>
  export default {
    name: 'Vaults',
    data() {
      return {
        newBoard: {}
      }
    },
    mounted() {
    },
    computed: {
      vaults() {
        return this.$store.state.vaults
      },
      activeVault() {
        return this.$store.state.activeVault
      },
      keeps() {
        return this.$store.state.keeps
      },
    },
    methods: {
      deleteVault(vault) {
        debugger
        this.$store.dispatch('deleteVault', vault)
      },
      getVaultKeep(vaultid) {
        console.log('get vault in compnent')
        this.$store.dispatch('getVaultKeep', vaultid)
      }
    }
  }
</script>