<template>
    <div class="row">

    <v-form v-if="loginFormActive" v-model="valid" @submit.prevent="submitLogin()">
        <v-text-field label="E-mail" v-model="login.email" :rules="emailRules" :counter="10" required></v-text-field>
        <v-text-field label="Password" v-model="login.password" :rules="passwordRules" required></v-text-field>
        <div>
            <v-btn type="submit" flat>Login</v-btn>
        </div>
        <div>
            <v-btn @click="toggleFormState" type="button" flat>Signup</v-btn>
        </div>
    </v-form>
    <v-form v-else="loginFormActive" v-model="valid" @submit.prevent="submitRegister()">
        <v-text-field label="Name" v-model="register.username" :rules="nameRules" :counter="10" required></v-text-field>
        <v-text-field label="E-mail" v-model="register.email" :rules="emailRules" required></v-text-field>
        <v-text-field type="password" label="Password" v-model="register.password" :rules="passwordRules" :counter="4" required></v-text-field>
        <div>
            <v-btn type="submit" flat>Submit</v-btn>
        </div>
        <div>

        </div>
    </v-form>

    <div>
                <h2>KEEPS OF THE WORLD!!!</h2>
            </v-flex>
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
                register: {
                    username: '',
                    email: '',
                    password: '',
                },
                login: {
                    email: '',
                    password: '',
                },
                nameRules: [
                    (v) => !!v || 'Username is required',
                    (v) => v.length <= 10 || 'Name must be less than 10 characters'
                ],
                emailRules: [
                    (v) => !!v || 'E-mail is required',
                    (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
                passwordRules: [
                    (v) => !!v || 'Password is required',
                    (v) => v.length <= 4 || 'Password must be less than 4 characters'
                ],

                valid: false,
                loginFormActive: true
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
                return this.$store.state.keeps
            }
        }
    }

</script>

<style scoped>
</style>