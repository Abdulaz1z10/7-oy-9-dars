import React from 'react'
import { useAddModelsMutation, useUpdateModelsMutation } from '../features/users/apiSlice'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

export default function ModelsModal({open, toggle, item, }) {
    const [addModels] = useAddModelsMutation()
    const [updateModels] = useUpdateModelsMutation()
    const handleSubmit =(e)=>{
        e.preventDefault();
            let payload ={
                title: e.target[0].value
            }
            if(item){
                updateModels({...payload, id: item.id })
            }else{
                addModels({...payload})
            }
            toggle()
    }
  return (
    <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>
            <h3>Add Models</h3>
        </ModalHeader>
        <ModalBody>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Models...' defaultValue={item.title} className='form-control my-2'/>
                <button className='btn btn-success' type='submit'>Save</button>
            </form>
        </ModalBody>
    </Modal>
  )
}
