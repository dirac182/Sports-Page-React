import  express  from "express";
import axios from "axios";
import bodyParser from "body-parser";
import 'dotenv/config';
import cors from "cors";

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json())
const apiKey = process.env.RAPID_API_KEY;
const apiHost = process.env.API_HOST

app.post("/api/newDate", async (req,res) => {
    var date = req.body.date;
    var league = req.body.league;
    var sport = ""
    if(req.body.league == "MLB"){
        sport = "Baseball"
    }
    if(req.body.league == "NBA"){
        sport = "Basketball"
    }
    if(req.body.league == "NFL"){
        sport = "Football"
    }
    console.log(date,league,sport);
    const options = {
        method: 'GET',
        url: 'https://thesportsdb.p.rapidapi.com/eventsday.php',
        params: {
          d: date,
          l: league,
          s: sport
        },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': apiHost
        }
      };
      try {
        const response = await axios.request(options);
        console.log("Games Sent to Client.")
        console.log(response.data)
        res.json(response.data);
    }catch (error) {
        console.error(error);
        res.json(error);
    }
})

app.post("/api/initialGames", async (req,res) => {
    var dateFormat = "";
    var league = req.body.league;
    var sport = "";
    if(req.body.league == "MLB"){
    sport = "Baseball"
    }
    if(req.body.league == "NBA"){
        sport = "Basketball"
    }
    if(req.body.league == "NFL"){
        sport = "Football"
    }
    var day = req.body.day.toString();
    var month = ((req.body.month) + 1).toString();
    var year = req.body.year.toString();
    if(day.length <= 1){
        day = "0" + day;
    }
    if(month.length <= 1){
        month = "0" + month;
    }
    dateFormat = `${year}-${month}-${day}`
    console.log(dateFormat,league,sport)
    const options = {
        method: 'GET',
        url: 'https://thesportsdb.p.rapidapi.com/eventsday.php',
        params: {
          d: dateFormat,
          l: league,
          s: sport
        },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': apiHost
        }
      };
    try {
        const response = await axios.request(options);
        console.log("Games Sent to Client.")
        // console.log(response)
        res.json(response.data);
        
    }catch (error) {
        // console.error(error);
        res.json(error);
    }
})

app.listen(port, () =>{
    console.log(`Api server has successfully started on port ${port}.`)
})
