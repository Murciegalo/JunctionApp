import React from 'react'

import { Grid, Typography } from '@material-ui/core'

import Footer from 'components/layouts/Footer'
import PageWrapper from 'components/layouts/PageWrapper'

import Divider from 'components/generic/Divider'
import Button from 'components/generic/Button'

import CenteredContainer from 'components/generic/CenteredContainer'
import GlobalNavBar from 'components/navbars/GlobalNavBar'
import PricingCard from 'components/generic/PricingCard'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { makeStyles } from '@material-ui/core/styles'

import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

const useStyles = makeStyles(theme => ({
    backButtonWrapper: {
        position: 'absolute',
        zIndex: 10,
        width: '100%',
        paddingTop: theme.spacing(1),
    },
}))

export default () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const { t } = useTranslation()
    const body1 = ['Event registration and organization through platform']
    const body2 = [
        'Event registration and organization through platform',
        'Tech Support during event',
        'Dedicated project lead from Junction Team',
        'Junction made website for event',
        'Event PR through Junction media channel',
    ]
    const body3 = [
        'Event registration and organization through platform',
        'Tech Support during event',
    ]

    return (
        <PageWrapper
            header={() => <GlobalNavBar />}
            footer={() => <Footer />}
            render={() => (
                <>
                    <CenteredContainer wrapperClass={classes.backButtonWrapper}>
                        <Button onClick={() => dispatch(push('/'))}>
                            <ArrowBackIosIcon style={{ color: 'black' }} />
                            <Typography
                                variant="button"
                                style={{ color: 'black' }}
                            >
                                {t('Back_')}
                            </Typography>
                        </Button>
                    </CenteredContainer>
                    <Divider size={2} />
                    <CenteredContainer>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            spacing={3}
                        >
                            <PricingCard
                                topic="Community"
                                body={body1}
                                price="Free"
                            />
                            <PricingCard
                                topic="Lite"
                                body={body3}
                                price="800 €"
                            />
                            <PricingCard
                                topic="Pro"
                                body={body2}
                                price="4 100 €"
                            />
                            <Divider size={4} />
                            <Typography variant="body1" justify="center">
                                Our expertise of organising hackathons combined
                                with the power of a highly-customizable platform
                                for events makes hosting diverse events
                                possible.
                            </Typography>
                            <Divider size={4} />
                            <Button
                                variant="outlined"
                                color="theme_lightgray"
                                strong
                                m={6}
                                onClick={() => dispatch(push('/contact'))}
                            >
                                {t('Contact_us_')}
                            </Button>
                        </Grid>
                    </CenteredContainer>
                    <Divider size={4} />
                </>
            )}
        />
    )
}
