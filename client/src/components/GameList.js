import GameShow from "./GameShow";

function GameList ({games}) {

    const renderedGames = games.map((game) => {
        return <GameShow games={game} />
    }) 

    return <div className="games-list" style={{padding:"50px"}}>
        {renderedGames}
        </div>;
}

export default GameList;