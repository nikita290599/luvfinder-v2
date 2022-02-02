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
  const [mintrade,setMinTrade]=useState(0);
  const [mintradeIndex,setMinTradeIndex]=useState(0);
  const [maxtrade,setMaxTrade]=useState(0);
  const [maxtradeIndex,setMaxTradeIndex]=useState(0);
  
  

  // MOUNTING
  useEffect(() => {

    async function onSearchSubmit() {

      const response =await axios.get(url);
      updateResponse(response.data.result[0]);
      const res=await axios.get(`https://luvfinder.luvinu.io/api/coinMarket/DOGE`);
      setGraph(res.data);
 
    }
    onSearchSubmit();
  }, [])
  useEffect(()=>{
    if(respData){
      respData.maindata.sort((a, b) => (a.last_trade_price > b.last_trade_price) ? 1 : -1)
     
    }
   },[respData])

 
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

  // CALLING AFTER EVERY 1 MIN 
  useEffect(()=>{
    async function onSearchSubmit() {

      const response =await axios.get(url);
      updateResponse(response.data.result[0]);
     
    }
    onSearchSubmit();
  },[bool])



  useEffect(() => {
    async function onSubmit() {
      seturl(`${BASE_URL}${currentCrypto}-${currency}`)
      const response = await axios.get(`${BASE_URL}${currentCrypto}-${currency}`);
      updateResponse(response.data.result[0]);
      const res = await axios.get(`https://luvfinder.luvinu.io/api/coinMarket/${currentCrypto}`);
      setGraph(res.data.result[0]);
      
  
    }
    onSubmit();
  }, [currentCrypto, currency]);

  if (respData) {
    return (
      <div className='container-fluid'>
        <Navbar updateCrypto={updateCrypto} currentCrypto={currentCrypto} cryptoExchanges={cryptoExchanges} currency={currency} setCurrency={setCurrency} index={index} setIndex={setIndex}  />
        <Body mintrade={mintrade} graphdata={graphdata} updateCrypto={updateCrypto} currentCrypto={currentCrypto} cryptoExchanges={cryptoExchanges} response={respData} index={index} setIndex={setIndex} updateResponse={updateResponse} currency={currency} setCurrency={setCurrency} />

      </div>
    );
  }
  else {
    return (<div className="w-100  d-flex justify-content-center  " style={{height:"100vh",backgroundColor:"#FFD580"}}>
      <div className="con d-flex justify-content-center align-middle">
        <div className="corgi" style={{marginTop:"27vh"}}>

          <div className="head">
            <div className="ear ear--r"></div>
            <div className="ear ear--l"></div>

            <div className="eye eye--left"></div>
            <div className="eye eye--right"></div>

            <div className="face">
              <div className="face__white">
                <div className=" face__orange face__orange--l"></div>
                <div className=" face__orange face__orange--r"></div>
              </div>
            </div>

            <div className="face__curve"></div>

            <div className="mouth">

              <div className="nose"></div>
              <div className="mouth__left">
                <div className="mouth__left--round"></div>
                <div className="mouth__left--sharp"></div>
              </div>

              <div className="lowerjaw">
                <div className="lips"></div>
                <div className="tongue test"></div>
              </div>

              <div className="snout"></div>
            </div>
          </div>

          <div className="neck__back"></div>
          <div className="neck__front"></div>

          <div className="body">
            <div className="body__chest"></div>
          </div>

          <div className="foot foot__left foot__front foot__1"></div>
          <div className="foot foot__right foot__front foot__2"></div>
          <div className="foot foot__left foot__back foot__3"></div>
          <div className="foot foot__right foot__back foot__4"></div>

          <div className="tail test"></div>
        </div>


      </div>
    </div>)
  }


}

export default App;
