import styles from './admin.module.css'
import {useState} from "react";
import Part from "./part/part";

const Admin = () => {
    const [section, setSection] = useState('part1')
    // const [part1, setPart1] = useState(false);
    // const [part2, setPart2] = useState(false);

    // const getPartSubmission = (part, isSubmit) => {
    //     part === 'part1' ? setPart1(isSubmit)  : setPart2(isSubmit)
    // }

    const sections = {
        parts: (
            <div>
                <Part/>
            </div>
        ),
        meeting: (
            <div>

            </div>
        ),
    };


    return (
        <div className={styles.admin_container}>
            <div className={styles.admin_items_container}>
                <h3 className={styles.admin_header}>Meeting constructor</h3>
                <div className={styles.link_container}>
                    <button className={styles.button}
                            onClick={() => {
                                setSection('parts')
                            }}>Create Parts
                    </button>
                    <button className={styles.button} disabled={!'parts'} onClick={() => {
                        setSection('meeting')
                    }}
                            >Create Meeting
                    </button>
                </div>
                {
                    sections[section]
                }


            </div>
        </div>
    )
}

export default Admin;