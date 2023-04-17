import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserReports({userId}) {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        axios.get('/api/reports?userId=${userId')
        .then(response => {
            setReports(response.data);
        })
        .catch(error => {
            console.log(error);
    });
    }, []);

}



export default UserReports