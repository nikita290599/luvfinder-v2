import NumberFormat from "react-number-format";
import currency from "../currency.json";
import { useRef, useState, useEffect } from 'react';
import BigCard from "./BigCard";
import Card from "./Card";
import shiba from "../images/min.png";
import curr from "../currency.json"
import logo1 from "../images/1.png"
import logo2 from "../images/2.png"
import logo3 from "../images/3.png"
import logo4 from "../images/4.png"
import logo5 from "../images/5.png"
import logo6 from "../images/6.png"
import logo7 from "../images/7.png"
import logo8 from "../images/8.png"
import logo9 from "../images/9.png"
import logo10 from "../images/10.png"
import logo11 from "../images/11.png"
import logo12 from "../images/12.png"
import logo13 from "../images/13.png"
import logo14 from "../images/14.png"
import logo15 from "../images/15.png"
import logo16 from "../images/16.png"
import logo17 from "../images/17.png"
import logo18 from "../images/18.png"
import logo19 from "../images/19.png"
import logo20 from "../images/20.png"
import logo21 from "../images/21.png"
import logo22 from "../images/22.png"
import logo23 from "../images/23.png"
import logo24 from "../images/24.png"
import logo25 from "../images/25.png"
import doge from "../images/doge.png"
import shib from "../images/shiba.png"
import mim from "../images/mim.png"
import spell from "../images/spell.png"
import babydoge from "../images/babydoge.png"
import elon from "../images/elon.png"
import samo from "../images/samo.png"
import cate from "../images/cate.png"
import hoge from "../images/hoge.png"
import dobo from "../images/doge.png"
import paws from "../images/paws.png"
import "../css/Body.css"

function Body(props) {
  const chartRef = useRef();


  const images = {
    "Binance": logo1,
    "Coinbase Exchange": logo2,
    "FTX": logo3,
    "Kraken": logo4,
    "KuCoin": logo5,
    "Huobi Global": logo6,
    "Bitfinex": logo7,
    "Gate.io": logo8,
    "Crypto.com Exchange": logo9,
    "Gemini": logo10,
    "Bybit": logo11,
    "Poloniex": logo12,
    "MEXC": logo13,
    "Bittrex": logo14,
    "LBank": logo15,
    "Blockchain.com": logo16,
    "Okcoin": logo17,
    "eToroX": logo18,
    "WhiteBIT": logo19,
    "Phemex": logo20,
    "UniSwap": logo21,
    "PancakeSwap": logo22,
    "Upbit": logo23,
    "Korbit": logo24,
    "BKEX": logo25

  }
  const cryptonames = {
    "DOGE": "Dogecoin",
    "SHIB": "Shiba-inu",
    "MIM": "Magic Internet-money",
    "SPELL": "Spell token",
    "BABYDOGE": "Babydoge-coin",
    "ELON": "Dogelon-mars",
    "SAMO": "Samoyedcoin",
    "CATE": "Catecoin",
    "HOGE": "Hoge-finance",
    "DOBO": "Dogebonk"
  }
  const currencyNames = {
    "USD": "U.S. Dollar",
    "INR": "Indian Rupees",
    "JPY": "Japanese Yen",
    "EUR": "European Union",
    "RUB": "Russian Ruble",
    "CAKE":"CAKE",
    "BTC":"BTC",
    "BNB":"BNB",
    "ETH":"ETH"
  
  };
  const cryptImg = {
    'DOGE': doge, 'SHIB': shib, "MIM": mim, "SPELL": spell, "BABYDOGE": babydoge, "ELON": elon, "SAMO": samo, "CATE": cate, "HOGE": hoge, "DOBO": dobo
  }
  function displayCurrencies() {
    return currency.results.map((item, index) => {
      return (

        <div key={index} className="dropdown-item" onClick={() => { props.setCurrency(item.abbr); props.setIndex(index) }} >{item.abbr}</div>

      )
    })
  }

  // Function to display available meme coins
  function displayCryptos() {
    return props.cryptoExchanges.map((item, index) => {
      return (

        <div key={index} className="dropdown-item" onClick={() => { props.updateCrypto(item) }} >{item}</div>

      )
    })

  }



  const render = () => {
    return (

      props.response.maindata.map((item, index) => {
        return (
          <tr key={item.id}>
            <th scope="row">{index + 1}</th>
            <td className="d-flex align-items-left justify-content-start" ><img className='rounded-circle' src={images[item.name]} alt={"logo" + index} width="18px" height="23px"></img><span style={{ fontWeight: "600" }}>{item.name}</span></td>
            <td className="LTC" ><span style={{ fontWeight: "600", marginRight: "5px" }}>{curr.results[props.index].symbol}</span> <span>{item.last_trade_price}</span></td>
            <td className="BID" > {(item.bid_percentage)} %</td>
            <td><span style={{ fontWeight: "600", marginRight: "5px" }}>{curr.results[props.index].symbol}</span><NumberFormat
              value={Math.round(item.volume * 100) / 100}
              displayType={'text'}
              style={{ display: "inline" }}
              thousandSeparator={true}
              renderText={(value, props) => <div {...props}>{value}</div>}
            /> </td>



          </tr>

        )
      })
    );
  }
  if ((props.response) && (props.graphdata)) {

    return (

      <div className="container-fluid conta">
        <div className="row" style={{ padding: "0 14px 0 14px" }}>
          <div data-aos="fade-right" className="col-lg-8 col-md-7 col-xs-12 d-flex flex-column justify-content-center  align-items-left">
            <div className="h w-100 ">Top Memes Tokens by Market Capitalization</div>
            <div className="small-heading">This page lists the top meme coins and tokens. These projects are listed by market capitalization with the largest first and then descending in order.</div>
          </div>
          <div className="col-lg-4 col-md-5 col-xs-12">
            <img data-aos="fade-left" src={shiba} width="100%" alt="BANNER"></img>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-xs-12" data-aos="fade-up"><Card content={"Last 5 mins"} currentCrypto={props.currentCrypto} image={cryptImg[props.currentCrypto]} symbol={curr.results[props.index].abbr} data={props.response.previousdata.last5Mins} /></div>
            <div className="col-lg-2 col-md-6 col-xs-12" data-aos="fade-up"><Card content={"Last 1 hour"} currentCrypto={props.currentCrypto} image={cryptImg[props.currentCrypto]} symbol={curr.results[props.index].abbr} data={props.response.previousdata.last1Hour} /></div>
            <div id="market" className="col-lg-3 col-md-12 col-xs-12 m-auto" data-aos="fade-up"><BigCard content={"Best Price to Trade"} currentCrypto={props.currentCrypto} image={cryptImg[props.currentCrypto]} symbol={curr.results[props.index].abbr} data={Math.round(props.response.previousdata.avg_trage * 10000000000) / 10000000000} /></div>
            <div className="col-lg-2 col-md-6 col-xs-12" data-aos="fade-up"><Card content={"Last 1 Day"} currentCrypto={props.currentCrypto} image={cryptImg[props.currentCrypto]} symbol={curr.results[props.index].abbr} data={props.response.previousdata.last24Hours} /></div>
            <div className="col-lg-2 col-md-6 col-xs-12" data-aos="fade-up"><Card content={"Last 7 Days"} currentCrypto={props.currentCrypto} image={cryptImg[props.currentCrypto]} symbol={curr.results[props.index].abbr} data={props.response.previousdata.last7Days} /></div>

          </div>


        </div>

        <div className="row justify-content-center" style={{ paddingTop: "40px",paddingBottom:"50px" }}>

          <div className="col-lg-4 col-md-4 col-xs-12" data-aos="fade-up">
            <div className="card pull-up mt-5 " style={{ width: '100%' }}>
               <div className="card-body ">
             
                <h3 style={{ color: "#ffa800" }}> Best place to sell at:</h3>
                <h5 className="card-title d-flex ">
                <img src={images[props.response.maindata[props.response.maindata.length-1].name]} alt={""} width="30px" height="30px"></img>
                <div style={{ paddingLeft: "10px" ,textAlign:"left" }}>
                  <div style={{ fontWeight: "700", fontSize: "1rem" }}>{props.response.maindata[props.response.maindata.length-1].name}</div>
                  <div style={{ fontSize: "14px", color: "#787b86" }}>{cryptonames[props.currentCrypto]}/{currencyNames[props.currency]}</div>
                </div>

              </h5>
                <h4 className="card-text" style={{ fontSize: "25px", fontWeight: "700",whiteSpace:'nowrap' }}>{curr.results[props.index].symbol} {props.response.maindata[props.response.maindata.length-1].last_trade_price}</h4>
               
              </div>
            </div>
          </div>

          
          <div className="col-lg-4 col-md-4 col-xs-12" data-aos="fade-up">
          <div className="card pull-up mt-5" style={{ width: '100%' }}>
               <div className="card-body ">
              
                <h3 style={{ color: "#ffa800" }}> Best place to purchase at:</h3>
                <h5 className="card-title d-flex">
                <img src={images[props.response.maindata[0].name]} alt={""} width="30px" height="30px"></img>
                <div style={{ paddingLeft: "10px",textAlign:"left" }}>
                  <div style={{ fontWeight: "700", fontSize: "1rem" }}>{props.response.maindata[0].name}</div>
                  <div style={{ fontSize: "14px", color: "#787b86" }}>{cryptonames[props.currentCrypto]}/{currencyNames[props.currency]}</div>
                </div>

              </h5>
                <h4 className="card-text" style={{ fontSize: "25px", fontWeight: "700",whiteSpace:'nowrap' }}>{curr.results[props.index].symbol} {props.response.maindata[0].last_trade_price}</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-xs-12" data-aos="fade-up">
          <div className="card pull-up mt-5 " style={{ width: '100%' }}>
               <div className="card-body ">
              
                <h5 style={{ color: "#ffa800" ,fontSize:"22px"}}> The profit you earn at 1 {props.currentCrypto} Coin</h5>
                <h5 className="card-title d-flex">
                <img src={cryptImg[props.currentCrypto]} alt={""} width="30px" height="30px"></img>
                <div style={{ paddingLeft: "10px",textAlign:"left" }}>
                  <div style={{ fontWeight: "700", fontSize: "1rem" }}>{props.currentCrypto}/{props.currency}</div>
                  <div style={{ fontSize: "14px", color: "#787b86" }}>{cryptonames[props.currentCrypto]}/{currencyNames[props.currency]}</div>
                </div>

              </h5>
                <h4 className="card-text" style={{ fontSize: "25px", fontWeight: "700",whiteSpace:'nowrap' }}>{curr.results[props.index].symbol} {props.response.maindata[props.response.maindata.length-1].last_trade_price-props.response.maindata[0].last_trade_price}</h4>
                
              </div>
            </div>
          </div>



        </div>

        {/* buttons */}

        <div className="dropdown nav-item" style={{ display: "inline-block" }}>
          <button className="dropdown-toggle nav-link btn-coin" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {currency.results[props.index].abbr}
          </button>
          <div className="dropdown-menu" style={{ backgroundColor: "white" }} aria-labelledby="dropdownMenuButton">
            {displayCurrencies()}
          </div>
        </div>
        <div className="dropdown nav-item" style={{ display: "inline-block" }}>
          <button className="dropdown-toggle  nav-link btn-cryp" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {props.currentCrypto}
          </button>
          <div className="dropdown-menu " style={{ backgroundColor: "white" }} aria-labelledby="dropdownMenu">
            {displayCryptos()}
          </div>
        </div>


        {/* buttons end */}
        {/* table starts */}
        <div className="table-responsive  mb-5" data-aos="fade-up">
          <table className="table " >
            <thead>
              <tr>
                <th className='pointer rounded-top align-middle' scope="col">#</th>
                <th scope="col">Platform</th>
                <th id="lastTrade" scope="col" style={{ width: "30%" }}>Last Traded Price</th>
                <th id="Bid" scope="col">Bid Percentage</th>
                <th scope="col">Volume</th>
              </tr>
            </thead>
            <tbody>
              {render()}
            </tbody>
          </table>
        </div>
        <div id="mobile-footer" className="w-100" >
          <div className="dropdown " style={{ display: "inline-block" }}>
            <button className="dropdown-toggle nav-link btn-coin" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ borderRadius: "10px", padding: "8px 15px 8px 15px" }}>
              {currency.results[props.index].abbr}
            </button>
            <div className="dropdown-menu" style={{ backgroundColor: "white" }} aria-labelledby="dropdownMenuButton">
              {displayCurrencies()}
            </div>
          </div>
          <div className="dropdown ml-3" style={{ display: "inline-block" }}>
            <button className="dropdown-toggle  nav-link btn-cryp" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ borderRadius: "10px", padding: "8px 15px 8px 15px" }}>
              {props.currentCrypto}
            </button>
            <div className="dropdown-menu " style={{ backgroundColor: "white" }} aria-labelledby="dropdownMenu">
              {displayCryptos()}
            </div>
          </div>
        </div>

        <a className='telegram-fixed ' href="http://t.me/Luvfindingbot" target="_blank" rel="noreferrer" ><i className="tooltip" style={{ color: "white", backgroundColor: "#229ED9", fontSize: "22px" }} className="fab fa-telegram-plane" ></i></a>
      </div>

    );
  }
  else {
    return (<div className="w-100 d-flex justify-content-center ">
     
    </div>)
  }


}
export default Body;