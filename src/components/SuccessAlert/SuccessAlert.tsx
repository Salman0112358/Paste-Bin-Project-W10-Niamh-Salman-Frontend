import { Alert } from "antd";
import React from "react";
import Marquee from "react-fast-marquee";

const SuccessAlert = (): JSX.Element => (
  <Alert
    className="good__post-alert"
    type="info"
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        {" "}
        Welcome To Our Paste Bin! Scribble Something Down In The Box Above{" "}
      </Marquee>
    }
  />
);

export default SuccessAlert;
