import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Input, Table } from "antd";
import "antd/dist/antd.css"
import request from "@/net/index";
import MyTable from "./table";
const FormItem = Form.Item;
let flag = 0;
export default () => {
  const onFinish = (values: any) => {
    request.post("/login/", values);
  };
 
  return (
    <div>
      <MyTable />
    </div>
  );
};
