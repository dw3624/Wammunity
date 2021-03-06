import React from 'react'
import { Row, Col, Checkbox, Button, Space } from 'antd'
import Typography from '@mui/material/Typography';


type SurveyProps = {
  handleChangeCheckbox: Function;
  values: any;
}

const WineFlavour = ({ handleChangeCheckbox, values}: SurveyProps) => {

  const options = [
    { label: '흙, 자연', value: 'earthy leather smoke' },
    { label: '초콜릿, 바닐라', value: 'oaky oak vanilla tobacco chocolate' },
    { label: '갓 구운 빵', value: 'yeasty cream oil' },
    { label: '꽃 향기', value: 'floral' },
    { label: '향신료', value: 'spices' },
    { label: '채소', value: 'vegetal grass' },
    { label: '말린 과일', value: 'dried fruit prune raisin fig' },
    { label: '상큼한 과일', value: 'citrus tropical' },
    { label: '붉은 과일(체리, 딸기)', value: 'red fruit cherry' },
    { label: '검은 과일(블루베리, 자두)', value: 'black fruit blackberry' },
  ]

  return (
    <div>
      <Row justify="center">
      <Typography gutterBottom variant="h3" component="div"><strong>와인 향</strong></Typography>
      </Row>
      <Row>
        <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
          <h3>좋아하는 향을 선택해주세요.</h3>
        </Space>
      </Row>
      <Row justify="center">
        <Col span={12}>
          <Checkbox.Group
            options={options}
            onChange={handleChangeCheckbox('flavour')}
            defaultValue={values.flavour}
            style={{ display: "inline-block", marginRight: 10 }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default WineFlavour