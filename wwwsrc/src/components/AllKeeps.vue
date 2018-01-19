<template>
        <div class="row">
            <div>
                <h2>KEEPS OF THE WORLD!!!</h2>
                <div v-for="keep in keeps">
                    <div class="col-xs-4">
                        <div>{{keep.name}}</div>
                        <img :src="keep.keepImage">
                    </div>
                </div>
            </div>
        </div>
    </template>
    <script>
        export default {
            name: 'login',
            components: {
            },
            data() {
                return {
                }
            },
            mounted() {
                // this.$store.dispatch('getVaults')
                this.$store.dispatch('getAllKeeps')
                // this.$store.dispatch('getActiveUser')
            },
            methods: {
                toggleFormState() {
                    this.loginFormActive = !this.loginFormActive
                },
                submitLogin() {
                    this.$store.dispatch('login', this.login)
                    this.login = {
                        email: '',
                        password: ''
                    }
                },
                submitRegister() {
                    this.$store.dispatch('addNewUser', this.register)
                    this.register = {
                        username: '',
                        email: '',
                        password: ''
                    }
                },
                logout() {
                    this.$store.dispatch('logout')
                }
            },
            computed: {
                keeps() {
                    return this.$store.state.allkeeps
                }
            }
        }
    
    </script>
    
    <style scoped>
    </style>