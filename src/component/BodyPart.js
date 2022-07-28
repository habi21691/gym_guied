import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import Icon from '../asset/icons/gym.png'

const BodyPart = ({ bodyPart, setBodyPart, item }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomRightRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'

      }
      }>
      <img src={Icon} alt='dumbbel' style={{ width: '30px', height: '30px' }}
      />
      <Typography fontSize='24px' fontWeight='bold'  color='#3A1212' textTransform={'capitalize'}>{item}</Typography>
    </Stack>

  )
}

export default BodyPart