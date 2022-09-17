import { Box, Typography } from '@mui/material';
import React from 'react'
type Props = {
  title: string;
  area: string;
  genre: string;
  subgenre: string;
  budget: string;
  catchword: string;
  tags: string[];
}



const InfoCard = (
  { title, area, genre, subgenre, budget, catchword, tags }: Props)
  : JSX.Element => {
  return (
    <Box>
      <Typography
        variant='h2'
        sx={{
          fontSize: '1.125rem',
          lineHeight: '1.5rem',
          fontWeight: '600',
          letterSpacing: '-0.06px',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant='h2'
        sx={{
          fontSize: '1rem',
          lineHeight: '1.5rem',
          letterSpacing: '-0.06px',
        }}
      >
        {area}
      </Typography>
      <Typography
        variant='h2'
        sx={{
          fontSize: '1rem',
          lineHeight: '1.5rem',
          letterSpacing: '-0.06px',
          color: '#6f6f6f',
        }}
      >
        {catchword}
      </Typography>

    </Box>
  );
}



export default InfoCard