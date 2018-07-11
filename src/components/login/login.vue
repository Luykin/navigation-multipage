<template>
  <div id="main-body" ref='mainbody'>
    <img src="http://p70pqu6ys.bkt.clouddn.com/%E6%8F%92%E7%94%BB.png" alt="星空网红助手" class="shpc login-pic">
    <div class="login-box flex" id="login-box">
      <div class="login-box-title-new flex">
        <div class="login-title-new">帐号登录</div>
        <!-- <div class="min-font flex">登录后开始下单</div> -->
      </div>
      <div class="input-box-new flex">
        <div class="ibn-title">用户帐号：</div>
        <div class="ibn-warp flex">
          <input type="text" placeholder="用户名" class="i-ipnput" v-model="phone" autocorrect="off" autocapitalize="off" @keyup.enter="_login" autofocus="autofocus" name="loginId">
          <i class="iconfont icon-msnui-user"></i>
        </div>
      </div>
      <div class="input-box-new flex">
        <div class="ibn-title">登录密码：</div>
        <div class="ibn-warp flex">
          <input type="password" placeholder="密码" class="i-ipnput" v-model="password" autocorrect="off" autocapitalize="off" @keyup.enter="_login" name="password">
          <i class="iconfont icon-mima"></i>
        </div>
      </div>
      <div class="forward-password"><router-link tag="span" class="forget cursor flex forget-new" to="/retrieve-password">忘记密码?</router-link></div>
      <div class="btn flex modifybtn" @click="_login">登录</div>
<!--       <div class="flex login-item">
        <router-link tag="span" class="forget cursor flex" to="/retrieve-password">忘记密码?</router-link>
      </div> -->
      <div class="flex login-item">
        <router-link tag="span" class="to-register ellipsis cursor flex" to="/register">点这里免费注册！</router-link>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { login } from 'api/login'
  import { normalMixin } from 'common/js/mixin'
  import { mapMutations } from 'vuex'
  import { SUCCESS_CODE } from 'api/config'
  export default {
    mixins: [normalMixin],
    data() {
      return {
        phone: this.$route.query.phone || '',
        password: ''
      }
    },
    created() {
    // this.$root.eventHub.$emit('canvas')
    const that = this
    // setTimeout(()=>{
    // },1000)
  },
  methods: {
    _changePssword(str) {
      return this._repeatStringNumTimes('*', str.length)
    },
    _repeatStringNumTimes(string, times) {
      return times > 0 ? string.repeat(times) : ""
    },
    _login() {
      if (!this._verifyPhone(this.phone) || !this._verifyPassword(this.password)) {
        return false
      }
      const that = this
      login(this.phone, this.password).then((res) => {
        if (res.data.err_code === SUCCESS_CODE) {
          if (res.data.data.user) {
            that.setUser(res.data.data.user)
            this.$parent._open('登录成功')
            this.password = ''
            window.location.href = window.location.origin + '/'
            // that.$router.replace({
            //   path: '/'
            // })
          }
          if (res.data.data.token) {
            let tokenTime = +new Date() + 60 * 58 * 1000
            that.setTokenTime(tokenTime)
            that.setToken(res.data.data.token)
          } else {
            that.password = ''
            this.$parent._open('token错误')
          }
          return true
        } else {
          if (res.data.err_msg) {
            that.password = ''
            this.$parent._open(res.data.err_code === 404 ? '该用户不存在' : this.$root.errorCode[res.data.err_code])
          } else {
            that.password = ''
            this.$parent._open('似乎出错了')
          }
        }
      })
    },
    ...mapMutations({
      setToken: 'SET_TOKEN',
      setUser: 'SET_USER',
      setTokenTime: 'SET_TOKENTIME'
    })
  },
  components: {},
  watch: {
    $route() {
      this.phone = this.$route.query.phone
    }
  }
}

</script>
<style type="text/css" scoped>
.i-ipnput{
  background-color: #f4f4f4;
}
.forget {
  color: #ff9430;
}

/*.forget:hover {
  color: #000;
}*/
.forget-new{
  position: absolute;
  top: -100%;
  right: 5%;
}

.to-register {
 /* flex-grow: 1;*/
  flex-shrink: 0;
  min-width: 30%;
  color: #ff9430;
  margin: 0 7%;
  text-decoration: underline;
}

.to-register:hover {
  color: #ff9480;
}

.iconfont {
  font-size: 20px;
  margin: 0 10px;
}
.forward-password{
  width: 100%;
  height: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #F6F6F6;
  position: relative;
}
</style>
