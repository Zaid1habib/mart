import React from 'react';
import { Button, Form, Input, Radio, Select } from 'antd';
import { useState } from 'react';
import TransitionAlerts from "./SweerAlertWarning"
import { useSelector } from 'react-redux';
const AddCate = () => {

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');
  const [Selected, setSelected] = useState(undefined)
  const [CateName, setCateName] = useState("")
  const [open, setOpen] = React.useState(false);
  const mainCate = useSelector(state => state.MainCategory)
  const { Option } = Select;
  const onChange = (value) => {
    console.log(`selected ${value}`);
    setSelected(value)
  };
  const onSearch = (value) => {
    console.log('search:', value);

  };
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const submit = async (e) => {
    e.preventDefault()
    //     categoryName
    // categoryOf
    if(!Selected || !CateName ){
      setOpen(true)
    }else{
    
    const res = await fetch("http://localhost:5000/AddCate-EditeCate/AddCate", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(
        {
          categoryName: CateName,
          categoryOf: Selected,
        }
      )
    })
    const result = await res.json()
    console.log(result, "this is result")
  }
  }


  const formItemLayout =
    formLayout === 'horizontal'
      ? {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 14,
        },
      }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
        wrapperCol: {
          span: 14,
          offset: 4,
        },
      }
      : null;


  return (

    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
    >
      <TransitionAlerts open={open} setOpen={setOpen}/>
      <Form.Item label="Name">
        <Input placeholder="input placeholder" onChange={(e) => setCateName(e.target.value)} />
        <p style={{
          padding: "4px 0px",
          color: "#b0aeae",
        }}>Type name for your new category.</p>
      </Form.Item>
      <Form.Item label="Select">
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
          onSearch={onSearch}
        >
        <Option value="Main category" >Add to Main Category</Option>
        {

        }
          <Option value="Man">Man </Option>
          <Option value="Kids">Kids</Option>
          <Option value="Woman">Woman</Option>
          <Option value="Boys">Boys</Option>
        </Select>
        <p style={{
          padding: "4px 0px",
          color: "#b0aeae",
        }}>Select in which category you want to add new SubCategory .If you want to add main category select Add to Main Category.</p>
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" onClick={submit}>Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default AddCate;
