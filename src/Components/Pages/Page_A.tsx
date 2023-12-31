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

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

interface DataType {

    key: string;
    Inspection: string;
    PRDLot: string;
    PartName: string;
    PRDDate: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Inspection',
        dataIndex: 'Inspection',
        key: 'Inspection',

    },
    {
        title: 'PRD Lot',
        dataIndex: 'PRDLot',
        key: 'PRDLot',
    },
    {
        title: 'Part Name',
        dataIndex: 'PartName',
        key: 'PartName',
    },
    {
        title: 'PRD Date',
        dataIndex: 'PRDDate',
        key: 'PRDDate',


    },

];

const data: DataType[] = [
    {

        key: '1',
        Inspection: 'TS9N09002',
        PRDLot: '19YMA0214',
        PartName: 'New York No. 1 Lake Park',
        PRDDate: '02-Nov-2019',
    },
    {
        key: '2',
        Inspection: 'TS9N09002',
        PRDLot: '19YMA0214',
        PartName: 'London No. 1 Lake Park',
        PRDDate: '02-Nov-2019',
    },
    {
        key: '3',
        Inspection: 'TS9N09002',
        PRDLot: '19YMA0214',
        PartName: 'Sydney No. 1 Lake Park',
        PRDDate: '02-Nov-2019',
    },
];

function Page_A() {
    return (
        <>
            <Row justify="start" >
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
            </Row >
            <Row justify="start" align="middle" gutter={10} style={{ paddingBottom: '5px' }}>
                <Col lg={2} xs={24} xl={2} >
                    Search :
                </Col>

                <Col lg={8} xs={20} xl={6}>
                    <Input placeholder="Basic usage" />
                </Col>


            </Row >

            <Row justify="start" align="middle" gutter={10} style={{ paddingBottom: '5px' }}>
                <Col lg={2} xs={24} xl={2}>
                    Date :
                </Col>

                <Col lg={8} xs={20} xl={6}>
                    <DatePicker onChange={onChange} style={{ width: '100%' }} />
                </Col>

                <Col >
                    <Button shape="round" style={{ background: '#8c8c8c', color: '#fff', borderColor: 'transparent' }}>
                        Search
                    </Button>
                </Col>
            </Row >


            <Divider />
            <Row justify="start">
                <Col xs={24}><Table columns={columns} dataSource={data} /></Col>

            </Row>

            <Row justify="start">
                <Col >
                    <Button shape="round" style={{ background: '#8c8c8c', color: '#fff', borderColor: 'transparent' }}>
                        Save
                    </Button>
                </Col>

            </Row>


        </>
    )
}

export default Page_A



