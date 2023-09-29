<template>
    <div style="height: 500px;">
        <el-button type="text" @click="dialogVisible = true">添加歌曲 第一个文件放歌曲 第二个文件放音乐</el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <el-upload class="pop-upload" ref="upload" action="" :file-list="fileList" :auto-upload="false" :multiple="true"
                :on-change="handleChange" :on-remove="handleRemove">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            </el-upload>
        </el-dialog>
    </div>
</template>

<script>

export default {
    data() {
        return {
            dialogVisible: false,
            fileList: [],   // 定义一个空数组
        };
    },
    methods: {
        handleChange(file, fileList) {
            this.fileList = fileList
        },
        // 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。function(file, fileList)
        handleRemove(file, fileList) {
            this.fileList = fileList
        },
        //上传服务器
        submitUpload() {
            //判断是否有文件再上传
            if (this.fileList.length === 0) {
                return this.$message.warning('请选取文件后再上传')
            }
            if (this.fileList.length !== 2) {
                return this.$message.warning('请提供两个文件，第一个文件为视频文件，第二个文件为音频文件')
            }
            const errors = [];

            for (let index = 0; index < this.fileList.length; index++) {
                const file = this.fileList[index];
                if (index === 0 && !file.raw.name.endsWith(".jpg")) {
                    errors.push('第一个文件格式不正确');
                }
                if (index === 1 && !file.raw.name.endsWith(".mp3")) {
                    errors.push('第二个文件格式不正确');
                }
            }

            if (errors.length > 0) {
                this.$message.warning(errors.join(', '));
                return;
            }
            
            // 下面的代码将创建一个空的FormData对象:
            const formData = new FormData()
            // 你可以使用FormData.append来添加键/值对到表单里面；
            this.fileList.forEach((file, index) => {
                formData.append('file' + index, file.raw)
                console.log(file.raw);
            })
            // 添加自定义参数，不传可删除

            //自定义的接口也可以用ajax或者自己封装的接口
            axios({
                method: 'post',
                url: 'http://localhost:7070/upload',   //填写自己的接口
                data: formData        //填写包装好的formData对象
            }).then(res => {
                if (res.data.msg == null) {
                    this.$message.success('上传成功');
                } else {
                    this.$message.error('上传失败');
                }
                //清空fileList
                this.fileList = []
            })
        },
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => { });
    }

}
</script>