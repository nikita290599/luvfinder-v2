import currency from "../currency.json";
import "../css/Navbar.css"

function Navbar(props) {
    // function to display Currency exchanges
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
    return (
        <nav id="navbar_top" className="navbar pt-5 navbar-default  navbar-expand-lg  container-fluid na">

            <a className="navbar-brand brand" href="https://luvfinder.herokuapp.com/">LUVFINDER</a>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon " />
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav w-100 d-flex justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#market">MARKET</a>
                    </li>
                    <div className="dropdown nav-item">
                        <button className="dropdown-toggle nav-link btn-coin" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {currency.results[props.index].abbr}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {displayCurrencies()}
                        </div>
                    </div>
                    <div className="dropdown ">
                        <button className="dropdown-toggle  nav-link btn-cryp" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {props.currentCrypto}
                        </button>
                        <div className="dropdown-menu " aria-labelledby="dropdownMenu">
                            {displayCryptos()}
                        </div>
                    </div>
                    <li className="nav-item mr-0 " >

                        <a className='btn  tw' href="https://twitter.com/LuvInuCoin" target="_blank" rel="noreferrer" style={{color:"black"}}>CONNECT <i style={{color:"blue"}} class="fab fa-telegram-plane" ></i></a>
                    </li>

                </ul>
            </div>
        </nav>



    );
}
export default Navbar;