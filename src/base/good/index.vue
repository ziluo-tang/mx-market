<template>
    <div class="goods-wrapper">
        <van-card
            :price="price"
            :desc="desc"  
            :title="title"
            centered
            >
            <div slot="thumb" class="slot-thumb">
                <van-checkbox 
                    v-model="isChecked"
                    checked-color="#F75243"
                    @change="changeCheck">
                </van-checkbox>
                <van-image
                    width="90"
                    height="90"
                    fit="contain"
                    :src="thumb"
                    lazy-load
                >
                    <template v-slot:loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                </van-image>
            </div>
            <div slot="num" class="slot-num">
                <van-stepper
                    v-model="goodsNum" 
                    integer
                    @change="changeNum"
                />
            </div>
        </van-card>
    </div>    
</template>
<script>
export default {
    data() {
        return {
            isChecked: false,
            goodsNum: this.$props.num
        }
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        desc: {
            type: String,
            default: ''
        },
        thumb: {
            type: String,
            default: ''
        },
        price: {
            type: Number,
            default: 0.00
        },
        num: {
            type: Number,
            default: 1
        }
    },
    methods: {
        changeNum() {
            this.$emit('changeNum', this.goodsNum);
        },
        changeCheck(check) {
            this.$emit('changeCheck', check);
        },
        toggleCheck(check) {
            this.isChecked = check;
        }
    }
}
</script>

<style lang="scss" scoped>
.goods-wrapper{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    .van-card{
        width: 100%;
        background: none;
        .van-card__thumb{
            width: 120px;
            .slot-thumb{
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                width: 100%;
            }
        }
        .van-card__title, .van-card__desc{
            text-align: left;
        }
        .van-card__bottom{
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            .van-card__price{
                font-size: 18px;
            }
            /deep/ .van-stepper{
                .van-stepper__minus, .van-stepper__plus{
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                }
                .van-stepper__input{
                    background: none;
                }
            }
        }
       
    }
}
</style>