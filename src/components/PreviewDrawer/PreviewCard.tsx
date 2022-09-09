import { Drawer, Space } from "antd";
import Button from "react-bootstrap/Button";
import type { DrawerProps } from "antd/es/drawer";
import React, { useState } from "react";
import "./PreviewCard.css";
import { InterfacePreviewCard } from "../../Interfaces/Interfaces";
import { deletePaste } from "../../utils/deletePaste";
import { getAllPaste } from "../../utils/getAllPaste";

const PreviewCard = ({
  body,
  paste_id,
  setPasteArray,
}: InterfacePreviewCard): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps["size"]>();

  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Space>
          <Button
            className="expand__button"
            variant="primary"
            onClick={showLargeDrawer}
          >
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
            <Space>
              <Button
                onClick={async () => {
                  await deletePaste(paste_id);
                  console.log(`post has been deleted`);
                  onClose();
                  getAllPaste(setPasteArray);
                }}
                variant="danger"
              >
                Delete
              </Button>
              <Button variant="warning">Update</Button>
              <Button onClick={onClose} variant="dark">
                Cancel
              </Button>
            </Space>
          }
        >
          <div className="paste__expanded-text">
            <p>{body}</p>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default PreviewCard;
