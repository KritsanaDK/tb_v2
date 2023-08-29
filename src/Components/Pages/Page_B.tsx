import { Col, Divider, Row, Input, Space } from 'antd';
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

interface DataType {
    key: React.Key;
    Items: string;
    Sources: string;
    UsingRate: string;
    Effective: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Items',
        dataIndex: 'Items',

    },
    {
        title: 'Sources',
        dataIndex: 'Sources',
    },
    {
        title: 'Using rate',
        dataIndex: 'UsingRate',
        align: 'right',
    },
    {
        title: 'Effective',
        dataIndex: 'Effective',
        align: 'right',
    },


];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        Items: `Edward King ${i}`,
        UsingRate: (Math.random() * 100).toLocaleString(undefined, { maximumFractionDigits: 2 }),
        Effective: (Math.random() * 100).toLocaleString(undefined, { maximumFractionDigits: 2 }),

        Sources: `London, Park Lane no. ${i}`,
    });
}


function Page_B() {

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);



    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

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
                        Information & Necessary Data
                    </Typography.Title>
                </Col>
            </Row>

            <Row justify="start" align="middle" gutter={10} style={{ paddingBottom: '5px' }}>
                <Col lg={2} xs={24} xl={2} >
                    Method :
                </Col>

                <Col lg={8} xs={20} xl={6}>
                    <Input placeholder="Basic usage" />
                </Col>

                <Col >
                    <FaMagnifyingGlass onClick={() => {

                        console.log("xxxx")
                    }} />
                </Col>

                <Col lg={2} xs={24} xl={2} >
                    Part Name :
                </Col>


                <Col lg={8} xs={20} xl={6}>
                    <Input placeholder="Basic usage" />
                </Col>
            </Row >

            <Row justify="start" align="middle" gutter={10} style={{ paddingBottom: '5px' }}>
                <Col lg={2} xs={24} xl={2} >
                    QCS No. :
                </Col>

                <Col lg={8} xs={20} xl={6}>
                    <Input placeholder="Basic usage" />
                </Col>


            </Row >

            <Row justify="start" align="middle" gutter={10} style={{ paddingBottom: '5px' }}>
                <Col lg={2} xs={24} xl={2} >
                    Complaint Type :
                </Col>

                <Col lg={8} xs={20} xl={6}>
                    <Input placeholder="Basic usage" />
                </Col>

                <Col >
                    <FaMagnifyingGlass onClick={() => {

                        console.log("xxxx")
                    }} />
                </Col>
            </Row >

            <Row justify="start" align="middle" gutter={10} style={{ paddingBottom: '5px' }}>
                <Col lg={2} xs={24} xl={2} >
                    Phenomenon :
                </Col>

                <Col lg={8} xs={20} xl={6}>
                    <Input placeholder="Basic usage" />
                </Col>

                <Col >
                    <FaMagnifyingGlass onClick={() => {

                        console.log("xxxx")
                    }} />
                </Col>
            </Row >

            <Row justify="start" align="middle" gutter={10}>
                <Col lg={2} xs={24} xl={2} >
                    Symptom :
                </Col>

                <Col lg={8} xs={20} xl={6}>
                    <Input placeholder="Basic usage" />
                </Col>

                <Col >
                    <Button shape="round" style={{ background: '#8c8c8c', color: '#fff', borderColor: 'transparent' }}>
                        Search
                    </Button>
                </Col>

                <Col >
                    <Button type="text" style={{ color: '#2f54eb' }}>
                        Register? <FiInfo style={{ marginLeft: "5" }} />
                    </Button>

                </Col>
            </Row >

            <Row>
                <Col xs={24}>

                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} /></Col>
            </Row>

            <Row justify="start">
                <Col >
                    <Button shape="round" style={{ background: '#8c8c8c', color: '#fff', borderColor: 'transparent' }}>
                        Collect & Save
                    </Button>
                </Col>

            </Row>


        </>
    )
}

export default Page_B