import React, { useState, useEffect } from 'react';
import { getUser, getToken } from '../../config/auth';
import { useHistory } from 'react-router-dom';
import api from '../../config/api';

function NewsCreate()
{
    const user = getUser();
    let history = useHistory();

    const [berita, setBerita] = useState({
        title : '',
        content: ''
    });

    const onChange = (e) => {  
        e.persist();  
        setBerita({...berita, [e.target.name] : e.target.value})
    }
    let token = getToken();
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
      
    const handleInsert = e => {
        e.preventDefault();
        const data = {
            title: berita.title,
            content: berita.content
        };
        api.post("news", data, config)
        .then( (response) =>{
            console.log(response);
        });
    }
        
    useEffect(() => {
        if(user == null){
            history.push("/login");
        }
       
    });
    return (
        <form onSubmit={handleInsert}>
            <div className="form-group">
                <input type="text" name="title" onChange={onChange}/>
                <textarea name="content" onChange={onChange}></textarea>
                <input type="submit" value="simpan"/>
            </div>
        </form>
    );
}
export default NewsCreate;