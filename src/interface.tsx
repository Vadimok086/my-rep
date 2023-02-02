export interface DataType {
  key: number;
  name: string;
  age: string;
  address: string;
}

export interface MyModalProps {
  handleAdd:
  (dataSet:
    {
      name: string,
      age: string,
      address: string
    }) => void
  isOpenModal: boolean;
  isChecked: boolean;
  modalClose: () => void;
}

export enum Columns {
  NAME = "name",
  AGE = "age",
  ADDRESS = "address",
  ACTION = "action"
}

export interface DataSetProps{
  name: string;
  age: string;
  address: string;
}