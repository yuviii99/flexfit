import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from '../components/HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = (props) => {
    const {targetMuscleExercises, equipmentExercises} = props;
  return (
    <Box sx={{marginTop: {lg: '100px', xs: '0'}}}>
      <Typography variant='h3' mb={5}>
        Exercises which target same muscle group.
      </Typography>
      <Stack direction='row' sx={{p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/> : <Loader/>}
      </Stack>
      <Typography variant='h3' mb={5}>
        Exercises which use the same equipment.
      </Typography>
      <Stack direction='row' sx={{p: '2', position: 'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises}/> : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
