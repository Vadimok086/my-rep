import { Popconfirm, Table, Typography, Space, } from 'antd';
import React, { useState } from 'react';
import MyModal from './components/MyModal';
import 'antd/dist/antd.css';
import { Formik } from 'formik';

interface DataType {
  key: number;
  name: string;
  age: string;
  address: string;
  action: string;
}

const App: React.FC = () => {

  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: 1,
      name: 'Edward King 0',
      age: '0',
      address: 'London, Park Lane no. 0',
      action: 'delete',
    },
    {
      key: 2,
      name: 'Edward King 1',
      age: '1',
      address: 'London, Park Lane no. 1',
      action: 'delete',
    },

  ]);
 
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'adress',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record: { key: React.Key }) => (

        <Space size="middle">
          <Popconfirm
            title="sure to delete?"
            onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
          <a>Edit</a>
        </Space>
      ),
    },
  ]

  const [count, setCount] = useState(3);

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter(item => item.key !== key);
    setDataSource(newData);
  };



  const handleAdd = (dataSet: 
    { name: string, age: string, address: string }) => {
    setCount(count + 1)

    const newData: DataType = {
      key: count,
      name: dataSet.name,
      age: dataSet.age,
      address: dataSet.address,
      action: ''
    };
    setDataSource([...dataSource, newData]);
  };


  return (<>
    <Table dataSource={dataSource} columns={columns} />
    <div>
      <MyModal handleAdd={handleAdd} />
    </div>
  </>
  )
};

const handleEdit = ({})



export default App;


