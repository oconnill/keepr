<template>

              <h2>My Vaults</h2>
              <v-flex xs12>
                <div v-for="vault in vaults">
                  <router-link :to="'/vaults/'+vault._id" class="linked-text">
                    <h4>
                      <span v-on:mouseover="getBoard(board._id)" @click="getBoard(board._id)">{{vault.name}}</span>
                    </h4>
                  </router-link>
                  <span class="glyphicon glyphicon-remove-circle" @click="removeBoard(board)"></span>
                </div>
              </v-flex>
      
            </v-flex>


      </template>
      <script>
            export default {
              name: 'boards',
              data() {
                return {
                  newBoard: {}
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