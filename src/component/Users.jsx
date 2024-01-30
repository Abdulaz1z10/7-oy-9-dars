import React from 'react'
import { useState } from "react";
import  {useGetUsersQuery, useDeleteUserMutation} from "../features/users/apiSlice"
import UsersModal from "./UsersModal";
export default function Users() {
    const [modal, setModal] = useState(false);
    const [edit, setEdit] = useState('')
    const {data: users} = useGetUsersQuery()
    const [deleteUser] = useDeleteUserMutation()

    const toggle =()=>{
        setModal(false)
        setEdit('')
    }
    const openEditModal =(item)=>{
        setEdit(item)
        setModal(true)
    }
  return (
    <div className="container">
        <UsersModal open={modal} toggle={toggle} edit={edit}/>
         <button className="btn btn-success" onClick={()=>setModal(true)}>open add modal</button>
      <div className="row">
        <div className="col-md-8 offset-2">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>T/r</th>
                <th>Name</th>
                <th>Birth data</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
              users?.map((item, index) => {
                return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.birth_date}</td>
                    <td>
                      <button className="btn btn-danger"onClick={()=>deleteUser(item.id)}>delete</button>
                      <button className="btn btn-info" onClick={()=>openEditModal(item)}>edit</button>
                    </td>
                  </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
