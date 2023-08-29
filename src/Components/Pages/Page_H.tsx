import { Col, Row } from 'antd';
import { Typography } from 'antd'
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';


function Page_H() {

    interface DataType {

        key: string;
        Method: string;
        Description: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Method',
            dataIndex: 'Method',
            key: 'Method',

        },
        {
            title: 'Description',
            dataIndex: 'Description',
            key: 'Description',

        },



    ];

    const data: DataType[] = [
        {

            key: '1',
            Method: 'Inspection number',
            Description: 'Inspection number of O/G process',
        },
        {
            key: '2',
            Method: 'Production date',
            Description: 'Determine from Marking or Serial number',
        },


    ];

    return (
        <>
            <Row justify="start">
                <Col >
                    <Typography.Title level={2} style={{ margin: 5, paddingBottom: 30 }}>
                        Identify Method
                    </Typography.Title>
                </Col>
            </Row>

            <Row>
                <Col lg={12} xs={24} xl={12}>

                    <Table columns={columns} dataSource={data} /></Col>
            </Row>
            <Row justify="start">
                <Col >
                    บางโปรดักส์ อาจเจอหลายล๊อต
                </Col>
            </Row>

        </>
    )
}

export default Page_H