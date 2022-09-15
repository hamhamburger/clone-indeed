import { css } from '@emotion/react';
import React from 'react';
import SelectableInput from '../parts/SelectableInput';
import { FaGithub } from 'react-icons/fa';
import { Button, Col, Row, Select } from 'antd';

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
  handleSubmit: (form:any) => void
};

// SelectableInputは自作なのでクォリティが低い...
const SearchForm = ({ conditionSelectList }: Props): JSX.Element => {
  return (
    <div>
      <form action="">
        <SelectableInput
          title='キーワード'
          placeholder='職種、キーワード、会社名など'
          options={keywordList}
          onChange={(e) => console.log(e.target.value)}
        >
          <FaGithub />
        </SelectableInput>
        <Button block={true} css={SearchButtonStyle}>
          求人検索
        </Button>
        <Row align='middle' justify='center'>
          {conditionSelectList.map((condition) => {
            return (
              <Col span={4} key={condition.title} css={css({ margin: '3px' })}>
                <Select css={ConditionSelectStyle} placeholder={condition.title}>
                  {condition.data.map((option) => {
                    return (
                      <Option key={option.key} value={option.key}>
                        {option.value}
                      </Option>
                    );
                  })}
                </Select>
              </Col>
            );
          })}
        </Row>
      </form>
    </div>
  );
};

export default SearchForm;
