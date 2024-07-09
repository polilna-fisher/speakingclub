import styles from './button.module.css'


const Button = ({text, onClickFn = () => {}}) => {
    return(
            <button className={styles.button} onClick={() => {onClickFn()}}>{text}</button>

    )
}

export default Button;