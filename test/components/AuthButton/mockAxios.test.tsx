import React from 'react';
import { render, screen } from '@testing-library/react'
import AuthButton from '@/components/AuthButton'
import * as userUtils from 'apis/user';
import { AxiosResponse } from 'axios'

describe('AuthButton mock axios', () => {
    it('should display plain user content', async () => {
        jest.spyOn(userUtils, 'getUserRole').mockResolvedValueOnce({
            data: {
                userType: 'user',
            }
        } as AxiosResponse)

        render(<AuthButton>hello</AuthButton>)

        expect(await screen.findByText("plain user,hello")).toBeInTheDocument()
    })

    it('should display admin user content', async () => {
        jest.spyOn(userUtils, 'getUserRole').mockResolvedValueOnce({
            data: {
                userType: 'admin',
            }
        } as AxiosResponse)

        render(<AuthButton>hello</AuthButton>)

        expect(await screen.findByText("admin user,hello")).toBeInTheDocument()
    })
})