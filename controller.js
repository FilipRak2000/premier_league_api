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

 const DeleteTeam = async (req, res) =>{
   const id = parseInt(req.params.id);

   pool.query(queries.GetTeamById, [id], (error, result) => {
      const NoTeamFound = !result.rows.length;
      if(NoTeamFound){
      res.send("Team ain't exist in the database");
      }


      pool.query(queries.DeleteTeam, [id], (error, result) => {
         if (error) throw error;
         res.status(200).send("Team removed");
      })
   })
 }

 const UpdateTeam = async (req, res) =>{
   const id = parseInt(req.params.id);
   const {position, match_played, wins, draws, loses, goals, goals_conceded, points} = req.body
   pool.query(queries.UpdateTeam, [position, match_played, wins, draws, loses, goals, goals_conceded, points, id], (error, result) => {
      if (error) throw error
      res.status(200).send("Team updated");
   })
 }

module.exports ={
    AllTeams,
    GetTeamById,
    AddTeam,
    DeleteTeam,
    UpdateTeam,
};

