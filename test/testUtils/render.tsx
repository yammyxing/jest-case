import React, { FC } from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { reducer, RootState } from 'store/index'

interface CustomRenderOptions extends RenderOptions {
    preloadedState?: RootState;
    store?: ReturnType<typeof configureStore>
}

const render = (ui: React.ReactElement, options: CustomRenderOptions) => {
    const {
        preloadedState = {},
        store = configureStore({ reducer, preloadedState }),
        ...renderOptions
    } = options

    const Wrapper: FC = ({children}) => {
        return <Provider store={store}>{children}</Provider>
    }

    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

export default render;