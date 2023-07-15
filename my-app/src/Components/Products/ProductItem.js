import React from "react";
import "./ProductItem.css";

// function Products() {
//   const productDdescription = "First Product";
//   const productTitle = "Product1";
//   const productPrice = 94;
//   return (
//     <div className="product-item">
//       <h2>{productTitle}</h2>
//       <div className="product-item__price">${productPrice}</div>
//       <div className="product-item__description">{productDdescription}</div>
//     </div>
//   );
// }

// export default Products;

function ProductItem(props) {
  return (
    <div className="product-item">
      <h2>{props.title}</h2>
      <div className="product-item__price">${props.price}</div>
      <div className="product-item__description">{props.description}</div>
    </div>
  );
}

export default ProductItem;
