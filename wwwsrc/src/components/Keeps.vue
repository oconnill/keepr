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
                <v-list-tile v-for="vault in vaults" :key="vault.name" @click="moveToVault(keep, vault)">
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
        active: false,
        newVaultKeep: {
          VaultId: '',
          UserId: '',
          keepId: '',
        },
        // public int Id { get; set; }
        // public int VaultId{ get; set; }
        // public int KeepId { get; set; } 
        // public int UserId { get; set; }
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
    activeUser() {
        return this.$store.state.activeUser
      }
    },
    methods: {
      deleteKeep(keep) {
        this.$store.dispatch('deleteKeep', keep)
      },
      getVault(id) {
        console.log('get vault in compnent')
        this.$store.dispatch('getVault', id)
      },
      moveToVault(keep, vault) {
        debugger
        this.newVaultKeep.UserId = this.activeUser.id
        this.newVaultKeep.KeepId = keep.id
        this.newVaultKeep.VaultId = vault.id
        this.$store.dispatch('moveToVault', this.newVaultKeep)
        this.newVaultKeep = {
          VaultId: '',
          UserId: '',
          KeepId: '',
        }
      },
      mouseOver: function(){
            this.active = !this.active;   
        }
    }
  }
</script>