import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import MultiDataGrid from './MultiDataGrid';

const Component1 = () => {
    const [data, setData] = useState([]);

    // Fetch Data into an api.
    useEffect(() => {
        const FetchData = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(res.data);
        };
        FetchData();
    })
    return (
        <div className='component-1'>
            <MultiDataGrid data={data} />
        </div>
    )
};

export default Component1