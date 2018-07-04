<template>
  <div>
    <header class="header flex">
      <nav class="phone-nav flex" id="phone-nav" @click="_showSidebar">
        <i class="iconfont icon-gengduo"></i>
      </nav>
      <div class="logo flex">
        <img src="http://p8sxtcg6t.bkt.clouddn.com/defual.png" class="logo-class" @click="_toIndex" ref='logo'>
      </div>
      <nav class="pc-nav flex" id="pc-nav">
        <div class="nav-ul flex">
          <!-- window.location.pathname + window.location.hash -->
          <el-menu :default-active="_windowLoction" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#000" active-text-color="#ff9430">
            <el-menu-item index="/">主页</el-menu-item>
            <el-menu-item index="/qzone.html#/download/0">空间刷赞</el-menu-item>
            <el-menu-item index="/ks.html#/download/1">快手刷粉</el-menu-item>
            <el-menu-item index="/dy.html#/download/2" >抖音刷粉</el-menu-item>
            <el-menu-item index="/none/1" disabled>
              <div @click="_windowopen('http://xkfans.com')" class="log-out">网红代刷</div>
            </el-menu-item>
            <el-menu-item index="/none/2" disabled>
              <div @click="_windowopen('http://xkfans.com/#/agent')" class="log-out">申请代理</div>
            </el-menu-item>
            <el-menu-item index="/cantact.html">联系我们</el-menu-item>
          </el-menu>
        </div>
      </nav>
    </header>
    <sidebar ref="sidebar">
      <el-row class="tac">
        <el-col>
          <el-menu :default-active="_windowLoction" class="el-menu-vertical-demo" @select="handleSelect" text-color="#000" active-text-color="#ff9430">
            <el-menu-item index="/">
              主页
            </el-menu-item>
            <el-menu-item index="/qzone.html#/download/0">
              空间刷赞
            </el-menu-item>
            <el-menu-item index="/ks.html#/download/1">
              快手刷粉
            </el-menu-item>
            <el-menu-item index="/dy.html#/download/2">
              抖音刷粉
            </el-menu-item>
            <el-menu-item index="/none/1" disabled>
              <div @click="_windowopen('http://xkfans.com')" class="log-out">网红代刷</div>
            </el-menu-item>
            <el-menu-item index="/none/2" disabled>
              <div @click="_windowopen('http://xkfans.com/#/agent')" class="log-out">申请代理</div>
            </el-menu-item>
            <el-menu-item index="/cantact.html">
              联系我们
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </sidebar>
    <interlayer ref="interlayer" @close='_interlayerHide'></interlayer>
  </div>
</template>
<script type="text/javascript" scoped>
import sidebar from 'components/sidebar/sidebar'
import interlayer from 'base/interlayer/interlayer'
// import popup from 'base/popup/popup'

export default {
  data() {
    return {
      sidebar: false,
      popup: false,
    }
  },
  created() {

  },
  computed: {
    _windowLoction() {
      // console.log(window.location.hash)
      if (window.location.hash === '#/') {
        return window.location.pathname
      } else {
        return window.location.pathname + window.location.hash
      }
    }
  },
  methods: {
    _interlayerHide() {
      if (this.sidebar && !this.popup) {
        this.sidebar = false
        this.$refs.sidebar._hiddenSidebar()
        this.$refs.interlayer._hiddenLayer()
      }
    },
    _showSidebar() {
      this.sidebar = true
      this.$nextTick(() => {
        this.$refs.sidebar._showSidebar()
        this.$refs.interlayer._setZIndex(1500)
        this.$refs.interlayer._showLayer()
      })
    },
    _toIndex() {
      this.$router.replace({
        path: '/index'
      })
    },
    _windowopen(src) {
      window.open(src)
    },
    handleSelect(key, keyPath) {
      // console.log(key)
      // console.log(window.location.origin)
      window.location.href = window.location.origin + key
    },
    _hiddenSidebar() {
      if (this.sidebar && !this.popup) {
        this.sidebar = false
        this.$refs.sidebar._hiddenSidebar()
        this.$refs.interlayer._hiddenLayer()
      }
      if (this.popup && !this.sidebar) {
        this.popup = false
        this.$refs.popup._hiddenPopup()
        this.$refs.interlayer._hiddenLayer()
      }
      if (this.popup && this.sidebar) {
        this.popup = false
        this.$refs.popup._hiddenPopup()
        this.$refs.interlayer._setZIndex(1500)
      }
    },
  },
  watch: {
  },
  components: {
    sidebar,
    interlayer
  }
}

</script>
<style type="text/css" scoped>
.nav-a{
  display: block;
  width: 100%;
  height: 100%;
}
.iconfont {
  font-size: 20px;
  margin: 0 10px 0 0;
}

.header {
  height: auto;
  min-height: 65px;
  width: 100%;
  flex-wrap: wrap;
  background: #fff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, .1);
  overflow: hidden;
}

.phone-nav {
  width: 50px;
  height: 65px;
  flex-shrink: 0;
}

.pc-nav {
  height: 65px;
  flex-grow: 1;
  min-width: 30%;
  max-width: 100%;
  flex-shrink: 0;
}

.logo {
  height: 65px;
  max-width: 100%;
  min-width: 240px;
  flex-shrink: 0;
  flex-grow: 1;
}

.disable:hover {
  pointer-events: none;
}
.log-out {
  display: inline-block;
  height: 100%;
  width: 100%;
  line-height: 60px;
  pointer-events: auto;
  cursor: pointer;
  zoom: 1;
  margin-top: -3px;
  font-size: 15px;
}
</style>
