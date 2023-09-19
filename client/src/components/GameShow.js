import { Card } from "react-bootstrap";


function GameShow ({games}) {
    var imgLink = games.strThumb;
    if (!imgLink && games.strSport === 'American Football'){
      imgLink = "./images/nfl_no_img.jpg"
    }
    if (!imgLink && games.strSport === 'Baseball'){
      imgLink = "./images/mlb_no_img.jpg"
    }
    if (!imgLink && games.strSport === 'Basketball'){
      imgLink = "./images/nba_no_img.jpg"
    }
    return (
<div className="game-card">
  <Card style={{ width: '18rem', padding: "10px", backgroundColor:"#013369", border:"none"}}>
  <div >
    <Card.Img alt="game" variant="top" src={games.strThumb}  />
  </div>
    <Card.Body>
      <Card.Title style={{color:"white", fontSize:"12"}}>{games.strEventAlternate}</Card.Title>
      <Card.Text style={{color:"white"}}>
        {games.strTimeLocal}
      </Card.Text>
    </Card.Body>
  </Card>
</div>
    )
}

export default GameShow;