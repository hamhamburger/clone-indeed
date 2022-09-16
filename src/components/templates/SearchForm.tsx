/* eslint-disable @typescript-eslint/no-misused-promises */
import { css } from '@emotion/react';
import React from 'react';
import SelectableInput from '../parts/SelectableInput';
import { FaGithub } from 'react-icons/fa';
import { Button, Col, Row, Select } from 'antd';

import {
  SubmitHandler,
  UnpackNestedValue,
  useForm,
  Control,
} from 'react-hook-form';
import { FormInput } from '../types';
import AreaSelectRHF from '../parts/AreaSelectRHF';
import NameInputRHF from '../parts/NameInputRHF';
const { Option } = Select;

const SearchButtonStyle = css({
  backgroundColor: 'lightblue',
  color: 'white',
  borderRadius: '0.5rem',
});

const ConditionSelectStyle = css({
  borderRadius: '0.5rem',
  padding: '15px, 15px 20px 20px',
  display: 'block',
});

const keywordList = ['お寿司', '焼肉'];

type conditionData = {
  title: string;
  data: Array<{
    key: string;
    value: string;
  }>;
};

type Props = {
  conditionSelectList: conditionData[];
};


const SearchForm = ({ conditionSelectList }: Props): JSX.Element => {
  const { control, handleSubmit, getValues } = useForm<FormInput>();

  const printWithData = (data: UnpackNestedValue<FormInput>): void => {
    console.log('dataによる取り出し');
    const { keyword, area } = data;
    console.log(`area ${area}`);
  };

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    printWithData(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectableInput
          title='キーワード'
          placeholder='職種、キーワード、会社名など'
          options={keywordList}
          onChange={(e) => console.log(e)}
        >
          <FaGithub />
        </SelectableInput>

        <Button block={true} htmlType='submit' css={SearchButtonStyle}>
          求人検索
        </Button>
        <Row align='middle' justify='center'>
          {conditionSelectList.map((condition) => {
            return (
              <Col span={4} key={condition.title} css={css({ margin: '3px' })}>
                <AreaSelectRHF
                  control={control}
                  options={condition.data}
                  label='エリア'
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
