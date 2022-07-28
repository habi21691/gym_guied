import React, { useState } from 'react'
import Box from '@mui/material/Box'
import HeroBanner from '../component/HeroBanner'
import SearchExercises from '../component/SearchExercises'
import Exercises from '../component/Exercises'

export default function Home() {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercise, setExercise] = useState([])

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      setExercise={setExercise}/>
      <Exercises
      exercise={exercise}
      setExercise={setExercise}
      bodyPart={bodyPart}/>
      
    </Box>
  )
}
