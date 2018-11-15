function gladiators(commands) {
    const constants = { 
        add: 'add', 
        arow: ' -> ', 
        break: 'Ave Cesar', 
        fight: 'fight', 
        skills: 'skills', 
        totalPoints: 'totalPoints',
        vs: ' vs ', 
    };
    const commandObjectsCollection = commands.map(command => {
        if (command.indexOf(constants.arow) >= 0) {
            return { command: constants.add, parameters: command.split(constants.arow) };
        } else if (command.indexOf(constants.vs) >= 0) {
            return { command: constants.fight, parameters: command.split(constants.vs) };
        } else if (command === constants.break) {
            return { command: null };
        }
    });
    const commandPattern = {
        add: ([gladiatorsName, gladiatorsTechnique, gladiatorsSkill], sourceCollection) => {
            let points = +gladiatorsSkill;
            if (!sourceCollection[gladiatorsName]) {
                sourceCollection[gladiatorsName] = { totalPoints: 0, skills: {}};
            } 
            if (!sourceCollection[gladiatorsName][constants.skills][gladiatorsTechnique]) {
                sourceCollection[gladiatorsName][constants.totalPoints] += points;
                sourceCollection[gladiatorsName][constants.skills][gladiatorsTechnique] = points;
            } 
            if (sourceCollection[gladiatorsName][constants.skills][gladiatorsTechnique] <= points) {
                let difference = sourceCollection[gladiatorsName][constants.skills][gladiatorsTechnique] - points;
                sourceCollection[gladiatorsName][constants.totalPoints] += Math.abs(difference);
                sourceCollection[gladiatorsName][constants.skills][gladiatorsTechnique] = points;
            }
        },
        fight: ([gladiatorLeft, gladiatorRight], sourceCollection) => {
            let first = sourceCollection[gladiatorLeft];
            let second = sourceCollection[gladiatorRight];
            if (first && second) {
                let inCommonItem = Object
                    .keys(sourceCollection[gladiatorLeft][constants.skills])
                    .filter(x => sourceCollection[gladiatorRight][constants.skills][x])
                    .length;
                if (inCommonItem) {
                    if (first[constants.totalPoints] > second[constants.totalPoints]) {
                        sourceCollection[gladiatorRight] = null;
                    } else if (first[constants.totalPoints] < second[constants.totalPoints]) {
                        sourceCollection[gladiatorLeft] = null;
                    }
                }
            }
        }
    }

    let index = 0;
    let gladiatorsArena = {};
    let currentCommandObject = commandObjectsCollection[index++];

    while (currentCommandObject.command) {
        commandPattern[currentCommandObject.command](currentCommandObject.parameters, gladiatorsArena);
        currentCommandObject = commandObjectsCollection[index++];
    }

    Object
        .keys(gladiatorsArena)
        .filter(g => gladiatorsArena[g] != null )
        .map(gladiator => {
            return {
                name: gladiator,
                total: gladiatorsArena[gladiator][constants.totalPoints],
                skills: Object
                    .keys(gladiatorsArena[gladiator][constants.skills])
                    .map(skill => {
                        return {
                            name: skill,
                            total: gladiatorsArena[gladiator][constants.skills][skill]
                        };
                    })
                    .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name))
            };
        })
        .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name))
        .forEach(gladiator => {
            console.log(`${gladiator.name}: ${gladiator.total} skill`);
            gladiator.skills
            .forEach(skill => {
                console.log(`- ${skill.name} <!> ${skill.total}`);
            });
        });
}

gladiators([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
]);