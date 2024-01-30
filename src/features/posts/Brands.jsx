import React, { useState } from 'react'
import { useDeleteBrandsMutation, useGetBrandsQuery } from '../users/apiSlice';
import BrandsModal from '../../component/BrandsModal';
import "../posts/style.scss"
export default function Brands() {
  const {data: brands} = useGetBrandsQuery()
  const [deleteBrands] = useDeleteBrandsMutation()
  const [modal, setModal1] = useState(false)
  const [item, setItem] = useState('')

  const addBrands =()=>{
    setModal1(true)
    setItem('')
  }
  const remove =(id)=>{
    deleteBrands(id)
  }
  const editBrands =(item)=>{
    setModal1(true)
    setItem(item)
  }
  const toggle =()=>{
    setModal1(false)
  }
  return (
    <div className='Photo2'>
      <div className="container ">
        <BrandsModal open={modal} toggle={toggle} item={item} />
        <div className="row">
          <div className="col-md-3 offset-2">
            <button onClick={addBrands} className="fourth btn-info">
              Add brands
            </button>
          </div>
        </div>
        <div>
          {brands?.map((item, index) => {
            return (
              <div className="Brands1" key={index}>
                <h3>
                  Brand:<span>{item.title}</span>
                </h3>
                <div className="buttons1">
                  <button
                    onClick={() => editBrands(item)}
                    className="btn btn-primary mx-5"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => remove(item.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
