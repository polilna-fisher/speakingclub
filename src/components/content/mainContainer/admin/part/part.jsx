import styles from './part.module.css'
import {useState} from "react";
import {meetingActions} from "../../../../../redux/slice";
import {useDispatch} from "react-redux";

const Part = ({partName}) => {
    const [dateTime, setDateTime] = useState()
    const [type, setType] = useState()
    const [name, setName] = useState()
    const [topic, setTopic] = useState()
    const [question, setQuestion] = useState()
    const [questionList, setQuestionList] = useState([])
    // const [submittedPart, setSubmittedPart] = useState(false)
    const dispatch = useDispatch()


    const createPartSendRequest = async () => {
        const body = {
            type: type,
            name: name,
            dateTime: dateTime,
            booked: false,
            topic: topic,
            questions: [...questionList]
        }
        // partName === 'part1' ? dispatch(meetingActions.fetchNewPart1(body)) : dispatch(meetingActions.fetchNewPart2(body))
        // setSubmittedPart(true)

    }

    return (
        <div className={styles.part_inner_container}>
            {/*{submittedPart*/}
            {/*    ?*/}
            {/*<div className={styles.output_container}>*/}
            {/*        <div className={styles.output_field}>DateTime: {dateTime}</div>*/}
            {/*        <div className={styles.output_field}>Type: {type}</div>*/}
            {/*        <div className={styles.output_field}>Name: {name}</div>*/}
            {/*        <div className={styles.output_field}>Topic: {topic}</div>*/}
            {/*        <div className={styles.output_field}>Questions:*/}
            {/*            {*/}
            {/*                questionList.map(el => {*/}
            {/*                        return (<div>{el}</div>)*/}
            {/*                    })*/}
            {/*            }*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*:*/}

            <div className={styles.input_container}>
                <h3 className={styles.part_header}>Part 1</h3>
                <div className={styles.submit_block}>
                    <input className={styles.input} type={"datetime-local"}
                           placeholder={'dateTime'}
                           name={'dateTime'}
                           value={dateTime}
                           onChange={(e) => setDateTime(e.target.value)}/>
                </div>
                <div className={styles.submit_block}>
                    <input className={styles.input} type={"text"} placeholder={'type'}
                           name={'type'}
                           value={type}
                           onChange={(e) => setType(e.target.value)}/>
                </div>
                <div className={styles.submit_block}>
                    <input className={styles.input} type={"text"}
                           placeholder={'name'}
                           value={name}
                           onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={styles.submit_block}>
                    <input className={styles.input} type={"text"} placeholder={'topic'}
                           value={topic}
                           onChange={(e) => setTopic(e.target.value)}/>
                </div>
                <div className={styles.submit_block}>
                    <input className={styles.input} type={"text"}
                           placeholder={'questions'}
                           value={question}
                           onChange={(e) => setQuestion(e.target.value)}/>
                    <button className={styles.add_button} onClick={(e) => {
                        e.preventDefault();
                        setQuestionList([...questionList, question]);
                        setQuestion('')
                    }}>Add
                    </button>
                </div>


                {/*}*/}

            </div>
            <div className={styles.input_container}>
                <h3 className={styles.part_header}>Part 2</h3>
                <div className={styles.submit_block}>
                    <input className={styles.input} type={"datetime-local"}
                           placeholder={'dateTime'}
                           name={'dateTime'}
                           value={dateTime}
                           onChange={(e) => setDateTime(e.target.value)}/>
                </div>
                <div className={styles.submit_block}>
                    <input className={styles.input} type={"text"} placeholder={'type'}
                           name={'type'}
                           value={type}
                           onChange={(e) => setType(e.target.value)}/>
                </div>
                <div className={styles.submit_block}>
                    <input className={styles.input} type={"text"}
                           placeholder={'name'}
                           value={name}
                           onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={styles.submit_block}>
                    <input className={styles.input} type={"text"} placeholder={'topic'}
                           value={topic}
                           onChange={(e) => setTopic(e.target.value)}/>
                </div>
                <div className={styles.submit_block}>
                    <input className={styles.input} type={"text"}
                           placeholder={'questions'}
                           value={question}
                           onChange={(e) => setQuestion(e.target.value)}/>
                    <button className={styles.add_button} onClick={(e) => {
                        e.preventDefault();
                        setQuestionList([...questionList, question]);
                        setQuestion('')
                    }}>Add
                    </button>
                </div>


                {/*}*/}

            </div>
            {/*{*/}
            {/*    submittedPart*/}
            {/*        ? <button className={styles.delete_button}*/}
            {/*                  onClick={() => createPartSendRequest()}>Delete*/}
            {/*        </button>*/}
            {/*        : <button className={styles.submit_button}*/}
            {/*                  onClick={() => createPartSendRequest()}>Submit*/}
            {/*        </button>*/}
            {/*}*/}

            <button className={styles.submit_button}
                    onClick={() => createPartSendRequest()}>Submit
            </button>

        </div>
    )
}

export default Part;