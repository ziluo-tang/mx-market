<template>
    <div class="home-wrapper">
        <div class="home-bg" :style="{'background-color': bg}"></div>
        <div class="search-box">
            <van-search placeholder="寻找宝贝、店铺" 
                v-model="value"
                show-action 
                shape="round"
                background="#fff"
            >
                <div slot="action">
                    <van-icon name="chat-o" info="9" />
                </div>
            </van-search>
        </div>
        <div>
            <van-tabs
                v-model="tabs.active" 
                swipeable 
                animated 
                fixed
                background="transparent" 
                :border="false"
                color="#fff"
                title-inactive-color="#efefef"
                title-active-color="#fff">
                <van-tab v-for="(item, index) in tabs.tab" :key="index" :title="item.title" :name="item.name">
                    <keep-alive>
                        <component v-bind:is="item.component"></component>
                    </keep-alive>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import Recommend from "@/components/recommend";
import Rank from "@/components/rank";
import Washor from "@/components/washor";
import Gear from "@/components/gear";
import Kitchen from "@/components/kitchen";
import Maquillage from "@/components/maquillage";

export default {
    data() {
        return {
            tabs: {
                active: 'recommend',
                tab: [
                    {
                        title: '推荐',
                        name: 'recommend',
                        bg: '#B2D1E3',
                        component: Recommend
                    },
                    {
                        title: '排行榜',
                        name: 'rank',
                        bg: '#E199A4',
                        component: Rank
                    },
                    {
                        title: '洗护',
                        name: 'washor',
                        bg: '#D1AA8B',
                        component: Washor
                    },
                    {
                        title: '居家',
                        name: 'gear',
                        bg: '#B2D1E3',
                        component: Gear
                    },
                    {
                        title: '餐厨',
                        name: 'kitchen',
                        bg: '#FFCB80',
                        component: Kitchen
                    },
                    {
                        title: '个护',
                        name: 'maquillage',
                        bg: '#D773CF',
                        component: Maquillage
                    }
                ]
            },
            value: ''
        }
    },
    computed: {
        bg() {
            let background = '';
            console.log(this.tabs.active);
            this.tabs.tab.forEach((item) => {
                if(item.name===this.tabs.active){
                    background = item.bg;
                    return true;
                }
            });
            return background;
        }
    },
    components: {
        Recommend,
        Rank,
        Washor,
        Gear,
        Kitchen,
        Maquillage
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
.home-wrapper{
    position: relative;
    .home-bg{
        width: 100%;
        height: 240px;
        position: fixed;
    }
    .van-tab--active{
        font-size: 16px;
    }
    
}
</style>