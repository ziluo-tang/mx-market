<template>
    <div class="store-wrapper">
        <div class="van-card store-header">
            <van-checkbox 
                v-model="isChecked"
                checked-color="#F75243"
                @change="checkEvent"
            >
            </van-checkbox>
            <h1 v-html="storeName" class="store-title"></h1>
        </div>
        <div class="goods-list">
            <good ref="good" v-for="(item, index) in goods" 
                :key="item.id" 
                :title="item.title" 
                :desc="item.desc" 
                :price="item.price"
                :num="item.num"
                :thumb="item.thumb"
                @changeNum="numListenner($event, index)"
                @changeCheck="checkListenner($event, index)"
            ></good>
        </div>
    </div>    
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Good from "@/base/good";
export default {
    data() {
        return {
            isChecked: false
        }
    },
    props: {
        storeName: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            default: ''
        }
    },
    computed: {
         ...mapGetters({
            getGoods: 'goods'
        })
    },
    components: {
        Good
    },
    created() {
        this.goods = this.getGoods(this.id);
    },
    methods: {
        numListenner(num, index) {
            this.goods[index] = Object.assign({}, this.goods[index], {num: num});
            if(this.$refs.good[index].isChecked){
                this.updatePreorder(this.goods[index]);
            }
        },
        checkListenner(check, index) {
            let _index = this.$refs.good.findIndex(item => item.isChecked===!check);
            if(!_index){
                this.toggleCheck(check);
            }
            if(check){
                this.addToPreorder(this.goods[index]);
            }else{
                this.removeFromPreorder(this.goods[index]);
            }
        },
        checkEvent(check) {
            this.$refs.good.forEach(item => {
                item.toggleCheck(check);
            });
        },
        toggleCheck(check) {
            this.isChecked = check;
        },
        ...mapMutations({
            addToPreorder: 'ADD_PREORDER',
            updatePreorder: 'UPDATE_PREORDER',
            removeFromPreorder: 'REMOVE_PREORDER'
        })
    }
}
</script>

<style lang="scss" scoped>
.store-wrapper{
    border-radius: 10px;
    margin-bottom: 15px;
    background-color: #fff;
    box-shadow: 0 0 8px 0 rgba(0,0,0,.03);
    &:last-child{
        margin-bottom: 0;
    }
    .store-header{
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        background: none;
        .store-title{
            margin-left: 10px;
            &::after{
                // position: relative;
                font: 14px/1 "vant-icon";
                font-size: inherit;
                // text-rendering: auto;
                // -webkit-font-smoothing: antialiased;
                content: "\F00A";
            }
        }
    }
    
}
</style>