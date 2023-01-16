import React from "react";
import "antd/dist/antd.min.css";
import { Table, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { columns, paginationPosition, scrollOption } from "./constants";
import { selectRequest } from "../../store/reducers/transportationReduser";

export const TransportationTable = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const addresses = useSelector((state) => state.select.addresses);

  const handleSelectedRequest = (_, selectedRows) => {
    dispatch(selectRequest(selectedRows[0]));
  };

  return (
    <Form form={form} className="address__form">
      <Table
        className="address__table"
        scroll={scrollOption}
        pagination={paginationPosition}
        columns={columns}
        dataSource={addresses}
        bordered
        rowSelection={{
          type: "radio",
          onChange: handleSelectedRequest,
        }}
      />
    </Form>
  );
};
