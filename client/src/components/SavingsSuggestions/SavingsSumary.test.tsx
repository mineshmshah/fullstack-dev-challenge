import React from 'react'
import { cleanup } from '@testing-library/react'
import { customRender } from '../../utils/test-utils'
import { initialState } from '../../store/initialState'
import { SavingsSuggestions } from './SavingsSuggestions'

afterEach(cleanup)

describe('component/SavingsSuggestion', () => {
    it('renders Savings suggestion component', () => {
        const { render } = customRender(<SavingsSuggestions />, {})
        const { container } = render
        expect(container).toMatchSnapshot()
    })
    it('renders Savings suggestion component with high value savings', () => {
        const { render } = customRender(<SavingsSuggestions />, {
            store: {
                ...initialState,
                data: {
                    ...initialState.data,
                    value: {
                        finalValue: 50001,
                        yearlySavings: [],
                        yearlyBreakdown: [],
                    },
                },
            },
        })
        const { container } = render
        expect(container).toMatchSnapshot()
    })
})
