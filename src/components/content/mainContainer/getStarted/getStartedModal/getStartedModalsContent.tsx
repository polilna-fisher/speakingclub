import GroupDiscussion from "./groupDiscussionImg.png";
import JobInterview from "./jobInterviewImg.png";
import IeltsPreparation from "./ieltsPreparationImg.png";
import LanguageLevel from "./languageLevelImg.png";
import Languages from "./languagesImg.png";

export interface IGetStartedModals {
  groupDiscussion: {
    header: string,
    img: string,
    leftList: string[],
    rightList: string[]
  },
  jobInterview: {
    header: string,
    img: string,
    leftList: string[],
    rightList: string[]
  },
  ieltsPreparation: {
    header: string,
    img: string,
    leftList: string[],
    rightList: string[]
  },
  intermediate: {
    header: string,
    img: string,
    leftList: string[],
    rightList: string[]
  },
  english: {
    header: string,
    img: string,
    leftList: string[],
    rightList: string[]
  },
}

export const getStartedModals: IGetStartedModals = {
  groupDiscussion: {
    header: "Group Discussions",
    img: GroupDiscussion,
    leftList: [
      "In group discussions, we will divide all participants into pairs.",
      "During your discussion, you can use the suggested questions or talk about whatever you want.",
      "One discussion session lasts 25 minutes.",
    ],
    rightList: [
      "Please, turn on your camera during meeting.",
      "We do not welcome political and religious topics for discussion.",
      "We ban participants for insulting their interlocutors.",
    ],
  },
  jobInterview: {
    header: "Job Interview",
    img: JobInterview,
    leftList: [
      "In job interview meeting, we will divide all participants into pairs.",
      "We prepare question you can be asked on a job interview which you can discuss on a meeting.",
      "One discussion session lasts 25 minutes.",
    ],
    rightList: [
      "We provide you some useful tips and phrases which help you to answer prepared questions.",
      "Ask each other and discuss the answers.",
      "Please, turn on your camera during meeting.",
    ],
  },
  ieltsPreparation: {
    header: "IELTS Preparation",
    img: IeltsPreparation,
    leftList: [
      "In group discussions, we will divide all participants into pairs.",
      "During your discussion, you can use the suggested questions or talk about whatever you want.",
      "One discussion session lasts 25 minutes.",
    ],
    rightList: [
      "Please, turn on your camera during meeting.",
      "We do not welcome political and religious topics for discussion.",
      "We ban participants for insulting their interlocutors.",
    ],
  },
  intermediate: {
    header: "Language Level",
    img: LanguageLevel,
    leftList: [
      "In group discussions, we will divide all participants into pairs.",
      "During your discussion, you can use the suggested questions or talk about whatever you want.",
      "One discussion session lasts 25 minutes.",
    ],
    rightList: [
      "Please, turn on your camera during meeting.",
      "We do not welcome political and religious topics for discussion.",
      "We ban participants for insulting their interlocutors.",
    ],
  },
  english: {
    header: "Languages",
    img: Languages,
    leftList: [
      "In group discussions, we will divide all participants into pairs.",
      "During your discussion, you can use the suggested questions or talk about whatever you want.",
      "One discussion session lasts 25 minutes.",
    ],
    rightList: [
      "Please, turn on your camera during meeting.",
      "We do not welcome political and religious topics for discussion.",
      "We ban participants for insulting their interlocutors.",
    ],
  },
};
