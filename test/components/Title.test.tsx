import React from 'react';
import { render } from '@testing-library/react'
import Title from '@/components/Title';


describe('Title component', () => {
    it('should render large title', () => {
        // const { baseElement } = render(<Title title="hello large" type="small" />)
        // expect(baseElement).toMatchSnapshot();
        const { getByText } = render(<Title title="hello large" type="small" />)
        const content = getByText('hello large')
        expect(content).toMatchSnapshot();
    })

    it('should render small title', () => {
        // const { baseElement } = render(<Title title="hello small" type="large" />)
        // expect(baseElement).toMatchSnapshot();
        const { getByText } = render(<Title title="hello small" type="large" />)
        const content = getByText('hello small')
        expect(content).toMatchSnapshot();
    })
})