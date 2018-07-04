<template>
  <div>
    <img src="http://p70pqu6ys.bkt.clouddn.com/banner.png" class="banner-img shpc">
    <img src="http://p7o5mvmp4.bkt.clouddn.com/banner@3x.png" class="banner-img sh-phone">
    <div class="show-box sp-box">
      <img src="http://p70pqu6ys.bkt.clouddn.com/%E5%B0%8F%E4%B8%89%E8%A7%92.png" class="triangle shpc">
      <img src="http://p70pqu6ys.bkt.clouddn.com/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC.png" class="title-label shpc">
      <div class="show-box-cus">
        <img src="http://p7o5mvmp4.bkt.clouddn.com/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC@3x.png" class="phone-triangle sh-phone">
        <div class="sbc-item flex">
          <div class="sbc-il-title-z">客服消息</div>
          <div class="sbc-item-left ellipsis">
            <div class="sbc-il-item flex">QQ: 424288851</div>
            <div class="sbc-il-item flex">PHONE: 13212399922</div>
            <div class="sbc-il-item flex">EMAIL: zhangheng@melonblock.com</div>
          </div>
        </div>
        <div class="sbc-item flex">
          <div class="sbc-il-title-o">商务合作</div>
          <div class="sbc-item-left ellipsis height160">
            <div class="sbc-il-item25 flex">商务联系人: 张先生</div>
            <div class="sbc-il-item25 flex">QQ: 424288851</div>
            <div class="sbc-il-item25 flex">PHONE: 13212399922</div>
            <div class="sbc-il-item25 flex">EMAIL: zhangheng@melonblock.com</div>
          </div>
          <div class="sbc-item-left ellipsis height160">
            <div class="sbc-il-item25 flex">商务联系人: 钟先生</div>
            <div class="sbc-il-item25 flex">QQ: 584547285</div>
            <div class="sbc-il-item25 flex">PHONE: 15123218515</div>
            <div class="sbc-il-item25 flex">EMAIL: raynor@melonblock.com</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">

export default {
  data() {
    return {
    }
  },
  created() {
   
  },
  computed: {
   
  },
  methods: {
  },
  components: {}
}

</script>
<style type="text/css" scoped>
img{
  pointer-events: none;
}
.phone-triangle{
  display: block;
  width: 50%;
  margin: 20px auto;
}
.banner-img{
  width: 100%;
  height: auto;
}
.show-box{
  background: #fff;
  min-height: 600px;
  height: auto;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.triangle{
  width: 7%;
  height: auto;
  transform: translate(-50%, -10%);
  position: absolute;
  left: 50%;
  top: 0;
}
.title-label{
  display: block;
  width: 17%;
  height: auto;
  position: absolute;
  left: 50%;
  top: 40px;
  transform: translate(-50%, 0%);
  margin: 10px auto;
}
.v-box{
  padding-top: 20px;
  justify-content: center;
}
.v-item{
  width: 25%;
  min-width: 300px;
  max-width: 400px;
  height: auto;
  flex-wrap: wrap;
  min-height: 500px;
}
.ai-start{
  align-items: flex-start;
}
.v-img{
  width: 70%;
  max-width: 220px;
  height: auto;
}
.v-describe-box{
  width: 100%;
  min-height: 50px;
  margin: -25% 0 0;
  flex-wrap: wrap;
}
.vdb-title{
  width: 100%;
  height: 40%;
  font-size: 18px;
  justify-content: center;
  margin: 15px auto;
}
.c-orange{
  color: #FF9900;
}
.c-violet{
  color: #7163FF;
}
.vdb-content{
  line-height: 20px;
  justify-content: center;
  text-align: center;
  font-size: 15px;
}
.sp-box{
  background: url('http://p70pqu6ys.bkt.clouddn.com/siteBg.png') no-repeat;
  background-size: cover;
}
.servce-item{
  min-height: 240px;
  height: auto;
  width: 10.5%;
  min-width: 180px;
  max-width: 210px;
  background: #fff;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(230, 227, 255, 0.8);
  flex-wrap: wrap;
  align-content: center;
}
.servce-item-img{
  width: 80%;
  height: auto;
}
.servce-item-text{
  margin: 10% 0 0;
  width: 100%;
  font-size: 16px;
}
.s-box{
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
}
.all-icon{
  display: block;
  width: 40%;
  height: auto;
  max-width: 700px;
  min-width: 400px;
  margin: 30px auto;
}
.w-box{
  width: 80%;
  height: auto;
  min-height: 300px;
  flex-wrap: wrap;
  margin: 30px auto;
}
.w-box-item{
  width: 36%;
  margin: 1% 1.5%;
  background: #fff;
  height: 220px;
  overflow: hidden;
  flex-wrap: wrap;
  align-items: flex-start;
}
.wbi-title{
  width: 100%;
  height: 30%;
  color: #8d81ff;
  justify-content: flex-start;
  text-indent: 20px;
  font-size: 17px;
}
.wbi-content{
  width: 90%;
  height: 70%;
  line-height: 25px;
  text-indent: 20px;
  font-size: 14px;
  color: #353535;
  /*padding: 5%;*/
}
.sbc-item{
  justify-content: flex-start;
  flex-wrap: wrap;
}
/*.sbc-item-left{
  width: 50%;
  height: 100%;
}*/
.sbc-il-title-z{
  width: 100%;
  height: 20px;
  font-size: 18px;
  color: #877bff;
  text-indent: 20px;
  border-left: 5px solid #877bff;
}
.sbc-il-title-o{
  width: 100%;
  height: 20px;
  font-size: 18px;
  color: #ff9b28;
  text-indent: 20px;
  border-left: 5px solid #ff9b28;
}
.sbc-il-item{
  width: 100%;
  height: 33%;
  justify-content: flex-start;
}
/*.sbc-il-item25{
  width: 100%;
  height: 25%;
  justify-content: flex-start;
}*/
.border-none{
  border: none;
}
</style>
