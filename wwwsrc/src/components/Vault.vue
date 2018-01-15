<template>
    <div class="container">

        <!--Active Board: {{board}}-->
        <v-flex xs6>
            <router-link class="linked-text" :to="'/'">
                <p>Back to Home</p>
            </router-link>
            <h1>{{vault.name}}</h1>
            <p>{{vault.description}}</p>
            <div class="add-list-form">
                <form type="submit" @submit.prevent="createKeep(keep._id)">
                    <div class="form-group">
                        <input name="name" type="text" class="form-control" placeholder="Name" v-model="newKeep.name">
                    </div>
                    <div class="form-group">
                        <input name="image" type="text" class="form-control" placeholder="Image" v-model="newKeep.image">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success navbar-btn">+ Keep</button>
                    </div>
                </form>
        </v-flex>

        </div>
        <div class="row lists-row">

            <v-flex v-for="keep in keeps">
                <span class="glyphicon glyphicon-remove-circle pull-right" @click="removeList(list)"></span>
                <list :name="keep.name" :image="keep.image" :listId="keep._id" :boardId="vault._id"></list>
            </v-flex>

        </div>
    </div>
</template>

<script>
    import keep from './Keep'
    export default {
        name: 'Vault',
        data() {
            return {
                newKeep: {}
            }
        },
        mounted() {
            this.$store.dispatch('getVault', this.$route.params.id)
        },
        methods: {
            createKeep(id) {
                this.$store.dispatch('createKeep', { id, list: this.newKeep })
                this.newList = {};
            },
            getKeeps(id) {
                this.$store.dispatch('getKeeps', id)
            },
            removeList(keep) {
                this.$store.dispatch('removeKeep', keep)
            }
        },
        computed: {
            vault() {
                return this.$store.state.activeVault
            },
            keeps() {
                return this.$store.state.keeps
            }
        },
        components: {
            keep
        }
    }
</script>