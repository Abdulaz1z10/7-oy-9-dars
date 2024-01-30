import React, { useState } from 'react'
import { useGetProductsQuery, useDeleteProductsMutation } from '../users/apiSlice';
import ProductsModal from '../../component/ProductsModal';
import "../posts/style.scss"
export default function Products() {
  const {data: product} = useGetProductsQuery()
  const [deleteProduct] = useDeleteProductsMutation()
  const [item, setItem] = useState('')
  const [modal, setModal] = useState(false)

  const openModal =()=>{
    setModal(true)
    setItem('')
  }
  const remove =(id)=>{
    deleteProduct(id)
  }
  const editProduct =(item)=>{
    setModal(true)
    setItem(item)
  }
  const toggle =()=>{
    setModal(false)
  }
  return (
    <div className='Photo'>
      <div className="container">
        <ProductsModal open={modal} toggle={toggle} item={item} />
        <div className="row my-3">
          <div>
            <button className="btn1 btn-info" onClick={openModal}>
              add products
            </button>
          </div>
        </div>
        <div>
          {product?.map((item, index) => {
            return (
              <div className="mini_div" key={index}>
                <h3>Name: {item.name}</h3>
                <h3>Price: {item.price}</h3>
                <h3>Brands: {item.brands}</h3>
                <h3>Models: {item.models}</h3>
                <p>Description: {item.description}</p>
                <button
                  className="btn btn-info"
                  onClick={() => editProduct(item)}
                >
                  edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => remove(item.id)}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
