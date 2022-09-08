import {Drawer, Space } from 'antd';
import Button from 'react-bootstrap/Button';
import type { DrawerProps } from 'antd/es/drawer';
import React, { useState } from 'react';
import './PreviewCard.css'

const PreviewCard = ({item} : any): JSX.Element => {
  
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState<DrawerProps['size']>();


  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div>
        <Space>
        <Button className='expand__button' variant="primary" onClick={showLargeDrawer}>
          Show All & Modify
        </Button>
      </Space>
      <Drawer 
        title={`Complete Post`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space >
            <Button variant="danger" >Delete</Button>
            <Button variant="warning">Update</Button>
            <Button onClick={onClose} variant="dark">Cancel</Button>
          </Space>
        }>
          <div className='paste__expanded-text'>
            <p>{item.body}</p>
          </div>
      
      </Drawer>
    </div>
    </>

  );

};

export default PreviewCard;
