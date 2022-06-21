import React from 'react';
import { Button, Form, Input, Modal, Typography } from 'antd';
import { useState } from 'react';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
const EditCateModal = (props) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [Changevalue, setChangevalue] = useState(undefined);
    const { id, maincate } = props
    console.log("this is modal", id)
    const showModal = () => {
        if (id === undefined) {
            setVisible(false)
            alert("pls select value")
        } else {

            setVisible(true);
        }
    };
    // UpdateCategory
    const handleOk = async () => {
        if (Changevalue === undefined) {
            alert("pls fill change Name box first ")
        } else {
            const res = await fetch(`http://localhost:5000/AddCate-EditeCate/UpdateCategory/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(
                    {
                        categoryName: Changevalue,
                        Maincate:maincate
                    }
                )
            })
            const result = await res.json()
            if (!result.error) {
                setModalText('Updated');
                setConfirmLoading(true);
                setTimeout(() => {
                    setVisible(false);
                    setConfirmLoading(false);
                }, 2000);
            }
            console.log(result, "this is result")
        }
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };
    const EditeCate = () => {
        // if(id === undefined){
        // setVisible(false)
        // alert("pls select value")}
    }
    return (
        <>
            <Button type="primary" onClick={showModal} style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "unset",
                width: "10%",
                padding: "0px",
                boxShadow: "none",
            }}>
                <EditTwoToneIcon style={{
                    color: "black",
                    height: "20px",
                }}
                    onClick={EditeCate} />
            </Button>
            <Modal
                title="Edit Category Here"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form.Item label="Name">
                    <Input placeholder="Change Category Name" onChange={(e) => { setChangevalue(e.target.value) }} />
                    <p style={{
                        padding: "4px 0px",
                        color: "#b0aeae",
                    }}>The name is how it appears on your site</p>
                </Form.Item>
            </Modal>
        </>
    );
};

export default EditCateModal;