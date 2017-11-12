<template>
  <div id="login" v-loading.fullscreen.lock="fullscreenLoading">
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
                <input v-model="username" id="username" type="text" name="username" placeholder="Email" tabindex="1" autofocus="autofocus" class="form-control input-medium">
              </div>
            </div>
            <div class="control-group">
              <div class="controls">
                <label for="password" class="glyphicon glyphicon-lock"></label>
                <input @focus="inpassword = true" @blur="inpassword = false" v-model="password" id="password" type="password" name="password" placeholder="Password" tabindex="2" class="form-control input-medium">
              </div>
            </div>
          </div>
          <div class="form-actions">
            <a href="#" tabindex="5" class="btn pull-left btn-link text-muted">Forgot password?</a>
            <a href="#/register" tabindex="6" class="btn btn-link text-muted" id="register-in">Sign Up</a>
            <button @click="login" type="button" tabindex="4" class="btn btn-primary" id="login-in">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      inpassword: false,
      fullscreenLoading: false
    }
  },
  methods: {
    login () {
      const that = this
      let params = {
        username: this.username,
        password: this.password
      }
      that.fullscreenLoading = true
      // 获取已有账号密码
      this.$http.post('/api/login', params)
      .then((response) => {
        that.fullscreenLoading = false
        // 响应成功回调
        if (response.data.code === 1) {
          that.$message({
            showClose: true,
            message: response.data.err,
            type: 'success'
          })
          setTimeout(function () {
            that.$router.push('/')
          }, 3000)
        } else if (response.data.code === 2) {
          that.$message({
            showClose: true,
            message: response.data.err,
            type: 'warning'
          })
        }
      })
      .catch((reject) => {
        that.fullscreenLoading = false
        that.$message({
          showClose: true,
          message: reject.statusText,
          type: 'error'
        })
        console.log(reject)
      })
    }
  }
}
</script>

<style scoped>
    @import '../assets/css/bootstrap.min.css';
    @import '../assets/css/login.css';
</style>