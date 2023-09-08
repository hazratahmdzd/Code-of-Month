import { Header, Footer } from "../../components"
import { useCart } from "../../components"
import cartStyles from './cart.module.css'


export const Cart = () => {
  const context = useCart()
  const cart = context?.cart || [];


  return (
    <div>
      <Header></Header>
      <div style={{
        paddingTop: '150px',
        paddingBottom: '250px'
      }}>
        <h1>Your Basket</h1>
        {
          
          (cart.length! > 0) ? (
            cart.map((product) => {
              const count = context?.productCount[product.id] || 0;
              
              return (
                <div className={cartStyles.main}>
                  <div className={cartStyles.left}>
                    <img className={cartStyles.img} src={product.image} />
                    <div className={cartStyles.bottom}>
                      <button onClick={() => { 
                        if(context?.productCount[product.id]! > 1) {
                          context?.decrement(product.id);
                        } else {
                          context?.removeProduct(product.id);
                        }
                       }} className={cartStyles.button}> - </button>
                      <p> { count } </p>
                      <button onClick={() => { context?.increment(product.id) }} className={cartStyles.button}> + </button>
                    </div>
                  </div>
                  <div className={cartStyles.right}>
                    <h2 className={cartStyles.text} >{product.title}</h2>
                    <h3 className={cartStyles.text} >{(product.category).toLocaleUpperCase()}</h3>
                    <p>{product.price * count} $</p>
                  </div>
                </div>
              )
            })

          ) : (
            <h1 style={{
              marginBottom: '170px'
            }} >No Product In Your Basket :/ </h1>
          )

        }
      </div>
      <Footer></Footer>
    </div>
  )
}
