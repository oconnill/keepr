<template>
    <v-form @submit.prevent="createVault()">
        <v-text-field label="Name" v-model="newVault.name" required></v-text-field>
        <v-text-field label="Description" v-model="newVault.description" required></v-text-field>
        <div>
            <v-btn type="submit" flat>Submit</v-btn>
        </div>
        </v-form>
</template>

<script>
export default {
  name: 'Home',
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
      debugger
      this.$store.activeUser.id = this.newVault.creatorID
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
