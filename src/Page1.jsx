import React from 'react';

const Page1 = () => {
  return (
    <div className="flex w-[1561.5px] h-screen">
        <div className="flex justify-center items-center w-full h-screen" style={{backgroundImage: 'url("https://images.pexels.com/photos/10051998/pexels-photo-10051998.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}>
          <button className="h-32 w-32 hover:cursor-pointer shadow-2xl shadow-slate-500 hover:animate-pulse bg-white rounded-full">
            <h1 className="text-center text-xl font-sans">PLAY<br/>REEL</h1>
          </button>
        </div>
    </div>
  );
};

export default Page1;
