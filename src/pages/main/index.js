/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import api from '../../services/api'
import './styles.css'

export default class Main extends Component {

    state = {
        products: [],
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({ products: response.data.docs })

    }

    render() {
        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    <article className="product">
                        <h2 key={product._id}>{product.title}</h2>
                        <p>{product.description}</p>
                        <a href=""><button>Acessar</button></a>
                    </article>
                ))}
            </div>
        )
    }
}