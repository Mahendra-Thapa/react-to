// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
import { useState } from "react";
import { useApiHooks } from "../../hooks/api_hooks";
import Detail from "./Detail";

const Home = () => {
  const [load, data, error] = useApiHooks({ s: "spider" });

  const [id, setId] = useState(null);
// wekjrhwerkjewrkjwerhwer

  if (load) {
    return <h1><lottie-player src="https://lottie.host/0320bc6c-5973-4ae6-9ec1-845cf87b73a4/RTXOENTsft.json" background="##ffffff" speed="2"  loop autoplay direction="1" mode="normal" className="h-[200px] w-[200px]"></lottie-player></h1>;
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
                  onClick={() => setId(movie.imdbID)}
                  key={movie.imdbID}
                  className="flex  bx bg-slate-300 rounded-xl mb-5 shadow-xl gap-6 p-2 cursor-pointer"
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
      <div >{id &&  <Detail id={id} />}</div>
    
   
      {/* {award &&<h1> {award}</h1>} */}
    </div>
  );
};
export default Home;
