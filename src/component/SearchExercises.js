import React, { useEffect, useState } from 'react'
import { Box, Typography, Button, Stack, TextField } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrolbar from './HorizontalScrolbar'
const SearchExercises = ({ setExercise, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartData])

    }
    fetchExerciseData();
  }, [])
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      const SearchExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
          || item.target.toLowerCase().includes(search)
          || item.equipment.toLowerCase().includes(search)
          || item.bodyPart.toLowerCase().includes(search)

      );
      setSearch('')
      setExercise(SearchExercises)
    }

  }
  return (
    <Stack
      alignItems={'center'}
      mt='37px'
      justifyContent={'center'}
      p='20px'>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' }

        }}
        mb='50px'
        textAlign='center'
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position={'relative'} mb='72px'>
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
            },
            width: { lg: '1170px', xs: '250px' },
            backgroundColor: '#fff',
            boederRadius: '40px'
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className='search-btn'
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '170px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',

          }}
          onClick={handleSearch}
        >Search</Button>

      </Box>
      <Box sx={{ width: '100%', position: 'relative', p: '20px' }}>
        <HorizontalScrolbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />


      </Box>

    </Stack>
  )
}

export default SearchExercises