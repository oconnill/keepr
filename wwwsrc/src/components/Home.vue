<template>
  <div>
    <v-form @submit.prevent="createVault()">
      <v-text-field label="Name" v-model="newVault.name" required></v-text-field>
      <v-text-field label="Description" v-model="newVault.description" required></v-text-field>
      <div>
        <v-btn type="submit" flat>Submit</v-btn>
      </div>
    </v-form>

    <v-form @submit.prevent="createKeep()">
      <v-text-field label="Title" v-model="newKeep.name" required></v-text-field>
      <v-text-field label="Description" v-model="newKeep.description" required></v-text-field>
      <v-text-field label="Image" v-model="newKeep.keepImage" required></v-text-field>
      <div>
        <v-btn type="submit" flat>Submit</v-btn>
      </div>
    </v-form>

    <vaults></vaults>
    <keeps></keeps>

  </div>
</template>

<script>
  import Vaults from './Vaults'
  import Keeps from './Keeps'
  export default {
    name: 'Home',
    data() {
      return {
        newVault: {
          name: '',
          description: '',
          userid: ''
        },
        newKeep: {
          name: '',
          description: '',
          keepImage: '',
          keepId: '',
          keepCount: 0,
        },
      }
    },
    components: {
      Vaults,
      Keeps,
    },
    mounted() {
      // this.$store.dispatch('getVaults')
      // this.$store.dispatch('getKeeps')
      // this.$store.dispatch('getActiveUser')
    },
    computed: {
      vaults() {
        return this.$store.state.vaults
      },
      activeVault() {
        return this.$store.state.activeVault
      },
      activeUser() {
        return this.$store.state.activeUser
      },
      // lists() {
      //   return this.$store.state.lists
      // },
    },
    methods: {
      createVault() {
        this.newVault.userid = this.activeUser.id
        this.$store.dispatch('createVault', this.newVault)
        this.newVault = {
          name: '',
          description: '',
          userid: ''
        }
      },
      createKeep() {
        debugger
        this.newKeep.userid = this.activeUser.id
        this.$store.dispatch('createKeep', this.newKeep)
        this.newVault = {
          name: '',
          description: '',
          keepImage: '',
          keepId: '',
          keepCount: 0,
        }
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
  h1,
  h2 {
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