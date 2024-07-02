import styles from './premiumItem.module.css'
import Icon from './done.svg'
import Button from "../../../../button/button";
import premiumItemInfo from './premiunItemInfo'


const PremiumItem = () => {
    return(
        <div className={styles.item_container}>
            {/*{premiumItemInfo.forEach(el => {*/}
            {/*    return (*/}
            {/*        <>*/}
            {/*            <h3 className={styles.item_period}>{el.title}</h3>*/}
            {/*            <ul className={styles.item_benefits_list}>*/}
            {/*                {el.benefits.map(item => {*/}
            {/*                    return (*/}
            {/*                        <li className={styles.item_benefits}>*/}
            {/*                            <img alt={'point'} src={Icon} className={styles.item_bullet}/>*/}
            {/*                            <div>{item}</div>*/}
            {/*                        </li>*/}
            {/*                    )*/}
            {/*                })}*/}

            {/*            </ul>*/}
            {/*            <div className={styles.item_price}>{el.price}</div>*/}
            {/*            <Button text={'PURCHASE'}/>*/}
            {/*        </>*/}
            {/*    )*/}
            {/*})}*/}
            <h3 className={styles.item_period}>1 month</h3>
            <ul className={styles.item_benefits_list}>
                <li className={styles.item_benefits}>
                    <img alt={'point'} src={Icon} className={styles.item_bullet}/>
                    <div>All speaking sessions</div>
                </li>
                <li className={styles.item_benefits}>
                    <img alt={'point'} src={Icon} className={styles.item_bullet}/>
                    <div>Preparing to the job interview</div>
                </li>
                <li className={styles.item_benefits}>
                    <img alt={'point'} src={Icon} className={styles.item_bullet}/>
                    <div>All speaking sessions</div>
                </li>
                <li className={styles.item_benefits}>
                    <img alt={'point'} src={Icon} className={styles.item_bullet}/>
                    <div>All speaking sessions</div>
                </li>
            </ul>
            <div className={styles.item_price}> 5$ (5$ per month)</div>
            <Button text={'PURCHASE'}/>
        </div>
    )
}

export default PremiumItem;