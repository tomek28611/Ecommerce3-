import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
    const { id } = useParams();

    
    return (
        <div>ProductDetailsPage</div>
    )
}

export default ProductDetailsPage