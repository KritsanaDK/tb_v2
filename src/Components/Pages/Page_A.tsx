import { Col, Divider, Row, Input } from 'antd';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';

import { FaRegCircle, FaRegCircleCheck, FaMagnifyingGlass } from "react-icons/fa6";
import { Typography } from 'antd'
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';


const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

function Page_A() {

    console.log(process.env.REACT_APP_KSN)
    console.log(process.env.REACT_APP_HOST)


    return (
        <>
            <Row justify="start">
                <Col >
                    <Typography.Title level={2} style={{ margin: 5, paddingBottom: 30 }}>
                        Complaint Record
                    </Typography.Title>
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={24} xl={12}>
                    <Steps
                        items={[
                            {
                                title: 'Login',
                                status: 'finish',
                                icon: <FaRegCircleCheck />,
                            },
                            {
                                title: 'Verification',
                                status: 'finish',
                                icon: <FaRegCircleCheck />,
                            },
                            {
                                title: 'Pay',
                                status: 'process',
                                icon: <LoadingOutlined />,
                            },
                            {
                                title: 'Done',
                                status: 'wait',
                                icon: <FaRegCircle />,
                            },
                        ]} labelPlacement="vertical"
                    />
                </Col>
            </Row>

            <Row justify="start">
                <Col >
                    <Typography.Title level={2} style={{ margin: 5, paddingBottom: 30 }}>
                        Product Identify
                    </Typography.Title>
                </Col>
            </Row>

            <Row justify="start" align="middle" gutter={10}>
                <Col lg={2} xs={24} xl={1} >
                    Method :
                </Col>

                <Col lg={8} xs={20} xl={4}>
                    <Input placeholder="Basic usage" />
                </Col>

                <Col >
                    <div>
                        <FaMagnifyingGlass />
                    </div>
                </Col>
            </Row >
            <Row justify="start" align="middle" gutter={10}>
                <Col lg={2} xs={24} xl={1} >
                    Search :
                </Col>

                <Col lg={8} xs={20} xl={4}>
                    <Input placeholder="Basic usage" />
                </Col>


            </Row >

            <Row justify="start" align="middle" gutter={10}>
                <Col lg={2} xs={24} xl={1}>
                    Date :
                </Col>

                <Col lg={8} xs={20} xl={4}>
                    <DatePicker onChange={onChange} style={{ width: '100%' }} />
                </Col>

                <Col >
                    <Button shape="round" icon={<DownloadOutlined />} style={{ background: '#8c8c8c', color: '#fff', borderColor: 'transparent' }}>
                        Search
                    </Button>
                </Col>
            </Row >


            <Divider />
            <Row justify="start">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
            </Row>


        </>
    )
}

export default Page_A



