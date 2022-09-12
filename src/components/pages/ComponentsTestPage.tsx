import { css } from '@emotion/react';
import React from 'react';
import Header from '../parts/Header';
import SearchForm from '../templates/SearchForm';

const conditionSelectData = [
  {
    title: '掲載日',
    data: [
      { key: '24時間以内', value: '24h' },
      { key: '3日以内', value: '3d' },
    ],
  },
  {
    title: '年収',
    data: [
      { key: '200万円以内', value: '200' },
      { key: '300万円以内', value: '300' },
    ],
  },
  {
    title: '雇用形態',
    data: [
      { key: '正社員', value: 'employee' },
      { key: 'アルバイト', value: 'part-time' },
    ],
  },
  {
    title: '勤務地',
    data: [
      { key: '東京', value: 'tokyo' },
      { key: '大阪', value: 'oosaka' },
    ],
  },
  {
    title: '会社名',
    data: [
      { key: '株式会社A', value: 'A' },
      { key: '株式会社B', value: 'B' },
    ],
  },
];

const ComponentsTestPage = (): JSX.Element => {
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
