import React, { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css';


function App() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [respData, updateResponse] = useState(null);
  const [url, seturl] = useState(`${BASE_URL}DOGE-USD`)
  const [currency, setCurrency] = useState("USD")
  const [index, setIndex] = useState(0);
  const cryptoExchanges = ['DOGE', 'SHIB', "MIM", "SPELL", "BABYDOGE", "ELON", "SAMO", "CATE", "HOGE", "DOBO"];
  const [currentCrypto, updateCrypto] = useState("DOGE");
  const [bool, setBool] = useState(0);
  const [sec, setSec] = useState(56);

  const [graphdata, setGraph] = useState(null);

  // MOUNTING
  useEffect(() => {

    async function onSearchSubmit() {
      // console.log(currentCrypto);
      // const response =await axios.get(url);
      // updateResponse(response.data.result[0]);
      // const res=await axios.get(`https://luvfinder.luvinu.io/api/coinMarket/DOGE`);
      // setGraph(res.data.result[0]);
      // console.log("graph",graphdata);
      const requestOne = axios.get(url);
      const requestTwo = axios.get(`https://luvfinder.luvinu.io/api/coinMarket/DOGE`);

      axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        const responseOne = responses[0]

        const responseTwo = responses[1]
        updateResponse(responseOne.data.result[0]);
        setGraph(responseTwo.data.result[0]);
        // use/access the results 
      })).catch(errors => {
        console.log(errors);
        // react on errors.
      })

    }
    onSearchSubmit();
  }, [])
  // Timer logic
  useEffect(() => {
    function timer() {
      if (sec > 0) {
        setSec(sec - 1)
      }
      else {
        setSec(59)
        if (bool === 0) setBool(1)
        else setBool(0)
      }

    }
    const timerId = setInterval(() => timer(), 1000);
    return () => clearInterval(timerId);
  });

  // // CALLING AFTER EVERY 1 MIN 
  // useEffect(()=>{
  //   async function onSearchSubmit() {

  //     const response =await axios.get(url);
  //     updateResponse(response.data.result[0]);
  //   }
  //   onSearchSubmit();
  // },[bool])



  useEffect(() => {
    async function onSubmit() {
      // seturl(`${BASE_URL}${currentCrypto}-${currency}`)
      // const response = await axios.get(`${BASE_URL}${currentCrypto}-${currency}`);
      // await updateResponse(response.data.result[0]);
      // const res = await axios.get(`https://luvfinder.luvinu.io/api/coinMarket/${currentCrypto}`);
      // setGraph(res.data.result[0]);

      const requestOne = axios.get(url);
      const requestTwo = axios.get(`https://luvfinder.luvinu.io/api/coinMarket/${currentCrypto}`);

      axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        const responseOne = responses[0]

        const responseTwo = responses[1]
        updateResponse(responseOne.data.result[0]);
        setGraph(responseTwo.data.result[0]);
        // use/access the results 
      })).catch(errors => {
        console.log(errors);
        // react on errors.
      })
    }
    onSubmit();
  }, [currentCrypto, currency]);
  
  if(respData){
    return (
      <div className='container-fluid'>
        <Navbar updateCrypto={updateCrypto} currentCrypto={currentCrypto} cryptoExchanges={cryptoExchanges} currency={currency} setCurrency={setCurrency} index={index} setIndex={setIndex} respData={respData} />
        <Body graphdata={graphdata} currentCrypto={currentCrypto} cryptoExchanges={cryptoExchanges} response={respData} index={index} updateResponse={updateResponse} />
  
      </div>
    );
  }
  else {
    return (<div className="w-100 d-flex justify-content-center ">
     <div className="main">
<span className="stand"></span>
<div className="cat">
 <div className="body"></div>
 <div className="head">
   <div className="ear"></div>
 <div className="ear"></div>
 </div>
 <div className="face">
  <div className="nose"></div>
 <div className="whisker-container">
   <div className="whisker"></div>
   <div className="whisker"></div>
 </div>
 <div className="whisker-container">
   <div className="whisker"></div>
   <div className="whisker"></div>
 </div>
 </div>
 <div className="tail-container">
  <div className="tail">
    <div className="tail">
      <div className="tail">
        <div className="tail">
          <div className="tail">
            <div className="tail">
              <div className="tail"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</div>
</div>

    </div>)
}
  
 
}

export default App;
