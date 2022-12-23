import { Button, Modal, Input,Form } from 'antd';
import React, { useState, FC, } from 'react';


type MyModalProps = {
  handleAdd: 
  (dataSet: 
    { name: string, age: string, address: string}) => void
}

const MyModal: FC<MyModalProps> = ({ handleAdd }) => {
  const [ModalState, setModalState] = useState(false);

  const showModal = () => {
    setModalState(true);
  };

  const handleCancel = () => {
    setModalState(false);
  };

  const [dataSet, setDataSet] = useState<{
    name: string,
    age: string,
    address: string
  }>({ name: '', age: '', address: '' })

  const handleOk = () => {
    setModalState(false);
    handleAdd(dataSet);
    setDataSet({ name: '', age: '', address: '' })
  };

  return (
    <>
      <Button type="primary" onClick={showModal} >
        Add
      </Button>
      <Modal
        title="Enter data"
        open={ModalState}
        onOk={handleOk}
        onCancel={handleCancel}>
          <Input placeholder='name' onChange={(e: any) => {
          setDataSet((p) => {
            return { ...p, name: e.target.value }
          })
        }} value={dataSet.name}
        />
        <Input placeholder='age' onChange={(e: any) => {
          setDataSet((p) => {
            return { ...p, age: e.target.value }
          })
        }} value={dataSet.age} 
        />
        <Input placeholder='address' onChange={(e: any) => {
          setDataSet((p) => {
            return { ...p, address: e.target.value }
          })
        }} value={dataSet.address} 
      />
      </Modal>
      <>
      </>
    </>
  );
};

export default MyModal;


/*
enum Columns {
  NAME="Name",
  DATAINDEX="DataIndex",
  KEY="Key"
 }

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
  title: Columns.ACTION,
  dataIndex: Columns.ACTION,
  key: Columns.ACTION,
},
{
  title: Columns.ACTION,
  key: Columns.ACTION,
  */
