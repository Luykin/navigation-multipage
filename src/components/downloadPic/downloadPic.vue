<template>
  <div>
    <div class="download-box shpc" :style="bgUrl">
      <div class="qr-code" :style="qrcode"></div>
      <div class="btn-box flex">
        <div class="btn-x flex cursor" :class="{'active-btn': !android}" @click="_chose(0)">iOS</div>
        <div class="btn-x flex cursor" :class="{'active-btn': android}" @click="_chose(1)">Android</div>
      </div>
    </div>
    <div class="hen-box shpc"></div>
    <div class="f-box-warp shpc">
      <div class="f-box flex">
        <div v-for="item in serveceList" class="flex f-box-item">
          <img :src="item.icon" class="fbi-img">
          <div class="fbi-text flex">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="sh-phone">
      <img :src="AbgPhone" class="phone-banner">
      <div class="down-box">
        <div class="db-btn flex" @click='_down()'>点击下载APP</div>
<!--         <img src="http://p7o5mvmp4.bkt.clouddn.com/%E6%8C%89%E9%92%AE%E8%83%8C%E6%99%AF@3x02.png" class="down-img"> -->
      </div>
      <div class="f-box-warp-phone flex">
        <div class="fbwp-item flex" v-for="item in serveceList">
          <img :src="item.icon" class="fbi-img-phone">
          <div class="fbi-text flex">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      android: 0,
      downLink: [['http://p7o5mvmp4.bkt.clouddn.com/90002_seo_1.apk', 'https://itunes.apple.com/cn/app/id1346469873'],
      ['http://p7o5mvmp4.bkt.clouddn.com/10001_seo_1.apk', 'https://itunes.apple.com/cn/app/id1327222328'],
      ['http://p7o5mvmp4.bkt.clouddn.com/10038_seo_1.apk', 'https://itunes.apple.com/cn/app/id1377060838']],
      bgPhone: [
      ['http://p7o5mvmp4.bkt.clouddn.com/%E7%A9%BA%E9%97%B4%E5%88%B7%E8%B5%9E%E7%A5%9E%E5%99%A8-android@3x.png',
      'http://p7o5mvmp4.bkt.clouddn.com/%E7%A9%BA%E9%97%B4%E5%88%B7%E8%B5%9E%E7%A5%9E%E5%99%A8-iOS@3x.png'],
      ['http://p7o5mvmp4.bkt.clouddn.com/%E5%BF%AB%E6%89%8B%E5%88%B7%E7%B2%89%E7%A5%9E%E5%99%A8-Android@3x.png', 
      'http://p7o5mvmp4.bkt.clouddn.com/%E5%BF%AB%E6%89%8B%E5%88%B7%E7%B2%89%E7%A5%9E%E5%99%A8-iOS@3x.png'],
      ['http://p7o5mvmp4.bkt.clouddn.com/%E6%8A%96%E9%9F%B3%E5%88%B7%E7%B2%89%E7%A5%9E%E5%99%A8-Android@3x.png', 
      'http://p7o5mvmp4.bkt.clouddn.com/%E6%8A%96%E9%9F%B3%E5%88%B7%E7%B2%89%E7%A5%9E%E5%99%A8-iOS@3x.png']
      ],
      bgList: [["background: url('http://p7o5mvmp4.bkt.clouddn.com/%E7%A9%BA%E9%97%B4%E5%88%B7%E8%B5%9E-iOS.png') no-repeat;", "background: url('http://p7o5mvmp4.bkt.clouddn.com/%E7%A9%BA%E9%97%B4%E5%88%B7%E8%B5%9E-android.png') no-repeat;"],
      ["background: url('http://p70pqu6ys.bkt.clouddn.com/%E5%BF%AB%E6%89%8B-iOS.png') no-repeat;", "background: url('http://p70pqu6ys.bkt.clouddn.com/%E5%BF%AB%E6%89%8B-android.png') no-repeat;"],
      ["background: url('http://p70pqu6ys.bkt.clouddn.com/%E6%8A%96%E9%9F%B3-iOS.png') no-repeat;", "background: url('http://p70pqu6ys.bkt.clouddn.com/%E6%8A%96%E9%9F%B3-android.png') no-repeat;"]],
      ksIconA:[{
        title:'快手粉丝',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E5%BF%AB%E6%89%8B%E7%B2%89%E4%B8%9D.png'
      },{
        title:'快手双击',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E5%BF%AB%E6%89%8B%E5%8F%8C%E5%87%BB.png'
      },{
        title:'快手评论',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E5%BF%AB%E6%89%8B%E8%AF%84%E8%AE%BA.png'
      },{
        title:'快手播放量',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E5%BF%AB%E6%89%8B%E6%92%AD%E6%94%BE%E9%87%8F.png'
      },],
      ksIconB:[{
        title:'快手粉丝',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E5%BF%AB%E6%89%8B%E7%B2%89%E4%B8%9D -2.png'
      },{
        title:'快手双击',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E5%BF%AB%E6%89%8B%E5%8F%8C%E5%87%BB-2.png'
      },{
        title:'快手评论',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E5%BF%AB%E6%89%8B%E8%AF%84%E8%AE%BA-3.png'
      },{
        title:'快手播放量',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E5%BF%AB%E6%89%8B%E6%92%AD%E6%94%BE%E9%87%8F-4.png'
      },],
      dyIconA:[{
        title:'抖音粉丝',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E6%8A%96%E9%9F%B3%E7%B2%89%E4%B8%9D.png'
      },{
        title:'抖音双击',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E6%8A%96%E9%9F%B3%E5%8F%8C%E5%87%BB.png'
      },{
        title:'抖音评论',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E6%8A%96%E9%9F%B3%E8%AF%84%E4%BB%B7.png'
      },{
        title:'抖音播放量',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E6%8A%96%E9%9F%B3%E6%92%AD%E6%94%BE%E9%87%8F.png'
      },],
      dyIconB:[{
        title:'抖音粉丝',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E6%8A%96%E9%9F%B3%E7%B2%89%E4%B8%9D-2.png'
      },{
        title:'抖音双击',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E6%8A%96%E9%9F%B3%E5%8F%8C%E5%87%BB-2.png'
      },{
        title:'抖音评论',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E6%8A%96%E9%9F%B3%E8%AF%84%E4%BB%B7-2.png'
      },{
        title:'抖音播放量',
        icon: 'http://p70pqu6ys.bkt.clouddn.com/%E6%8A%96%E9%9F%B3%E6%92%AD%E6%94%BE%E9%87%8F-2.png'
      },],
      kjIconA:[{
        title:'名片点赞',
        icon: 'http://p7o5mvmp4.bkt.clouddn.com/%E5%90%8D%E7%89%87%E8%B5%9E.png'
      },{
        title:'说说点赞',
        icon: 'http://p7o5mvmp4.bkt.clouddn.com/%E8%AF%B4%E8%AF%B4%E8%B5%9E.png'
      },{
        title:'空间访问量',
        icon: 'http://p7o5mvmp4.bkt.clouddn.com/%E7%A9%BA%E9%97%B4%E7%95%99%E8%A8%80.png'
      },{
        title:'说说浏览量',
        icon: 'http://p7o5mvmp4.bkt.clouddn.com/%E7%A9%BA%E9%97%B4%E8%AE%BF%E9%97%AE%E9%87%8F.png'
      },],
      kjIconB:[{
        title:'名片点赞',
        icon: 'http://p7o5mvmp4.bkt.clouddn.com/%E5%90%8D%E7%89%87%E7%82%B9%E8%B5%9E-2.png'
      },{
        title:'说说点赞',
        icon: 'http://p7o5mvmp4.bkt.clouddn.com/%E8%AF%B4%E8%AF%B4%E7%82%B9%E8%B5%9E-2.png'
      },{
        title:'空间访问量',
        icon: 'http://p7o5mvmp4.bkt.clouddn.com/%E7%A9%BA%E9%97%B4%E8%AE%BF%E9%97%AE%E9%87%8F-2.png'
      },{
        title:'说说浏览量',
        icon: 'http://p7o5mvmp4.bkt.clouddn.com/%E8%AF%B4%E8%AF%B4%E6%B5%8F%E8%A7%88%E9%87%8F-2.png'
      },],
      qrCode: [['background: url(http://p7o5mvmp4.bkt.clouddn.com/%E5%88%B7%E8%B5%9EiOS.png) no-repeat;',
        'background: url(http://p7o5mvmp4.bkt.clouddn.com/%E5%88%B7%E8%B5%9Eandroid.png) no-repeat;'],
        ['background: url(http://p7o5mvmp4.bkt.clouddn.com/%E5%BF%AB%E6%89%8BiOS.png) no-repeat;',
        'background: url(http://p7o5mvmp4.bkt.clouddn.com/%E5%BF%AB%E6%89%8B%E5%AE%89%E5%8D%93.png) no-repeat;'],
        ['background: url(http://p7o5mvmp4.bkt.clouddn.com/%E6%8A%96%E9%9F%B3IOS.png) no-repeat;',
        'background: url(http://p7o5mvmp4.bkt.clouddn.com/%E6%8A%96%E9%9F%B3%E5%AE%89%E5%8D%93.png) no-repeat;']]  
    }
  },
  created() {
    // console.log(this.isAndroid())
    this._routeCheck()
     // console.log(this.bgPhone[0][0])
    this.$root.eventHub.$on('route', () => {
      this._routeCheck()
    })
    this.android = this.isiOS()
    // console.log(this.$route.params.id)
    // console.log(this.android)
  },
  computed: {
   bgUrl() {
    if (this.$route.params.id) {
      return this.bgList[this.$route.params.id][this.android]
    } else {
      return ''
    }
   },
   AbgPhone() {
    if (this.$route.params.id) {
      return this.bgPhone[this.$route.params.id][this.android]
    } else {
      return ''
    }
   },
   serveceList() {
    return this.$route.params.id == 1 ? this.android == 0 ? this.ksIconA : this.ksIconB :  this.$route.params.id == 2 ? this.android == 0 ? this.dyIconA : this.dyIconB : this.android == 0 ? this.kjIconA : this.kjIconB
   },
   qrcode() {
    if (this.$route.params.id) {
      return this.qrCode[this.$route.params.id][this.android]
    } else {
      return ''
    }
   },
   AdownLink() {
    return this.downLink[this.$route.params.id][this.android]
   }
  },
  methods: {
    isiOS() {
      let u = navigator.userAgent;
      // let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      if (isiOS) {
        return 1
      } else {
        return 0
      }
    },
    _down() {
      window.open(this.AdownLink)
    },
    _routeCheck() {
      // console.log(this.$route.params.id)
      if (!this.$route.params.id) {
        this.$router.replace({
          path: '/'
        })
        return false
      }
    },
    _chose(num) {
      this.android = num
    }
  },
  components: {}
}

</script>
<style type="text/css" scoped>
  .download-box{
    width: 70%;
    min-width: 900px;
    max-width: 1200px;
    padding-top: 42%;
    height: auto;
    margin: 50px auto 0;
    background: #fff;
    background-size: cover !important;
    position: relative;
  }
  img{
    pointer-events: none;
  }
  .btn-box{
    width: 35%;
    /*padding: 40%;*/
    height: 90px;
    position: absolute;
    bottom: 5%;
    right: 5%;
    z-index: 9998;
  }
  .btn-x{
    width: 40%;
    height: 60%;
    margin: 5%;
    background:#a6a6a6; 
    color: #fff;
  }
  .qr-code{
    width: 15%;
    padding-top: 15%;
    background: #fff;
    position: absolute;
    bottom: 22%;
    right: 15%;
    z-index: 9999;
    background-size: cover !important;
  }
  .active-btn{
    background: #ffd236;
    color: #353535;
  }
  .hen-box{
    width: 70%;
    min-width: 900px;
    max-width: 1200px;
    height: 20px;
    margin: 0 auto;
    background: #f4f4f4;
  }
  .f-box-warp{
    width: 70%;
    min-width: 900px;
    max-width: 1200px;
    padding-top: 12%;
    background: #fff;
    margin: 0 auto 50px;
    position: relative;
  }
  .f-box-warp-phone{
    width: 100%;
    height: 300px;
    background: #fff;
    flex-wrap: wrap;
    padding-bottom: 20px;
  }
  .f-box{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
  }
  .f-box-item{
    height: 70%;
    width: 12%;
    margin: 0 5%;
    flex-wrap: wrap;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    border-radius: 12px;
    align-items: center;
    align-content: center;
  }
  .fbi-img{
    width: 60%;
    height: auto;
  }
  .fbi-img-phone{
    width: 80%;
    max-width: 65px;
    min-width: 60px;
    height: auto;
  }
  .fbi-text{
    width: 100%;
    height: 20px;
    font-size: 14px;
    color: #353535;
    margin: 10px auto 0;
  }
  .phone-banner{
    width: 100%;
    height:auto;
  }
  .down-box{
    width: 100%;
    height: 130px;
    overflow: hidden;
    position: relative;
    background: url('http://p7o5mvmp4.bkt.clouddn.com/%E6%8C%89%E9%92%AE%E8%83%8C%E6%99%AF@3x03.png') no-repeat;
    background-size: 100% 100%;
  }
/*  .down-img{
    width: 100%;
    height: 100%;
  }*/
  .fbwp-item{
    width: 30%;
    margin: 2% 7%;
    height: 120px;
    border-radius: 10px;
    flex-wrap: wrap;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    align-content: center;
  }
  .db-btn{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 82%;
    height: 60%;
    border-radius: 1000px;
    background: #FFD236;
    color: #fff;
    font-size: 18px;
    background: url('http://p7o5mvmp4.bkt.clouddn.com/%E7%82%B9%E5%87%BB%E4%B8%8B%E8%BD%BD%E6%8C%89%E9%92%AE@3x01.png') no-repeat;
    background-size: 100% 100%;
  }
</style>