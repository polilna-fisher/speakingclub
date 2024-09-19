import styles from "./part.module.sass";
import {FC, useState} from "react";
import { meetingActions } from "../../../../../../redux/meetingSlice";
import {useAppDispatch, useAppSelector} from "../../../../../../redux/store";
import {partActions} from "../../../../../../redux/partSlice";

const Part:FC = () => {
  const [dateTimePart1, setDateTimePart1] = useState();
  const [dateTimePart2, setDateTimePart2] = useState();
  const [type, setType] = useState("Speaking Session");
  const [name, setName] = useState();
  const [topicPart1, setTopicPart1] = useState();
  const [topicPart2, setTopicPart2] = useState();
  const [questionPart1, setQuestionPart1] = useState<string>('');
  const [questionPart2, setQuestionPart2] = useState<string>('');
  const [questionListPart1, setQuestionListPart1] = useState<Array<string>>([]);
  const [questionListPart2, setQuestionListPart2] = useState<Array<string>>([]);
  const savedParts = useAppSelector((state) => state.parts.isPartsReceived);
  const savedPart1 = useAppSelector((state) => state.parts.newPart1);
  const savedPart2 = useAppSelector((state) => state.parts.newPart2);
  const dispatch = useAppDispatch();

  const saveParts = async () => {
    const part1 = {
      type: type,
      name: name,
      dateTime: dateTimePart1,
      booked: false,
      topic: topicPart1,
      questions: [...questionListPart1],
    };
    const part2 = {
      type: type,
      name: name,
      dateTime: dateTimePart2,
      booked: false,
      topic: topicPart2,
      questions: [...questionListPart2],
    };
    dispatch(partActions.fetchNewPart1(part1));
    dispatch(partActions.fetchNewPart2(part2));
    dispatch(partActions.receiveParts(true));
  };
  const editParts = () => {
    dispatch(partActions.receiveParts(false));
  };

  return (
    <div className={styles.part_inner_container}>
      {!savedParts ? (
        <>
          <div className={styles.input_container}>
            <h3 className={styles.part_header}>Part 1</h3>
            <div className={styles.submit_block}>
              <input
                className={styles.input}
                type={"datetime-local"}
                required={true}
                placeholder={"dateTime"}
                name={"dateTimePart1"}
                value={dateTimePart1}
                onChange={(e:any) => setDateTimePart1(e.target.value)}
              />
            </div>
            <div className={styles.submit_block}>
              <select
                className={styles.input}
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option className={styles.input}>Speaking Session</option>
                <option className={styles.input}>Job Interview</option>
                <option className={styles.input}>IELTS Preparation</option>
              </select>
            </div>
            <div className={styles.submit_block}>
              <input
                className={styles.input}
                type={"text"}
                placeholder={"name"}
                value={name}
                onChange={(e:any) => setName(e.target.value)}
              />
            </div>
            <div className={styles.submit_block}>
              <input
                className={styles.input}
                type={"text"}
                placeholder={"topic"}
                value={topicPart1}
                onChange={(e:any) => setTopicPart1(e.target.value)}
              />
            </div>
            {questionListPart1.length ? (
              <div className={styles.question_container}>
                {questionListPart1.map((question) => {
                  return <div key={question}>{question}</div>;
                })}
              </div>
            ) : null}
            <div className={styles.submit_block}>
              <input
                className={styles.input}
                type={"text"}
                placeholder={"questions"}
                value={questionPart1}
                onChange={(e:any) => setQuestionPart1(e.target.value)}
              />
              <button
                className={styles.add_button}
                onClick={(e) => {
                  e.preventDefault();
                  setQuestionListPart1([...questionListPart1, questionPart1]);
                  setQuestionPart1("");
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className={styles.input_container}>
            <h3 className={styles.part_header}>Part 2</h3>
            <div className={styles.submit_block}>
              <input
                className={styles.input}
                type={"datetime-local"}
                placeholder={"dateTime"}
                name={"dateTimePart2"}
                value={dateTimePart2}
                onChange={(e:any) => setDateTimePart2(e.target.value)}
              />
            </div>
            <div className={styles.submit_block}>
              <select
                className={styles.input}
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option className={styles.input}>Speaking Session</option>
                <option className={styles.input}>Job Interview</option>
                <option className={styles.input}>IELTS Preparation</option>
              </select>
            </div>
            <div className={styles.submit_block}>
              <input
                className={styles.input}
                type={"text"}
                placeholder={"name"}
                value={name}
                onChange={(e:any) => setName(e.target.value)}
              />
            </div>
            <div className={styles.submit_block}>
              <input
                className={styles.input}
                type={"text"}
                placeholder={"topic"}
                value={topicPart2}
                onChange={(e:any) => setTopicPart2(e.target.value)}
              />
            </div>
            {questionListPart2.length ? (
              <div className={styles.question_container}>
                {questionListPart2.map((question) => {
                  return <div key={question}>{question}</div>;
                })}
              </div>
            ) : null}
            <div className={styles.submit_block}>
              <input
                className={styles.input}
                type={"text"}
                placeholder={"questions"}
                value={questionPart2}
                onChange={(e:any) => setQuestionPart2(e.target.value)}
              />
              <button
                className={styles.add_button}
                onClick={(e) => {
                  e.preventDefault();
                  setQuestionListPart2([...questionListPart2, questionPart2]);
                  setQuestionPart2("");
                }}
              >
                Add
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.output_container}>
          <div>
            <div className={styles.output_header}>Part 1</div>
            <div>
              <div className={styles.output_field_name}>Date:</div>
              <div className={styles.output_field}>{savedPart1?.dateTime}</div>
            </div>
            <div>
              <div className={styles.output_field_name}>Type:</div>
              <div className={styles.output_field}>{savedPart1?.type}</div>
            </div>
            <div>
              <div className={styles.output_field_name}>Name:</div>
              <div className={styles.output_field}>{savedPart1?.name}</div>
            </div>
            <div>
              <div className={styles.output_field_name}>Topic:</div>
              <div className={styles.output_field}>{savedPart1?.topic}</div>
            </div>
            <div>
              <div className={styles.output_field_name}>Questions:</div>
              <div className={styles.output_field}>{savedPart1?.questions}</div>
            </div>
          </div>
          <div>
            <div className={styles.output_header}>Part 2</div>
            <div>
              <div className={styles.output_field_name}>Date:</div>
              <div className={styles.output_field}>{savedPart2?.dateTime}</div>
            </div>
            <div>
              <div className={styles.output_field_name}>Type:</div>
              <div className={styles.output_field}>{savedPart2?.type}</div>
            </div>
            <div>
              <div className={styles.output_field_name}>Name:</div>
              <div className={styles.output_field}>{savedPart2?.name}</div>
            </div>
            <div>
              <div className={styles.output_field_name}>Topic:</div>
              <div className={styles.output_field}>{savedPart2?.topic}</div>
            </div>
            <div>
              <div className={styles.output_field_name}>Questions:</div>
              <div className={styles.output_field}>{savedPart2?.questions}</div>
            </div>
          </div>
        </div>
      )}

      {savedParts ? (
        <>
          <button className={styles.edit_button} onClick={() => editParts()}>
            Edit
          </button>
          {/*<button className={styles.submit_button} onClick={() => switchToMeeting()}*/}
          {/*>Next*/}
          {/*</button>*/}
        </>
      ) : (
        <button className={styles.submit_button} onClick={() => saveParts()}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Part;
