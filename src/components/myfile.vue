<template>
  <div>
      <p>
        <img :src="src" alt="加载失败">
          上传：<input type="file" id='img'>
          <button @click="update">提交</button>
      </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            img:'',
            src:'',
        }
    },
    methods:{
        update(){
            // 创建formdata对象
            var formdata=new FormData()
            // 根据id 获取数据
            var img=document.getElementById("img")
             var img=document.getElementById("img")
            formdata.append('file',img.files[0])
            // 请求后台
            axios({
                url:'http://127.0.0.1:8000/myapp/upload_file/',
                method:'post',
                data:formdata
            }).then(res=>{
                console.log(res.data)
            })

        }
    }
}
</script>

<style>

</style>