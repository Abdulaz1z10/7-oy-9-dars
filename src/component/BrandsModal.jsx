import React from 'react'
import { useAddBrandsMutation, useUpdateBrandsMutation } from '../features/users/apiSlice'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

export default function BrandsModal({ open, toggle, item }) {
  const [addBrands] = useAddBrandsMutation();
  const [updateBrands] = useUpdateBrandsMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      title: e.target[0].value,
    };
    if (item) {
      updateBrands({ ...payload, id: item.id });
    } else {
      addBrands({ ...payload });
    }
    toggle();
  };
  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader>
        <h3>Add brand</h3>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Brands..."
            className="form-control my-2"
          />
          <button type="submit" className="btn btn-info">
            Save
          </button>
        </form>
      </ModalBody>
    </Modal>
  );
}
