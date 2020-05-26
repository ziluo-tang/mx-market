export const stores = state => state.shopcart.stores

export const goods = state => (id) => {
    return state.shopcart.goods.filter(good => good.storeId===id);
}

export const preorder = state => state.shopcart.preorder