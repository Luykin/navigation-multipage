<template>
	<div id="app">
		<m-header></m-header>
		<router-view></router-view>
	</div>
</template>

<script>
	import MHeader from 'components/header/header'
	export default {
		name: 'app',
		components: {
			MHeader
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