<template>
	<div class="answer">
		<div class="answer-box" v-if='answer'>
			<div class="title-warp flex">
				<div class="title" ref='titlec'>
					<h1 class="answer-h ellipsis">{{answer.question}}</h1>
				</div>
				<div class="time flex shpc">{{answer.create}}</div>
			</div>
			<div class="answer-html-wap">
				<div v-html="answer.answer"></div>
			</div>
			<div class="back cursor" @click="_back"><i class="el-icon-d-arrow-left"></i>返回主页</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {getAnswers} from 'api/index'
	import {timeChange} from 'common/js/util'
	import { SUCCESS_CODE } from 'api/config'

	export default {
		data() {
			return {
				answer: null
			}
		},
		created() {
			const id = window.location.search.slice(4)
			this._getAnswers(id)
		},
		computed: {

		},
		methods: {
			_getAnswers(id){
				getAnswers(id).then((res) => {
					if (res.data.err_code === SUCCESS_CODE && res.data.data) {
						// console.log(res.data.data)
						this.answer = this._formatTime(res.data.data[0])
						if (this.answer.question) {
							this.$nextTick(() => {
								let len = this.answer.question.length
								if (len > 12) {
									len = 12
								}
								this.$refs.titlec.style.width = (len * 20 + 30) + 'px'
							})
						}
					} else {
						if (res.data.err_msg) {
							this.$parent._open(this.$root.errorCode[res.data.err_code])
						} else {
							this.$parent._open('似乎出错了')
						}						
					}
				})
			},
			_back() {
				window.location.href = window.location.origin
			},
			_formatTime(list) {
				// list.forEach((item) => {
				// 	item.create = timeChange(time)
				// })
				list.create = timeChange(list.create)
				return list
			}
		},
		components: {}
	}

</script>
<style type="text/css" scoped>
.answer{
	min-height: 700px;
	height: auto;
	position: relative;
}
.answer-box{
	width: 90%;
	min-height: 200px;
	padding-bottom: 60px;
	max-width: 1100px;
	background: #fff;
	margin: 50px auto;
	position: relative;
	overflow: hidden;
}
.title{
	width:100px;
	height:0;
	border-bottom:35px solid #FFD236;
	border-right:20px solid transparent;
	position: relative;

}
.answer-h{
	display: flex;
	width: 100%;
	height: 35px;
	color: #9182ED;
	font-size: 18px;
	justify-content: flex-start;
	text-indent: 20px;
	align-items: center;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
}
.title-warp{
	width: 90%;
	height: auto;
	margin: 20px auto 40px;
	justify-content: flex-start;
}
.time{
	width: 0;
	justify-content: flex-end;
	flex-grow: 1;
	color: #9182ED;
	font-size: 18px;
}
.answer-html-wap{
	width: 90%;
	height: auto;
	line-height: 25px;
	margin: 0 auto;
	overflow: hidden;
}
.back{
	position: absolute;
	bottom: 20px;
	left: 5%;
	font-size: 14px;
	color: #9182ED;
}
</style>
