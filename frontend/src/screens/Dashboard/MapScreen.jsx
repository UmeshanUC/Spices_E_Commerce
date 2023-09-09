import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import OverLay from '../../components/DashBoard/Map/OverLay'
import Meta from '../../components/Helmet/Meta'
import SideBarComponents from '../../components/SideBar/SideBarComponents'

const MapScreen = () => {
    return (
        <div style={{ marginTop: "110px" }}>
            <Meta
                title="Spices | Admin Map"
            />
            
        </div>
    )
}

export default MapScreen
