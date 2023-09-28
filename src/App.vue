<template>
  <div>
    <el-container>
      <el-header height="100px">
        <router-link to="/" class="rt_link">
          首页
          <i class="el-icon-s-home el-icon--right"></i>
        </router-link>
        <router-link to="/musiclist" class="rt_link">
          歌单
          <i class="el-icon-view el-icon--right"></i>
        </router-link>
        <router-link to="/search" class="rt_link">
          搜索
          <i class="el-icon-search el-icon--right"></i>
        </router-link>
        <div style="display: inline-block ;text-align: right; width: 60%;">
          <div style="display: inline-block; text-align: right; width: 300px;">
            <el-button type="primary" plain style=" text-align: right;"
              v-if="msgc.arr_img !== null && msgc.musician !== null">正在播放：{{ msgc.name
              }} by {{ msgc.musician }}</el-button>
          </div>
        </div>
        <el-dropdown trigger="click">
          <el-button type="primary">
            播放队列<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view :play_music="play_music" :msgc="msgc" :msg="msg"></router-view>
      </el-main>
      <el-footer height="100px">
        <Floor :msgc="msgc" :msg="msg" />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Floor from './views/Floor.vue'
export default {
  data() {
    return {
      msg: 'http://123.56.244.158:7070',
      msgc: { arr_img: null, name: null, path: null, musician: null, id: null },
      arr: [1, 2, 3, 4]
    }
  },
  components: {
    Floor
  },
  methods: {
    play_music(item) {
      this.msgc = item
    }
  }
}
</script>


<style scope>
.rt_link {
  display: inline-block;
  height: 100px;
  width: 100px;
  text-decoration: none;
  color: white;
}


.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: left;
  line-height: 100px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body>.el-container {
  margin-bottom: 0px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}



router-link {}
</style>