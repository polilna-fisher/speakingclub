import moment from "moment";

export const countDate = () => {
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

export const styleDateTime = (date) => {
  const cutDate = date.split("T")[0];
  const month = moment(cutDate, "YYYY-MM-DD").locale("en").format("MMMM");
  const calendarDay = moment(cutDate, "YYYY-MM-DD").format("DD");
  const weekDay = moment(cutDate, "YYYY-MM-DD").locale("en").format("dddd");
  return `${weekDay}, ${month} ${calendarDay}`;
};

export const dateFormats = {
  normal: "DD.MM.YYYY",
};

export const formatDate = (date, format) => {
  return moment(date).format(format);
};
