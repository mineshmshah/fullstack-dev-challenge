import React, { FC, useContext } from 'react'
import { Text } from '@chakra-ui/react'
import { AppContext } from '../../store'
import { Card } from '../Card'

export const SavingsSummary: FC = () => {
    const { state } = useContext(AppContext)

    return (
        <Card>
            <Text
                fontSize='sm'
                marginBottom='4'
                color='blueHeader'
                fontWeight='700'
                textAlign='center'
            >
                Savings Summary
            </Text>

            <Text fontSize='xl' marginBottom='4' color='grey5' fontWeight='700' textAlign='center'>
                {state.details.firstName.value} {state.details.lastName.value}&apos;s total savings
                in 50 years will be:
            </Text>
            <Text
                fontSize='lg'
                marginBottom='4'
                color='blueHeader'
                fontWeight='700'
                textAlign='center'
            >
                £ {state.data.value?.finalValue}
            </Text>
        </Card>
    )
}
