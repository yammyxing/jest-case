import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react'
import AuthButton from '@/components/AuthButton'

describe('AuthButton mock axios', () => {
    it('should display plain user content', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
            data: {
                userType: 'user',
            }
        })

        render(<AuthButton>hello</AuthButton>)

        expect(await screen.findByText("plain user,hello")).toBeInTheDocument()
    })

    it('should display admin user content', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
            data: {
                userType: 'admin',
            }
        })

        render(<AuthButton>hello</AuthButton>)

        expect(await screen.findByText("admin user,hello")).toBeInTheDocument()
    })
})