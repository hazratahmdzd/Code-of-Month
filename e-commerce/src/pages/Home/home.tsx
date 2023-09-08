import { Header, Footer } from "../../components"
import homeStyle from './home.module.css'
import clothes from '../../../public/clothes.jpg'
import clothes2 from '../../../public/clothes2.jpg'
import clothes3 from '../../../public/clothes3.jpg'
import clothes4 from '../../../public/clothes4.jpg'
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className={homeStyle.main} >
      <Header />

      <div style={{
        paddingBottom: '250px'
      }}>
        <div className={homeStyle.images}>
          <img className={homeStyle.img} src={clothes} />
          <img className={homeStyle.img} src={clothes2} />
          <img className={homeStyle.img} src={clothes4} />
          <img className={homeStyle.img} src={clothes3} />
        </div>

        <h1 className={homeStyle.text} >Ready To Shopping?
          <Link className={homeStyle.link} to='/products'>Go To Shop</Link>
        </h1>
      </div>

      <Footer />
    </div>
  )
}


