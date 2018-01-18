import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from '../router'

let base = window.location.host.indexOf('localhost') > -1 ? '//localhost:5000/' : '/'

let api = axios.create({
  baseURL: base + 'api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: base + 'accounts/',
  timeout: 2000,
  withCredentials: true
})

vue.use(vuex)

var store = new vuex.Store({
  state: {
    vaults: [],
    activeVaults: {},
    keeps: [],
    error: {},
    activeUser: {},
    activeVaultKeeps: []
  },
  mutations: {
    setVaults(state, data) {
      state.vaults = data
    },
    handleError(state, err) {
      state.error = err
    },
    setActiveUser(state, user) {
      vue.set(state.activeUser = user)
      console.log('activeUser: ', state.activeUser)
    },
    setActiveVault(state, board) {
      state.activeBoard = board
      console.log('activeBoard: ', state.activeBoard)
    },
    setKeeps(state, data) {
      state.keeps = data
    },
    setActiveVaultKeeps(state, data) {
      state.activeVaultKeeps = data
      console.log('VaultKeeps: ', state.activeUser)
    }
},
  actions: {
    //when writing your auth routes (login, logout, register) be sure to use auth instead of api for the posts
    addNewUser({ commit, dispatch }, user) {
      auth.post('register', user)
        .then(res => {
          console.log('Response to addNewUser: ', res)
          commit('setActiveUser', res.data)
          dispatch('authenticate')
          router.push({ name: "Home" })
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    login({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res => {
          console.log('Response to login: ', res)
          if(!res.data.error) {
            commit('setActiveUser', res.data)
            dispatch('authenticate')
            router.push({ name: "Home" })
          } else {
            commit('handleError', res.data)
          }
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(res => {
          console.log('Response to logout: ', res)
          commit('setActiveUser', {})
          commit('vaults', {})
          commit('activeVaults', {})
          commit('keeps', [])
          router.push({ name: "Login" })
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    authenticate({ commit, dispatch }) {
      auth('authenticate')
        .then(res => {
          console.log('Response to authenticate: ', res)
          commit('setActiveUser', res.data)
          dispatch('getVaults', res.data.id)
          dispatch('getKeeps', res.data.id)
          router.push({ name: "Home" })
        })
        .catch(err => {
          router.push({ name: "Login" })
          //commit('handleError', err)
        })
    },
    getVaults({ commit, dispatch }, id) {
      api('vaults/user/' + id) 
        .then(res => {
          console.log('Response to GetVaults: ', res)
          commit('setVaults', res.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getVaultKeep({ commit, dispatch }, vaultid) {
      console.log('get vaultkeep by vault id')
      api('vaultkeeps/user/' + vaultid)
        .then(res => {
          console.log('res to get vault: ', res)
          commit('setActiveVaultKeeps', res.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createVault({ commit, dispatch }, vault) {
      api.post('vaults', vault)
        .then(res => {
          console.log('res to create vault: ', res)
          dispatch('authenticate')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    moveToVault({ commit, dispatch }, vaultkeep) {
      debugger
      var v = vaultkeep;
      api.post('vaultkeeps', v)
        .then(res => {
          console.log('res to create vault: ', res)
          dispatch('authenticate')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeVault({ commit, dispatch }, board) {
      api.delete('vaults/' + vault._id)
        .then(res => {
          
          dispatch('getVaults')

        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getKeeps({ commit, dispatch }, id) {
      api('keeps/user/' + id) 
        .then(res => {
          console.log('Response to GetKeeps: ', res)
          commit('setKeeps', res.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getAllKeeps({ commit, dispatch }) {
      api('keeps') 
        .then(res => {
          console.log('Response to GetKeeps: ', res)
          commit('setKeeps', res.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createKeep({ commit, dispatch }, keep) {
      api.post('keeps', keep)
        .then(res => {
          console.log('res to create keep: ', res)
          dispatch('authenticate')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    addLike({ commit, dispatch }, keep) {
      api.put('keeps/' + keep.id, keep)
      .then(res => {
        console.log('res to create keep: ', res)
        commit('setKeeps', res.data)
        dispatch('authenticate')
      })
      .catch(err => {
        commit('handleError', err)
      })
  },
    deleteKeep({ commit, dispatch }, keep) {
      api.delete('keeps/' + keep.id)
        .then(res => {
          dispatch('authenticate')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    deleteVault({ commit, dispatch }, vault) {
      debugger
      api.delete('vaults/' + vault.id)
        .then(res => {
          console.log('Delete Vault: ', res)
          dispatch('authenticate')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },

  }

})


export default store