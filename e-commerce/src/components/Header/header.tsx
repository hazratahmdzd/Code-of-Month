import { Link } from "react-router-dom"
import cartIcon from '../../../public/cart-icon.png'
import headerStyles from './header.module.css'
import { useCart } from "../Context"

export const Header = () => {
  const context = useCart()

  return (
    <div className={headerStyles.main}>
      <div className={headerStyles.container}>
        <h2 className={headerStyles.logo}>E COMMERCE</h2>
        <ul className={headerStyles.list} >
          <li>
          <Link className={headerStyles.link} to='/'>HOME</Link>
          </li>
          <li>
          <Link className={headerStyles.link} to='/products'>PRODUCTS</Link>
          </li>
          <li>
            <Link className={headerStyles.link} to='/'>ABOUT</Link>
          </li>
          <li>
            <Link className={headerStyles.link} to='/'>CONTACT</Link>
          </li>
        </ul>
        <Link className={headerStyles.link} to='/cart'>
        <button className={headerStyles.button} >
          <img className={headerStyles.cart} src={cartIcon} />
          <p>Cart</p>
          <p>{context?.cartCount}</p>
        </button>
        </Link>
      </div>
    </div>
  )
}
