const convertToTime = (unixTimestamp) => {
  const dateObject = new Date(unixTimestamp * 1000);
  const utc = {};
  utc.hours = `${dateObject.getHours()}`;
  let minutes = dateObject.getMinutes();
  if (minutes < 10) {
    utc.minutes = `0${minutes}`;
  } else {
    utc.minutes = `${minutes}`;
  }
  // console.log(`utc: ${JSON.stringify(utc)}`);
  return utc;
};

export { convertToTime };
