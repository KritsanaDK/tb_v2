import { Col, Row } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { Card } from 'antd';
import { Typography } from 'antd';
import { Space } from 'antd'
import axios from 'axios';


const { Title } = Typography;

function LoginPage() {

    const onFinish = (values: any) => {
        console.log('Success:', values);

        let user = values.username;
        let pass = values.password;

        const param = { user: user, pass: pass };
        // console.log(param);

        axios
            .post("http://localhost:6180/logIn", param, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                console.log(res.data[0])

                if (res.data.length == 1) {

                    let json_data = JSON.stringify(res.data[0], null, 2);
                    console.log(json_data);
                    localStorage.setItem("json", json_data);
                    // window.location.href = "/RegisterComplaintMode";
                }
            })

            .catch((err) => {
                console.log(err);
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);



    };

    type FieldType = {
        username?: string;
        password?: string;
    };


    return (

        < >

            <Row justify="center">
                <Col>
                    <Title level={3}  > Quality Data Trace back System</Title>
                </Col>
            </Row>




            <Row justify="center">
                <Col lg={12}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ username: "MTL90156", password: "password" }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label="Username"
                            name="username"

                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}

                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>

    )

}

export default LoginPage