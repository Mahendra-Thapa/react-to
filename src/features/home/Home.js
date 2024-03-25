import { useState } from "react";


const Home = () => {

const {text, setText} = useState('first value')
// console.log(mi);
// const [a, b] = mi;
// console.log(a)
// console.log(b)


  let myMsg = 'some';
  const handleChange = (msg) => {
    setText (msg);
    // console.log('call');
    // myMsg = 'change on';
    return msg;
  }

  console.log('render');

  return (
    <div className="p-2">

      <button onClick={() => handleChange('lio')} className="px-2  border-4 border-black  rounded-lg bg-black text-white font-serif font-boldrounded-lg">Click me</button>

      <h1>hello text {text}</h1>


    </div>
  )
}
export default Home