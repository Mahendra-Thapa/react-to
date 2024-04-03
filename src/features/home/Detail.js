//for search the spider


import { useApiHooks } from "../../hooks/api_hooks";

const Detail = ({ id }) => {
  const [load, data, error, setTitle, show, setShow] = useApiHooks({ i: id }, id);


  console.log(show);

  console.log(data);

  if (load) {
    return (
      <h1>
        <lottie-player
          src="https://lottie.host/0320bc6c-5973-4ae6-9ec1-845cf87b73a4/RTXOENTsft.json"
          background="##ffffff"
          speed="2"
          loop
          autoplay
          direction="1"
          mode="normal"
          className="h-[200px] w-[200px]"
        ></lottie-player>
      </h1>
    );
  }

  return (
    <div>
      <div>
        {data && show && (
          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-blue-gray-500 ">
            {/* Images */}
            <div className="p-4 ">
              <img className="h-auto " src={data.Poster} alt="poster" />
              <p className="m-2 p-2 bg-slate-200">
                <strong>Plot: </strong> {data.Plot}
              </p>
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
            <div className="p-2 m-2 md:grid md:grid-cols-2 md:col-span-2  ">
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
            <div className="my-2">
              <button
                onClick={() => setShow(false)}
                className="px-3 text-xl font-bold bg-slate-800 text-white rounded border-4 border-black  hover:bg-slate-400 hover:text-black"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Detail;
