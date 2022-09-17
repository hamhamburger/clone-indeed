import React from 'react'
import { Box,} from '@mui/system'
import { Typography } from '@mui/material';
type Props = {
  id: string;
  title: string;
  area: string;
  genre: string;
  subgenre: string;
  budget: string;
  catchword: string;
  tags: string[];
  url:string
};

const ShopCard = ({
  id,
  title,
  area,
  genre,
  subgenre,
  budget,
  catchword,
  tags,
  url
}: Props): JSX.Element => {
  return (
    <Box
      sx={{
        border: '1px solid #d4d2d0',
        padding: '20px',
        borderRadius: '0.4rem',
      }}
    >
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
      <Box sx={{ display: 'flex', gap: '10px' }}>
        {tags.map((tag) => (
          <Box
            key={tag}
            sx={{
              border: '1px solid #d4d2d0',
              fontSize: '0.85rem',
              fontWeight: '600',
              lineHeight: '1.5rem',
              padding: '5px',
              borderRadius: '0.2rem',
            }}
          >
            {tag}
          </Box>
        ))}
        <Typography
          variant='h2'
          sx={{
            fontSize: '0.85rem',
            fontWeight: '600',
            lineHeight: '1.5rem',
            padding: '5px',
            borderRadius: '0.2rem',
          }}
        ></Typography>
      </Box>
      <Typography
        variant='h2'
        sx={{
          fontSize: '1rem',
          fontWeight: '600',
          lineHeight: '1.5rem',
        }}
      >
        {budget}
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
};

export default ShopCard