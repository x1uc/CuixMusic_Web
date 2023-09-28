<template>
  <div style="height: 500px;">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="(item, index) in data" :key="index">
        <div style="line-height: 20px;">《{{ item.name }}》</div>
        <img :src='item.arr_img' height="280px" :title="item.name" @click="play_music(item)">
      </el-carousel-item>
    </el-carousel>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    play_music: Function
  },
  data() {
    return {
      data: [
        { arr_img: this.msg + "/images/Jay.png", name: "星晴", path: this.msg + "/song/星晴.mp3", musician: "周杰伦" },
        { arr_img: this.msg + "/images/八度空间.png", name: "暗号", path: this.msg + "/song/暗号.mp3", musician: "周杰伦" },
        { arr_img: this.msg + "/images/叶惠美.png", name: "晴天", path: this.msg + "/song/晴天.mp3", musician: "周杰伦" },
        { arr_img: this.msg + "/images/七里香.png", name: "七里香", path: this.msg + "/song/七里香.mp3", musician: "周杰伦" }
      ]
    }
  },
  methods: {
  },
}
</script>


































<style scoped>
.el-carousel-item img {
  margin-bottom: 5px;
  /* 调整图片底部外边距，根据需要进行调整 */
}

.el-carousel-item p {
  margin-top: 5px;
  /* 调整段落顶部外边距，根据需要进行调整 */
  display: inline;
  /* 让段落显示为内联元素，以便与图片在同一行显示 */
  line-height: 1;
  /* 调整行高，根据需要进行调整 */
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>