import React, { useState } from 'react'

function useContentUpdate() {
    const [loading, setLoading] = useState(false);
        const [success, setSuccess] = useState(false);
        const [error, setError] = useState(false);
        const [result, setResult] = useState();
    
        const create=(newPost) => {
            setLoading(true);
            fetch('https://61176b1c30022f0017a05dfa.mockapi.io/api/v1/articles/',
                {method:'put',
                body:JSON.stringify(newPost),
            })
                .then(res=>res.json())
                .then(json=>{
                    setResult(json);
                    setSuccess(true);
                })
                .catch(error=>setError(true))
                .finally(()=>setLoading(false))
        };
    
        return [create,{result,loading,success,error}];
}

export default useContentUpdate
