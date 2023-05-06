import React, { useState } from "react";
import { Radio, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import s from "./Admin.module.scss";

interface DataType {
  key: string;
  name: string;
  gender: string;
  tags: string;
  add: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Имя",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Пол",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Должность",
    key: "tags",
    dataIndex: "tags",
    render: (text) => (
      <span>
        <Tag color={"green"}>{text.toUpperCase()}</Tag>
      </span>
    ),
  },
  {
    title: "Штраф",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a> Штрафануть - {record.add}</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Tilek Zhyrgalbekov",
    tags: "Frontend Developer",
    add: "100",
    gender: "М",
  },
  {
    key: "2",
    name: "Belek Shamhiev",
    tags: "Loh",
    add: "100",
    gender: "Ж",
  },
  {
    key: "3",
    name: "Joe Black",
    tags: "Python Developer",
    add: "100",
    gender: "М",
  },
  {
    key: "4",
    name: "Мать Белека",
    tags: "Cross Fisting",
    add: "100",
    gender: "undefined",
  },
];

const Admin: React.FC = () => {
  return (
    <div className={s.container}>
      <Table columns={columns} pagination={false} dataSource={data}/>`
    </div>
  );
};

export default Admin;

