import React, { useState } from 'react'
import { useAddProductsMutation, useGetBrandsQuery, useGetModelsQuery, useUpdateProductsMutation } from '../features/users/apiSlice'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'


export default function ProductsModal({open, toggle, item}) {
    const {data: brands} = useGetBrandsQuery()
    const {data: models} = useGetModelsQuery()
    const [brand, setBrands] = useState('')
    const [model, setModels] = useState('')
    const [addProducts] = useAddProductsMutation()
    const [updateProducts] = useUpdateProductsMutation()
    const handleSubmit =(e)=>{
        e.preventDefault
        let payload ={
            name: e.target[0].value,
            price: e.target[1].value,
            brands: brand,
            models: model,
            description: e.target[4].value
        }
        if(item){
            updateProducts({...payload, id: item.id})
        }else{
            addProducts({...payload})
        }
        toggle()
    }
return (
  <Modal isOpen={open} toggle={toggle}>
    <ModalHeader>
      <h3>Add Products</h3>
    </ModalHeader>
    <ModalBody>
      <form onSubmit={handleSubmit} id='form'>
        <input
          type="text"
          placeholder="Name..."
          defaultValue={item.name}
          className="form-control my-2"
        />
        <input
          type="number"
          placeholder="Price..."
          defaultValue={item.price}
          className="form-control my-2"
        />
        <select onChange={(e)=>setBrands(e.target.value)} defaultValue={item.brands} className='form-control my-2'>
            <option value="brands" hidden>Brands</option>
            {
                brands?.map((item, index)=>{
                    return <option value={item.title} key={index}>{item.title}</option>
                })
            }
        </select>
        <select onChange={(e)=>setModels(e.target.value)} defaultValue={item.models} className='form-control my-2'>
            <option value="models" hidden>{item.title}</option>
            {
                models?.map((item, index)=>{
                    return <option value={item.title} key={index}>{item.title}</option>
                })
            }
        </select>
        <textarea cols="30" rows="10" placeholder='Description' defaultValue={item.description} className='form-control my-2'></textarea>
      </form>
    </ModalBody>
    <ModalFooter>
        <button type='submit' form='form' className='btn btn-info'>Save</button>
    </ModalFooter>
  </Modal>
);
}
