<template>
    <div class="nav-bar-wrapper">
        <van-nav-bar
            :title="title"
            :left-text="leftText"
            :right-text="rightText"
            :left-arrow="leftArrow"
            fixed
            border
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        leftText: {
            type: String,
            default: ''
        },
        rightText: {
            type: String,
            default: ''
        },
        leftArrow: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onClickLeft() {
            this.$emit('click-left');
        },
        onClickRight() {
            this.$emit('click-right');
        }
    }
}
</script>
<style lang="scss" scoped>
.nav-bar-wrapper{
    margin-bottom: 46px;
    .van-nav-bar__title{
        font-weight: 600;
    }
}
</style>