import { css } from '@emotion/react';
import React from 'react';
import SelectableInput from '../parts/SelectableInput';
import { FaGithub } from 'react-icons/fa';
import { Button,  Col,  Row, Select } from 'antd';
const { Option } = Select;

const SearchButtonStyle = css({
  backgroundColor: 'lightblue',
  color: 'white',
  borderRadius: '0.5rem',
});

const ConditionSelectStyle = css({
  borderRadius: '0.5rem',
  padding: '15px, 15px 20px 20px',
  display:"block"
});

const list = ['昼寝可', 'ペット同伴可'];

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

const SearchForm = ({
  conditionSelectList
}: Props): JSX.Element => {
  return (
    <div>
      <SelectableInput
        title='キーワード'
        placeholder='職種、キーワード、会社名など'
        list={list}
        onChange={(s) => console.log(s)}
      >
        <FaGithub />
      </SelectableInput>
      <SelectableInput
        title='キーワード'
        placeholder='職種、キーワード、会社名など'
        list={list}
        onChange={(s) => console.log(s)}
      >
        <FaGithub />
      </SelectableInput>

      <Button block={true} css={SearchButtonStyle}>
        求人検索
      </Button>

      <Row align='middle' justify='center' >
        {conditionSelectList.map((condition) => {

          return (
            <Col span={6} key={condition.title} css={css({ margin: '3px' })}>
              <Select css={ConditionSelectStyle} placeholder={condition.title}>
                {condition.data.map((option) => {
                  return (
                    <Option key={option.value} value={option.value}>
                      {option.key}
                    </Option>
                  );
                })}
              </Select>
            </Col>
          );
        })
        }
      </Row>
    </div>
  );
};

export default SearchForm;
