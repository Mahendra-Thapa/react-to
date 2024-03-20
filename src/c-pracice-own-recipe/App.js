import React from 'react'
import recipe from './dummy.js/data';



const App = () => {
 console.log(recipe);
  return (
    <div className=' font-serif flex border-orange-700 border-8'>
      <div>
       <img className='h-96 w-96' src= {recipe.image}/>
       
       <div className='mx-3 my-4 text-2xl bg-orange-300 p-2'>   
      <p className='my-2'> <strong>Pepper Time Minutes: </strong>{recipe.prepTimeMinutes} minutes</p>
      <p className='my-2' > <strong>Cook Time Minutes: </strong>{recipe.cookTimeMinutes} minutes</p>
      <p className='my-2'> <strong>Servings: </strong>{recipe.servings}</p>
     
      </div>
       </div>

       <div className='m-4'>
      <h1 className='text-6xl text-orange-800 font-serif font-thin '>{recipe.name}</h1>
      

      <div className='flex space-x-16 my-2 bg-orange-300 p-8 '>
      <div className=''><p><strong className='text-3xl'>Ingredients:</strong></p>
      <ul className='text-2xl'>
        {recipe.ingredients.map((ingredients, index)=>{
              return <li  key={index}>{ingredients}</li>
        })
        }
      </ul></div>

      <div> <p><strong className='text-3xl'>instructions:</strong></p>
      <ol className='text-2xl'>{
        recipe.instructions.map((instruction, index)=>{
          return  <ol key= {index}>{instruction} </ol>
        })
        } </ol></div>
      </div>



      <div className='flex text-center text-2xl space-x-20 my-3 bg-orange-300'>
         <div>
      <p> <strong>Difficulty: </strong>{recipe.difficulty}</p>
      <p> <strong>Cuisine: </strong>{recipe.cuisine}</p>
      <p> <strong>Calories Per Serving: </strong>{recipe.caloriesPerServing}</p>
      </div>
      <div>
      <p className='flex'> <strong>Tags: &nbsp; </strong>{ 
        <ul>{
         recipe.tags.map((tags, index)=>{
          return <ol key={index}>{tags}</ol>
         })
         }
        </ul>
        }</p>
        </div>
        </div>

         <div className='flex space-x-28 text-2xl  '>
        <p className=' h-auto w-auto p-3 bg-orange-300 rounded-full'><strong>userId: </strong>{recipe.userId}</p>
        <p className=' h-auto w-auto p-3 bg-orange-300 rounded-full'><strong>Rating: </strong>{recipe.rating}</p>
        <p className=' h-auto w-auto p-3 bg-orange-300 rounded-full' ><strong>Review Count: </strong>{recipe.reviewCount}</p>
        </div>
        </div>
      


    </div>
  )
}

export default App