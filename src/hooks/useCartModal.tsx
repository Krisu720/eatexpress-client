import create from 'zustand'

interface cartModal {
    isOpened: boolean;
    switchOpened: ()=>void;
}

interface cart {
    products: product[];
    addProduct: (val: product)=>void;
    removeProduct: (val: product)=>void;
}

type product = {
    _id: string,
    name: string,
    price: number,
    img: string
}

export const useCartModal = create<cartModal>((set)=>({
    isOpened: false,
    switchOpened: () => set((state)=>({isOpened: !state.isOpened}))
}))

export const cartModal = create<cart>((set)=> ({
    products: [],
    addProduct: (val)=>set((state)=>{
        return  {products: [...state.products,val]}
    }),
    removeProduct: (val)=>set((state)=>{
        const index = state.products.findIndex((product)=>product._id === val._id)
        const newProducts = [...state.products]
        newProducts.splice(index,1)
        return {products: newProducts}
    })
}))

