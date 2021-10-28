import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from './PropertyList.module.scss';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";


const PropertyList = () =>{
    const [list, setList] = useState([]);
    const history = useHistory();

    const getAllProperty = async () => {
        try{
            const properties = await axios.get('http://localhost:8000/api/property');
            setList(properties.data.property)
            console.log(properties);
        }catch(error){
        console.log(error);
    }
}
    useEffect(() => {
        getAllProperty(); 
    }, []);

    const deleteProperty = async (id) =>{
        try{
            const response = await axios.delete(`http://localhost:8000/api/property/delete/${id}`);
            getAllProperty();
            console.log(response);
            Swal.fire({
                title: 'Propiedad borrada',
                text: 'Se ha borrado la propiedad satisfactoriamente',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }catch(error){
        console.log(error);
        Swal.fire({
            title: 'Error!',
            text: 'Oops... Ha ocurrido algo',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }
    }
    const changeStatus = async (property, isSold) => {
        try{
            const UpdateProperty = {...property, isSold: isSold}
            console.log('value', UpdateProperty);
            await axios.put(`http://localhost:8000/api/property/update/${property._id}`, UpdateProperty)
            getAllProperty();
        }catch(error){
            console.log(error);
        }
    }
    const propertyDetail = (id) =>{
        history.push(`/ver-propiedad/${id}`);
    }

    return(
        <>
            <h1>Propiedades</h1>
            <div className={styles.cardContainer}>
            {list?.map(property => (
            <div className={styles.card_inside}>
            <h2 key={property._id}>{property.propertyName}</h2>
            <p>Descripción: {property.description}</p>
            <p>Estado de la propiedad: {!property.isSold ? 'Disponible' : 'Vendida'}</p>
            <Form>
                <Form.Check 
                type="switch"
                id="custom-switch"
                checked={property.isSold}
                onChange={(e) => changeStatus(property, e.target.checked)}
            />
            </Form>
            <Button variant="link" onClick={() => propertyDetail(property._id)}>Ver Detalle</Button>
            <Button variant="danger" onClick={() => deleteProperty(property._id)}>Eliminar Propiedad</Button>
            </div>
            ))}
            </div>
            </>
        )
}
export default PropertyList;