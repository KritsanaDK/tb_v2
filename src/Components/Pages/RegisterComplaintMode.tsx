import { Col, Divider, Row, Input } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { Modal } from 'antd';
import { FaRegCircle, FaRegCircleCheck, FaMagnifyingGlass } from "react-icons/fa6";
import { Typography } from 'antd'
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { Button } from 'antd';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from './useLocalStorage';
import axios from "axios";
var randomstring = require("randomstring");


function RegisterComplaintMode() {

    interface DataType_Type {

        key: string;
        item: string;
        department_key: string;
    }

    const columns_Typ: ColumnsType<DataType_Type> = [
        {
            title: 'Type',
            dataIndex: 'item',
            key: 'item',

        },
    ];


    interface DataType_Phenomeno {

        key: string;
        item: string;
        department_key: string;
    }

    const columns_Phenomeno: ColumnsType<DataType_Type> = [
        {
            title: 'Phenomenon',
            dataIndex: 'item',
            key: 'item',

        },
    ];


    interface DataType_Symptom {

        key: string;
        item: string;
        department_key: string;
    }

    const columns_Symptom: ColumnsType<DataType_Type> = [
        {
            title: 'Symptom',
            dataIndex: 'item',
            key: 'item',

        },
    ];


    const [listType, setListType] = useState<DataType_Type[]>([]);
    const [listPhenomenon, setListPhenomenon] = useState<DataType_Phenomeno[]>([]);
    const [listSymptom, setListSymptom] = useState<DataType_Type[]>([]);


    const [isModalOpen_type, setIsModalOpen_type] = useState(false);
    const [isModalOpen_phenomenon, setIsModalOpen_phenomenon] = useState(false);
    const [isModalOpen_symptom, setIsModalOpen_symptom] = useState(false);

    const [type, setType] = useState("");
    const [phenomenon, setPhenomenon] = useState("");
    const [symptom, setSymptom] = useState("");
    const [userInfo] = useLocalStorage("json", []);

    useEffect(() => {
        category_select();
        phenomenon_select();
        symptom_select();
    }, []);

    async function category_select() {
        const url = 'http://127.0.0.1:6180/category_select';

        const options = {
            params: {
                key: userInfo.department_key
            }
        };

        axios.get(url, options).then((response) => {
            // handle success
            console.log(response.data);
            setListType(response.data);

            console.log(listType);
        })
            .catch((error) => {
                // handle errors
            });


    }

    async function phenomenon_select() {
        const url = 'http://127.0.0.1:6180/phenomenon_select';

        const options = {
            params: {
                key: userInfo.department_key
            }
        };

        axios.get(url, options).then((response) => {
            // handle success
            console.log(response.data);
            setListPhenomenon(response.data);

            console.log(listType);
        })
            .catch((error) => {
                // handle errors
            });


    }


    async function symptom_select() {
        const url = 'http://127.0.0.1:6180/symptom_select';

        const options = {
            params: {
                key: userInfo.department_key
            }
        };

        axios.get(url, options).then((response) => {
            // handle success
            console.log(response.data);
            setListSymptom(response.data);

            console.log(listType);
        })
            .catch((error) => {
                // handle errors
            });


    }


    async function category_insert(token: string, item: string, department_key: string) {

        const params = {
            token: token,
            item: item,
            department_key: department_key,
        };


        axios
            .post("http://127.0.0.1:6180/category_insert", params, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res.data);
            })

            .catch((err) => {
                console.log(err);
            });
    }

    async function phenomenon_insert(token: string, item: string, department_key: string) {

        const params = {
            token: token,
            item: item,
            department_key: department_key,
        };


        axios
            .post("http://127.0.0.1:6180/phenomenon_insert", params, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res.data);
            })

            .catch((err) => {
                console.log(err);
            });
    }

    async function symptom_insert(token: string, item: string, department_key: string) {

        const params = {
            token: token,
            item: item,
            department_key: department_key,
        };


        axios
            .post("http://127.0.0.1:6180/symptom_insert", params, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res.data);
            })

            .catch((err) => {
                console.log(err);
            });
    }







    return (
        <>
            <Row justify="start" >
                <Col >
                    <Typography.Title level={1} style={{ margin: 5, paddingBottom: 30 }}>
                        Register Complaint Mode
                    </Typography.Title>
                </Col>
            </Row>

            <Row justify="start" align="middle" gutter={10} style={{ paddingBottom: '5px' }}>
                <Col lg={2} xs={24} xl={2}>
                    Type :
                </Col>

                <Col lg={8} xs={20} xl={6}>
                    <Input onChange={(e) => setType(e.target.value)} value={type} />
                </Col>

                <Col >
                    <Button shape="round" style={{ background: '#8c8c8c', color: '#fff', borderColor: 'transparent' }} onClick={() => {

                        setIsModalOpen_type(true);
                    }}>
                        Register
                    </Button>

                    <Modal title="" open={isModalOpen_type} onOk={() => {

                        if (type !== "") {
                            setListType([...listType, {

                                key: randomstring.generate(100),
                                item: type,
                                department_key: userInfo.department_key

                            }]);
                            console.log(type)

                            category_insert(randomstring.generate(100), type, userInfo.department_key);



                            setIsModalOpen_type(false)
                            setType("");
                        }

                    }} onCancel={() => { setIsModalOpen_type(false) }}>
                        <p>Register Type
                            Confirm ?</p>

                    </Modal>
                </Col>
            </Row >

            <Row justify="start" align="middle" gutter={10} style={{ paddingBottom: '5px' }}>
                <Col lg={2} xs={24} xl={2}>
                    Phenomenon :
                </Col>

                <Col lg={8} xs={20} xl={6}>
                    <Input value={phenomenon} onChange={(e) => setPhenomenon(e.target.value)} />
                </Col>

                <Col >
                    <Button shape="round" style={{ background: '#8c8c8c', color: '#fff', borderColor: 'transparent' }} onClick={() => setIsModalOpen_phenomenon(true)}>
                        Register
                    </Button>

                    <Modal title="" open={isModalOpen_phenomenon} onOk={() => {
                        if (phenomenon !== "") {
                            setListPhenomenon([...listPhenomenon, {

                                key: randomstring.generate(50),
                                item: phenomenon,
                                department_key: userInfo.department_key

                            }]);

                            console.log(type)

                            phenomenon_insert(randomstring.generate(100), phenomenon, userInfo.department_key);



                            setIsModalOpen_phenomenon(false)
                            setPhenomenon("");
                        }

                    }} onCancel={() => { setIsModalOpen_phenomenon(false) }}>
                        <p>Register Phenomenon
                            Confirm ?</p>

                    </Modal>


                </Col>
            </Row >


            <Row justify="start" align="middle" gutter={10} style={{ paddingBottom: '5px' }}>
                <Col lg={2} xs={24} xl={2}>
                    Symptom :
                </Col>

                <Col lg={8} xs={20} xl={6}>
                    <Input value={symptom} onChange={(e) => setSymptom(e.target.value)} />
                </Col>

                <Col >
                    <Button shape="round" style={{ background: '#8c8c8c', color: '#fff', borderColor: 'transparent' }} onClick={() => setIsModalOpen_symptom(true)}>
                        Register
                    </Button>


                    <Modal title="" open={isModalOpen_symptom} onOk={() => {
                        if (symptom !== "") {
                            setListSymptom([...listSymptom, {

                                key: randomstring.generate(50),
                                item: symptom,
                                department_key: userInfo.department_key

                            }]);

                            console.log(type)

                            symptom_insert(randomstring.generate(100), symptom, userInfo.department_key);



                            setIsModalOpen_symptom(false)
                            setSymptom("");
                        }

                    }} onCancel={() => { setIsModalOpen_symptom(false) }}>
                        <p>Register Symptom
                            Confirm ?</p>

                    </Modal>

                </Col>
            </Row >



            <Row gutter={30}>
                <Col xs={8} ><Table columns={columns_Typ} dataSource={listType} /></Col>
                <Col xs={8} ><Table columns={columns_Phenomeno} dataSource={listPhenomenon} /></Col>
                <Col xs={8} ><Table columns={columns_Symptom} dataSource={listSymptom} /></Col>
            </Row>

        </>
    )
}

export default RegisterComplaintMode