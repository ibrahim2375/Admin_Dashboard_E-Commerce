import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import React from 'react'
import Search from '../components/Products/Search'
import ProductCard from '../components/Products/ProductCard'
import { public_request } from '../util/requestMethods'
//css  
import '../css/Products.css'
function Products() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [query, setQuery] = useState('')

    //habdle search 
    const handleSearch = (event) => {
        setQuery(event.target.value);
    }
    //get products of osh app e-commerce
    useEffect(() => {
        const getProducts = async () => {
            await public_request.get(`/products/admin/get`)
                .then((res) => {
                    if (res?.data && res.status === 200) {
                        setProducts(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        getProducts();
    }, [])

    //get filteredProducts by search
    useEffect(() => {
        const getFilteredProducts = async () => {
            await public_request.post(`/products/admin/get`, {
                search: query
            }).then((res) => {
                if (res?.data && res.status === 200) {
                    setFilteredProducts(res.data)
                }
            }).catch(err => console.log(err))
        }
        getFilteredProducts();
    }, [query])
    return (
        <div style={{ width: '100%' }}>
            <Typography variant='h4' style={{ margin: '20px' }}>Products</Typography>
            <div className="center">
                <Search handleSearch={handleSearch} />
            </div>
            <div className="products mb2">
                {Array.isArray(products) && filteredProducts?.length === 0 ?
                    products?.map(product => <ProductCard key={product?._id}
                        name={product?.name ?? null}
                        id={product?._id ?? null}
                        description={product?.description ?? null}
                        img={product?.img ?? null} />)
                    : (filteredProducts?.map(product => <ProductCard key={product?._id}
                        name={product?.name ?? null}
                        id={product?._id ?? null}
                        description={product?.description ?? null}
                        img={product?.img ?? null} />))
                }
            </div>

        </div>
    )
}

export default Products