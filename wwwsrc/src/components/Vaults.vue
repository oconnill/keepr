<template>

      <div>      
  <v-flex xs12>
      <h2>My Vaults</h2>
    </v-flex>
      <div  v-for="vault in vaults">
      <v-flex xs6>
      <div>{{vault.name}}</div>
        <v-btn @click="getVaultKeep(vault.id)" type="submit" flat>GO</v-btn>
    </v-flex>
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
    removeBoard(board) {
      this.$store.dispatch('removeBoard', board)
    },
    getVaultKeep(vaultid) {
      console.log('get vault in compnent')
      this.$store.dispatch('getVaultKeep', vaultid)
    }
  }
}
</script>