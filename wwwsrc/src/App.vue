<template>
  <v-app>
  <v-container>
    <div id="app">
      <div class="text-right logout-bar" v-if="activeUser.hasOwnProperty('username')">
        <h4>Hello, {{activeUser.username}}</h4>
        <button @click="logout" class="btn btn-default">Logout</button>
      </div>
      <h1 class="main-title">KEEPr</h1>
      <router-view></router-view>
    </div>
  </v-container>
</v-app>
  </template>
  
  <script>
    import Login from './components/Login'
    export default {
      name: 'app',
      mounted() {
        this.$store.dispatch('authenticate')
      },
      methods: {
        logout() {
          this.$store.dispatch('logout')
        }
      },
      computed: {
        activeUser() {
          return this.$store.state.activeUser
        }
      }
    }
  </script>
  
  <style>
    body {
      background: grey;
      /*
      background: linear-gradient(rgba(51, 64, 52, 0.95), rgba(51, 64, 52, 0)), url("./assets/wood-texture.jpg") center no-repeat;
      background-size: cover;
      */
      font-family: 'Open Sans', sans-serif;
    }
  
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: white;
      background-color: grey;
      margin-top: 60px;
      /*background: #334034;*/
    }
  
    .flex {
      display: flex;
    }
  
    .flex.wrap {
      flex-wrap: wrap;
    }
  
    .flex.v-center {
      align-items: center;
    }
  
    .flex.v-bottom {
      align-items: flex-end;
    }
  
    .flex.v-top {
      align-items: flex-start;
    }
  
    .flex.h-center {
      justify-content: center;
    }
  
    .flex.h-left {
      justify-content: left;
    }
  
    .flex.h-right {
      justify-content: right;
    }
  
    .flex.h-space-between {
      justify-content: space-between;
    }
  
    .flex.text-wrap {
      flex-wrap: wrap;
      word-break: break-all;
    }
  
    h1,
    h2,
    h3 {
      font-family: 'Raleway', sans-serif;
    }
  
    .logout-bar {
      padding-right: 20px;
    }
  
    .linked-text {
      text-decoration: none;
      color: #ACD9AF;
    }
  
    .linked-text:hover {
      text-decoration: none;
      color: #6F8C71;
    }
  
    .main-title {
      font-size: 4em;
      font-weight: bold;
      letter-spacing: 0.2em;
    }
  </style>
