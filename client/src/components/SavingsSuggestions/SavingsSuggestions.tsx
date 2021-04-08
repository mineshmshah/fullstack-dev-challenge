import React, { FC, useContext } from 'react'
import { Text, Box, Grid, Image, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { AppContext } from '../../store'
import { Card } from '../Card'

export const SavingsSuggestions: FC = () => {
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
                Savings Suggestions
            </Text>

            <Text fontSize='xs' marginBottom='4' color='grey5' fontWeight='700' textAlign='center'>
                Here are some helpful articles just for your needs!
            </Text>
            <Box display='grid' gridTemplateColumns='1fr'>
                <Grid
                    width='auto'
                    padding='4'
                    gridTemplateColumns={{
                        base: '1fr',
                        md: 'repeat(2,1fr)',
                    }}
                    backgroundColor='blue200'
                    borderRadius='8px'
                >
                    {state.data.value && state.data.value?.finalValue > 50000 && (
                        <Grid
                            width='auto'
                            padding='4'
                            margin='4'
                            gridTemplateColumns={{
                                base: '1fr',
                                md: 'repeat(2,1fr)',
                            }}
                            backgroundColor='white'
                            borderRadius='8px'
                            justifyContent='center'
                            justifyItems='center'
                            alignItems='center'
                        >
                            <Image
                                src='https://www.finimize.com/wp/wp-content/uploads/2021/04/08042021-samsung-1.jpg'
                                alt='Segun Adebayo'
                                height='100px'
                            />
                            <Link
                                padding={4}
                                href='https://www.finimize.com/wp/news/smart-money-2/'
                                isExternal
                                textAlign='center'
                            >
                                Finimize: Smart Money <ExternalLinkIcon mx='2px' />
                            </Link>
                        </Grid>
                    )}
                    <Grid
                        width='auto'
                        padding='4'
                        margin='4'
                        gridTemplateColumns={{
                            base: '1fr',
                            md: 'repeat(2,1fr)',
                        }}
                        backgroundColor='white'
                        borderRadius='8px'
                        justifyContent='center'
                        justifyItems='center'
                        alignItems='center'
                    >
                        <Image
                            src='https://www.finimize.com/wp/wp-content/uploads/2021/03/06042021-emerging-markets.jpg'
                            alt='Segun Adebayo'
                            height='100px'
                        />
                        <Link
                            padding={4}
                            href='https://www.finimize.com/wp/news/now-youre-cookin/'
                            isExternal
                            textAlign='center'
                        >
                            Finimize: Now You’re Cookin’ <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    )
}
