import axios from "axios";
import { useState } from "react";

function Hero() {

  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState (false)
  

  const handleInputs = (e) =>{
    console.log(e.target.value);
    setLongUrl(e.target.value)

  }

  const shorten = (e) => {
    axios
    .get(`https://api.shrtco.de/v2/shorten?url=${longUrl}`)
    .then((res) => {
      console.log(res)
      // Storing Data From Input Url And Convert to Short
    setShortUrl(res.data.result.full_short_link);
    }).catch((err) =>{
      alert(`Error Checking URL ${err.message}`)
    })
    e.preventDefault()
  };

  return (
    <section className="h-screen relative">
      {/* Input Section */}
      <div className="flex flex-col items-center space-y-6 py-20">
        <h2 className="text-3xl font-semibold">URL Shortner</h2>
        {/* Form div */}
        <div className="" >
          <form onSubmit={shorten} className="space-y-2">
            <div >
              <input 
              type="text" 
              name="url" id="url" 
              placeholder="Enter your Url" 
              autoComplete="off" 
              onChange={handleInputs}
              className="p-2 rounded-lg focus:outline-none border border-black font-medium tracking-wider"/>
            </div>
            <div className="text-center">
              <input type="submit" name="Submit" 
              className="py-2 px-6 bg-black text-white font-medium tracking-wide rounded-lg cursor-pointer"
              />
            </div>
          </form>

        </div>
        {/* Result Div */}
        <div className={shortUrl ? "block" : "hidden"}>
          <div className='border border-black rounded-lg p-2 flex items-center space-x-2'>
          <p className="text-gray-600">{shortUrl}</p>
          {/* <p className="border border-black rounded-md px-2 py-1 bg-gray-400 cursor-pointer text-white "
          onClick={}
          >copy</p> */}
          </div>
        </div>
      </div>

      {/* Result Section */}
      <div className="absolute right-10 top-10 transform rotate-90 mt-48 ">
        <h2 className="text-8xl font-bold opacity-10 tracking-wider">devSubha</h2>
      </div>
    </section>
  );
}

export default Hero;
