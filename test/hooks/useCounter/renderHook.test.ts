import { renderHook } from '@testing-library/react-hooks'
import useCounter from 'hooks/useCounter'
import { act } from '@testing-library/react'

describe('useCounter', () => {
    it('should inc ok', () => {
        const { result } = renderHook(() => useCounter(0))
        act(() => {
            result.current[1].inc(1)
        })

        expect(result.current[0]).toEqual(1);
    })

    it('should dec ok', () => {
        const { result } = renderHook(() => useCounter(0))
        act(() => {
            result.current[1].dec(1)
        })
        expect(result.current[0]).toEqual(-1);
    })

    it('should set ok', () => {
        const { result } = renderHook(() => useCounter(0))
        act(() => {
            result.current[1].set(10)
        })
        expect(result.current[0]).toEqual(10)
    })

    it('should reset ok', () => {
        const { result } = renderHook(() => useCounter(0))
        act(() => {
            result.current[1].inc(1)
            result.current[1].reset()
        })

        expect(result.current[0]).toEqual(0)
    })

    it('should use max', () => {
        const { result }= renderHook(() => useCounter(100, {max: 10}))
        expect(result.current[0]).toEqual(10)
    })

    it('should use min', () => {
        const { result } = renderHook(() => useCounter(0, {min: 10}))
        expect(result.current[0]).toEqual(10)
    })
})