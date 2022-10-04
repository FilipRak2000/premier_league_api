const AllTeams = "SELECT * FROM teams";
const GetTeamById = "SELECT * FROM teams WHERE id = $1";
const AddTeam =
 "INSERT INTO teams (team, position, match_played, wins, draws, loses, goals, goals_conceded, points) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

 const DeleteTeam = "DELETE FROM teams WHERE id = $1";
 const UpdateTeam = "UPDATE teams SET position=$1, match_played=$2,  wins=$3, loses=$4, goals=$5, goals_conceded=$6, points=$7 WHERE id=$8";

module.exports ={
    AllTeams,
    GetTeamById,
    AddTeam,
    DeleteTeam,
    UpdateTeam,
};