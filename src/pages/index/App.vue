<template>
	<div id="app">
		<m-header></m-header>
		<router-view></router-view>
		<foot></foot>
	</div>
</template>

<script>
	// require('common/css/reset.css')
	import MHeader from 'components/header/header'
	import foot from 'components/footer/footer'
	export default {
		name: 'app',
		components: {
			MHeader,
			foot
		}
	}
</script>

<style>
@import url(~common/css/reset.css);
@import url(~common/css/public.css);
@import url(~common/css/adaptation.css);
@import url(~common/css/important.css);
@import url(~common/icon/iconfont.css);

</style>