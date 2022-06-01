import React, { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { createItem } from '../../containers/Items/store/itemActions';

const CreateItem = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categoriesReducer);
  const { user } = useSelector(state => state.authReducer);
  const [photo, setPhoto] = useState(null);
  const [addItem, setAddItem] = useState({
    name: "",
    description: "",
    status: "",
    genreId: "",
    userId: user.id,
  });

  const handleChange = (e) => {
    setAddItem((addItem) => ({
      ...addItem,
      [e.target.name]: e.target.value
    }))
  };

  const saveFile = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", addItem.name);
    formData.append("description", addItem.description);
    formData.append("status", addItem.status);
    formData.append("genreId", addItem.genreId);
    formData.append("userId", addItem.userId);
    formData.append("photo", photo)

    await dispatch(createItem(formData));
  };

  return (
    <Form>
      <FloatingLabel controlId='floatingInput' label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Item Detail" name="name" value={addItem.name} onChange={handleChange} />
      </FloatingLabel>
      <FloatingLabel controlId='floatingTextarea' label="Description" className='mb-3'>
        <Form.Control as="textarea" placeholder='Write a short description' name="description" value={addItem.description} onChange={handleChange} />
      </FloatingLabel>
      <FloatingLabel controlId='floatingSelect' label="select a category" className='mb-3'>
        <Form.Select aria-label='Select a category' name="genreId" value={addItem.genreId} onChange={handleChange}>
          <option>Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId='floatingSelect' label="select status" className="mb-3">
        <Form.Select aria-label="Select status" name="status" value={addItem.status} onChange={handleChange}>
          <option>Select status</option>
          <option value={"lost"}>Lost</option>
          <option value={"found"}>Found</option>
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId='floatingFile' className='mb-3'>
        <Form.Control type="file" name='photo' accept='image/*' formEncType='multipart/form-data' onChange={saveFile} />
      </FloatingLabel>
      <Button onClick={handleSubmit}>Save Item</Button>
    </Form>
  )
}

export default CreateItem;