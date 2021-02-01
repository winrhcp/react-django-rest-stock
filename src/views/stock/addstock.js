import React, {
    // lazy 
}
    from 'react'
import {
    // CBadge,
    // CButton,
    // CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    // CCardBody,
    // CCardFooter,
    // CCardHeader,
    CCol,
    CForm,
    // CProgress,
    CRow,
    // CCallout
} from '@coreui/react'
import {
    useState,
    useEffect
} from 'react';
import {
    useHistory
} from "react-router-dom"; // import for redirect

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

const Addstock = () => {
    const [newStock, setNewStock] = useState({
        name: "",
        price: "",
    });
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        let url = 'http://127.0.0.1:8002/api/stock/';
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newStock),
        }).then((response) => {
            Swal.fire({
                confirmButtonText: `DONE`,
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    setNewStock({
                        name: '',
                        price: ''
                    })
                    history.push("/viewstock");
                }
            })
        }).catch((err) => {
            Swal.fire({
                title: 'Error',
                confirmButtonText: `DONE`,
                icon: 'error',
            })
        });
    }
    return (
        <>
            <CRow>
                <CCol sm="12">
                    <CCard>
                        <CCardHeader>
                            <h2> Add New Stock </h2>
                        </CCardHeader>
                        <CCardBody>
                            <CForm onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label> Stock Name </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={
                                            newStock.name
                                        }
                                        onChange={
                                            (e) => setNewStock({
                                                ...newStock,
                                                name: e.target.value
                                            })
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label> Price </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={newStock.price}
                                        onChange={
                                            (e) => setNewStock({
                                                ...newStock,
                                                price: e.target.value
                                            })
                                        }
                                    />
                                </div>

                                <button
                                    className="btn btn-success"
                                    type="submit">
                                    Add Stock
                                </button>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default Addstock