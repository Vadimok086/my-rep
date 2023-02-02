import { Modal, Input, } from 'antd';
import { useState, FC, } from 'react';
import { DataSetProps, MyModalProps } from '../interface';

const MyModal: FC<MyModalProps> = ({ handleAdd, isOpenModal, isChecked, modalClose }) => {

  const [editingUser, setEditingUser] = useState();

  const [dataSet, setDataSet] = useState<DataSetProps>({ name: '', age: '', address: '' })

  const handleOk = () => {
    handleAdd(dataSet);
    setDataSet({ name: '', age: '', address: '' })
    modalClose()
  };


  

  return (
    <>
      <Modal
        title='Enter data'
        open={isOpenModal}
        onOk={handleOk}
        onCancel={modalClose}>
        {isChecked ? <h1>rtrtr</h1> : <h1>343</h1>}
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
    </>
  );
};

export default MyModal;