import { useState, useEffect } from "react";

export default httpClient => {
    const [error, setError] = useState(null)

    const confirmErrorHandler = () => {
        setError(null);
    };


    const reqInterceptors = httpClient.interceptors.request.use(req => {
        setError(null);
        return req;
    });

    const resInterceptors = httpClient.interceptors.response.use(
        res => res,
        err => {
            setError(err);
        }
    );

    useEffect(() => {
        return () => {
            httpClient.interceptors.request.eject(reqInterceptors);
            httpClient.interceptors.response.eject(resInterceptors);

        }
    })

    return [error, confirmErrorHandler]

};