<template>
    <div>
        <!--banner 开始-->
        <!-- slides -->
        <!--<swiper class="swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <swiper-slide v-for='item of swiperList' :key="item.id">
                <img :src="item.imgUrl" class="swiper-img">
            </swiper-slide>
        &lt;!&ndash; Optional controls &ndash;&gt;
        &lt;!&ndash; 如果需要分页器 &ndash;&gt;
        <div class="swiper-pagination"  slot="pagination"></div>
        &lt;!&ndash; 如果需要导航按钮 &ndash;&gt;
        <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
        <div class="swiper-button-next" slot="button-next" @click="next"></div>
        </swiper>-->
        <!--banner 结束-->

        <!--element轮播图-->
        <el-carousel :interval="2000" type="card" height="200px"
                     :autoplay="true">
            <el-carousel-item v-for="item in elswiperList" :key="index">
                <!--<h3 class="medium">{{ item }}</h3>-->
                <el-image :src="item.lunbotuImgurl"></el-image>
            </el-carousel-item>
        </el-carousel>
        <!--element轮播图-->
    </div>
</template>

<script>
    import admin from "../../api/admin";
    export default {
        name: "index",
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        data: function () {
            return {
                //element轮播图
                /*"https://i.loli.net/2020/03/19/H82sZxPe4tafyAh.png",
                "https://i.loli.net/2020/03/23/uiWcdDeX1V6vH9N.png",
                "https://i.loli.net/2020/03/23/Kc2IWnglfCRiawm.png",
                "https://i.loli.net/2020/03/26/bOySBNXYxr9WQGh.png"*/
                /*"http://lla.oss-cn-beijing.aliyuncs.com/2020/03/29/avatar/d0d5b93f-8d6a-4714-a4e7-90347dcb3f59jiangzuo.png",
                "http://lla.oss-cn-beijing.aliyuncs.com/2020/03/29/avatar/8b1be9b9-bae2-4b15-8cd4-640e4722d012jiaoshi.png",
                "http://lla.oss-cn-beijing.aliyuncs.com/2020/03/29/avatar/21e9c3a4-4351-4b0d-95cf-a074d9150d65xiaochengxu.png",
                "http://lla.oss-cn-beijing.aliyuncs.com/2020/03/29/avatar/170ab2bd-58ab-4bda-afe8-433a04517a47Snipaste_2020-03-29_18-15-16.png"*/
                elswiperList:[],

                //awecome-vue轮播图组件
                swiperList:[{
                    id:"1",
                    imgUrl:"https://i.loli.net/2020/03/19/H82sZxPe4tafyAh.png"
                },{
                    id:"2",
                    imgUrl:"https://i.loli.net/2020/03/19/HeBX1zWcnhSuO3R.png"
                },{
                    id:"3",
                    imgUrl:"https://i.loli.net/2020/03/19/DcoHwJpjxm84hM1.png"
                }],
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                    //设定初始化时slide的索引
                    initialSlide: 0,
                    //自动播放
                    autoplay: {
                        delay: 1500,
                        stopOnLastSlide: false,
                        disableOnInteraction: false
                    },
                    //滑动速度
                    speed: 3500,
                    //滑动方向
                    direction: "horizontal",
                    //小手掌抓取滑动
                    grabCursor: true,
                    //滑动之后回调函数
                    on: {
                        slideChangeTransitionStart: function() {
                            that.imgIndex = this.realIndex + 1;  //获取轮播图片下标索引；这里有一个坑，之前网上找到的是用activeIndex，但后来网上说的是这个realIndex，原来activeIndex是swiper2.0的；而realIndex是swiper3.0的，（使用realIndex才实现了下标索引）
                        }
                    }
                }

            }
        },
        created() {
            this.getLunbotuList()
        },
        methods:{
            getLunbotuList(){
                admin.getLunbotu()
                    .then(resp => {
                        this.elswiperList = resp.data.data.lunbotuList
                    })
            },
            prev() {
                this.swiper.slideTo(1);
            },
            next() {
                this.swiper.slideTo(2)
            }
        }

    }
</script>

<style scoped>
    .swiper{
        height: 300px;
        width: 80%
    }
     .swiper-img{
         height: 300px;
         width: 80%;
     }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
