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
// import MainChartExample from '../charts/MainChartExample.js'

// const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
// const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Editstock = () => {
    const [stocks, setStocks] = useState([])
    useEffect(async () => {
        try {
            const res = await fetch('http://127.0.0.1:8002/api/stock/')
            const stock_data = await res.json()
            setStocks(stock_data)
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <>
            <CRow>
                {stocks.map(item => (
                    // {stocks.length > 0 ? (
                        <CCol sm="4">
                            <CCard className="p-3 bg-secondary">
                                <div key={item.name}>
                                    <h1>{item.name}</h1>
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
        </>
    )
}

export default Editstock