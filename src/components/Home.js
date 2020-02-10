import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import Navbar from '../components/Navbar'

class Home extends Component {
    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        const { items } = this.props
        let itemList = items && items.map(item => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title} />
                        <span className="card-title">{item.title}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>

            )
        })

        return (
            <div className="container" style={{ width: "90%" }}>
                <Navbar />
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.items)
    return {
        items: state.cartReducer.items
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)