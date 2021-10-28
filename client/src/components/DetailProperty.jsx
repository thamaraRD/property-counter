import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import styles from './NewProperty.module.scss';
import axios from 'axios';

const DetailProperty = () => {
    const { id } = useParams();
    const [property, setProperty] = useState();

    const getPropertyById = async () => {
        try{
            const detail = await axios.get(`http://localhost:8000/api/property/${id}`);
            console.log(detail);
            setProperty(detail.data.property);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        getPropertyById();
    }, [id])// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <div className={styles.card}>
            <h1>Propiedad</h1>
            <br />
            <h3>Propiedad: {property?.propertyName}</h3>
            <h3>Ubicación: {property?.location}</h3>
            <h3>Precio:{property?.price}</h3>
            <h3>Dueño: {property?.owner}</h3>
            <h3>Estado: {property?.isSold ? 'Vendida': 'Disponible'}</h3>
            <hr/>
            <Link to="/lista-propiedades">Ir a Lista de Propiedades</Link>
            <br/>
            <Link to="/nueva-propiedad">Agregar nueva propiedad</Link>
        </div>
    )
}
export default DetailProperty;