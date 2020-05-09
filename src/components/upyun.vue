<template>
  <div>
      <table> 
          <tr>
              <td>上传又拍云：</td>
              <td><input type="file" id="img"></td>
              <td><Button color='blue' @click.prevent="put_upyun">上传</Button></td>
              <td><img  :src="src" alt="图片加载失败"></td>
          </tr>
          <tr>
              <td>
                  <input type="text" v-model="dname"><Button color='blue' @click="new_directory">新建文件夹</Button>
              </td>

          </tr>
          <tr>
              <td>
                  <input type="text" v-model="move" placeholder="移动到指定文件夹内"><Button color='blue' @click="move_file">移动图片</Button>
              </td>
          </tr>
          <tr>
              <td>
                  <input type="text" v-model="filename" placeholder="删除文件名"><Button color='blue' @click="remove_file">删除文件</Button>
              </td>
          </tr>
      </table>

  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            src:"",
            // 文件夹名
            dname:'',
            // 移动指定文件夹
            move:'',
            // 删除的文件名
            filename:'',
        }
    },
    mounted(){

    },
    methods:{
        // 删除文件
        remove_file(){
            axios.delete('http://127.0.0.1:8000/myapp/file_move/',{ 
                params:{'filename':this.filename}
            }).then(res=>{
                console.log(res.data)
                this.$Message(res.data.msg)
            })
        },
        //移动文件
        move_file(){
            axios.get('http://127.0.0.1:8000/myapp/file_move/',{ 
                params:{'move':this.move}
            }).then(res=>{
                console.log(res.data)
                this.$Message(res.data.msg)
            })
        },
        //新建文件夹
        new_directory(){
            axios.get('http://127.0.0.1:8000/myapp/upyun/',{ 
                params:{'dname':this.dname}
            }).then(res=>{
                console.log(res.data)
                this.$Message(res.data.msg)
            })
        },
        // 上传又拍云
        put_upyun(){
            var formdata=new FormData()
            var img =document.getElementById('img')
            // 根据id 获取标签内field
            formdata.append('file',img.files[0])

            axios({
                url:'http://127.0.0.1:8000/myapp/upyun/',
                method:'post',
                data:formdata
            }).then(res=>{
                console.log(res.data)
                if(res.data.code==200){
                    this.src='http://mdsave.test.upcdn.net/'+res.data.filename
                    
                    this.$Message(res.data.msg)
                }
            })
        }
    }
}
</script>

<style>

</style>