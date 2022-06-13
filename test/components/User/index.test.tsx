import React from 'react';
// import server from '../../mockServer/server';
// import { rest } from 'msw'
import render from '../../testUtils/render'
import { fireEvent, screen } from '@testing-library/react';
import User from 'components/User'
import axios from 'axios';

const setupHttps = (name?: string, age?: number) => {
    // server.use(
    //     rest.get('https://mysite.com/api/users', async (req, res, ctx) => {
    //         return res(
    //             ctx.status(200),
    //             ctx.json({
    //                 id: "1",
    //                 name: name || 'Jack',
    //                 age: age || 18
    //             })
    //         )
    //     })
    // )

    jest.spyOn(axios, "get").mockResolvedValueOnce({
        data: { 
            id: "1",
            name: name || 'Jack',
            age: age || 18
         },
    });
}

describe('User', () => {
    it('should fetch user list ok', async () => {
        setupHttps('Marry', 10)
        render(<User />, {
            preloadedState: {
                user: {
                    id: '',
                    name: '',
                    age: 10,
                    status: ''
                }
            }
        })

        expect(screen.getByText('无用户信息')).toBeInTheDocument();

        fireEvent.click(screen.getByText('加载用户'))

        expect(await screen.findByText('ID：1')).toBeInTheDocument();
        expect(screen.getByText('姓名：Marry')).toBeInTheDocument();
        expect(screen.getByText('年龄：10')).toBeInTheDocument();

        expect(screen.queryByText('加载中...')).not.toBeInTheDocument();

    })
})