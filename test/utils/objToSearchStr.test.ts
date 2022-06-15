import objToSearchStr from "@/utils/objToSearchStr";

describe("objToSearchStr", () => {
  it("convert obj to search string", () => {
    expect(
      objToSearchStr({
        a: "1",
        b: "2",
      })
    ).toEqual("a=1&b=2");
  });

  it("convert when obj value is number", () => {
    expect(
      objToSearchStr({
        a: 1,
        b: 2,
      })
    ).toEqual("a=1&b=2");
  });
});
