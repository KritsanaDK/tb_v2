import { Col, Row } from 'antd';
import { Typography } from 'antd'
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';


function Page_F() {

    interface DataType {

        key: string;
        Phenomenon: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Phenomenon',
            dataIndex: 'Phenomenon',
            key: 'Phenomenon',

        },



    ];

    const data: DataType[] = [
        {

            key: '1',
            Phenomenon: 'Decay time',
        },
        {
            key: '2',
            Phenomenon: 'Sensitivity',
        },
        {
            key: '3',
            Phenomenon: 'Marking',
        },
        {
            key: '4',
            Phenomenon: 'Dirty',
        },
        {
            key: '5',
            Phenomenon: 'Wire',
        },
    ];

    return (
        <>
            <Row justify="start">
                <Col >
                    <Typography.Title level={2} style={{ margin: 5, paddingBottom: 30 }}>
                        Complaint Phenomenon
                    </Typography.Title>
                </Col>
            </Row>

            <Row>
                <Col lg={12} xs={24} xl={12}>

                    <Table columns={columns} dataSource={data} /></Col>
            </Row>

        </>
    )
}

export default Page_F