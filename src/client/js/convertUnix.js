const convertToTime = (unixTimestamp) => {
  const dateObject = new Date(unixTimestamp * 1000);
  const utc = dateObject.toUTCString();
  console.log(`utc: ${utc}`);
  return utc;
};

export { convertToTime };
