<template>
    <div>
        <img :src="msgc.arr_img" class="left-image" v-if="msgc.arr_img !== null">
        <audio controls id="kfc" class="centered-audio" @ended="next_music">
            <source :src="msgc.path" type="audio/mpeg" id="kcc" v-if="msgc.arr_img !== null">
            Your browser does not support the audio tag.
        </audio>
    </div>
</template>
  
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        msgc: Object,
        next_music: Function
    },
    watch: {
        msgc: {
            handler() {
                console.log(this.msgc);
                let a = document.querySelector('#kfc')
                a.load()
                a.play()
            }
        }
    }
}
</script>

<style scoped>
/* 左对齐的图片 */
.left-image {
    float: left;
    margin-top: 10px;
    margin-left: 0px;
    height: 80px;
}

/* 居中的音频元素 */
.centered-audio {
    display: block;
    margin: 0 auto;
    width: 500px;
    height: 80px;
}
</style>
  