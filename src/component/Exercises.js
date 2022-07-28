import React, {useEffect, useState}from 'react'
import { Box, Typography, Stack } from '@mui/material'
import pagination from '@mui/material/Pagination'

import ExerciseCard from './ExerciseCard'

const Exercises = ({exercise, setExercise, bodyPart}) => {  

  return (
    <Box 
    id='exercise'
    sx={{mt: {lg: '110px'}}}
    mt='50px'
    p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction="row" justifyContent={'center'} sx={{gap: { lg: '110px', xs:'50'} }} flexWrap='Wrap'>
        {exercise.map( (exercise, index ) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}

      </Stack>


      
    </Box>
  )
}

export default Exercises