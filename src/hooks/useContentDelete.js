import React, { useState } from 'react'

function useContentDelete() {
        const [loading, setLoading] = useState(false);
        const [success, setSuccess] = useState(false);
        const [error, setError] = useState(false);
        const [result, setResult] = useState();
    
        const deletePost=(id,newPost) => {
            setLoading(true);
            fetch(`https://61176b1c30022f0017a05dfa.mockapi.io/api/v1/articles/${id}`,
                {method:'delete',
                body:JSON.stringify(newPost),
            })
                .then((res) => {
                    if(res.ok) return res.json();
                    throw new ErrorEvent('request failed');
                })
                .then(json=>{
                    setResult(json);
                    setSuccess(true);
                })
                .catch(error=>setError(true))
                .finally(()=>setLoading(false))
        };
    
        return [deletePost,{result,loading,success,error}];
}

export default useContentDelete
