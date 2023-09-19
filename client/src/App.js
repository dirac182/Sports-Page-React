import { useState, useEffect } from "react";
import axios from "axios";
import GameList from "./components/GameList.js"
import DateForm from "./components/DateForm.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from "react-bootstrap";
import Title from "./components/Title.js";

function App() {
  const todaysDate = new Date();
  const [games,setGames] = useState([]);
  const [league,setLeague] = useState("NFL");

  const handleNewTab = async (event) => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const response = await axios.post("http://localhost:5000/api/initialGames", {month,day,year,league});
    console.log(response.data.events);
    if(response.data.events){
      setGames(response.data.events);
    }else{
      setGames([{
        strEventAlternate: "No Games Found!",
        strThumb:"./images/noData.png"
      }])
    }
  }

  const handleNewDate = async (date) =>{
    const response = await axios.post("http://localhost:5000/api/newDate", {date,league})
    setGames(response.data.events);
  } 

  useEffect(() => {
      handleNewTab();
      },[league]);
    
  return (
    
<div className="app">
    <Navbar bg="dark py-3" variant="dark" >
      <Navbar.Brand style={{fontFamily:"Titillium Web, sans-serif",fontWeight:"700",fontSize:"40px", paddingLeft:"50px"}} href="#home">Sport Events</Navbar.Brand>
      <Nav  className="ml-auto">
        <Navbar.Text style={{fontSize:"20px", paddingRight:"10px"}}>
            Change League:
        </Navbar.Text>
        <Nav.Link style={{fontSize:"20px"}} onClick={() => setLeague("NFL")} href={"#"}>Football</Nav.Link>
        <Nav.Link style={{fontSize:"20px"}} onClick={() => setLeague("MLB")} href={"#"}>Baseball</Nav.Link>
        <Nav.Link style={{fontSize:"20px"}} onClick={() => setLeague("NBA")} href={"#"}>Basketball</Nav.Link>
      </Nav>
    </Navbar>
    <div style={{backgroundColor:"#013369"}}>
      <div className="title">
          <Title league={league} />
          <DateForm onSubmit={handleNewDate} />
      </div>
      
      <GameList  games={games} />
    </div>
    <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Sports Games Lookup</h5>
                <p>A simple app to lookup sporting events.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

        </div>
    </div>

    <div className="footer-copyright text-center py-3 footer-div">© {todaysDate.getFullYear()} Copyright
        <a href="https://github.com/dirac182"> github.com/dirac182</a>
    </div>

</footer>
</div>
  );
}

export default App