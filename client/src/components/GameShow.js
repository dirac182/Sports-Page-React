import { Card } from "react-bootstrap";


function GameShow ({games}) {

    return (
        <div>
<Card style={{ width: '18rem', padding: "15px", backgroundColor:"#013369", border:"none"}}>
  <Card.Img alt="game" variant="top" src={games.strThumb}  />
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