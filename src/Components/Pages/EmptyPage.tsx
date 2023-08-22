import React from 'react'
import { Empty } from 'antd';
import { Button, Result } from 'antd';

type Props = {}

const EmptyPage = (props: Props) => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary">Back Home</Button>}
        />
    )
}

export default EmptyPage