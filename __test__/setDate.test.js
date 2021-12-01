import { checkFormat } from "../src/client/js/setDate";

describe("checkFormat", () => {
  let year = 2021;
  let month = 5;
  let day = 1;
  test("if the date is returned in the correct format", () => {
    expect(checkFormat(year, month, day)).toBe("2021-05-01");
  });
});
