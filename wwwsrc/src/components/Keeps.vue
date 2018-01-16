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
        newBoard: {}
      }
    },
    mounted() {
    },
    computed: {
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
      }
    }
  }
</script>