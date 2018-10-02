<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
import $ from 'jquery';
import axios from 'axios';

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login(){
      axios({
        method:'put',
        url: 'http://192.168.0.15/~user3/booker/server/api/login/',
        auth: {
            username: this.email,
            password: this.password
        }
      }).then(function(response) {
        console.log('Authenticated');
        console.log(response);
      }).catch(function(error) {
        console.log(error);
      });
    /*$.ajax({
      type: 'PUT',
      url: 'http://192.168.0.15/~user3/booker/server/api/login/',
      async: false,
      data: {
        email: this.email,
        password: this.password
      },
      success: function(data){
        alert('200');
        console.log(data);
                
        data = $.parseJSON(data);

        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);
        localStorage.setItem('username', data.email);
      },
      statusCode: {
        200: function (){
          alert('200');
        },
        400: function(){

                },
                401: function(data){
                    let error = JSON.parse(data.responseText);
                    console.log(error);
                    
                    //$("#loginPassword-error").text(error);
                },
                403: function(data){

                },
                404: function(){
                    alert('404');
                }
            }
        });*/
    },
    logout(){
        $.ajax({
            type: 'DELETE',
            url: 'api/user/',
            async: false,
            beforeSend: function(xhr){
                xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
            },
            success: function(){
                localStorage.removeItem("token");
                localStorage.removeItem("login");
                init();
            }
        });
    }
  }
}
</script>

<style lang="css">

.login-wrapper {
  background: #fff;
  width: 70%;
  margin: 12% auto;
}

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>