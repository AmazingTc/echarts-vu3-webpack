<template>
    <router-view></router-view>
</template>

<script>
import {provide} from "vue"//依赖注入
import axios from 'axios'
import * as echarts from 'echarts'
axios.defaults.baseURL="http://localhost:8888"
export default {
    name:"App",
    setup(){
        provide("echarts",echarts)
        provide("axios",axios)
    }
}
</script>
<style lang="less"> 
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    li{
        list-style: none;
    }
    body,html,#app{
        height: 100%;
       background:url(./assets/images/bg.jpg);
       background-size: 100% 100%;
    }
    @font-face{
        font-family: electronicFont;
        src:url(./static/font/DS-DIGIT.TTF)
    }
</style>