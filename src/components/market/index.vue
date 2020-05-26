<template>
    <div class="market-wrapper">
        <div class="market-content">
            <router-view />
        </div>
        <van-tabbar v-model="active" 
            route
            fixed 
            safe-area-inset-bottom
            active-color="#F75243"
            inactive-color="#BCBCBC"
        >
            <van-tabbar-item
                replace
                to="/market/home"
            >
                <van-icon class="iconfont" class-prefix='icon' slot="icon" slot-scope="props" :name='props.active ? "home": "home"'></van-icon>
                首页
            </van-tabbar-item>
            <van-tabbar-item
                replace
                to="/market/category"
            >
                <van-icon class="iconfont" class-prefix='icon' slot="icon" slot-scope="props" :name='props.active ? "fenlei": "fenlei"'></van-icon>
                分类
            </van-tabbar-item>
             <van-tabbar-item
                replace
                to="/market/shopcart"
            >
                <van-icon class="iconfont" class-prefix='icon' slot="icon" slot-scope="props" :name='props.active ? "ziyuan": "ziyuan"'></van-icon>
                购物车
            </van-tabbar-item>
            <van-tabbar-item
                replace
                to="/market/user"
            >
                <van-icon class="iconfont" class-prefix='icon' slot="icon" slot-scope="props" :name='props.active ? "weibiaoti-_huabanfuben": "weibiaoti-_huabanfuben"'></van-icon>
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0,
            icon: {
                home_active: 'home',
                home_normal: 'home'
            }
        }
    }
} 
</script>
<style lang="scss" scoped>
    .market-wrapper{
        .market-content{
            margin-bottom: 50px;
        }
        .van-tabbar{
            .iconfont{
                font-size: 24px;
            }
        }
    }
</style>