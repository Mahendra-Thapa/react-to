import { NavLink, useNavigate } from "react-router-dom"
import { data } from "../../dummy/product"




const Home = () => {

const nav = useNavigate();
const person = {
  name: 'ram'
}



  return (
    <div>
  
    {/* <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} className="bg-no-repeat bg-cover bg-center bg-blend-darken h-[200px] w-full">
    </div> */}



 
<div className="p-8 grid grid-cols-2  gap-6 ">
        {data.products.map((product) => {
          return <div
            // onClick={() => nav(`/product/detail/${JSON.stringify(person)}`,)}

              onClick={() => nav(`/product/detail/ ${product.id}`,)}


            className="shadow-2xl p-3 cursor-pointer flex border-8 border-gray-700 bg-gray-300  hover:bg-gray-400 hover:white" key={product.id}>

           <div className="p-5 ">

              <img className="w-56 h-40 bg-cover " src={product.thumbnail}  />
  
              </div>
  
              <div className="w-96  p-2.5">
              <h3 className="text-xl font-semibold ">{product.title}</h3>
              <h3>{product.description}</h3>
              <h3 className="text-2xl font-serif ">{`Price: Rs.${product.price}/-`}</h3>
              <h3 className=" font-serif  text-2xl text-blue-700 font-semibold">{`Discount: ${product.discountPercentage}%`}</h3>
              <h3 className="font-semibold">{`Rating: ${product.rating}`}</h3>
              <h3 className=" font-semibold">{`Brand: ${product.brand}`}</h3>
              <h3 className=" font-semibold">{`Stock: ${product.stock}`}</h3>
              <h3  className="font-semibold">{`Category: ${product.category}`}</h3>
             
            </div>
          </div>
        })}
      </div> 
   







        

      {/* <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, unde labore iusto laudantium recusandae similique magnam sunt deleniti? Ullam, nostrum.</p> */}
    </div>
  )
}
export default Home