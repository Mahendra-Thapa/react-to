//for search the spider

import { useApiHooks } from "../../hooks/api_hooks";

const Detail = ({ id }) => {
  const [load, data, error] = useApiHooks({ i: id }, id);

  console.log(data);

  return (
    <div>
      
      <div>
  {data && (
    <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-slate-500">
      {/* Images */}
      <div className="p-4 ">
        <img className="h-auto " src={data.Poster} alt="poster" />
        <p className="m-2 p-2 bg-slate-200"><strong>Plot: </strong> {data.Plot}</p>
      </div>

      {/* General Information */}
      <div className="space-y-2  bg-slate-200 p-2 m-2">
        <h1>General Information</h1>
        <h1>Title: {data.Title}</h1>
        <p>Year: {data.Year}</p>
        <p>RunTime: {data.Runtime}</p>
        <p>Genre: {data.Genre}</p>
        <p>Director: {data.Director}</p>
        <p>Writer: {data.Writer}</p>
        <p>Actors: {data.Actors}</p>
       
        <p>Language: {data.Language}</p>
        <p>Country: {data.Country}</p>
        <p>Awards: {data.Awards}</p>
      </div>

      {/* Ratings and Additional Information */}
      <div className="p-2 m-2 md:grid md:grid-cols-2 md:col-span-2 bg-slate-200 ">
        {/* Ratings */}
        <div>
          <h1>Ratings:</h1>
          {data.Ratings.map((rating, index) => (
            <div key={index}>
              <p>Source: {rating.Source}</p>
              <p>Value: {rating.Value}</p>
            </div>
          ))}
        </div>
        
        {/* Additional Information */}
        <div>
          <p>Meta Score: {data.Metascore}</p>
          <p>Imdb Rating: {data.imdbRating}</p>
          <p>Imdb Votes: {data.imdbVotes}</p>
          <p>Type: {data.type}</p>
          <p>DVD: {data.DVD}</p>
          <p>Box Office: {data.BoxOffice}</p>
          <p>Production: {data.Production}</p>
        </div>
      </div>
    </div>
  )}
</div>

    </div>
  );
};
export default Detail;
