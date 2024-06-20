import styles from './footer.module.css'
import FacebookIcon from './facebook.svg'
import InstagramIcon from './instagram.svg'
import LinkedInIcon from './linkedIn.svg'

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <img alt={'icon'} src={FacebookIcon} className={styles.footer_icon}/>
            <img alt={'icon'} src={InstagramIcon} className={styles.footer_icon}/>
            <img alt={'icon'} src={LinkedInIcon} className={styles.footer_icon}/>
        </div>
    )
}

export default Footer