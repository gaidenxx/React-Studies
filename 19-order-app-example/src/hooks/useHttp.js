import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
    const response = await fetch(url, config);

    const responseData = await response.json();

    if (!response.ok){
        throw new Error(responseData.message || 'Something went wrong, failed to send request.');
    }

    return responseData;
}

export default function useHttp(url, config, initialData) {
    const [data, setData] = useState(initialData);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    function clearData() {
        setData(initialData);
    }

    // UseCallBack to prevent loop using effect and re-render the usehttp every time the useState changes
    const sendRequest = useCallback(async function sendRequest(data) {
        setIsLoading(true);
        
        try {
            const responseData = await sendHttpRequest(url, {...config, body: data});
            setData(responseData);
        } catch (error) {
            setError(error.message || 'Something went wrong');
        }

        setIsLoading(false);
    }, [url, config]);

    useEffect(() => {
        if (config && config.method === 'GET'){
            sendRequest();
        }
    }, [sendRequest, config]);

    console.log

    return {
        data,
        error,
        isLoading,
        sendRequest,
        clearData
    }
}