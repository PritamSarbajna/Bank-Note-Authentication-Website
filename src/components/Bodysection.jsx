import React, { useState } from 'react';

const Bodysection = () => {
  const [variance, setVariance] = useState(0.0);
  const [skewness, setSkewness] = useState(0.0);
  const [curtosis, setCurtosis] = useState(0.0);
  const [entropy, setEntropy] = useState(0.0);

  const [responseJson, setResponseJson] = useState(null);

  const handleSubmit = async () => {
    const url = 'https://banknote-api.onrender.com/predict/'; // Replace with your API endpoint URL

    const data = {
      variance: parseFloat(variance),
      skewness: parseFloat(skewness),
      curtosis: parseFloat(curtosis),
      entropy: parseFloat(entropy)
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();

    setResponseJson(responseData);
  }

  const responseString = JSON.stringify(responseJson, null, 2); // Convert responseJson to a string
  const responseObject = JSON.parse(responseString); // Parse the string back to a JavaScript object

  return (
    <div>
      <section class="text-gray-600 body-font bg-gray-900 relative">
        <div class="container px-5 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#eee]">Bank Note Prediction</h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
              <div class="mb-6">
                  <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Variance</label>
                  <input
                    type="number"
                    value={variance}
                    onChange={(e) => setVariance(e.target.value)}
                    id="base-input" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
              </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="mb-6">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skewness</label>
                    <input
                      type="number"
                      value={skewness}
                      onChange={(e) => setSkewness(e.target.value)}
                      id="base-input" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
              </div>
              <div class="p-2 w-1/2">
              <div class="mb-6">
                  <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Curtosis</label>
                  <input
                    type="number"
                    value={curtosis}
                    onChange={(e) => setCurtosis(e.target.value)}
                    id="base-input" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
              </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="mb-6">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Entropy</label>
                    <input
                      type="number"
                      value={entropy}
                      onChange={(e) => setEntropy(e.target.value)}
                      id="base-input" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
              </div>
              <div class="p-2 w-full">
                <button onClick={handleSubmit} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
              </div>
            </div>

            {responseObject? (
              <div class="w-full text-center">
                <p class="leading-normal text-2xl py-9 text-[#fff]">
                  Prediction : {responseObject.prediction}
                </p>
              </div>
            ): 
            (
              <div class="w-full text-center">
                <p class="leading-normal text-2xl py-9 text-[#fff]">
                  Get your prediction here
                </p>
              </div>
            )}
          </div>
        </div>
  
      </section>

    </div>
  );
}

export default Bodysection;
