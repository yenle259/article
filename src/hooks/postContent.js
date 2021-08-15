import React from 'react'
import {useEffect,useState} from "react";
function postContent() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        setLoading(true);
        fetch('https://61176b1c30022f0017a05dfa.mockapi.io/api/v1/articles')
            .then(res=>res.json())
            .then(json=>{
                setData(json);
                setSuccess(true);
            })
            .catch(error=>setError(true))
            .finally(()=>setLoading(false))
    }, [])
    return [data,loading,success,error];
}

export default postContent
