/* eslint-disable @typescript-eslint/no-misused-promises */
import { css } from '@emotion/react';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Col, Row} from 'antd';
import {
  SubmitHandler,
  UnpackNestedValue,
  useForm,
} from 'react-hook-form';
import { FormInput, FormName } from '../types';

import SelectableInputRHF from '../parts/SelectableInputRHF';
import SelectBoxRHF from '../parts/SelectBoxRHF';
import { Button,Box } from '@mui/material';
const SearchButtonStyle = {
  backgroundColor: '#2557a7',
  color: 'white',
  borderRadius: '0.5rem',
  fontWeight: '700',
  padding: '0.75rem 1rem',
  '&:hover': {
    backgroundColor: '#164081',
  },
};


const keywordList = ['お寿司', '焼肉'];

const APIKEY = '';
const BASEURL = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/';

type conditionData = {
  title: string;
  name: string;
  data: Array<{
    key: string;
    value: string;
  }>;
};

type Props = {
  conditionSelectList: conditionData[];
};



const SearchForm = ({ conditionSelectList }: Props): JSX.Element => {
  const { control, handleSubmit, setValue } = useForm<FormInput>();


  const search = async (data):Promise<void> => {
    // const query = new URLSearchParams({ ...data, key: APIKEY });
    // const response = await fetch(
    //   `${BASEURL}?${query}`,
    // );
    // const obj = await response.json();
    // console.log(obj);
    alert("コンソールにクエリurlを出力")
    console.log(data)
  };


  const onSubmit: SubmitHandler<FormInput> = (data) => {
    void search(data)
  };




  return (
    <Box sx={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectableInputRHF
          title='キーワード'
          placeholder='住所、駅名、お店ジャンルキャッチ、キャッチ'
          options={keywordList}
          control={control}
          name="keyword"
          onInputChange={(e, newValue) => {
            setValue('keyword', newValue);
          }}
        >
          <SearchIcon sx={{ width: '18px' }} />
        </SelectableInputRHF>

        <SelectableInputRHF
          title='店名'
          placeholder='店名'
          control={control}
          name="name"
          onInputChange={(e, newValue) => {
            setValue('name', newValue);
          }}
        >
          <SearchIcon sx={{ width: '18px' }} />
        </SelectableInputRHF>

        <Button type='submit' sx={SearchButtonStyle} fullWidth>
          店舗検索
        </Button>
        <Row align='middle' justify='center'>
          {conditionSelectList.map((condition) => {
            return (
              <Col span={4} key={condition.title} css={css({ margin: '3px' })}>
                <SelectBoxRHF
                  name={condition.name as FormName}
                  control={control}
                  options={condition.data}
                  label={condition.title}
                />
              </Col>
            );
          })}
        </Row>
      </form>
    </Box>
  );
};

export default SearchForm;




// 万が一のためのメモ
//  <Controller
//    control={control}
//    name='number'
//    defaultValue={''}
//    render={({ field, fieldState: { error } }) => (
//      <Autocomplete
//        freeSolo
//        disableClearable
//        options={['a', 'b', 'c']}
//        onInputChange={(e, newValue) => {
//          setValue('number', newValue);
//        }}
//        renderInput={(params) => (
//          <TextField
//            name={field.name}
//            ref={field.ref}
//            value={field.value}
//            {...params}
//            label='Search input'
//            InputProps={{
//              ...params.InputProps,
//              type: 'search',
//            }}
//          />
//        )}
//      />
//    )}
//  />;