import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography,Stack } from '@mui/material'
import { fontSize } from '@mui/system'
const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <Stack direction={'row'} >
            <Button
            sx={{ml: '21px', color:'#fff', background:'#ffa9a9', fontSize:'20px',borderRadius:'20px', textTransform:'capitalize'}}
            > {exercise.bodyPart}</Button>
            <Button
            sx={{ml: '21px', color:'#fff', background:'#fcc757  ', fontSize:'20px',borderRadius:'20px', textTransform:'capitalize'}}
            > {exercise.target}</Button>
            <Typography fontWeight={'bold'} fontSize='24px' color="#000" textTransform={'capitalize'} ml='23px' mt='20px' pb='10px' >
                {exercise.name}
            </Typography>
        </Stack>
    </Link>
  )
}

export default ExerciseCard