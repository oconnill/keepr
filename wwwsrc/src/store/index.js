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
    activeUser: {}
  },
  mutations: {
    setVaults(state, data) {
      state.boards = data
    },
    handleError(state, err) {
      state.error = err
    },
    setActiveUser(state, user) {
      state.activeUser = user
      console.log('activeUser: ', state.activeUser)
    },
    setActiveVault(state, board) {
      state.activeBoard = board
      console.log('activeBoard: ', state.activeBoard)
    },
    setKeeps(state, data) {
      state.lists = data
    },
    setKeeps(state, payload) {
      vue.set(state.tasks, payload.listId, payload.data)

    }
},
  actions: {
    //when writing your auth routes (login, logout, register) be sure to use auth instead of api for the posts
    addNewUser({ commit, dispatch }, user) {
      auth.post('register', user)
        .then(res => {

          console.log('Response to addNewUser: ', res)
          commit('setActiveUser', res.data)

          router.push({ name: "Keeps" })
          debugger
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
            debugger
            commit('setActiveUser', res.data)
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
          commit('setActiveBoard', {})
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
          router.push({ name: "Home" })
        })
        .catch(err => {
          router.push({ name: "Login" })
          //commit('handleError', err)
        })
    },
    getVaults({ commit, dispatch }) {
      api('uservaults') // api('boards')
        .then(res => {
          commit('setVaults', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getVault({ commit, dispatch }, id) {
      console.log('get vault in store')
      api('vaults/' + id)
        .then(res => {
          console.log('res to get vault: ', res)
          dispatch('getLists', id)
          commit('setActiveVault', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createVault({ commit, dispatch }, vault) {
      debugger
      api.post('vaults', vault)
        .then(res => {
          console.log('res to create vault: ', res)
          dispatch('getVaults')
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
      api(`vaults/${id}/keeps`)
        .then(res => {
          console.log('response to getVaults: ', res)
          commit('setVaults', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createKeep({ commit, dispatch }, payload) {
      payload.keep.vaultId = payload.id
      console.log('keep: ', payload.list)
      api.post('keeps/', payload.list)
        .then(res => {
          dispatch('getKeeps', payload.list.vaultId)
          console.log('response to createKeep: ', res)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeKeep({ commit, dispatch }, list) {
      api.delete('keeps/' + keep._id)
        .then(res => {
          dispatch('getKeeps', keep.vaultId)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },

  }

})


export default store