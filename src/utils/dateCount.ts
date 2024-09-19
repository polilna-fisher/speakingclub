import moment from "moment";

interface ICountDate{
  month: string;
  date: string;
  day: string;
  fullDate: string;
}

export const fromUtcToLocalTime = (date?:string):string => {
  const localTime = moment.utc(date).local().format('YYYY-MM-DDTHH:mm:ss');
  return localTime
}

export const countDate = ():Array<ICountDate> => {
  const dataList = [];
  let n = 0;
  while (n < 7) {
    let date = new Date();
    date.setDate(date.getDate() + n);
    dataList.push({
      month: moment(date.toLocaleString().split(",")[0], "DD.MM.YYYY")
        .locale("en")
        .format("MMMM"),
      date: moment(date.toLocaleString().split(",")[0], "DD.MM.YYYY").format(
        "DD",
      ),
      day: moment(date.toLocaleString().split(",")[0], "DD.MM.YYYY")
        .locale("en")
        .format("dddd"),
      fullDate: date.toLocaleDateString(),
    });
    n = n + 1;
  }
  return dataList;
};

export const styleDateTime = (date:string):string => {
  const cutDate = date.split("T")[0];
  const month = moment(cutDate, "YYYY-MM-DD").locale("en").format("MMMM");
  const calendarDay = moment(cutDate, "YYYY-MM-DD").format("DD");
  const weekDay = moment(cutDate, "YYYY-MM-DD").locale("en").format("dddd");
  return `${weekDay}, ${month} ${calendarDay}`;
};

export const dateFormats = {
  normal: "DD.MM.YYYY",
};

export const formatDate = (date:Date | string, format:string):string => {
  return moment(date).format(format);
};
