import * as envUtils from "utils/env";

const originalEnv = envUtils.env;

describe("env", () => {
  afterEach(() => {
    Object.defineProperty(envUtils, "env", {
      value: originalEnv,
      writable: true,
    });
  });

  it("should be dev env", () => {
    Object.defineProperty(envUtils, "env", {
      value: "dev",
      writable: true,
    });

    expect(envUtils.env).toEqual("dev");
  });

  it("should be prod env", () => {
    Object.defineProperty(envUtils, "env", {
      value: "prod",
      writable: true,
    });

    expect(envUtils.env).toEqual("prod");
  });
});
