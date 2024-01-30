// import { Modal, ModalBody } from 'reactstrap'
// import React from 'react'
// import { useAddUserMutation, useUpdateUserMutation } from '../features/users/apiSlice';
// export default function UsersModal({ open, toggle, edit }) {
//   const [addUser] = useAddUserMutation();
//   const [updateUser] = useUpdateUserMutation()
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let payload = {
//       name: e.target[0].value ? e.target[0].value : edit.name,
//       birth_date: e.target[1].value ? e.target[1].value : edit.birth_date
//     };
//     if(edit !== ''){
//         updateUser({...payload, id: edit.id})
//     }else{
//         addUser({ ...payload });
//     }
//     toggle()
//   };
//   return (
//     <Modal isOpen={open} toggle={toggle}>
//       <ModalBody>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             defaultValue={edit.name}
//             placeholder="Name..."
//             className="form-control my-2"
//           />
//           <input
//             type="number"
//             defaultValue={edit.birth_date}
//             placeholder="Birth date..."
//             className="form-control my-2"
//           />
//           <button className="btn btn-success">add</button>
//         </form>
//       </ModalBody>
//     </Modal>
//   );
// }
