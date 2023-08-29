import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

import { v4 as uuidv4 } from 'uuid';

const ListMenu = [
    {
        key: uuidv4(),
        icon: <MenuFoldOutlined />,
        label: (
            <a href="/" rel="noopener noreferrer">
                Home
            </a>
        ),
    },
    {
        key: uuidv4(),
        icon: <MenuFoldOutlined />,
        label: (
            <a href="/page_a" rel="noopener noreferrer">
                Page A
            </a>
        ),
    },
    {
        key: uuidv4(),
        icon: <MenuFoldOutlined />,
        label: (
            <a href="/page_b" rel="noopener noreferrer">
                Page B
            </a>
        ),
    },
    {
        key: uuidv4(),
        icon: <UserOutlined />,
        label: (
            <a href="/LoginPage" rel="noopener noreferrer">
                Login
            </a>
        ),
    },
    {
        key: uuidv4(),
        icon: <UserOutlined />,
        label: (
            <a href="/page_d" rel="noopener noreferrer">
                Page D
            </a>
        ),
    },

    {
        key: uuidv4(),
        icon: <UserOutlined />,
        label: (
            <a href="/page_e" rel="noopener noreferrer">
                Page E
            </a>
        ),
    },

    {
        key: uuidv4(),
        icon: <UserOutlined />,
        label: (
            <a href="/page_f" rel="noopener noreferrer">
                Page F
            </a>
        ),
    },


    {
        key: uuidv4(),
        icon: <UserOutlined />,
        label: (
            <a href="/page_g" rel="noopener noreferrer">
                Page G
            </a>
        ),
    },

    {
        key: uuidv4(),
        icon: <UserOutlined />,
        label: (
            <a href="/page_h" rel="noopener noreferrer">
                Page H
            </a>
        ),
    }

    , {
        key: uuidv4(),
        icon: <UserOutlined />,
        label: (
            <a href="/RegisterComplaintMode" rel="noopener noreferrer">
                Register Complaint Mode
            </a>
        ),
    },
    {
        key: uuidv4(),
        icon: <UserOutlined />,
        label: (
            <a href="/RegisterDataItems" rel="noopener noreferrer">
                Register Data Items
            </a>
        ),
    }
]




export default ListMenu;