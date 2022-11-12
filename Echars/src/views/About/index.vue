<template>
    <div class="header">
        <div class="test headerTitle"></div>
        <div class="time">
            <span>{{ year }}年{{ month }}月{{ date }}日</span>
        </div>
    </div>
    <div class="content">
        <div class="column">
            <PanelCard>
                <itemOneVue />
            </PanelCard>>
            <PanelCard>
                <itemTwoVue />
            </PanelCard>>
        </div>
        <div class="column" style="overflow:hidden">
            <div class="no">
                <div class="hd">
                    <ul>
                        <li>1652000</li>
                        <li>652803</li>
                    </ul>
                </div>
                <div class="bd">
                    <ul>
                        <li>行业需求人数</li>
                        <li>市场供应人数</li>
                    </ul>
                </div>
            </div>
            <div class="map">
                <div class="map1"></div>
                <div class="map2"></div>
                <div class="map3"></div>
                <div class="map4" style="width:100%;height:80%">
                    <itemMapVue/>
                </div>
            </div>
        </div>
        <div class="column">
            <PanelCard>
                <itemFourVue />
            </PanelCard>>
            <PanelCard>
                <itemThreeVue />
            </PanelCard>>
        </div>
    </div>
</template>
<script>
import { inject, onMounted, ref } from "vue"
import itemOneVue from "../../components/itemOne.vue"
import itemTwoVue from "../../components/itemTwo.vue"
import itemThreeVue from "../../components/itemThree.vue"
import itemFourVue from "../../components/itemFour.vue"
import PanelCard from '../../components/PanelCard.vue'
import itemMapVue from '../../components/itemMap.vue'
export default {
    name: 'About',
    components: { itemMapVue,PanelCard, itemOneVue, itemTwoVue, itemThreeVue, itemFourVue},
    setup() {
        let $charts = inject("echarts")
        let $axios = inject("axios")

        let data = ref('')
        let year = ref('')
        let month = ref('')
        let date = ref('')

        function chartInit(){
        // 文字配置
        let option = {
            graphic: {
                grid:{
                    containLabel:true,
                },
                elements: [
                    {
                        type: 'text',
                        left: 'center',
                        top: 'center',
                        style: {
                            text: '2021Web行业数据可视化展板',
                            fontSize: 50,
                            fontWeight: 'bold',
                            lineDash: [0, 200],
                            lineDashOffset: 0,
                            fill: 'transparent',
                            stroke: '#02a6b5',
                            lineWidth: 1
                        },
                        keyframeAnimation: {
                            duration: 5000,
                            
                            keyframes: [
                                {
                                    percent: 0.7,
                                    style: {
                                        fill: 'transparent',
                                        lineDashOffset: 200,
                                        lineDash: [200, 0]
                                    }
                                },
                                {
                                    // Stop for a while.
                                    percent: 0.8,
                                    style: {
                                        fill: 'transparent'
                                    }
                                },
                                {
                                    percent: 1,
                                    style: {
                                        fill: '#E0FFFF'
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        };
        const myChart = $charts.init(document.querySelector(".test"))
            myChart.setOption(option)
            window.addEventListener('resize',()=>{
                myChart.resize()
            })
        }

        // 获取时间
        function getTime() {
            data = new Date()
            year.value = data.getFullYear()
            month.value = data.getMonth() + 1
            date.value = data.getDate()
        }
        onMounted(() => {
            chartInit() 
            getTime()
        })
        return {
            year, month, date, getTime
        }
    }

}

</script>
 
<style scoped lang="less">
.test {
    width: 15rem;
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top:0;
}

@keyframes sc {
    from {
        transform: translate(-50%, -50%) rotate(0);
    }

    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }

}

@keyframes cs {
    from {
        transform: translate(-50%, -50%) rotate(0);
    }

    to {
        transform: translate(-50%, -50%) rotate(-360deg);
    }

}

.header {
    height: 1.25rem;
    width: 100%;
    border-radius: .0625rem;
    background: url(../../assets/images/head_bg.png);
    background-size: 100% 100%;
    box-shadow: 0px 20px 10px 0px rgba(25, 3, 150, 0.359);
    position: relative;

    h1 {
        color: antiquewhite;
        text-shadow: 1px 1px 1px rgb(216, 192, 196);
        font-size: .475rem;
        text-align: center;
        line-height: 1.25rem;
    }

    .time {
        position: absolute;
        font-size: .2rem;
        color: aqua;
        top: 0.5rem;
        right: 1rem;
    }
}

.content {
    min-width: 1024px;
    max-width: 1920px;
    padding: .125rem;
    width: 100%;
    display: flex;
    height:650px;
    .column {
        flex: 3;
    }

    .column:nth-child(2) {
        flex: 5;
        margin: .1875rem;

        .no {
            position: relative;
            background-color: rgba(102, 132, 226, 0.1);
            padding: .1875rem;
            height: 2rem;
            ul {
                display: flex;

                li {
                    flex: 1;
                    text-align: center;
                    color: rgba(213, 222, 43, 0.966);
                    font-size: 0.875rem;
                    line-height: 1rem;
                    font-family: 'electronicFont';
                }
            }

            .hd {
                border: 1px solid #176398;
            }

            .hd::before {
                position: absolute;
                top: 0;
                left: 0;
                content: '';
                width: .375rem;
                height: .125rem;
                border-top: 2px solid #02a6b5;
                border-left: 2px solid #02a6b5;
            }

            .hd:after {
                position: absolute;
                bottom: 0;
                ;
                right: 0;
                content: '';
                width: .375rem;
                height: .125rem;
                border-right: 2px solid #02a6b5;
                border-bottom: 2px solid #02a6b5;
            }

            .bd {
                ul {
                    li {
                        color: rgb(61, 170, 228);
                        font-size: .2rem !important;
                    }
                }
            }
        }

        .map {
            height: 10.125rem;
            position: relative;

            .map1 {
                width: 6.475rem;
                height: 6.475rem;
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: url(../../assets/images/map.png);
                opacity: .3;
                background-size: 100% 100%;
                z-index: 0;
            }

            .map2 {
                position: absolute;
                top: 40%;
                left: 50%;
                width: 8.0375rem
                    /* 643px -> 8.0375rem */
                ;
                height: 8.0375rem
                    /* 643px -> 8.0375rem */
                ;
                transform: translate(-50%, -50%);
                background: url(../../assets/images/lbx.png);
                background-size: 100% 100%;
                animation: sc 6s infinite linear;
                opacity: .6;
                z-index: 2;
            }

            .map3 {
                position: absolute;
                top: 40%;
                left: 50%;
                width: 7.075rem
                    /* 566px -> 7.075rem */
                ;
                height: 7.075rem
                    /* 566px -> 7.075rem */
                ;
                transform: translate(-50%, -50%);
                background: url(../../assets/images/jt.png);
                background-size: 100% 100%;
                animation: cs 4s infinite linear;
                z-index: 999;
            }
            .map4{
                position:absolute;
                margin:0 auto;
                width: 100%;
                height: 80%;
                z-index: 9999;
                overflow: hidden;
            }
        }

    }
}
</style>