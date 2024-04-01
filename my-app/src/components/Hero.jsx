import React, { useContext, useState } from "react";
import img1 from "../assets/menu.png";
import img2 from "../assets/add.png";
import img3 from "../assets/profile.png";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import { FaRegImages } from "react-icons/fa";
import Card from "./Card";
import { FaMicrophone } from "react-icons/fa";
import add from "../assets/add.png";
import { context } from "./Context";

const Hero = () => {

const [chat , setChat] = useState(false);

const {onSent , recentPrompt , showResult , loading , resultData , setInput , input } = useContext(context)

  return (
    <>
      <div className="container flex">
        <div className="h-screen w-[150px] flex flex-col justify-between items-center bg-gray-200 py-16">
          <span className=" flex flex-col items-center gap-28">
            <img onClick={()=>setChat(prev=>!prev)} src={img1} alt="" className="h-[30px] w-[30px] " />
            
            {chat? <div className=" mt-3 inline-flex items-center gap-2 py-2 px-4 rounded-3xl bg-slate-500 font-light  text-gray-200 cursor-pointer ">
             
             <img src={add} alt="" className="h-[25px] w-[25px] " />
             <p className=" text-xs">what is react..</p>
           </div> : null }
            
            <img src={img2} alt="" className="h-[30px] w-[30px]" />
          </span>

          <span className="flex flex-col gap-3">
            <FaRegQuestionCircle />
            <LuAlarmClock />
            <IoSettings />
          </span>
        </div>

        <div className="container flex flex-col ">
          <div className="flex justify-between  h-[98px] px-10 py items-center text-lg text-pretty">
            {" "}
            <h1>CRICLE</h1>
            <span>
              <img
                src={img3}
                alt=""
                className=" size-14 border-2 border-solid rounded-full"
              />
            </span>
          </div>
        
    
        {!showResult ? <> <div className="container  flex flex-col items-baseline pl-80 gap-2 py-25">

<h1 className="text-4xl">Hello, Rose.</h1>
<h3 className="text-6xl">How May i Help You?</h3>
<div className="flex gap-5 mt-10">
  <Card para="hey well this is just to check the component rendering is working or not" />
  <Card para="hey well this is just to check the component rendering is working or not" />
  <Card para="hey well this is just to check the component rendering is working or not" />
  <Card para="hey well this is just to check the component rendering is working or not" />
</div>

</div></>:
<>
<div className="container h-3/4 w-2/3 mx-auto  flex flex-col items-center justify-center p-4 object-contain">
  
  <h2>{recentPrompt}</h2>
  <div>
    {
      loading ? <div>glamourous</div>:<>
      <h1>Your Result</h1>
      <p dangerouslySetInnerHTML={{__html: resultData}} className="text-sm"></p>
      </> }
    
  </div>
</div>
</>}



        
         
          <div className="my-16 flex gap-5 items-center mx-auto">
              <input
                placeholder="Enter your prompt here"
                type="text"
                className="border-2 w-[800px] border-black rounded-3xl p-2 "
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={()=>onSent()}><FaMicrophone/></button>
              
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
