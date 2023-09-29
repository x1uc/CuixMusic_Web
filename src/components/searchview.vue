<template>
    <div style=" height: 700px;">
        <el-input v-model="input" placeholder="现在只有 周杰伦 林俊杰 五月天 的 歌曲" @keyup.enter.native="search">
            <i slot="prefix" class="el-input__icon el-icon-search" @click="search"></i>
        </el-input>
        <div>
            <el-table :data="tableData" style="width: 100% " :header-row-style="{ height: '30px' }"
                :cell-class-name="tableCellClassName" @cell-click="play">
                <el-table-column prop="arr_img" label="封面" min-width="25%">
                    <template slot-scope="scope">
                        <img :src="scope.row.arr_img" alt="" style="max-width: 50px; max-height: 50px; border-radius: 50%;">
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="音乐标题" min-width="25%">
                </el-table-column>
                <el-table-column prop="musician" label="歌手" min-width="25%">
                </el-table-column>
                <el-table-column label="添加到播放列表" min-width="25%">
                    <el-button type="primary" icon="el-icon-plus" circle v-if="tableData.length > 1"></el-button>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            input: '',
            tableData: [
                {
                }
            ]
        }
    },
    methods: {
        tableCellClassName({ row, column, rowIndex, columnIndex }) {
            //注意这里是解构
            //利用单元格的 className 的回调方法，给行列索引赋值
            row.index = rowIndex;
            column.index = columnIndex;
        },
        search() {
            if (this.input === "")
                return
            let rt = this.msg + "/search/"
            let rt2 = this.msg
            let that = this;
            axios({
                url: rt + that.input
            }).then(res => {
                that.tableData = res.data.data;
                for (let i = 0; i < res.data.data.length; i++) {
                    that.tableData[i].arr_img = rt2 + that.tableData[i].arr_img
                    that.tableData[i].path = rt2 + that.tableData[i].path
                }
            })
        },
        play(row, col) {
            if (col.index !== 3) {
                this.play_music(row);
            }
            else {
                this.play_list.push(row);
            }
        }
    },
    props: {
        play_music: Function,
        msg: String,
        play_list: Array
    }
}
</script>

<style scoped>
.el-main .el-table {
    line-height: 0px;
}
</style>