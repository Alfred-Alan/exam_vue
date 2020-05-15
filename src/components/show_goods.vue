<template>
  <div>

      <div class="div">
             <p>搜索：<input type="text" @change="search" v-model="text"></p>
        <table>
            <tr v-for="item in goods_list">
                <td>
                <span v-html="$options.filters.make_str(item.name)"></span>
                    
                </td>
                <td>{{item.price}}</td>
                <td>{{item.des}}</td>
            </tr>
        </table>
        <button @click="orderby('price')">价格升序</button>
        <Pagination @change="change_page" v-model="Pagniation" layout='pager' small></Pagination>
        <button @click="orderby('-price')">价格降序</button>

      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            goods_list:[],

            // 分页器变量
            Pagniation:{
                page:1,
                size:2,
                total :0,
            },
            // 搜索关键字
            text:'',
            order:'',
        }   
    },
    mounted(){
        
        localStorage.removeItem('text')
        this.get_goods()
    },
    // 定义过滤器
    filters:{
        make_str(mystr){
            // 获取关键字
            var text = localStorage.getItem('text')
            if (text){
                // 使用re全文匹配关键字 进行 替换
                 mystr=mystr.replace(new RegExp(text,'g'),'<span class="mystr">'+text+'</span>')
                return mystr
            }else{
                return mystr
            }

        }
    },
    methods:{
        // 排序函数
        orderby(order_str){
            this.order = order_str
            console.log(this.order)
            this.get_goods()
        },
        search(){
            // 对text 赋值 重新请求
            localStorage.setItem('text',this.text)
            this.get_goods()
        },
        change_page(e){
            // 更改当前页 重新请求
            this.Pagniation.page =e.page
            this.get_goods()
        },
        get_goods(){
            axios.get("http://127.0.0.1:8000/myapp/show_goods/",{
                params:{page:this.Pagniation.page,size:this.Pagniation.size,text:this.text,order:this.order}
            }).then(res=>{
                console.log(res)
                // 赋值
                this.goods_list=res.data.data
                this.Pagniation.total = res.data.total
            })
        }
    }
}
</script>

<style>
.div{
    margin-left: 45%;
}
.mystr{
    color: red;
}
</style>