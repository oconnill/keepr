<template>

  <div class="row">
    <h2>My Keeps</h2>
    <div class="col-sm-3" v-for="keep in keeps">
      

      <div>{{keep.name}}</div>

      <img :src="keep.keepImage">
      <v-btn flat icon color="white" @click="addLike(keep)">
        <v-icon dark right>check_circle</v-icon>
      </v-btn>
      <div>
        <h4>Views: {{keep.keepCount}}</h4>
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
      <v-btn @click="deleteKeep(keep)" type="button" flat>Delete</v-btn>
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
        show: false,
        newVaultKeep: {
          VaultId: '',
          UserId: '',
          keepId: '',
        },
      }
    },
    mounted() {
    },
    components: {
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
      addLike(keep) {
        keep.keepCount++
        this.$store.dispatch('addLike', keep)
      },
      getVault(id) {
        console.log('get vault in compnent')
        this.$store.dispatch('getVault', id)
      },
      moveToVault(keep, vault) {
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
      mouseOver: function () {
        this.active = !this.active;
      }
    }
  }
</script>
<style>
  img {
    height: 200px;
    width: 200px;
  }
</style>