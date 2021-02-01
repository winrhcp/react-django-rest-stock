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
// import CIcon from '@coreui/icons-react'
import { useState, useEffect } from 'react';
// import MainChartExample from '../charts/MainChartExample.js'

// const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
// const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Addstock = () => {
    const [newStock, setNewStock] = useState({
        name: "",
        price: "",
    });
    function handleSubmit(e) {
        e.preventDefault();
        let url = 'http://127.0.0.1:8002/api/stock/';
        fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newStock),
        }).then((response) => {
            // fetchStocks();
            setNewStock({ name: '', price: '' })
        })
            .catch((err) => console.log(err));
    }
    return (
        <>
            <CRow>
                <CCol sm="12">
                    <CCard>
                        <CCardHeader>
                            <h2>Add New Stock</h2>
                        </CCardHeader>
                        <CCardBody>
                            <CForm onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Stock Name </label>
                                    <input className="form-control" type="text" value={newStock.name} onChange={(e) => setNewStock({ ...newStock, name: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label>Price </label>
                                    <input className="form-control" type="text" value={newStock.price} onChange={(e) => setNewStock({ ...newStock, price: e.target.value })} />
                                </div>

                                <button className="btn btn-success" type="submit">
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
