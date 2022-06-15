import storage from "@/utils/storage";

describe("storage", () => {
  it("set storage is ok", () => {
    storage.set("newKey", "hello");
    expect(localStorage.getItem("my-app-newKey")).toBe("hello");
  });

  it("get storage is ok", () => {
    localStorage.setItem("my-app-coolKey", "cool key");
    expect(storage.get("coolKey")).toBe("cool key");
  });
});
