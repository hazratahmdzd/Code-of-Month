import { useEffect, useState } from "react"
import { Header, Footer } from "../../components"
import productStyles from './products.module.css'
import { Link } from "react-router-dom"
import { ProductProps } from '../../models'


export const Products = () => {
    const [product, setProduct] = useState<ProductProps[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then(data => {
                setProduct(data)
                setLoading(false);
            })
    }, [])

    return (
        <div>
            <Header />
            <div style={{
                padding: '170px 0',
            }}>
                <h1 className={productStyles.text}>PRODUCTS</h1>

                {loading ? (
                    <h1 style={{
                        textAlign: 'center',
                        marginTop: '100px',
                        marginBottom: '150px'
                    }}>Loading...</h1>
                ) : (
                    <div className={productStyles.productcontainer}>
                        {product.map(product => (
                            <div className={productStyles.product}>
                                <div className={productStyles.main}>
                                    <img className={productStyles.img} src={product.image} />
                                    <h5>{product.title}</h5>
                                    <p>{product.price} $</p>
                                    <Link key={product.id} className={productStyles.link} to={`/details/${product.id}`}>
                                        <button className={productStyles.button}>Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )
}
