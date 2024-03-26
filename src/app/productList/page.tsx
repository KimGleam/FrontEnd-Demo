'use client'

import ProductShow from "../../components/ProductShow";
import Header from "../../components/Header";
import Box from "@mui/material/Box";

const ProductList = () => {

    return (
        <body style={{margin:0}}>
            <Header></Header>
            <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ProductShow></ProductShow>
            </div>
        </body>
    )
}

export default ProductList;