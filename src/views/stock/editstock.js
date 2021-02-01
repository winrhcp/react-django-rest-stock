import React,
{
    // lazy 
}
    from 'react'
import {
    // CBadge,
    // CButton,
    // CButtonGroup,
    CCard,
    // CCardBody,
    // CCardFooter,
    // CCardHeader,
    CCol,
    // CProgress,
    CRow,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CButton,
    CForm
    // CCallout
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
import { useState, useEffect } from 'react';
// import MainChartExample from '../charts/MainChartExample.js'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

// const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
// const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Editstock = () => {
    const [stocks, setStocks] = useState([
        // {
        //     name: 'test',
        //     price: '10'
        // },
        // {
        //     name: 'test2',
        //     price: '11'
        // },
        // {
        //     name: 'test3',
        //     price: '12'
        // },
        // {
        //     name: 'test4',
        //     price: '13'
        // }
    ]);
    const [edit, setEdit] = useState(false);
    const [modal, setModal] = useState(false);
    const [editStock, setEditStock] = useState({
        name: "",
        price: "",
    });

    function btnEdit(item) {
        setEditStock({
            name: item.name,
            price: item.price
        });
        setModal(!modal);
    }

    useEffect(async () => {
        try {
            const res = await fetch('http://127.0.0.1:8002/api/stock/')
            const stock_data = await res.json()
            setStocks(stock_data)
        } catch (error) {
            console.log(error)
        }
    }, []);

    function handleSubmit(e) {
        console.log("Edit")
        e.preventDefault();
        let url = 'http://127.0.0.1:8002/api/stock/';
        // fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify(editStock),
        // }).then((response) => {
        //     Swal.fire({
        //         confirmButtonText: `DONE`,
        //         icon: 'success',
        //     }).then((result) => {
        //         if (result.isConfirmed) {
        //             setEditStock({
        //                 name: '',
        //                 price: ''
        //             })
        //         }
        //     })
        // }).catch((err) => {
        //     Swal.fire({
        //         title: 'Error',
        //         confirmButtonText: `DONE`,
        //         icon: 'error',
        //     })
        // });
    }
    return (
        <>
            <CRow>
                {stocks.map((item, index) => (
                    // {stocks.length > 0 ? (
                    <CCol sm="4">
                        <CCard className="p-3 bg-secondary">
                            <div key={item.name}>
                                <CCol sm="12" className="d-flex p-0">
                                    <h1>{item.name}</h1>
                                    <div className="ml-auto">
                                        <button
                                            type="button"
                                            className="btn btn-info"
                                            onClick={() => btnEdit(item)}
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </CCol>
                                <span>{item.price}</span>
                            </div>
                        </CCard>
                    </CCol>
                    // ):stocks.length <= 0 &&
                    //     (<div>
                    //         <h1>ไม่พบข้อมูล</h1>
                    //     </div>)
                    // }
                ))}
            </CRow>
            <CModal
                show={modal}
                onClose={setModal}
                centered={true}
            >
                
                    <CModalHeader closeButton>
                        {/* <CModalTitle>Modal title</CModalTitle> */}
                    </CModalHeader>
                    <CForm onSubmit={handleSubmit}>
                    <CModalBody>

                        <div className="form-group">
                            <label> Stock Name </label>
                            <input
                                className="form-control"
                                type="text"
                                value={
                                    editStock.name
                                }
                                onChange={
                                    (e) => setEditStock({
                                        ...editStock,
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
                                value={editStock.price}
                                onChange={
                                    (e) => setEditStock({
                                        ...editStock,
                                        price: e.target.value
                                    })
                                }
                            />
                        </div>

                        {/* <button
                            className="btn btn-success"
                            type="submit">
                            Add Stock
                                </button> */}
                    </CModalBody>
                    <CModalFooter>
                        <CButton
                            color="danger"
                            onClick={() => setModal(false)}
                        >Cancel</CButton>{' '}
                        <CButton type="submit" color="success">Save</CButton>
                    </CModalFooter>
                </CForm>
            </CModal>
        </>
    )
}

export default Editstock