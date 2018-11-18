function solution (browserObject, commands) {
    const open = 'Open Tabs';
    const closed = 'Recently Closed';
    const logs = 'Browser Logs';
    const browser = 'Browser Name';
    const commandRegex = /(?<=\s|^)(\w+)(?=\s)\s+(?<=\s)(.+)(?=\s|$)/;

    const commandPattern = {
        open: (all, parameter) => {
            browserObject[open].push(parameter);
            browserObject[logs].push(all);
        },
        close: (all, parameter) => {
            let pageIndex = browserObject[open].indexOf(parameter);
            if (pageIndex >= 0) {
                browserObject[open].splice(pageIndex, 1);
                browserObject[closed].push(parameter);
                browserObject[logs].push(all);
            }
        },
        clear: () => {
            Object.keys(browserObject).map((key) => {
                if (key !== browser) {
                    browserObject[key] = []; 
                }
            });
        }
    };

    for (const command of commands) {
        let [all, action, parameter] = commandRegex.exec(command);
        commandPattern[action.toLowerCase()](all, parameter);
    }

    console.log(`${browserObject[browser]}`);

    for (const key in browserObject) {
        if (key !== browser) {
            console.log(`${key}: ${browserObject[key].join(', ')}`);
        }
    }
}

solution ({"Browser Name": "Mozilla Firefox","Open Tabs": ["YouTube"],"Recently Closed": ["Gmail", "Dropbox"],"Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter", "Clear History and Cache"]);

// solution ({
//     "Browser Name":"Google Chrome",
//     "Open Tabs":[
//         "Facebook",
//         "YouTube",
//         "Google Translate"
//     ],
//     "Recently Closed":[
//         "Yahoo",
//         "Gmail"
//     ],
//     "Browser Logs":[
//         "Open YouTube",
//         "Open Yahoo",
//         "Open Google Translate",
//         "Close Yahoo","Open Gmail",
//         "Close Gmail","Open Facebook"
//     ],
// },
// [
//     'Close Facebook', 
//     'Open StackOverFlow', 
//     'Open Google'
// ]);