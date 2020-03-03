import React, { useState, Fragment, useEffect } from 'react';
import { getToken } from '../../config/auth';
import { useHistory } from 'react-router-dom';
import api from '../../config/api';

function News() {

    const [berita, setBerita] = useState({ data: [] });

    let token = getToken();
    let history = useHistory();

    useEffect(() => {

        if (token == null) {
            history.push("/login");
        }

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        api.get("/news-by-user", config)
            .then((response) => {
                setBerita(response.data);
            }).catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <div className="container-fluid">
            <div className="col-lg-12">
                <div className="table-responsive">
                    <div>

                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Judul</th>
                                <th>Konten</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                berita.data.map((val, key) => (
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{val.title} </td>
                                        <td>{val.content.substring(0, 50)}</td>
                                        <td></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}
export default News;