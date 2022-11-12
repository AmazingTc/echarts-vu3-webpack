<template>
    <div>
        <h2>武汉市招聘人数</h2>
        <div class="chart" id="twoChart">
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
        let xdata = reactive([])
        let ydata = reactive({})
        let titleData=reactive([])
        //   设置数据
        function setData() {
            xdata = data.chartTwo.chartData.content
            ydata = data.chartTwo.chartData.data
            titleData=data.chartTwo.chartData.title
        }
        //   请求数据
        async function getData() {
            let res = await $axios({ url: "/two/data" })
            data = res.data
        }

        //图表初始化
        function chartInit() {
            let myColor=["red","skyBlue","pink","aqua"]
            // 初始化echarts
            let myChart = $charts.init(document.querySelector('#twoChart'))
            getData().then(() => {
                setData()
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        textStyle:{//图例文字颜色
                            color:'#00BFFF'
                        },
                    },
                    grid: {
                        left: '2%',
                        right: '4%',
                        bottom: '10%',
                        top: '20%',
                        containLabel: true,//包含刻度文字在内
                        borderColor:'none'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,//去除轴内间距
                        data: xdata,
                        axisLabel: {//坐标轴刻度标签
                            color: "#fff"
                        },
                        axisTick:{
                            show:false,//刻度线
                        }
                    },
                    yAxis: {
                        type: 'value',
                        splitLine:{//分割线（y轴）
                            lineStyle:{
                                color:"rgba(255,255,255,.1)"
                            }
                        },
                        axisLabel: {
                            color: "#fff"
                        },
                    },
                    series: [
                        {
                            name: titleData[0],
                            type: 'line',
                            stack: 'Total',
                            data: ydata.first,
                            itemStyle: {
                                color: 'red'
                            }
                        },
                        {
                            name: titleData[1],
                            type: 'line',
                            data: ydata.second,
                            itemStyle: {
                                color: 'pink'
                            }
                        },
                        {
                            name: titleData[2],
                            type: 'line',
                            data: ydata.third,
                            itemStyle: {
                                color: 'green'
                            }
                        },
                        {
                            name: titleData[3],
                            type: 'line',
                            data: ydata.forth,
                            itemStyle: {
                                color: 'purple'
                            }
                        },
                    ]
                })
            })
            // 图表大小自适应(监听窗口大小改变)
            window.addEventListener('resize', () => {
                myChart.resize()
            })
        }

        onMounted(() => {
            getData()
            chartInit()
        })

        return{
            setData,getData,xdata,ydata,titleData,data
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