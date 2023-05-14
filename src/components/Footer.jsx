import React from 'react'

const Footer = () =>{
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-10 mx-auto flex items-center md:flex-row flex-col">
            <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h2 class="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">A SIMPLE ML APP ON</h2>
            <h1 class="md:text-3xl text-2xl font-medium title-font text-white">Bank Note Prediction</h1>
            </div>
            <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
            <button class="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
                <span class="ml-4 flex items-start flex-col leading-none">
                <span class="text-xs text-gray-500 mb-1">View the project</span>
                <span class="title-font font-medium">GitHub</span>
                </span>
            </button>
            <button class="bg-gray-100inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
                <span class="ml-4 flex items-start flex-col leading-none">
                <span class="text-xs text-gray-500 mb-1">Contribute to the project</span>
                <span class="title-font font-medium">GitHub</span>
                </span>
            </button>
            </div>
        </div>
        </section>
  )
}

export default Footer
