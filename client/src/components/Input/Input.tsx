import React, { FC } from 'react'
import { Box, Input as ChakraInput, FormLabel, Text } from '@chakra-ui/react'

type InputProps = {
    value?: string
    label: string
    placeholder?: string
    error?: string
    type?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({ label, placeholder, error, onChange, value, type }) => (
    <Box padding='2' maxWidth='96' marginBottom='2'>
        <FormLabel fontSize='sm' marginBottom='2' color='grey5' fontWeight='500'>
            {label}
        </FormLabel>
        <ChakraInput
            placeholder={placeholder}
            isInvalid={!!error}
            value={value}
            onChange={onChange}
            type={type}
        />
        <Text fontSize='sm' marginBottom='2' color='danger' fontWeight='500'>
            {error}
        </Text>
    </Box>
)
