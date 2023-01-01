import { Popconfirm, Table, Space, Button } from 'antd';
import React, { useState } from 'react';
import MyModal from './components/MyModal';
import { DataType } from './interface';
import 'antd/dist/antd.css';
import {Columns} from './interface';
import { Formik } from 'formik';

const App: React.FC = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [editingUser, setEditingUser] = useState();

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
      title: Columns.NAME,
      dataIndex: Columns.NAME,
      key: Columns.NAME,
    },
    {
      title: Columns.AGE,
      dataIndex: Columns.AGE,
      key: Columns.AGE,
    },
    {
      title: Columns.ADDRESS,
      dataIndex: Columns.ADDRESS,
      key: Columns.ADDRESS,
    },
    {
      title: Columns.ACTION,
      key: Columns.ACTION,

      render: (record: { key: React.Key }) => (

        <Space size="middle">
          <Popconfirm
            title="sure to delete?"
            onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
          <a onClick={()=>{
            setIsChecked(false)
            setIsOpenModal(true)
            }}>Edit</a>
        </Space>
      ),
    },
  ]

  const closeModal=()=>{
    setIsOpenModal(false)
  }

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
      <Button type="primary" onClick={() => {
        setIsOpenModal(true)
        setIsChecked(true)
      }}>
        Add
      </Button>
      <MyModal 
      isChecked={isChecked} 
      isOpenModal={isOpenModal} 
      handleAdd={handleAdd}
      modalClose={closeModal}
      />
    </div>
  </>
  )
};

export default App;


