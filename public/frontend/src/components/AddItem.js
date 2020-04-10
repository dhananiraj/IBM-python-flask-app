import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import { Modal, Button } from "antd";
import { Input } from 'antd';
import axios from 'axios';

const { TextArea } = Input;


function AddItem({setData, urlbase}) {

    // const urlbase = 'localhost:3000'

    const [Visible, setVisible] = useState(false)
    const [ConfirmLoading, setConfirmLoading] = useState(false)
    const [Item, setItem] = useState(null)
    const [Description, setDescription] = useState(null)

    const showModal = () => {
        setVisible(true)
    };

    const handleOk = () => {
        setConfirmLoading(true)
        console.log("DATA:",Item,Description)
        // setLoading(true);
        var request = {
            item: Item,
            description: Description,
        }
        console.log(urlbase)
        axios.
            post(`${urlbase}/update`,request)
            .then(res => {
                setData(res.data.items)
                setVisible(false)
                setConfirmLoading(false)
            })
            .catch(err => {
                console.log(err)
                // setVisible(false)
                setConfirmLoading(false)
            })
    };

    const handleCancel = () => {
      console.log("Clicked cancel button");
        setVisible(false)
    };

    //   const { visible, confirmLoading, ModalText } = this.state;
      return (
        <div>
          <Button style={{margin:'20px'}} shape="round" type="primary" onClick={showModal}>
            Wanna add or update an item?
          </Button>
          <Modal
            title="Add item"
            visible={Visible}
            onOk={handleOk}
            confirmLoading={ConfirmLoading}
            onCancel={handleCancel}
          >
              <div>
                <Input style={{marginTop:'20px'}} onChange={(e)=>setItem(e.target.value)} placeholder="Item Name"></Input>
                <TextArea style={{marginTop:'20px'}} autoSize={{ minRows: 4, maxRows: 8 }} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter Description"></TextArea>
              </div>
          </Modal>
        </div>
      );
}

export default AddItem;
