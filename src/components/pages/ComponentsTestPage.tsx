// @ts-nocheck

import { css } from '@emotion/react';
import React, { useState } from 'react';
import Header from '../parts/Header';
import SearchForm from '../templates/SearchForm';

import areaConditionData from '../../lib/areaConditionData.js';
import genreConditionData from '../../lib/genreConditionData.js';
import specialCategoryConditionData from '../../lib/specialCategoryConditionData';
import shopData from '../../lib/shopData';

import { JSX } from '@emotion/react/jsx-runtime';
import ShopCard from '../parts/ShopCard';
import { Box } from '@mui/material';

const conditionSelectData = [
  areaConditionData,
  genreConditionData,
  specialCategoryConditionData,
];
console.log(areaConditionData);
const ComponentsTestPage = (): JSX.Element => {
  const [selectValue, setSelectValue] = useState('');
  return (
    <div>
      <Header />
      <SearchForm
        conditionSelectList={conditionSelectData}
        css={css({
          maxWidth: '550px',
          marginLeft: 'auto',
          marginRight: 'auto',
        })}
      />
      <Box
        sx={{
          display: 'grid',
          rowGap: '15px',
          maxWidth: '500px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '50px',
        }}
      >
        {shopData.map(
          (
            shop: JSX.IntrinsicAttributes & {
              id: string;
              title: string;
              area: string;
              genre: string;
              subgenre: string;
              budget: string;
              catchword: string;
              tags: string[];
              url: string;
            },
          ) => (
            <ShopCard key={shop.title} {...shop} />
          ),
        )}
      </Box>
    </div>
  );
};

export default ComponentsTestPage;
