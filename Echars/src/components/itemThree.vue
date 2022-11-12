<template>
    <div>
        <h2>互联网行业占比</h2>
        <div class="chart" id="chartThree">
        </div>
    </div>
</template>
<script>
import { inject, onMounted, reactive } from '@vue/runtime-core';

export default {
    setup() {
        let $axios = inject("axios")
        let $charts = inject("echarts")

        let name = reactive([])
        let value = reactive([])

        function getData() {
            let res = axios({ url: "/three/data" })
            console.log(red)
        }

        function chartInit() {
            let mychart = $charts.init(document.getElementById('chartThree'))
            let option = {

                tooltip: {
                    trigger:'item',
                    show: true,
                    formatter:"{a} <br/>{b}: {c} <br/> {d}%"
                },
                // legend:{
                //     show:true,
                //     width:'auto',
                //     padding:3,
                //     textStyle:{
                //         color:'#fff'
                //     }
                // },
                series: [
                    {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        radius: "80%",
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 8
                        },
                        label:{
                            formatter:'{b}{c}%',
                            color:'#fff',
                            borderColor:'red'
                        },
                        data: [
                            { value: 43, name: '武汉' },
                            { value: 25, name: '广州' },
                            { value: 34, name: '深圳' },
                            { value: 30, name: '上海' },
                            { value: 55, name: '北京' },
                            { value: 53, name: '成都' },
                            { value: 64, name: '杭州' },
                            { value: 18, name: '南京' }
                        ]
                    }
                ]
            };
            mychart.setOption(option)
            window.addEventListener('resize', () => {
                mychart.resize()
            })
        }
        onMounted(() => {
            chartInit()
        })
    }
}
</script>
<style lang="less">
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