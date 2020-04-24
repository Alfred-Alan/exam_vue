<template>
        <div>


                {{ msg }}

                <Button color="red">heyui</Button>
                <a href="/login">登录</a>
                <a href="/register">注册</a>
    
        </div>
    </template>
    
    <script>
    
        export default {
    
            data(){
                return {
                    msg:'你好，这里是首页',
                    
                }
            },
            //定义组建标签
            components:{
            },
            filters: {
     
　　},
            //自定义方法
            methods:{
    
            },
            //钩子方法
            mounted:function(){
    
                console.log('这是初始化方法');

      
    
            },
            //监听属性
            watch:{
    
    
            },
            //计算属性
            computed:{
    
    
            }
    
    
    
        }
    
    
    </script>
    
    <style>
    
    </style>