//Learn about the useState (making increment, popup and header)

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {
  HiArrowCircleLeft,
  HiArrowCircleRight,
  IconName,
} from "react-icons/hi";

const Home = () => {
  const [show, showSet] = useState();
  const handleChange = () => {
    showSet((prev) => !prev);
  };

  // useEffect(() =>{
  //   console.log('Ram is a dongi')
  // }, [])

  // console.log('ramu done');

  //increment and decrement
  const [shows, numChange] = useState(0);

  const handleInc = () => {
    numChange((prev) => prev + 1);
  };

  const handleDec = () => {
    numChange((prev) => prev - 1);
  };

  //for like a pop msg
  // const msg = prompt('enter the addmin');

  const [pop, popChange] = useState();

  const handlePop = () => {
    popChange((prev) => !prev);
  };

  // const [mio, setMio] = useState(null);

  // // let mio = null;
  // setTimeout(() => {
  //   setMio ('null bhayana')
  //   // mio = ' null bhayana'
  // }, 5000);
  // console.log('2 sec is done');

  // axios.get('')

  // setTimeout(() => {
  //   console.log('print the value');
  // }, 2000);

  // console.log('ram is done');
  // let i = 0;
  // while (i < 100) {
  //   console.log("helloj jii");
  //   i++;
  // }

  return (
    <div className="relative ">
      <h1>This button for the practice of like a popup message</h1>
      {pop && (
        <div className="h-[180px] top-[200px]  left-[200px] w-[300px] mx-auto bg-blue-400 absolute p-4 space-y-16 ">
          <h1>show the message can be access or not </h1>
          <button
            onClick={handlePop}
            className=" text-xl bg-black text-white px-2 rounded-full m-2"
          >
            Cancle{" "}
          </button>
          <button
            onClick={handlePop}
            className=" text-xl bg-black text-white px-2 rounded-full"
          >
            Ok{" "}
          </button>
        </div>
      )}

      <button
        onClick={handlePop}
        className=" text-xl bg-black text-white px-2 mx-5 rounded-full"
      >
        Click me{" "}
      </button>

      <div className="px-2 space-y-2 ">
        <h1>increament and decrement practice</h1>
        <h1>This value will change "{shows}"</h1>

        <button
          onClick={handleInc}
          className=" text-2xl bg-black text-white px-2 rounded-full"
        >
          Increment
        </button>
        <button
          onClick={handleDec}
          className=" text-2xl bg-black text-white px-2 rounded-full"
        >
          Decrement{" "}
        </button>
      </div>

      <div className=" items-start gap-8 mt-8">
        <h1>like to make header using the usestate</h1>
        {show ? (
          <button onClick={handleChange}>
            <HiArrowCircleLeft size={50} />{" "}
          </button>
        ) : (
          <button onClick={handleChange}>
            <HiArrowCircleRight size={50} />{" "}
          </button>
        )}
        {show && (
          <div>
            <h1>Ram is a good boy</h1>
            <h1>Ram is a good boy</h1>
            <h1>Ram is a good boy</h1>
            <h1>Ram is a good boy</h1>
            <h1>Ram is a good boy</h1>
            <h1>Ram is a good boy</h1>
          </div>
        )}
      </div>
      {/* <h1>{mio &&  <p>{mio}</p>}</h1> */}
    </div>
  );
};
export default Home;
