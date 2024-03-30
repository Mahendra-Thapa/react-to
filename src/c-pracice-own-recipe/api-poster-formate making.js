import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);



  useEffect(() => {
    axios
      .get("http://www.omdbapi.com", {
        params: {
          apikey: "fc1d2de0",
          t: "spider",
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setData(err.data);
      });
  }, []);

  
  // setTimeout(() => {
  //   console.log('print the value');
  // }, 6000);

  // console.log('ram is done');
  // let i = 0;
  // while (i < 100) {
  //   console.log("helloj jii");
  //   i++;
  // }



  return (
    <div>
    

      <div>
        {data && (
          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-4 bg-slate-500">
            {/* images */}
            <div>
              <img className="h-[500px] p-4" src={data.Poster} alt="poster" />
            </div>

            <div className="space-y-2 py-4">
              <h1>General Information</h1>
              <h1>Title: {data.Title}</h1>
                <p> Year: {data.Year}</p>
                {/* <p>Rated: {data.Rated}</p> */}
                <p>RunTime: {data.Runtime}</p>
              <p>Genre: {data.Genre}</p>
              <p>Director: {data.Director}</p>
              <p>Writer: {data.Writer}</p>
              <p>Actors: {data.Actors}</p>
              <p>Plot: {data.Plot}</p>
              <p>Language: {data.Language}</p>
              <p>Country: {data.Country}</p>
              <p>Awards: {data.Awards}</p>
            </div>

            <div className="p-4 md:grid md:grid-cols-2 md:col-span-2">
              <p>
                <h1>Ratings:</h1>
                {data.Ratings.map((rating) => {
                  return (
                    <div>
                      <p>Source: {rating.Source}</p>
                      <p>Value: {rating.Value}</p>
                    </div>
                  );
                })}
              </p>
            <div>
              <p>Meta Score: {data.Metascore}</p>
              <p>Imdb RAting: {data.imdbRating}</p>
              <p>Imdb Votes: {data.imdbVotes}</p>
              <p>Type: {data.type}</p>
              <p>DVD: {data.DVD}</p>
              <p>BoxOffice: {data.BoxOffice}</p>
              <p>Production: {data.Production}</p>
              </div>
              </div>
            </div>
          
        )}
      </div>
    </div>
  );
};
export default Home;
