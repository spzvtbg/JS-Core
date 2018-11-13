function process (args) {
    const operations = {
        cut: {
            x: 0,
            proceed: (cristal) => {
                return cristal / 4;
            },
            print: (repeatCount) => {
                console.log(`Cut x${repeatCount}`);
                return 0;
            }
        },
        lap: { 
            x: 0,
            proceed: (cristal) => {
                return cristal * 0.8;
            },
            print: (repeatCount) => {
                console.log(`Lap x${repeatCount}`);
                return 0;
            } 
        },
        grind: {
            x: 0,
            proceed: (cristal) => {
                return cristal - 20;
            },
            print: (repeatCount) => {
                console.log(`Grind x${repeatCount}`);
                return 0;
            } 
        },
        etch: {
            x: 0,
            proceed: (cristal) => {
                return cristal - 2;
            },
            print: (repeatCount) => {
                console.log(`Etch x${repeatCount}`);
                return 0;
            } 
        },
        xray: {
            x: 0,
            proceed: (cristal) => {
                return cristal + 1;
            },
            print: (repeatCount) => {
                console.log(`X-ray x${repeatCount}`);
                return 0;
            } 
        },
        wash: {
            proceed: (chunk) => {
                return parseInt(chunk);
            },
            print: () => {
                console.log('Transporting and washing');
            }
        },
        processing: (chunk) => {
            console.log(`Processing chunk ${chunk} microns`);
        },
        finishing: (chunk) => {
            console.log(`Finished crystal ${chunk} microns`);
        },
    };

    const processing = (operation, chunk, desiredMicrons) => {
        const processType = operations[operation];
        while (chunk != desiredMicrons) {
            let currentMicrons = processType.proceed(chunk);
            let temporaryMicrons = currentMicrons;
            
            if (operation === 'etch') {
                temporaryMicrons++
            }
            if (temporaryMicrons < desiredMicrons) {
                break;
            }

            processType.x++;
            chunk = currentMicrons;
        }

        if (processType.x > 0) {
            processType.x = processType.print(processType.x);
            if (operation != 'xray') {
                operations.wash.print();
            }
        }

        chunk = operations.wash.proceed(chunk);

        return chunk;
    };

    const desiredMicrons = +args[0];

    for (let index = 1; index < args.length; index++) {
        let chunk = +args[index];
        operations.processing(chunk);
        chunk = processing('cut', chunk, desiredMicrons);
        chunk = processing('lap', chunk, desiredMicrons);
        chunk = processing('grind', chunk, desiredMicrons);
        chunk = processing('etch', chunk, desiredMicrons);
        chunk = processing('xray', chunk, desiredMicrons);
        operations.finishing(chunk);
    }
}

process([1000, 4000, 8100]);