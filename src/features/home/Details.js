import { useParams } from "react-router-dom"
import { data } from "../../dummy/product";


const Detail = () => {

  const { id } = useParams();
  const product = data.products.find((product) => product.id === parseInt(id));



//  //Ssome diffrent from the above code
// const { id } = useParams();
//   // Parse the id parameter to an integer using parseInt
//   const productId = parseInt(id);

//   // Use find function properly to find the product with the matching id
//   const product = data.products.find((product) => product.id === productId);

//   if (!product) {
//     return <div>No product found for id: {id}</div>;
//   }


  return (
    <div className="shadow-sm ">
      <div className="flex justify-center p-7 space-x-5">
        <div>
          <h1 className="text-2xl  text-gray-900 bg-red-100 inline-block  px-3 py-2 my-3 rounded-xl shadow-sm">
            {product.title}
          </h1>
          <div className="w-[400px]">
            <p>
              <b>Description:</b> {product.description}
            </p>
            <p>
              <b>Price:</b> ${product.price}
            </p>
            <p>
              <b>Rating:</b> {product.rating}
            </p>
            <p>
              <b>Stock:</b> {product.stock}
            </p>
            <p>
              <b>Brand: </b>
              {product.brand}
            </p>
            <p>
              <b>Category:</b> {product.category}
            </p>
          </div>
        </div>
        <img
          className="my-7 w-[400px] shadow-xl rounded-sm h-[240px]"
          src={product.thumbnail}
          alt={product.title}
        />
        <div style={{ display: "none" }}>{product.images[0]}</div>
      </div>
    </div>
  );
};


export default Detail






