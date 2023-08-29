import { Col, Row } from 'antd';
import { Typography } from 'antd'
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';


function Page_E() {

    interface DataType {

        key: string;
        Symptom: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Symptom',
            dataIndex: 'Symptom',
            key: 'Symptom',

        },



    ];

    const data: DataType[] = [
        {

            key: '1',
            Symptom: 'TS9N09002',
        },
        {
            key: '2',
            Symptom: 'TS9N09002',
        },
        {
            key: '3',
            Symptom: 'TS9N09002',
        },
    ];

    return (
        <>
            <Row justify="start">
                <Col span={5} >
                    <Typography.Title level={2} style={{ margin: 5, paddingBottom: 30 }}>
                        Complaint Symptom
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

export default Page_E