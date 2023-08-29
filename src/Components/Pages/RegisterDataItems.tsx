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
        title: 'items',
        dataIndex: 'Inspection',
        key: 'Inspection',

    },
    {
        title: 'Source',
        dataIndex: 'PRDLot',
        key: 'PRDLot',
    },
    {
        title: 'Flag',
        dataIndex: 'PartName',
        key: 'PartName',
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


function RegisterDataItems() {



    return (
        <>



            <Row justify="start">
                <Col >
                    <Typography.Title level={2} style={{ margin: 5, paddingBottom: 30 }}>
                        Register Data Items
                    </Typography.Title>
                </Col>
            </Row>

            <Row justify="start" align="middle" gutter={10} style={{ paddingBottom: '5px' }}>
                <Col lg={2} xs={24} xl={2} >
                    Item :
                </Col>

                <Col lg={8} xs={20} xl={6}>
                    <Input />
                </Col>


            </Row >
            <Row justify="start" align="middle" gutter={10} style={{ paddingBottom: '5px' }}>
                <Col lg={2} xs={24} xl={2} >
                    Source :
                </Col>

                <Col lg={8} xs={20} xl={6}>
                    <Input />
                </Col>


            </Row >

            <Row justify="start" align="middle" gutter={10} style={{ paddingBottom: '5px' }}>
                <Col lg={2} xs={24} xl={2}>
                    Search Flag :
                </Col>

                <Col lg={8} xs={20} xl={6}>

                </Col>

                <Col >
                    <Button shape="round" style={{ background: '#8c8c8c', color: '#fff', borderColor: 'transparent' }}>
                        Register
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

export default RegisterDataItems