<template>
  <div class="container">
    <form class="col-sm-offset-4 col-sm-4 form-horizontal" role="form" method="post" onsubmit="return false">
      <fieldset>
        <legend></legend>
        <div class="panel panel-default">
          <div class="panel-heading">
            <p class="tc">注册信息</p>
          </div>
          <div class="panel-body m15">
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon">
          <span class="glyphicon glyphicon-user"></span>
                </span>
                <input v-model="username" type="text" class="form-control" id="username" name="username" placeholder="请输入用户名" required>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon">
          <span class="glyphicon glyphicon-lock"></span>
                </span>
                <input v-model="password" type="text" class="form-control" id="password" name="password" placeholder="请输入密码" required>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon">
          <span class="glyphicon glyphicon-lock"></span>
                </span>
                <input type="text" class="form-control" id="password1" name="password1" placeholder="请再次输入密码" required>
              </div>
            </div>
            <div class="form-group">
              <button @click="register" type="submit" class="btn btn-primary btn-block" id="register1">注册</button>
            </div>
            <div class="form-group">
              <button type="button" class="btn btn-info col-sm-2 col-sm-offset-10" id="login1">登录</button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '',
      password: '',
      inpassword: false
    }
  },
  methods: {
    register () {
      let params = {
        username: this.username,
        password: this.password
      }
      // 获取已有账号密码
      this.$http.post('/api/register', params)
      .then((response) => {
        // 响应成功回调
        console.log(response)
      })
      .then((response) => {
        console.log(response)
      })
      .catch((reject) => {
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