import styles from './premium.module.css'
import PremiumItem from "./premiumItem/premiumItem";

const Premium = () => {
    return(
        <div className={styles.premium_container}>
            {/*<div className={styles.premium_info}>In the spirit of making this platform truly multi-cultural, please enjoy a 50% discount as Serbia is under-represented on the platform. We need more members from your country to make these meetings truly a cultural experience</div>*/}
            <div className={styles.premium_items_container}>
                <PremiumItem/>
            </div>
        </div>
    )
}

export default Premium;