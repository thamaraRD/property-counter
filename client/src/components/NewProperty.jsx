import React from 'react';
import styles from './NewProperty.module.scss';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const NewProperty = ()  =>{
    const SignupSchema = Yup.object().shape({
        propertyName: Yup.string()
        .min(2, 'El nombre de la propiedad debe tener al menos 2 caracteres')
        .max(50, 'Nombre demasiado largo, reduce.')
        .required('Ingrese nombre de la Propiedad'),
        description: Yup.string()
        .min(2, 'La descripción debe tener mas de 2 caracteres')
        .max(50, 'Muy larga la descripción, reduce.')
        .required('Campo requerido'),
        location: Yup.string()
        .min(2, 'Específica más la dirección')
        .required('Campo requerido'),
        price: Yup.number()
        .min(2, 'Agrégale más valor a tu propiedad')
        .required('Campo requerido'),
        owner: Yup.string()
        .min(2, 'El nombre no puede tener menos de 2 caracteres')
        .max(50, 'Nombre demasiado largo, reduce.')
        .required('Campo requerido'),
    });
    const createProperty = async (values, {resetForm}) =>{
        try{
            const response = await axios.post('http://localhost:8000/api/property', values);
            console.log(response.data);
            Swal.fire({
                title: 'Propiedad guardada con exíto',
                text: 'Tu Propiedad se ha guardado con exíto',
                icon: 'success',
                confirmButtonText: 'Ok'
                });
                resetForm();
        }catch(error){
            console.log('este es el error', error.response.data.error.message);
            Swal.fire({
                title: 'Error!',
                text: error.response.data.error.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            })

        }
    }
    return(
        <>
        <h1>Nueva propiedad</h1>
        <div className={styles.card}>
    <Formik
    initialValues={{
        propertyName: '',
        description: '',
        location: '',
        price: '',
        owner: ''
    }}
    validationSchema={SignupSchema}
    onSubmit={createProperty}
    >
    {({ errors, touched }) => (
        <Form>
            <label htmlFor="propertyName">Nombre de la Propiedad</label>
        <Field name="propertyName" />
        {errors.propertyName && touched.propertyName ? (
            <div className={styles.errors}>{errors.propertyName}</div>
        ) : null}
        <label htmlFor="description">Descripción</label>
        <Field name="description" />
        {errors.description && touched.description ? (
            <div className={styles.errors}>{errors.description}</div>
        ) : null}
        <label htmlFor="location">Ubicación</label>
        <Field name="location" />
        {errors.location && touched.location ? (
            <div className={styles.errors}>{errors.location}</div>
        ) : null}
        <label htmlFor="price">Precio</label>
        <Field name="price" type="number" />
        {errors.price && touched.price ? (
            <div className={styles.errors}>{errors.price}</div>
        ) : null}
        <label htmlFor="owner">Dueño</label>
        <Field name="owner" />
        {errors.owner && touched.owner ? (
            <div className={styles.errors}>{errors.owner}</div>
        ) : null}

        <button type="submit">Agregar</button>
        </Form>
    )}
    </Formik>
        </div>
        <Link to="/lista-propiedades">Ir a la lista de Propiedades</Link>
        </>
    )
}
export default NewProperty;