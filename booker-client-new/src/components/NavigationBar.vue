<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="dark">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand>
                <router-link to="/main">Booker</router-link>
            </b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item href="/add-event">Book it !</b-nav-item>
                    <b-nav-item href="/employees">Employees</b-nav-item>
                </b-navbar-nav>
            <!-- Right aligned nav items -->
                <template>
                    <b-navbar-nav class="ml-auto">
                        <template v-if="currentUser.username">
                            <b-nav-item disabled>{{currentUser.username}}</b-nav-item>
                            <b-button @click="logout">Logout</b-button>
                        </template>
                        <template v-else>
                                <b-nav-item href="/login">Login</b-nav-item>
                            </template>
                    </b-navbar-nav>
                </template>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import Login from "@/components/Login.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import axios from "axios";

export default {
    components: NavigationBar,
    data(){
        return {
            currentUser: {
                token: null,
                username: null,
                email: null
            }
        }
    },
    mounted(){
        this.currentUser.username = localStorage.getItem('username') || null;
        console.log(Login.currentUser);
    },
    methods: {
        logout(){
            let self = this;
            axios({
                method:'delete',
                url: 'http://192.168.0.15/~user3/booker/server/api/login/',
                headers:{
                    'Authorization' : localStorage.getItem('token')
                }
            }).then(function(response) {
                console.log(response);

                localStorage.removeItem('token', response.data.token);
                localStorage.removeItem('email', response.data.email);
                localStorage.removeItem('username', response.data.username);
                self.$router.push('/login');
            }).catch(function(error) {
                alert('error');
                console.log(error);
            });
        }
    }
}
</script>

