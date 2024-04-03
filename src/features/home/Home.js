

//it is about the search button 

// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react"
// import Search from "../Search";

// const Home = () => {

//   const [data, setData] = useState(null);
//   const [search, setSearch] = useState('spider');
//   const controller = new AbortController();

//   const getData = async () => {
//     try {
//       const response = await axios.get('https://www.omdbapi.com', {
//         params: {
//           apikey: '6905a701',
//           s: search
//         },
//         signal: controller.signal
//         // cancelToken: controller.signal
//       });
//       setData(response.data);
//     } catch (err) {

//     }
//   }

//   useEffect(() => {
//     getData();
//     return () => {
//       controller.abort();
//       console.log('s;aldksa;ldksa;ldk');
//     }
//   }, [search])



//   return (
//     <div>
//       <Search setSearch={setSearch} />
//       <div className="p-5 grid grid-cols-2">
//         <div>

//           {data && data.Search.map((movie) => {
//             return <div key={movie.imdbID} className="flex mb-3 space-x-5 shadow-md p-2 bx cursor-pointer">
//               <div className="img">
//                 <img className="h-20 w-20 object-cover " src={movie.Poster} alt="" />
//               </div>

//               <div className="info">
//                 <h1>{movie.Title}</h1>
//                 <p>Release: {movie.Year}</p>

//               </div>

//             </div>
//           })}
//         </div>



//       </div>
//     </div>
//   )
// }
// export default Home











//=========================================================
// this code is about the handling the API using the id and search and change the title according to the different pages

// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
import { useState } from "react";
import { useApiHooks } from "../../hooks/api_hooks";
import Detail from "./Detail";

const Home = () => {
  const [load, data, error, setTitle, show, setShow] = useApiHooks({ s: "spider" });

  const [id, setId] = useState(null);
  // wekjrhwerkjewrkjwerhwer

  if (load) {
    return (
      <h1>
        <lottie-player
          src="https://lottie.host/0320bc6c-5973-4ae6-9ec1-845cf87b73a4/RTXOENTsft.json"
          background="##ffffff"
          speed="1"
          loop
          autoplay
          direction="1"
          mode="normal"
          className="h-[20px] w-[20px]"
        ></lottie-player>
      </h1>
    );
  }

  // console.log(data);

  // const [award, setAward] = useState('');

  // useEffect(()=>{
  //   axios.get('http://www.omdbapi.com', {
  //   params:{
  //     apikey: 'fc1d2de0',
  //     s: 'spider'
  //   }
  // }).then((res) =>{
  //      setAward('their is full')
  // }).catch((err)=>{

  // })
  // },[])

  return (
    <div className="p-6 grid grid-cols-2 gap-10 ">
      <div>
        {data && (
          <div>
            {data.Search.map((movie) => {
              return (
                <div
                  onClick={() => {
                    setShow(true);
                    setId(movie.imdbID);
                    setTitle(movie.Title);
                   
                  } }
                  key={movie.imdbID}
                  className="flex  bx bg-blue-gray-200 rounded-xl mb-5 shadow-xl gap-6 p-2 cursor-pointer"
                >
                  <div className="img h-auto w-20  ">
                    <img src={movie.Poster} alt="" />
                  </div>

                  <div className="info ">
                    <h1>{movie.Title}</h1>
                    <h3>Release {movie.Year}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        {id == null ? <h1>Click to show some Details</h1> : <Detail id={id} />}
      </div>

      {/* {award &&<h1> {award}</h1>} */}
    </div>
  );
};
export default Home;
