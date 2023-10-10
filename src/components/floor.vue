<template>
    <div class="container">
        <div class="images">
            <img :src="msgc.arr_img" class="left-image" v-if="msgc.arr_img !== null">
        </div>
        <div class="audios">
            <div class="button">
                <el-button icon="el-icon-right" circle @click="next_music"></el-button>
            </div>
            <audio controls id="kfc" class="centered-audio" @ended="next_music">
                <source :src="msgc.path" type="audio/mpeg" id="kcc" v-if="msgc.arr_img !== null">
                Your browser does not support the audio tag.
            </audio>
        </div>
        <div>
        </div>
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
* {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;

}

/* 左对齐的图片 */
.container {
    display: flex;
    justify-content: space-between;
}

.container .images img {
    height: 80px;
    margin-top: 10px;
}

.container .audios {
    margin-top: 20px;
    display: flex;
}

.container .audios .button {
    height: 100%;
    line-height: 60px;
    margin-right: 10px;
}
</style>
  