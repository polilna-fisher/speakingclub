import styles from "./createMeeting.module.css";
import {useForm} from "react-hook-form"


const CreateMeeting = () => {
    const { handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data, 'fdfdfd')

    return (
        <div className={styles.part_inner_container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className={styles.input}
                    type={"date"}
                    required={true}
                    placeholder={"date"}
                    name={"date"}
                />
                <select className={styles.input}>
                    <option className={styles.input}>Speaking Session</option>
                    <option className={styles.input}>Job Interview</option>
                    <option className={styles.input}>IELTS Preparation</option>
                </select>
                <input
                    className={styles.input}
                    type={"text"}
                    required={true}
                    placeholder={"name"}
                    name={"name"}
                />
                <input
                    className={styles.input}
                    type={"text"}
                    required={true}
                    placeholder={"host"}
                    name={"host"}
                />
                <button className={styles.submit_button}>
                    Submit
                </button>
            </form>

        </div>
    );
};

export default CreateMeeting;
