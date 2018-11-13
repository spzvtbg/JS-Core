function proceed (teamsInfo) {
    let teams = {};
    teamsInfo.forEach((line) => {
        let [team, pilot, points] = line.split(' -> '); // This break the last test: .filter(x => x != '').map(x => x.trim());

        if (!teams[team]) {
            teams[team] = {};
        }

        if (!teams[team][pilot]) {
            teams[team][pilot] = 0;
        }

        teams[team][pilot] += +points;
    });

    let teamRanking= Object.keys(teams).reduce((collection, key) => {
        let teamObj = { team: key, pilots: [], totalPoints: 0 };
        let currentTeam = teams[key];

        Object.keys(teams[key]).forEach((pilot) => {
            teamObj.pilots.push({ name: pilot, points: currentTeam[pilot] });
            teamObj.totalPoints += currentTeam[pilot];
        });

        collection.push(teamObj);
        return collection;
    }, []);

    teamRanking
        .sort((a, b) => a.totalPoints - b.totalPoints < 0)
        .slice(0, 3)
        .forEach(current => {
            console.log(`${current.team}: ${current.totalPoints}`);

            current.pilots
                .sort((a, b) => a.points - b.points < 0)
                .forEach(pilot => {
                    console.log(`-- ${pilot.name} -> ${pilot.points}`)
                });
        });
}

proceed([
    "Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4"
]);