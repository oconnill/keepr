<template>

  <div>
    <v-flex xs12>
      <h2>My Keeps</h2>
    </v-flex>
    <div v-for="keep in keeps">
      <v-flex xs6>
        <div>{{keep.name}}</div>
        <img :src="keep.keepImage">
        <div>
          <v-btn @click="deleteKeep(keep)" type="button" flat>Delete</v-btn>
        </div>
        <div class="text-xs-center">
            <v-menu offset-y>
              <v-btn color="primary" dark slot="activator">Add to Vault</v-btn>
              <v-list>
                <v-list-tile v-for="vault in vaults" :key="vault.name" @click="moveToVault(vault.name)">
                  <v-list-tile-title>{{ vault.name }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
      </v-flex>
    </div>
  </div>
</template>


</template>
<script>
  export default {
    name: 'Keeps',
    data() {

      return {
        newBoard: {},
        active: false
      }
    },
    mounted() {
    },
    computed: {
      vaults() {
        return this.$store.state.vaults
    },
    keeps() {
        return this.$store.state.keeps
    },
    },
    methods: {
      deleteKeep(keep) {
        this.$store.dispatch('deleteKeep', keep)
      },
      getVault(id) {
        console.log('get vault in compnent')
        this.$store.dispatch('getVault', id)
      },
      moveToVault(name) {
        debugger
        this.$store.dispatch('moveToVault', name)
      },
      mouseOver: function(){
            this.active = !this.active;   
        }
    }
  }
</script>