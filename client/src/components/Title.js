import { useState, useEffect } from "react";

function Title ({league}) {
    const [link,setLink] =useState("./images/nfl.png");
    const [height,setHeight] = useState(225);
    const [width,setwidth] = useState(175);

    const setPage = (league) =>{
    if (league === "NFL") {
      setLink("./images/nfl.png");
      setHeight(200);
      setwidth(150);
    }
    if (league === "MLB") {
      setLink("./images/mlb.png");
      setHeight(200);
      setwidth(275);
    }
    if (league === "NBA") {
      setLink("./images/nba.png");
      setHeight(200);
      setwidth(300);
    }
    }
    useEffect(() => {
        setPage(league)
    })

    return(
        <div>
            <div className="img-div">
            <img className="logo" src={link} width={width} height={height} />
            </div>
            <h1 className="header" style={{color:"white", paddingLeft:"50px", paddingTop:"15px"}}>{league} Games</h1>
        </div>
    )
}

export default Title;