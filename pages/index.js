import "tailwindcss/tailwind.css";
import {envelope} from '@fortawesome/fontawesome-free' 
export default function Home() {

  return (
   <> 
   <div className="form bg-red-700 h-52">
     <h1 className="text-center font-bold pt-8">Mrs MASSEUR</h1>
   <div className="md:w-full pt-14 flex items-center -mt-8 rounded-md justify-center">
      <div className="bg-white p-8 rounded shadow-2x w-1/3 static">
         <h1 className="text-center text-2xl text-gray-400 mb-4">Create an account</h1>
          <h1 className="text-center text-3xl  mb-8">Sign Up Today</h1>
         <form className="space-y-4 ">
           <div className="">
             <label className="block">Select Account type</label>
             <input type="text" icon={envelope} className="w-full outline-none h-10 bg-gray-50 border-blue-400" placeholder="I'm a messeur" />
           </div>

           <div>
             <label className="block">Email</label>
             <input type="text"  className="w-full outline-none bg-gray-50 h-10  border-blue-400" placeholder="daniel.botsman@gmail.com" />
           </div>

             <div>
             <label className="block">Password</label>
             <input type="password" className="w-full outline-none h-10 bg-gray-50 border-blue-400" placeholder="******" />
           </div>


             <div>
             <label className="block">Confrim password</label>
             <input type="password" className="w-full outline-none h-10 bg-gray-50 border-blue-400" placeholder="******" />
           </div> 

         </form>

         <div className="pt-3">
           <button className="block w-3/4	items-center justify-center mx-auto text-white mt-2  bg-red-700 w-40 h-10 hover:bg-red-800">Create an account</button>
         </div>

         <h1 className="text-gray-500 mt-4 text-center">Have an account? <span className="text-red-700">Sign in</span></h1>
      </div>
   </div>
   </div>
  
   </>
  );
}
