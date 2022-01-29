
import "../App.css"
import back from "../images/back-texture.jpg"
function BigCard(props) {
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
  return (<div className="card pull-up mt-5 text-center" style={{ width: '100%' ,background:`url(${back})`}}>
    <div className="card-body ">
    
      <h3 style={{color:"#ffa800"}}>{props.content}</h3>
      <h4 className="card-text" style={{    fontSize:"32px",fontWeight:"700"}}>{props.data} %</h4>
      

      <div style={{  fontSize: "14px"  ,color:"#787b86" }}>Average {props.currentCrypto}/{props.symbol}  net price including commission</div>
    </div>
  </div>);


}

export default BigCard;