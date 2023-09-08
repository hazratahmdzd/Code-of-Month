import { useEffect, useState } from "react"
import { Header, Footer } from "../../components"
import { Link, useParams } from 'react-router-dom';
import detailsStyle from './details.module.css'
import { useCart } from "../../components";
import { ProductProps } from "../../models";


export const Details = () => {
  const [data, setData] = useState<ProductProps[]>([])
  const { id } = useParams<{ id: string }>()
  const context = useCart()

  const productId = parseInt(id!, 10)


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setData(data))
  })

  const product = data.find(data => data.id === productId)



  return (
    <div className={detailsStyle.main}>
      <Header />

      {
        product ? (
          <div className={detailsStyle.container}>
            <img className={detailsStyle.image} src={product.image} />
            <div className={detailsStyle.right}>
              <h3 style={{
                color: 'rgba(0,0,0,0.6)'
              }} >{(product.category).toLocaleUpperCase()}</h3>
              <h2 style={{
                fontWeight: '300',
                margin: '0'
              }}>{product.title}</h2>
              <h2>{product.price} $</h2>
              <p style={{
                margin: '0'
              }}>{product.description}</p>
              <div className={detailsStyle.buttons}>
                <button onClick={() => context?.addToCart(product.id, product)} className={detailsStyle.button}>Add To Cart</button>
                <Link to='/cart'>
                  <button className={detailsStyle.button}>Go  To Cart</button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <h1 style={{
            textAlign: 'center',
            marginTop: '50px'
          }} >Loading...</h1>
        )
      }

      <Footer />
    </div>
  )
}
