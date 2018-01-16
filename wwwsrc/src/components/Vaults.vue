<template>

      <div>      
  <v-flex xs12>
      <h2>My Vaults</h2>
    </v-flex>
      <div  v-for="vault in vaults">
      <v-flex xs6>
      <div>{{vault.name}}</div>
   
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
    getVault(id) {
      console.log('get vault in compnent')
      this.$store.dispatch('getVault', id)
    }
  }
}
</script>