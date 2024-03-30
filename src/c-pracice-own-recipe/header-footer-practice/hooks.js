import { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState("first value");  //when we call set it will rerander auto

  const [depend, setDepend] = useState(0);

  const [show , showChange] = useState ();

  const handleChange = (msg) => {
      showChange(()=>{
        console.log('ramu don ')
      })

    setText((prev) => {
      console.log(prev);
      return msg;
    });
  };

  const handleDepend = () => {
    setDepend((prev) => prev + 1);
  };

  //useed for rener the api data as we changed //it is hooks
// last line array shoud to write for the stop of the infinity render
//useEfect function call after the other function

  useEffect(() => {
    console.log("effect call");
    setText("sd;lsd;flkk;sfdl");   // it done to rerander 
  }, [depend]); 

  console.log("render");

  return (
    <div className="p-2">


      {show && <div>
        <h1>Hello friends it is a popup message</h1>
      </div>}

      <h1>{depend}</h1>
      <button
        onClick={handleDepend}
        className="px-2  border-4 border-black   bg-black text-white font-serif font-boldrounded-lg"
      >
        InCrement
      </button>
      <br />
      <br />
{/*    
      <button
        onClick={() => handleChange("lio")}
        className="px-2  border-4 border-black   bg-black text-white font-serif font-boldrounded-lg"
      >
        Click me
      </button>

      <h1>hello text----- {text}</h1> */}
    </div>
  );
};
export default Home;
