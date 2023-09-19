const { monthsData } = require("./monthsData");

function convertDate(date) {
  let dateTemp = date.trim().split("|")[0].trimEnd().split(" ");

  if (dateTemp[1] in monthsData) {
    dateTemp[1] = monthsData[dateTemp[1]];
  }
  return dateTemp.join(".");
}

module.exports = convertDate;
