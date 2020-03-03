import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory
} from "react-router-dom";
import { getToken } from '../../config/auth';

function NewsDetail() {
    const { id } = useParams();
    let token = getToken();
    let history = useHistory();
  
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    useEffect(() => {

    });
    return (
        <div>
            <h3>ID: {id}</h3>
        </div>
    );
}
export default NewsDetail;