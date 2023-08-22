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
        icon: <UserOutlined />,
        label: (
            <a href="/LoginPage" rel="noopener noreferrer">
                Login
            </a>
        ),
    }
]

export default ListMenu;