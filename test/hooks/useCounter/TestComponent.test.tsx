import useCounter from "hooks/useCounter";
import { render, act } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import React from "react";

// 测试组件
// const UseCounterTest = () => {
//   const [counter, { inc, set, dec, reset }] = useCounter(0);
//   return (
//     <section>
//       <div>Counter: {counter}</div>
//       <button onClick={() => inc(1)}>inc(1)</button>
//       <button onClick={() => dec(1)}>dec(1)</button>
//       <button onClick={() => set(10)}>set(10)</button>
//       <button onClick={reset}>reset()</button>
//     </section>
//   );
// };

const setup = (initialValue: number) => {
    const returnValue = {};

    const UserCounterTest = () => {
        const [counter, utils] = useCounter(initialValue);

        Object.assign(returnValue, {
            counter,
            utils
        })
        
        return null;
    }

    render(<UserCounterTest />)

    return returnValue;
}

describe('useCounter', () => {
    it('should inc ok', async () => {
        // render(<UseCounterTest />);
        
        // const incBtn = screen.getByText('inc(1)');
        
        // await userEvent.click(incBtn);
        
        // expect(screen.getByText("Counter: 1")).toBeInTheDocument()

        const useCounterData: any = setup(0);
        act(() => {
            useCounterData.utils.inc(1);
        })

        expect(useCounterData.counter).toEqual(1)
    })

    it('should dec ok', async () => {
        // render(<UseCounterTest />);

        // const decBtn = screen.getByText('dec(1)');

        // await userEvent.click(decBtn);

        // expect(screen.getByText("Counter: -1")).toBeInTheDocument()

        const useCounterData: any = setup(0);
        act(() => {
            useCounterData.utils.dec(1);
        })

        expect(useCounterData.counter).toEqual(-1)
    })

    it('should set ok', async () => {
        // render(<UseCounterTest />);

        // const setBtn = screen.getByText('set(10)');

        // await userEvent.click(setBtn);

        // expect(screen.getByText("Counter: 10")).toBeInTheDocument()

        const useCounterData: any = setup(0);
        act(() => {
            useCounterData.utils.set(10);
        })

        expect(useCounterData.counter).toEqual(10)
    })

    it('should reset ok', async () => {
        // render(<UseCounterTest />);

        // const incBtn = screen.getByText('inc(1)');
        // const resetBtn = screen.getByText('reset()');

        // await userEvent.click(incBtn);
        // await userEvent.click(resetBtn);

        // expect(screen.getByText("Counter: 0")).toBeInTheDocument()

        const useCounterData: any = setup(0);
        act(() => {
            useCounterData.utils.inc(1);
            useCounterData.utils.reset();
        })

        expect(useCounterData.counter).toEqual(0)
    })
})