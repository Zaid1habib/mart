import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { Link } from 'react-router-dom';

const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <Link to="/Collections/Man">Man</Link>
                ),
                // type: 'group',
                children: [
                    {
                        key: '1-1',
                        label: (<Link to="/Collections/Man/Pant-Shirts">Pant / Shirts</Link>),
                    },
                    {
                        key: '1-2',
                        label: (<Link to="/Collections/Man/T-Shirst">T-Shirst</Link>),
                    },
                    {
                        key: '1-3',
                        label: (<Link to="/Collections/Man/Accessories">Accessories</Link>),
                        children: [
                            {
                                key: '1-3-1',
                                label: (<Link to="/Collections/Man/Watch">Watch</Link>),
                            },
                            {
                                key: '1-3-2',
                                label: (<Link to="/Collections/Man/Bracelets">Bracelets</Link>),
                            },
                            {
                                key: '1-3-3',
                                label: (<Link to="/Collections/Man/Glasses">Glasses</Link>),
                            },
                        ],
                    },
                    {
                        key: '1-4',
                        label: (<Link to="/Collections/Man/Pant">Pant</Link>),
                    },
                    {
                        key: '1-5',
                        label: (<Link to="/Collections/Man/Trouser">Trouser</Link>),
                    },
                ],
            },
            {
                key: '2',
                label: (<Link to="/Collections/Womans">Woman</Link>),
                children: [
                    {
                        key: '2-1',
                        label: (<Link to="/Collections/Womans/Kurta">Kurta</Link>),
                    },
                    {
                        key: '2-2',
                        label: (<Link to="/Collections/Womans/purse">Purse</Link>),
                    },

                    {
                        key: '2-3',
                        label: (<Link to="/Collections/Womans/Accessories">Accessories</Link>),
                        children: [
                            {
                                key: '2-3-1',
                                label: (<Link to="/Collections/Womans/Watch">Watch</Link>),
                            },
                            {
                                key: '2-3-2',
                                label: (<Link to="/Collections/Womans/Bracelets">Bracelets</Link>),
                            },
                            {
                                key: '2-3-3',
                                label: (<Link to="/Collections/Womans/Glasses">Glasses</Link>),
                            },
                        ],
                    },
                    {
                        key: '2-4',
                        label: (<Link to="/Collections/Womans/Sandal">Sandal</Link>),
                    },
                ],
            },
            {
                key: '3',
                label: (<Link to="/Collections/Kids">Kids</Link>),
                children: [
                    {
                        key: '3-1',
                        label: (<Link to="/Collections/Kids/Pant-Shirts">Pant / Shirts</Link>),
                    },
                    {
                        key: '3-2',
                        label: (<Link to="/Collections/Kids/T-Shirst">T-Shirst</Link>),
                    },
                    {
                        key: '3-3',
                        label: (<Link to="/Collections/Kids/Accessories">Accessories</Link>),
                        children: [
                            {
                                key: '3-3-1',
                                label: (<Link to="/Collections/Kids/Watch">Watch</Link>),
                            },
                            {
                                key: '3-3-2',
                                label: (<Link to="/Collections/Kids/Bracelets">Bracelets</Link>),
                            },
                            {
                                key: '3-3-3',
                                label: (<Link to="/Collections/Kids/Glasses">Glasses</Link>),
                            },
                        ],
                    },
                    {
                        key: '3-4',
                        label: (<Link to="/Collections/Kids/Pant">Pant</Link>),
                    },
                    {
                        key: '3-5',
                        label: (<Link to="/Collections/Kids/Trouser">Trouser</Link>),
                    },
                ],
            },
            {
                key: '4',
                label: (<Link to="/Collections/Boys">Boys</Link>),
                children: [
                    {
                        key: '4-1',
                        label: (<Link to="/Collections/Boys/Pant-Shirts">Pant / Shirts</Link>),
                    },
                    {
                        key: '4-2',
                        label: (<Link to="/Collections/Boys/T-Shirst">T-Shirst</Link>),
                    },
                    {
                        key: '4-3',
                        label: (<Link to="/Collections/Boys/Accessories">Accessories</Link>),
                        children: [
                            {
                                key: '4-3-1',
                                label: (<Link to="/Collections/Boys/Watch">Watch</Link>),
                            },
                            {
                                key: '4-3-2',
                                label: (<Link to="/Collections/Boys/Bracelets">Bracelets</Link>),
                            },
                            {
                                key: '4-3-3',
                                label: (<Link to="/Collections/Boys/Glasses">Glasses</Link>),
                            },
                        ],
                    },
                    {
                        key: '4-4',
                        label: (<Link to="/Collections/Boys/Pant">Pant</Link>),
                    },
                    {
                        key: '4-5',
                        label: (<Link to="/Collections/Boys/Trouser">Trouser</Link>),
                    },
                ],
            },
            {
                key: '1',
                label: (
                    <Link to="/Collections/Accessories">Accessories</Link>
                ),
            },
            {
                key: '1',
                label: (
                    <Link to="/Collections/POLO">POLO</Link>
                ),
            }

        ]}
    />
);

const Dropdowns = () => {

    return (
        <Dropdown overlay={menu} Style={{ zIndex: 10000, width:"100px"}}>
            <Space>
                All Categories
                <DownOutlined />
            </Space>
        </Dropdown>
    )
}

export default Dropdowns