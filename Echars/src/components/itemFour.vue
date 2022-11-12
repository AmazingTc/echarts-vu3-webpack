<template>
    <div>
        <h2>各类占比</h2>
        <div class="chart" id="fourChart">
        </div>
    </div>
</template>
<script>
import { inject, onMounted, reactive } from 'vue'
export default {
    setup() {
        let $charts = inject("echarts")
        let $axios = inject("axios")

        let data = reactive({})
        let titleData = reactive([])
        let ydata = reactive([])
        let percentData=reactive([])
        //   设置数据
        function setData() {
            // 此处数据需要翻转
            titleData = data.chartFour.chartData.title.reverse()
            ydata = data.chartFour.chartData.data.reverse()
            percentData=data.chartFour.chartData.persent.reverse()
        }
        //   请求数据
        async function getData() {
            let res = await $axios({ url: "/four/data" })
            data = res.data
        }
        
        function chartInit(){
            getData().then(()=>{
                setData()
                const myColor=["purple","pink","red","skyblue","blue"]
            // 初始化echarts
            let myChart = $charts.init(document.querySelector('#fourChart'))
            myChart.setOption({
                // 图表区域修改
                grid: {
                    top: "15%",
                    left: "10%",
                    bottom: "10%",
                    containLabel: true,
                },
                yAxis:[
                {
                    type: "category",//类目
                    data: titleData,
                    offset: 5,
                    axisTick: {
                        show: false//不显示刻度
                    },
                    // 刻度标签相关样式
                    axisLabel: {
                        color: "#fff"
                    },
                    axisLine: {
                        show: false,
                    }
                },
                {
                    type: "category",//类目
                    data: ydata,
                    offset: 5,
                    axisTick: {
                        show: false//不显示刻度
                    },
                    // 刻度标签相关样式
                    axisLabel: {
                        color: "#ffffff",
                        fontSize:12,
                    },
                    axisLine: {
                        show: false,
                    } 
                }
                ],
                xAxis: {
                    show: false
                },
                series: [
                    // 数据
                    {
                       name:'条',
                       type:'bar',
                       data:percentData,
                       barCateGoryGap:50,//柱子间距离
                       barWidth:10,//柱子宽度
                       itemStyle:{
                        borderRadius:20,//柱子圆角
                        color:function(params){
                            return myColor[params.dataIndex]
                        }
                       },
                       label:{//图形上的文本标签
                        show:true,
                        color:"#ffffff",
                        position:'top',
                        formatter:"{c}%",//百分比
                       },
                       yAxisIndex:0//在单个图表实例中存在多个 y轴的时候有用，设置层级
                    },
                    // 外框
                    {
                       name:'框',
                       type:'bar',
                       barCateGoryGap:50,//柱子间距离
                       barWidth:15,
                       itemStyle:{
                            color:"none",
                            borderRadius:20,
                            borderWidth:3,
                            borderColor:'#00c1d3',
                       },
                       data:[100,100,100,100,100],
                       yAxisIndex:1
                    },
                ],
            })
            // 图表大小自适应(监听窗口大小改变)
            window.addEventListener('resize', () => {
                myChart.resize()
            })
            })
        }


        onMounted(() => {
            chartInit()
        })


        return {
            getData, data, titleData, ydata,percentData,
            setData
        }
    }
}
</script>
<style lang="less" scoped>
h2 {
    font-size: .25rem;
    color: #fff;
    height: .6rem;
    text-align: center;
}

.chart {
    height: 3.5rem
        /* 280px -> 3.5rem */
    ;
    width: 100%;
}
</style>