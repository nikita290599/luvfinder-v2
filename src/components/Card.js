
import "../App.css"
import g from "../images/GRAPH.png"
import { MyGraph } from "./MyGraph";
function Card(props) {
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
    "RUB": "Russian Ruble"
  };
  return (<div className="card pull-up mt-5" style={{ width: '100%' }}>
    <div className="card-body">
      <h5 className="card-title d-flex">
        <img src={props.image} alt={props.symbol} width="30px" height="30px"></img>
        <div style={{paddingLeft:"10px"}}>
        <div style={{ fontWeight: "700" }}>{props.currentCrypto}/{props.symbol}</div>
        <div style={{  fontSize: "14px"  ,color:"#787b86" }}>{cryptonames[props.currentCrypto]}/{currencyNames[props.symbol]}</div>
        </div>
        
      </h5>
      <h4 className="card-text" style={{    fontSize:"28px",fontWeight:"700"}}>{props.data} %</h4>
      <h6 style={{color:"#ffa800"}}>{props.content}</h6>

      <div className="card-text" style={{ width: "100%", height:"10px"}}>   {props.graphdata? <MyGraph currentCrypto={props.currentCrypto}  graphdata={props.graphdata} />:<img width="100%" src={g} alt="graph" height="30px"></img>}
                
              </div>
    </div>
  </div>);


}

export default Card;