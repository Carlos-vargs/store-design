import { useEffect, useState } from 'react';

export default function useFetch(url, bool) {

    const [state, setstate] = useState({
        loading: true,
        error: null,
        data: null,
    });


    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        setstate({
            loading: true,
            error: null,
            data: null,
        })
        try {
            const info = await fetch(url)
            const response = await info.json()

            if (bool) {
                setstate({
                    loading: false,
                    error: null,
                    data: response.data.sort((a, b) => a.price - b.price).slice(0, 4),
                })
            } else {

                setstate({
                    loading: false,
                    error: null,
                    data: response.data,
                })

            }

        } catch (error) {
            setstate({
                loading: false,
                error: error,
            })
        }

    }

    if (state.error) {
        return (`Error: ${state.error.message}`)
    }

    return state;

}