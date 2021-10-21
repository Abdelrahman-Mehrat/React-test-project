import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function ShopSelectedItem({ match }) {
    const [singleProduct, setSingleProduct] = useState({})
    //useEffect function
    useEffect(() => {
        fetchProduct();
    }, [])
    const fetchProduct = () => {
        return (
            fetch(`https://fakestoreapi.com/products/${match.params.id}`)
                .then(res => res.json())
                .then(json => setSingleProduct(json))
        )
    }
    console.log(singleProduct);
    return (
        <div>
            {
                singleProduct
                    ?
                    (
                        <div className="container shop-list">
                            <h2>product number {singleProduct.id}</h2>
                            <hr />
                            <div className="singleItem row">
                                <figure className="col-sm-4"><img className="w-50" src={singleProduct.image} alt="" /></figure>
                                <div className="col-sm-8">
                                    <p>{singleProduct.title}</p>
                                    <p>price: {singleProduct.price} $</p>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (<div>loading</div>)
            }
            <Link to="/shop">
                <button className="btn btn-danger">back to shop page</button>
            </Link>
        </div>

    )
}
export default ShopSelectedItem;