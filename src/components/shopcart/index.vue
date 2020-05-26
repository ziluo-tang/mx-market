<template>
    <div class="shopcart-wrapper">
        <nav-bar
            title="购物车"
            rightText="删除"
            @click-right="goodRemove"
        />
        <div v-if="stores.length" class="shopcart-content">
            <div class="store-container">
                <store ref="stores" v-for="item in stores" :key="item.id" :storeName="item.name" :id="item.id"></store>
            </div>
            <van-submit-bar
                :price="totol"
                button-text="提交订单"
                @submit="onSubmit"
            >
                <van-checkbox v-model="checked" checked-color="#F75243">全选</van-checkbox>
            </van-submit-bar>
        </div>
        <div v-if="!stores.length" class="empty-tips">
            购物车空空如也~
        </div>
    </div>
</template>
<script>
import NavBar from "@/base/navBar";
import Store from "@/base/store";
import { mapGetters } from "vuex";
export default {
    data() {
        return {   
            checked: false
        }
    },
    computed: {
        totol() {
            let price = 0;
            this.preorder.forEach(item => {
                console.log(item.num, item.price);
                price += item.num*item.price;
            });
            return price;
        },
        ...mapGetters(['stores', 'preorder'])
    },
    components: {
        NavBar,
        Store
    },
    methods: {
        goodRemove() {

        },
        onSubmit() {
            // this.$router.push();
        }
    }
}
</script>

<style lang="scss" scoped>
.shopcart-wrapper{
    position: relative;
    .shopcart-content{
        .store-container{
            margin: 0 0 100px 0;
            padding: 15px;
        }
        .van-submit-bar{
            bottom: 50px;
            .van-checkbox{
                margin-left: 16px;
            }
        }
    }
    .empty-tips{
        margin-top: 46px;
        color: #aaaaaa;
    }
}
</style>