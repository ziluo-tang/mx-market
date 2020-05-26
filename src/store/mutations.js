import * as types from './mutation-types'

export default {
    [types.ADD_PREORDER](state, good) {
        state.shopcart.preorder.push(good);
    },
    [types.UPDATE_PREORDER](state, good) {
        let index = state.shopcart.preorder.findIndex(item => item.id===good.id);
        if(index) {
            state.shopcart.preorder.splice(index, 1);
        }
        state.shopcart.preorder.push(good);
    },
    [types.REMOVE_PREORDER](state, good) {
        let index = state.shopcart.preorder.findIndex(item => item.id===good.id);
        state.shopcart.preorder.splice(index, 1);
    }
}