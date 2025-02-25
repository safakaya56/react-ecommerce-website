import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, updateProductCount } from '../redux/features/basketSlice'


function Basket() {



    const dispatch = useDispatch()

    const products = useSelector((store) => store.basket.products)

    const handleRemove = (id) => {
        dispatch(removeFromBasket(id))
    }

    const handleCountUpdate = (newCount, id) => {
        if (newCount > 0) {
            dispatch(updateProductCount({ newCount, id }))
        }
    }

    const totalPrice = products.reduce((total, product) => total + product.price * product.count, 0);
    return (

        <div className="container mt-5">
            <h1 className="text-center mb-4" style={{ color: "#1e3a8a" }}>Your Cart</h1>
            <table className="table table-striped table-bordered table-hover shadow-lg" style={{ margin: "0 auto" }}>
                <thead className="bg-primary text-light">
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? (
                        <tr>
                            <td colSpan="6" className="text-center text-muted">Your Cart is Empty</td>
                        </tr>
                    ) : (
                        products.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="img-fluid rounded"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            objectFit: "cover"
                                        }}
                                    />
                                </td>
                                <td>{product.title}</td>
                                <td>{product.price} $</td>
                                <td>
                                    <input
                                        type="number"
                                        value={product.count}
                                        min="1"
                                        className="form-control text-center"
                                        style={{ width: "80px" }}
                                        onChange={(e) => { handleCountUpdate(e.target.value, product.id) }}
                                    />
                                </td>
                                <td>{(product.price * product.count).toFixed(2)} $</td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleRemove(product.id)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {products.length > 0 && (
                <div className="d-flex justify-content-between align-items-center">
                    <h3 style={{ color: "#1e3a8a" }}>Total: {totalPrice.toFixed(2)} $</h3>
                    <button className="btn btn-success btn-md">Make Payment</button>
                </div>
            )}
        </div>

    )
}

export default Basket