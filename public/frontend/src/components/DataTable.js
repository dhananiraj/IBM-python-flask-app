import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { Table, Button } from "antd";


function DataTable( {data, deletefunc} ) {
  console.log('Table Data:',data)

  const columns = [
    { title: "Item", dataIndex: "Item", key: "Item" },
    { title: "Description", dataIndex: "Description", key: "Description" },
    {
      title: "Remove",
      dataIndex: "Item",
      key: "",
      render: (v,r,i) => <Button size = "small" shape="circle" value = {v} key = "Something" type="danger" onClick={deletefunc}>X</Button>,
    },
  ];

  // const columns = [
  //   { title: 'Name', dataIndex: 'name', key: 'name' },
  //   { title: 'Age', dataIndex: 'age', key: 'age' },
  //   { title: 'Address', dataIndex: 'address', key: 'address' },
  //   {
  //     title: 'Action',
  //     dataIndex: '',
  //     key: 'x',
  //     render: (e) => <a>Delete</a>,
  //   },
  // ];

  // const data1 = [
  //   {
  //     key: 1,
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  //   },
  //   {
  //     key: 2,
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  //   },
  //   {
  //     key: 3,
  //     name: 'Not Expandable',
  //     age: 29,
  //     address: 'Jiangsu No. 1 Lake Park',
  //     description: 'This not expandable',
  //   },
  //   {
  //     key: 4,
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  //   },
  // ];

  // console.log('data1',data1)

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <p style={{ margin: 0 }}>{record.description}</p>
        ),
        rowExpandable: (record) => record.name !== "Not Expandable",
      }}
      dataSource={data}
    />
  );
}

export default DataTable;

/*
const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

ReactDOM.render(
  <Table
    columns={columns}
    expandable={{
      expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
      rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />,
  mountNode,
); */
