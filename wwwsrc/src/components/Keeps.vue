<template>

  <div class="row">
    <h2>My Keeps</h2>
    <div class="col-sm-6" v-for="keep in keeps">


      <!-- <div>{{keep.name}}</div>

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
      <v-btn @click="deleteKeep(keep)" type="button" flat>Delete</v-btn> -->
      <!-- <div class="thumbnail keep-content">
        <img :src="keep.keepImage" alt="image" class="image" style="height:500px; width:auto">
        <div class="caption">
          <v-btn flat icon color="white" @click="addLike(keep)">
            <v-icon dark right>check_circle</v-icon>
          </v-btn>
        </div>
        <div class="hover-buttons overlay">
          <div>
            <h4>Views: {{keep.keepCount}}</h4>
          </div>
          <v-btn flat icon color="white" @click="addLike(keep)">
            <v-icon dark right>check_circle</v-icon>
          </v-btn>
          <v-menu offset-y>
            <v-btn color="primary" dark slot="activator">Add to Vault</v-btn>
            <v-list>
              <v-list-tile v-for="vault in vaults" :key="vault.name" @click="moveToVault(keep, vault)">
                <v-list-tile-title>{{ vault.name }}</v-list-tile-title>

              </v-list-tile>
            </v-list>
          </v-menu> -->
       
              <h3 class="title">{{keep.name}}</h3>
              <div class="content">
                  <div class="content-overlay"></div>
                  <img class="content-image" :src="keep.keepImage">
                  <div class="content-details fadeIn-bottom">
                      <v-btn flat icon color="white" @click="addLike(keep)">
                          <v-icon dark right>check_circle</v-icon>
                        </v-btn>
                        <h4>Views: {{keep.keepCount}}</h4>
                        <v-menu offset-y>
                            <v-btn color="primary" dark slot="activator">Add to Vault</v-btn>
                            <v-list>
                              <v-list-tile v-for="vault in vaults" :key="vault.name" @click="moveToVault(keep, vault)">
                                  
                                <v-list-tile-title>{{ vault.name }}</v-list-tile-title>
                                
                              </v-list-tile>
                            </v-list>
                          </v-menu>
                  </div>
              </div>
     



          <!-- <div class="thumbnail keep-content">
            <img :src="keep.keepImage" alt="image" class="image" style="height:500px; width:auto">
            <div class="caption">
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">HTML</a></li>
                      <li><a href="#">CSS</a></li>
                      <li><a href="#">JavaScript</a></li>
                    </ul>
                  </div>

                <i class="fa fa-share"></i> (coming soon)
            </div>
            <div class="hover-buttons overlay">
                <v-btn flat icon color="white" @click="addLike(keep)">
                    <v-icon dark right>check_circle</v-icon>
                  </v-btn>
                  <div class="dropdown">
                      <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
                      <span class="caret"></span></button>
                      <ul class="dropdown-menu">
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                      </ul>
                    </div> -->

                  <!-- <v-menu offset-y>
                      <v-btn color="primary" dark slot="activator">Add to Vault</v-btn>
                      <v-list>
                        <v-list-tile v-for="vault in vaults" :key="vault.name" @click="moveToVault(keep, vault)">
                          <v-list-tile-title>{{ vault.name }}</v-list-tile-title>
          
                        </v-list-tile>
                      </v-list>
                    </v-menu> -->
            </div>
          </div>


        </div>
      </div>





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
/* 
  .keep-content:hover .overlay {
    opacity: .9;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
  }

  .hover-buttons {
    top: 50%;
    left: 50%;
    position: absolute;
    font-size: 30px;
    transform: translate(-50%, -50%);
    text-align: center;
  } */

  @import url(https://fonts.googleapis.com/css?family=Raleway);

*, *:before, *:after{
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing:border-box;
  box-sizing: border-box;
}

body{
  background: #f9f9f9;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
}

.main-title{
  color: #2d2d2d;
  text-align: center;
  text-transform: capitalize;
  padding: 0.7em 0;
}

.container{
  padding: 1em 0;
  float: left;
  width: 50%;
}
@media screen and (max-width: 640px){
  .container{
    display: block;
    width: 100%;
  }
}

@media screen and (min-width: 900px){
  .container{
    width: 33.33333%;
  }
}

.container .title{
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 10px;
}

.content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.content .content-overlay {
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay{
  opacity: 1;
}

.content-image{
  width: 100%;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3{
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p{
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom{
  top: 80%;
}

.fadeIn-top{
  top: 20%;
}

.fadeIn-left{
  left: 20%;
}

.fadeIn-right{
  left: 80%;
}
</style>