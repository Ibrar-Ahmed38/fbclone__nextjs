import React from 'react'
import "tailwindcss/tailwind.css";

const Homepage = () => {
    return (
        <div className="">
            <div className="flex bg-black ">
                <div className=" px-24 py-24 pt-40 mb-10">
                    <div className="mb-12">
                        <h2 className="text-3xl mb-2 text-white font-medium">Find</h2>
                        <h1 className="text-6xl text-white mb-4 font-bold "> Gay-Friendly male</h1>
                        <h1 className="text-6xl text-white font-bold ">Masseur near you</h1>
                    </div>

                    <div className="">
                    <div className="h-7.5 rounded-md border-2 bg-white mb-20 shadow">
                        <p className=" bg-white  bg-white text-gray-600 mb-5">city or postal code</p>
                        <p className="bg-white ">Cadriff, USA</p>
                        <div className="flex items-end justify-end mx-auto">
                            <button className="bg-red-700 rounded-md font-medium text-white mr-10 bg-white -mt-16 w-24 h-12 ">Search</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
