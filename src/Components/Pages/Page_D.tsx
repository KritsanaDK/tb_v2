import { Col, Divider, Row, Input } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Steps } from 'antd';

import { FaRegCircle, FaRegCircleCheck, FaMagnifyingGlass } from "react-icons/fa6";
import { Typography } from 'antd'
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { Button } from 'antd';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { FiInfo } from "react-icons/fi";
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';

function Page_D() {

    interface DataType {

        key: string;
        Items: string;
        Sources: string;
        Results: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Items',
            dataIndex: 'Items',
            key: 'Items',

        },
        {
            title: 'Sources',
            dataIndex: 'Sources',
            key: 'Sources',
        },
        {
            title: 'Results',
            dataIndex: 'Results',
            key: 'Results',
        },


    ];

    const data: DataType[] = [
        {

            key: '1',
            Items: 'TS9N09002',
            Sources: '19YMA0214',
            Results: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            Items: 'TS9N09002',
            Sources: '19YMA0214',
            Results: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            Items: 'TS9N09002',
            Sources: '19YMA0214',
            Results: 'Sydney No. 1 Lake Park',
        },
    ];

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
                        Data Collecting Results
                    </Typography.Title>
                </Col>
            </Row>

            <Divider />
            <Row justify="start">
                <Col lg={12} xs={24} xl={12}><Table columns={columns} dataSource={data} /></Col>

            </Row>

            <Row justify="start">
                <Col >
                    <Button shape="round" style={{ background: '#8c8c8c', color: '#fff', borderColor: 'transparent' }}>
                        Draft save
                    </Button>
                </Col>
                <Col >
                    <Button shape="round" style={{ background: '#8c8c8c', color: '#fff', borderColor: 'transparent' }}>
                        Complete data
                    </Button>
                </Col>

            </Row>


        </>
    )
}

export default Page_D