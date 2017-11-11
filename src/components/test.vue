<template>
  <div id="login">
    <div class="wrapper">
      <div class="login">
        <form action="#" method="post" class="container offset1 loginform">
          <div id="owl-login" :class="{password:inpassword}">
            <div class="hand"></div>
            <div class="hand hand-r"></div>
            <div class="arms">
              <div class="arm"></div>
              <div class="arm arm-r"></div>
            </div>
          </div>
          <div class="pad">
            <input type="hidden" name="_csrf" value="9IAtUxV2CatyxHiK2LxzOsT6wtBE6h8BpzOmk=">
            <div class="control-group">
              <div class="controls">
                <label for="username" class="glyphicon glyphicon-user"></label>
                <input id="username" type="text" name="username" placeholder="Email" tabindex="1" autofocus="autofocus" class="form-control input-medium">
              </div>
            </div>
            <div class="control-group">
              <div class="controls">
                <label for="password" class="glyphicon glyphicon-lock"></label>
                <input @focus="focus" @blur="blur" id="password" type="password" name="password" placeholder="Password" tabindex="2" class="form-control input-medium">
              </div>
            </div>
          </div>
          <div class="form-actions">
            <a href="#" tabindex="5" class="btn pull-left btn-link text-muted">Forgot password?</a>
            <a href="#" tabindex="6" class="btn btn-link text-muted" id="register-in">Sign Up</a>
            <button type="button" tabindex="4" class="btn btn-primary" id="login-in">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      inpassword: false
    }
  },
  methods: {
    focus: function (event) {
      this.inpassword = true
    },
    blur: function (event) {
      this.inpassword = false
    }
  }
}
</script>

<style scoped>
    @import '../assets/css/bootstrap.min.css';
    @import '../assets/css/login.css';
</style>