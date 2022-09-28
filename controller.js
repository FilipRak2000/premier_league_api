const pool = require('./db')
const queries = require("./queries")


const AllTeams = async (req, res) =>{
   pool.query(queries.AllTeams, (error, results) =>{
    if(error) throw error;
    res.status(200).json(results.rows)
   })
}

const GetTeamById = async (req, res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.GetTeamById, [id], (error, results) =>{
     if(error) throw error;
     res.status(200).json(results.rows)
    })
 }

 const AddTeam =  async (req, res) =>{
    const {team, position, match_played, wins, draws, loses, goals,goals_conceded, points } = req.body;
    pool.query(queries.AddTeam, [team, position, match_played, wins, draws, loses, goals,goals_conceded, points], (error, results) =>{
    if (error) throw error;
    res.status(201).send("created")
    })
 }

module.exports ={
    AllTeams,
    GetTeamById,
    AddTeam 
};

