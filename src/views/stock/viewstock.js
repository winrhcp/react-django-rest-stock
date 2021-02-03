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
    // CCallout
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
import { useState, useEffect } from 'react';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
// import MainChartExample from '../charts/MainChartExample.js'

// const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
// const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Viewstock = () => {
    const [stocks, setStocks] = useState([])
    useEffect(async () => {
        try {
            const res = await fetch('http://127.0.0.1:8002/api/stock/')
            const stock_data = await res.json()
            setStocks(stock_data);
        } catch (error) {
            // Swal.fire({
            //     title: 'Error',
            //     confirmButtonText: `DONE`,
            //     icon: 'error',
            // })
            // setStocks([]);
        }
    }, [])
    return (
        <>
            <CRow>
                {stocks.map(item => {
                    // console.log(stocks.length)
                    return(
                    // {
                    //     stocks.length > 0 ? (
                            <CCol sm="4">
                                <CCard className="p-3 bg-secondary">
                                    <div key={item.name}>
                                        <h1>{item.name}</h1>
                                        <span>{item.price}</span>
                                    </div>
                                </CCard>
                            </CCol>
                    //     ) : stocks.length <= 0 && (
                    //         <CCol sm="12">
                    //             <h1>ไม่พบข้อมูล</h1>
                    //         </CCol>
                    //     )
                    // }
                    )
                })}
            </CRow>
        </>
    )
}

export default Viewstock
