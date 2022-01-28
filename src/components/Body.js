import NumberFormat from "react-number-format";
import { useRef } from 'react';
import { Bar, getDatasetAtEvent } from 'react-chartjs-2';
import Card from "./Card";
import shiba from "../images/shib.png";
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
import { MyGraph } from "./MyGraph";
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
    const cryptImg={
        'DOGE':doge,'SHIB':shib,"MIM":mim, "SPELL":spell,"BABYDOGE":babydoge,"ELON":elon,"SAMO":samo,"CATE":cate,"HOGE":hoge,"DOBO":dobo 
    }
    const onClick = (event) => {
        console.log(getDatasetAtEvent(chartRef.current, event));
      }
    const render = () => {
        return (

            props.response.maindata.map((item, index) => {
                return (
                    <tr key={item.id}>
                        <th scope="row">{index + 1}</th>
                        <td ><img className='rounded-circle' src={images[item.name]} alt={"logo" + index} width="10%"></img><span>{item.name}</span></td>
                        <td>{curr.results[props.index].symbol} {item.last_trade_price}</td>
                        <td> {(item.bid_percentage)} %</td>
                        <td><NumberFormat
                            value={Math.round(item.volume * 100) / 100}
                            displayType={'text'}
                            prefix={curr.results[props.index].symbol + " "}
                            thousandSeparator={true}
                            renderText={(value, props) => <div {...props}>{value}</div>}
                        /> </td>



                    </tr>

                )
            })
        );
    }
    if ((props.response) && (props.graphdata) ) {
        
        return (

            <div className="cont conta">
                <div className="row">
                    <div className="col-lg-8 col-md-7 col-xs-12 d-flex flex-column justify-content-center  align-items-left">
                        <div className="h w-100 ">Top Memes Tokens by Market Capitalization</div>
                        <div className="small-heading">This page lists the top meme coins and tokens. These projects are listed by market capitalization with the largest first and then descending in order.</div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-xs-12">
                        <img src={shiba} width="100%" alt="BANNER"></img>
                    </div>
                </div>
                <div className="container-fluid">
                <div className="row m-auto">
                    <div className="col-lg-4 col-md-6 col-xs-1" data-aos="fade-up"><Card content={"Last 5 mins"} currentCrypto={props.currentCrypto} image={cryptImg[props.currentCrypto]}  symbol={curr.results[props.index].abbr} data= {props.response.previousdata.last5Mins}  /></div>
                    <div className="col-lg-4 col-md-6 col-xs-1" data-aos="fade-up"><Card content={"Last 1 hour"} currentCrypto={props.currentCrypto} image={cryptImg[props.currentCrypto]} symbol={curr.results[props.index].abbr} data={props.response.previousdata.last1Hour}  /></div>
                    <div className="col-lg-4 col-md-6 col-xs-1" data-aos="fade-up"><Card content={"Average BTC/INR net price including commission"} currentCrypto={props.currentCrypto} image={cryptImg[props.currentCrypto]} symbol={curr.results[props.index].abbr} data={Math.round(props.response.previousdata.avg_trage * 10000000000) /10000000000}/></div>
                    <div className="col-lg-4 col-md-6 col-xs-1" data-aos="fade-up"><Card content={"Last 1 Day"} currentCrypto={props.currentCrypto} image={cryptImg[props.currentCrypto]} symbol={curr.results[props.index].abbr} data={props.response.previousdata.last24Hours}/></div>
                    <div className="col-lg-4 col-md-6 col-xs-1" data-aos="fade-up"><Card content={"Last 7 Days"} currentCrypto={props.currentCrypto} image={cryptImg[props.currentCrypto]} symbol={curr.results[props.index].abbr} data={props.response.previousdata.last7Days}/></div>
                </div>
                
            
                </div>
               

                {/* table starts */}
                <table class="table mt-5" data-aos="fade-up">
                    <thead>
                    <tr>
                                <th className='pointer rounded-top align-middle' scope="col">#</th>
                                <th scope="col">Platform</th>
                                <th scope="col">Last Traded Price</th>
                                <th scope="col">Bid Percentage</th>
                                <th scope="col">Volume</th>
                            </tr>
                    </thead>
                    <tbody>
                    {render()}
                    </tbody>
                </table>
                {/* {props.graphdata? "yes":"no"}
                <MyGraph ref={chartRef}  onClick={onClick} currentCrypto={props.currentCrypto}  graphdata={props.graphdata.maindata[0].last1days.prices} />
                 */}
            </div>
 
        );
    }
    else {
        return (<div className="w-100 d-flex justify-content-center ">
         <div class="main">
    <span class="stand"></span>
    <div class="cat">
     <div class="body"></div>
     <div class="head">
       <div class="ear"></div>
     <div class="ear"></div>
     </div>
     <div class="face">
      <div class="nose"></div>
     <div class="whisker-container">
       <div class="whisker"></div>
       <div class="whisker"></div>
     </div>
     <div class="whisker-container">
       <div class="whisker"></div>
       <div class="whisker"></div>
     </div>
     </div>
     <div class="tail-container">
      <div class="tail">
        <div class="tail">
          <div class="tail">
            <div class="tail">
              <div class="tail">
                <div class="tail">
                  <div class="tail"></div>
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
export default Body;