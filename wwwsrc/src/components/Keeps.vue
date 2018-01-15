<v-form>

    <div>
        <v-btn type="button" flat>Add Keep</v-btn>
    </div>
    <div>
        <v-btn type="button" @click="createVault()" flat>Add Vault</v-btn>
    </div>
    <div>
        <v-btn @click="logout()" type="button" flat>Logout</v-btn>
    </div>
</v-form>
      
      
      <script>
 export default {
  name: 'boards',
  data() {
    return {
      newVault: {}
    }
  },
  mounted() {
    this.$store.dispatch('getVaults')
  },
  computed: {
    vaults() {
      return this.$store.state.vaults
    },
    activeVault() {
      return this.$store.state.activeVault
    },
    // lists() {
    //   return this.$store.state.lists
    // },
  },
  methods: {
    createVault() {
      this.$store.dispatch('createVault', this.newVault)
      this.newVault = {};
    },
    removeBoard(vault) {
      this.$store.dispatch('removeVault', vault)
    },
    getVault(id) {
      console.log('get vault in component')
      this.$store.dispatch('getVault', id)
    }
  }
}
          </script>