import styles from './admin.module.css'
import {useState} from "react";
import Part from "./part/part";

const Admin = () => {
    // const [part1, setPart1] = useState({})
    // const [part2, setPart2] = useState({})
    // const [meeting, setMeeting] = useState({})
    // const [part1InputDateTime, setPart1InputDateTime] = useState()
    // const [part1Type, setPart1Type] = useState()
    // const [part1Name, setPart1Name] = useState()
    // const [part1Topic, setPart1Topic] = useState()
    // const [part1Questions, setPart1Questions] = useState()
    // const [part2InputDateTime, setPart2InputDateTime] = useState()
    // const [part2Type, setPart2Type] = useState()
    // const [part2Name, setPart2Name] = useState()
    // const [part2Topic, setPart2Topic] = useState()
    // const [part2Questions, setPart2Questions] = useState()

    return(
        <div className={styles.admin_container}>
            <div className={styles.admin_items_container}>
                <h3 className={styles.admin_header}>Meeting constructor</h3>
                <div className={styles.link_container}>
                    <button className={styles.button} >Create Part 1</button>
                    <button className={styles.button} >Create Part 2</button>
                    <button className={styles.button} >Create Meeting</button>
                </div>

                <Part/>
            </div>
        </div>
    )
}

export default Admin;