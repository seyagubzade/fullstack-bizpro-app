import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { AddNewProduct } from '../../store/about/api_actions';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const initialValues = {
  icon: '',
  title: '',
  description: '',
  date: '',
};

const validationSchema = Yup.object().shape({
  icon: Yup.string().required('Icon is required'),
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  date: Yup.string().required('Date is required'),
});

const AddPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const addNew = async (values) => {
    dispatch(AddNewProduct(values));
    toast.success('Successfully added!')
    navigate("/")
  };

  return (
    <StyledAdd>
      <h2>Add Page</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={addNew}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="icon">Icon</label>
            <Field
              type="text"
              className="form-control"
              id="icon"
              name="icon"
              placeholder="Enter icon"
            />
            <ErrorMessage name="icon" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter title"
            />
            <ErrorMessage name="title" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter description"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <Field
              type="text"
              className="form-control"
              id="date"
              name="date"
              placeholder="Enter date"
            />
            <ErrorMessage name="date" component="div" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </StyledAdd>
  );
};

const StyledAdd = styled.div`
  min-height: 100vh;
  padding-top: 120px;
  width: 80%;
  margin: 0 auto;
  button{
    margin-top: 20px;
    background: #dc3545;
    padding: 8px 18px;
    outline: none;
    border: none;
    &:hover{
        background: #ca2b3a;
    }
  }
  @media screen and (min-width: 920px){
    width: 50%;
  }
  `;

export default AddPage;
