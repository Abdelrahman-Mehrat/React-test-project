import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Shop.css'
function Shop(){
    const [product,setProduct] = useState([])
    //useEffect function
    useEffect(()=>{
        fetchProducts();
        console.log(product);
    },[])
    const fetchProducts = ()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProduct(json))
    }
    return(
    <div className="container shop-list">
        <h2>data from api</h2>
        <div className="row ">
        {product.map( product=>{
            // console.log("products",product);
            return (<Link to= {`/shop/${product.id}`} key={product.id} className="text-link col-sm-4 p-3">
                <div  className="item p-3">
                    <figure><img className="w-25" src={product.image} alt="" /></figure>
                    <h4 className="text-black">{product.title}</h4>
                    <p className="text-success fw-bold">price : {product.price} $</p>
                   <p className="text-black">rate : {product.rating.rate}</p>
                </div>
            </Link>
            )
        })}
        </div>
        
        </div>
    )
}
export default Shop;