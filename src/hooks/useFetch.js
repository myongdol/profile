import axios from "axios";
import { useState, useEffect } from "react";


export function useFetch(url, storage) { 
    const [dataList, setDataList] = useState([]);


    const getData = async () => {
        await axios.get(url).then((res) => {
            const list = res.data[`${storage}`];
            setDataList(list);
        });
    };

    useEffect(() => {
        getData();
    }, []);
    
    return {dataList}
}