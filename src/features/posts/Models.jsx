import React, { useState } from 'react';
import ModelsModal from './../../component/ModelsModal';
import { useDeleteModelsMutation, useGetModelsQuery } from '../users/apiSlice';
import "../posts/style.scss"

export default function Models() {
  const {data: models} = useGetModelsQuery()
  const [modal, setModal] = useState(false)
  const [deleteModels] = useDeleteModelsMutation()
  const [item, setItem] = useState("")
  
  const addModels =()=>{
    setModal(true)
    setItem("")
  }
  const editModel =(item)=>{
    setItem(item)
    setModal(true)
  }

  const remove =(id)=>{
    deleteModels(id)
  }
  const toggle =()=>{
    setModal(false)
  }
  return (
    <div className='Photo3'>
      <div className="container">
        <ModelsModal open={modal} toggle={toggle} item={item} />
        <div className="row">
          <div className="col-md-3 offset-2">
            <button onClick={addModels} className="fifth  ">
              Add models
            </button>
          </div>
        </div>
        <div className="modals">
          {models?.map((item, index) => {
            return (
              <div className='bodies' key={index}>
                <h3>
                  Models: <span>{item.title}</span>
                </h3>
                <div>
                  <button
                    onClick={() => editModel(item)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => remove(item.id)}
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
