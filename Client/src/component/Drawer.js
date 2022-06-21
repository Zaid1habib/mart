import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import "../css/Drawer.css"
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Accordion from './Accordion';

const DraWer = () => {


    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState('left');
    const [anima, setanima] = useState(false)
    const [open, setopen] = useState(false)
    const showDrawer = () => {
        setVisible(true);
        setanima(true)
    };

    const onClose = () => {
        setVisible(false);
        setanima(false)
    };
   
    const onChange = (e) => {
        setPlacement(e.target.value );
    };

    return (
        <>
            <Space>
                <Radio.Group value={placement} onChange={onChange}>

                    <Radio value="left">left</Radio>

                </Radio.Group>
                <Button type="primary" onClick={anima === false ? showDrawer : onClose} className={anima === true ? "Go-right drawer-btn" : "left drawer-btn"}>
                    {anima === false ?
                        <RightOutlined /> :

                        <LeftOutlined />
                    }
                </Button>
            </Space>
            <Drawer
                title="Basic Drawer"
                placement={placement}
                closable={false}
                onClose={onClose}
                visible={visible}
                key={placement}
            >
                <Accordion />
            </Drawer>
        </>
    );
}

export default DraWer