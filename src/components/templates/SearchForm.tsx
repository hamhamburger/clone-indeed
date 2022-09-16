/* eslint-disable @typescript-eslint/no-misused-promises */
import { css } from '@emotion/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Button, Col, Row} from 'antd';
import {
  SubmitHandler,
  UnpackNestedValue,
  useForm,
} from 'react-hook-form';
import { FormInput, FormName } from '../types';
import AreaSelectRHF from '../parts/AreaSelectRHF';
import NameInputRHF from '../parts/NameInputRHF';
import SelectBoxRHF from '../parts/SelectBoxRHF';

const SearchButtonStyle = css({
  backgroundColor: 'lightblue',
  color: 'white',
  borderRadius: '0.5rem',
});


const keywordList = ['お寿司', '焼肉'];

const APIKEY = '37b0bbee8187222f';
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
    const query = new URLSearchParams({ ...data, key: APIKEY });
    // const query = new URLSearchParams(data);
    const response = await fetch(
      `${BASEURL}?${query}`,
    );
    const obj = await response.json();
    console.log(obj);
  };


  const onSubmit: SubmitHandler<FormInput> = (data) => {
    void search(data)
  };




  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NameInputRHF
          title='キーワード'
          placeholder='店名など'
          options={keywordList}
          control={control}
          onInputChange={(e, newValue) => {
            setValue('keyword', newValue);
          }}
        >
          <FaGithub />
        </NameInputRHF>

       
        <Button block={true} htmlType='submit' css={SearchButtonStyle}>
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
    </div>
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