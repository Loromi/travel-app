import { convertToTime } from "../src/client/js/convertUnix";

describe("convertToTime", () => {
  let unixTimestamp = 1330556400;
  const utc = convertToTime(unixTimestamp);
  it("should get the time from a unix timestamp and store it into an object like 'utc'", () => {
    expect(utc.hours).toBe("0");
    expect(utc.minutes).toBe("00");
  });
});
