import { loadStorage } from "../src/client/js/app";
import { storage } from "../src/client/js/storage";

describe("loadStorage", (done) => {
  test("if stored user data is loaded correctly", () => {
    if (storage === undefined || storage === null) {
      expect = () => storage.createStorage().toBeCalled();
    } else {
      expect = () => loadStorage(done).resolves.toBeThruthy();
    }
  });
});
