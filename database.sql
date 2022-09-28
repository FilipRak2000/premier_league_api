CREATE DATABASE premier_league;

CREATE TABLE TEAMS(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    team VARCHAR(20) NOT NULL,
    position INT NOT NULL, 
    match_played INT NOT NULL,
    wins INT NOT NULL,
    draws INT NOT NULL,
    loses INT NOT NULL,
    goals INT NOT NULL,
    goals_conceded INT NOT NULL,
    points INT NOT NULL
);

INSERT INTO teams(
    team, position, match_played, wins, draws, loses, goals, goals_conceded, points)
VALUES('Chelsea', 2, 4, 3, 1, 0, 8, 4, 10);

--{   
--    "team": "Arsenal",
  --  "position": 20,
   -- "match_played": 4,
   -- "wins": 0,
   -- "draws": 0,
   -- "loses": 4,
   -- "goals": 2,
    --"goals_conceded":12,
    --"points": 0
--}