import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  useLayoutEffect,
} from "react";
import { Menu, Icon, Layout } from "antd";
import axios from "axios";
import DataTable from "./DataTable";
import Additem from "./AddItem";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import logo from "../logo.svg";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export function Body() {
  const [Loading, setLoading] = useState(false);
  const [Data, setData] = useState(null);
  const [Error, setError] = useState(false);
//   const [Render, setRender] = useState(0);
  // fetchdata()

  const urlbase = '' 
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />

  var fetchdata = async () => {
    var request = {
      data: "",
    };
    setLoading(true);
    axios
      .post(`${urlbase}/query`, request)
      .then((res) => {
        console.log("response:", res);
        setData(res.data.items);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(err.error);
        setLoading(false);
      });
  };

  useLayoutEffect(() => {
    fetchdata();
  }, []);

  var deletefunc = async (e) => {
      var request = {
        item : e.target.value,  
      }
    // console.log('Delete function called...',e.target.value);
      setLoading(true);
      axios.
        post(`${urlbase}/delete`,request)
        .then(res => {
            setData(res.data.items)
            setLoading(false)
            setError(false)
        })
        .catch(err => {
            setError(err.error)
            setLoading(false)
        })
        // setRender
  }

  var renderlist = (data) => {
    // console.log("inside render", data);
    console.log('error',Error)
    if (Error !== false){
        return <p>Error : {Error}</p>
    }
    if (typeof data === "undefined" || data === null) {
      return "Nothing found";
    } else {
      data = Object.keys(data).map((k, i) => {
        return {
          key: i,
          Item: k,
          Description: data[k],
        };
      });
      return <DataTable data={data} deletefunc={deletefunc}/>;
    }
  };

  return <>
            <div>
                <Additem urlbase={urlbase} setData={setData}/>
            </div>
            {Loading ? <Spin indicator={antIcon} /> : <div>{renderlist(Data)}</div>}
         </>;
}
