
import React, { useEffect, useState } from 'react';

import Header from "../../Header";
import axios from 'axios';
import ImageEditor from '../ImageEditor';

function SeaRemConstructerPage() {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/image/layers');
                setOptions(response.data.buttons);
            } catch (error) {
                console.error('Error fetching options', error);
            }
        };

        fetchOptions();
    }, []);

    return (
        <div>
            <ImageEditor options={options} />
        </div>
    );
}

export default SeaRemConstructerPage;