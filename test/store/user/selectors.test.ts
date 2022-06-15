import { selectUser, selectUserFetchStatus } from "store/user/selectors";

describe("selector", () => {
  describe("selectUser", () => {
    it("should fetch user info", () => {
      expect(
        selectUser({
          user: {
            id: "1",
            name: "John",
            age: 20,
            status: "complete",
          },
        })
      ).toEqual({
        id: "1",
        name: "John",
        age: 20,
      });
    });
  });

  describe("selectUserFetchStatus", () => {
    it("should fetch user status", () => {
      expect(
        selectUserFetchStatus({
          user: {
            id: "1",
            name: "John",
            age: 20,
            status: "loading",
          },
        })
      ).toEqual("loading");
    });
  });
});
