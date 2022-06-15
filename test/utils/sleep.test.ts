import sleep from "@/utils/sleep";

describe("sleep", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it("should sleep 1000ms", async () => {
    const callback = jest.fn();
    const act = async () => {
      await sleep(1000);
      callback();
    };

    const promise = act();

    // act();

    expect(callback).not.toHaveBeenCalled();

    jest.runAllTimers();

    await promise;

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
