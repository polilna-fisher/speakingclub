import styles from './getStartedModal.module.css'


const GetStartedModal = ({header, img, leftList, rightList}) => {

    return(
        <div className={styles.container}>
            <h3 className={styles.header}>{header}</h3>
            <div className={styles.content}>
                <ul className={styles.list}>
                    {
                        leftList.map(item => {
                            return (
                                <li className={styles.list_item}>
                                    <div className={styles.list_icon}></div>
                                    <p>{item}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={styles.img_container}>
                    <img alt={'icon'} src={img} className={styles.img}/>
                </div>
                <ul className={styles.list}>
                    {
                        rightList.map(item => {
                            return (
                                <li className={styles.list_item}>
                                    <div className={styles.list_icon}></div>
                                    <p>{item}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default GetStartedModal;