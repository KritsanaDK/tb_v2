import { Col, Row } from 'antd';
import { Typography } from 'antd'
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';


function Page_G() {

    interface DataType {

        key: string;
        Type: string;
        Description: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Type',
            dataIndex: 'Type',
            key: 'Type',

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
            Type: 'EC',
            Description: 'Electrical characteristic defect',
        },
        {
            key: '2',
            Type: 'Appearance',
            Description: 'Product appearance defect',
        },


    ];

    return (
        <>
            <Row justify="start">
                <Col >
                    <Typography.Title level={2} style={{ margin: 5, paddingBottom: 30 }}>
                        Complaint Type
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

export default Page_G