import React, { useState } from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUpdateItem } from '../../containers/Items/store/itemActions';

const UpdateItem = ({ data }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categoriesReducer);
  const [updatedItem, setUpdatedItem] = useState({
    name: data.name,
    description: data.description,
    status: data.status,
    genreId: data.genreId,
    id: data.id
  });

  const handleChange = (e) => {
    setUpdatedItem((updatedItem) => ({
      ...updatedItem,
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = () => {
    dispatch(fetchUpdateItem(updatedItem));
  }
  return (
    <Form>
      <FloatingLabel controlId='floatingInput' label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Item Detail" name="name" value={updatedItem.name} onChange={handleChange} />
      </FloatingLabel>
      <FloatingLabel controlId='floatingTextarea' label="Description" className='mb-3'>
        <Form.Control as="textarea" placeholder='Write a short description' name="description" value={updatedItem.description} onChange={handleChange} />
      </FloatingLabel>
      <FloatingLabel controlId='floatingSelect' label="select a category" className='mb-3'>
        <Form.Select aria-label='Select a category' name="genreId" value={updatedItem.genreId} onChange={handleChange}>
          <option>Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId='floatingSelect' label="select status" className="mb-3">
        <Form.Select aria-label="Select status" name="status" value={updatedItem.status} onChange={handleChange}>
          <option>Select status</option>
          <option value={"lost"}>Lost</option>
          <option value={"found"}>Found</option>
        </Form.Select>
      </FloatingLabel>
      <Button onClick={handleSubmit}>Save Item</Button>
    </Form>
  )
}

export default UpdateItem;