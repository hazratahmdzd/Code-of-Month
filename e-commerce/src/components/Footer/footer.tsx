import whatsapp from '../../../public/whatsapp.png'
import faceebook from '../../../public/facebook.png'
import tiktok from '../../../public/tiktok.png'
import instagram from '../../../public/instagram.png'
import footerStyles from './footer.module.css'

export const Footer = () => {
  return (
    <div className={footerStyles.main}>
      <div className={footerStyles.container}>
        <div className="left">
            <h2 className={footerStyles.logo} >E COMMERCE</h2>
            <p>
                &copy; 2023 All Rights Reserved.
            </p>
        </div>
        <div className={footerStyles.right}>
            <img className={footerStyles.img} src={instagram}/>
            <img className={footerStyles.img} src={faceebook}/>
            <img className={footerStyles.img} src={whatsapp}/>
            <img className={footerStyles.img} src={tiktok}/>
        </div>
      </div>
    </div>
  )
}

