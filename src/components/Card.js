
import "../App.css"
function Card(props){
    return(  <div className="card pull-up mt-5"  style={{width: '100%'}}>
    <div className="card-body">
      <h6 className="card-title"><img src={props.image} alt={props.symbol} width="32px"></img>{props.currentCrypto}/{props.symbol}</h6>
      <h4 className="card-text">{props.data} %</h4>
      <h6>{props.content}</h6>
      
      <div style={{width:"100%"}}></div>
    </div>
  </div>);
  
  
}

export default Card;