<template>
    <div>
        <h2>Web行业薪资平均</h2>
        <div class="chart" id="oneChart">
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
        let ydata = reactive([])
        //   设置数据
        function setData() {
            xdata = data.chartOne.chartData.map(item => item.title)
            ydata = data.chartOne.chartData.map(item => item.num)
        }

        function chartInit() {
            // 初始化echarts
            let myChart = $charts.init(document.getElementById('oneChart'))
            getData().then(() => {
                setData()
                myChart.setOption({
                    color: ["#2f89cf"],//柱颜色
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "shadow",//坐标轴指示器
                        }
                    },
                    // 图表区域修改
                    grid: {
                        top: "3%",
                        left: "1%",
                        right: "6%",
                        bottom: "10%",
                        containLabel: true,
                    },
                    xAxis: {
                        type: "category",//类目
                        boundaryGap: true,
                        data: xdata,
                        offset: 5,
                        axisTick: {
                            alignWithLabel: true
                        },
                        // 刻度标签相关样式
                        axisLabel: {
                            color: "#fff",
                            fontSize: 12,
                            interval: 0,
                            rotate: -20
                        },
                        axisLine: {
                            show: false,
                        }
                    },
                    yAxis: {
                        type: "value",
                        axisLabel: {
                            color: "#fff",
                            fontSize: 12,
                        },
                        // y轴横线
                        splitLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,.1)"
                            }
                        }
                    },
                    series: [
                        {
                            type: "bar",
                            barWidth: '50%',
                            data: ydata,
                            itemStyle: {
                                borderRadius: [5, 5, 0, 0],//柱子圆角
                            }
                        },
                    ],
                })
            })
            // 图表大小自适应(监听窗口大小改变)
            window.addEventListener('resize', () => {
                myChart.resize()
            })
        }

        //   请求数据
        async function getData() {
            let res = await $axios({ url: "/one/data" })
            data = res.data
        }


        onMounted(() => {
            chartInit()
        })

        return {
            getData, data, xdata, ydata,
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