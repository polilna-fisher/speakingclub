import styles from './itemContent.module.css'
import hostPhoto from './hostPhoto.jpg'

const ItemContent = ({type, name, host, hostIcon}) => {
    return(
        <div className={styles.item_container}>
            <div className={styles.host_container}>
                <img alt={'hostIcon'} src={hostIcon} className={styles.host_icon}/>
                <div className={styles.host_name}>{host}</div>
            </div>
            <div className={styles.meeting_name_container}>
                <div className={styles.meeting_type}>{type}</div>
                <div className={styles.meeting_name}>{name}</div>
            </div>
            <div className={styles.meeting_button_container}>
                <button className={styles.meeting_button}>Part 1</button>
                <button className={styles.meeting_button}>Part 2</button>
            </div>

        </div>
    )
}

export default ItemContent;