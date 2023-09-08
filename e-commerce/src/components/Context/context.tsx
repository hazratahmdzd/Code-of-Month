import { FC, PropsWithChildren, createContext, useContext, useState, useMemo } from "react"
import { ProductProps } from '../../models'



interface CartContextProps {
    cart: ProductProps[];
    cartCount: number;
    productCount: { [productId: number]: number };
    increment: (productId: number) => void;
    decrement: (productId: number) => void;
    removeProduct: (productId: number) => void;
    addToCart: (productId: number, product: ProductProps) => void;
}



export const CartContext = createContext<CartContextProps | null>(null);

export const useCart = () => useContext<CartContextProps | null>(CartContext)

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
    const [cart, setCart] = useState<ProductProps[]>([]);
    const [cartCount, setCartCount] = useState(0);
    const [productCount, setProductCount] = useState<{ [productId: number]: number }>({});

    const data: CartContextProps = useMemo(() => ({
        cart,
        cartCount,
        productCount,
        increment: (productId: number) => {
            setCartCount(cartCount + 1);
            const updatedProductCount = {...productCount};
            updatedProductCount[productId] = (updatedProductCount[productId] || 0) + 1;
            setProductCount(updatedProductCount);
        },
        decrement: (productId: number) => {
            setCartCount(cartCount - 1);
            const updatedProductCount = {...productCount};
            updatedProductCount[productId] -= 1;
            setProductCount(updatedProductCount);
        },
        removeProduct: (productId: number) => {
            const updatedCart = cart.filter(p => p.id !== productId);
            setCart(updatedCart);
            setCartCount(cartCount - productCount[productId] || 0);
            const updatedProductCount =  {...productCount}
            delete updatedProductCount[productId];
            setProductCount(updatedProductCount);
        },
        addToCart: (productId: number,product: ProductProps) => {
            const existingProduct = cart.find((item) => item.id === product.id);
            if (existingProduct) {
                setCartCount(cartCount + 1);
                const newProductCount = {...productCount}
                newProductCount[productId] = (newProductCount[productId] || 0 ) + 1;
                setProductCount(newProductCount);
            } else {
                setCart([...cart, product]);
                setCartCount(cartCount + 1);
                const newProductCount = {...productCount}
                newProductCount[productId] = (newProductCount[productId] || 0 ) + 1;
                setProductCount(newProductCount);

            }
        },
    }), [cart, cartCount, productCount, setCart, setCartCount, setProductCount]);

    return (
        <CartContext.Provider value={data}>{children}</CartContext.Provider>
    )
}