<style lang="less">
  @import 'login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ loginName, loginPassword }) {
      this.handleLogin({ loginName, loginPassword }).then(res => {
        if (res.data.res !== 0) {
          this.$Message.error(res.data.msg)
        } else {
          this.$router.push({
            name: this.$config.homeName
          })
          /*    this.getUserInfo().then(res => {

          }) */
        }
      })
    }
  }
}
</script>

<style>

</style>
