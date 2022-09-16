import { css } from '@emotion/react';
import React,{useState} from 'react';
import Header from '../parts/Header';
import SearchForm from '../templates/SearchForm';
import { FaGithub } from 'react-icons/fa';
import areaConditionData from '../../lib/areaConditionData.js';

import genreConditionData from '../../lib/genreConditionData.js';
import specialCategoryConditionData from '../../lib/specialCategoryConditionData';

const keywordList = ['お寿司', '焼肉'];

const conditionSelectData = [
  areaConditionData,
  genreConditionData,
  specialCategoryConditionData,
];
console.log(areaConditionData);
const ComponentsTestPage = (): JSX.Element => {
  const [selectValue, setSelectValue] = useState("")
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

    </div>
  );
};

export default ComponentsTestPage;
