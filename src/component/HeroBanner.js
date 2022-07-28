import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../asset/images/banner.png'

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: '212px', xs: '70px' },
                ml: { sm: '50px' }
            }}
            position='relative'
            p='20px'

        >
            <Typography color="#ff2625" fontWeight="600px" fontSize='26px'>
                Fitness Club
            </Typography>
            <Typography fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '20px' } }}>
                Sweat, Smile <br /> and Repeate
            </Typography>
            <Typography fontSize={'22px'} lineHeight='35px' mb={3}>
                Check Out the most Expensive excercises.
            </Typography>
            <Button variant='contained' color='error' href='#exercises'>Explore Exercises</Button>
            <Typography
             fontWeight={600}
             color='#ff2625'
             sx={{
                opacity:0.1,
                display:{lg: 'block', xs:'none'}
             }}
            fontSize='200px'  
            >
                Exercises
            </Typography>
            <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>


        </Box>

    )
}

export default HeroBanner