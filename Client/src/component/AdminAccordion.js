import React from 'react';
import { Collapse, Divider, Typography } from 'antd';
import AddProduct from './AddProductAccordion';
import EditePrductAccordion from './EditePrductAccordion';

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const AdminAccordion = (props) => {

    return (

        <Collapse defaultActiveKey={['1']} ghost>
            <Panel header="Add Product" key="1">
                <Typography paragraph>
                    <AddProduct />
                </Typography>
                
            </Panel>
                <Divider />
            <Panel header="Edite Product" key="2" >
                <Typography paragraph>
                <EditePrductAccordion />
                </Typography>
            </Panel>
        </Collapse>
    );
}

export default AdminAccordion;