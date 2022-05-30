import afterOneSecond from '@/utils/afterOneSecond';

describe('afterOneSecond', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    })
    it('should execute after one second', () => {
        jest.spyOn(global, 'setTimeout');
        const callback = jest.fn();
        expect(callback).not.toHaveBeenCalled();

        afterOneSecond(callback);

        jest.runAllTimers();

        expect(callback).toHaveBeenCalled;
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
    })
})