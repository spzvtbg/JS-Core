function task (array) {
    const parseComponents = (array) => {
        return array.reduce((storeObject, line) => {
            let [system, component, subComponent] = line.split(' | ');
            if (!storeObject[system]) {
                storeObject[system] = { };
            }
            if (!storeObject[system][component]) {
                storeObject[system][component] = { };
            }
            if (!storeObject[system][component][subComponent]) {
                storeObject[system][component][subComponent] = 0;
            }
            storeObject[system][component][subComponent]++;
            return storeObject;
        }, { });
    };
    const collectionFrom = (object) => {
        return Object
            .keys(object)
            .reduce((collection, keySystem) => {
                let currentSystem = object[keySystem];

                let componentsCollection = Object
                    .keys(currentSystem)
                    .reduce((componentsArray, keyComponent) => {
                        let currentComponent = currentSystem[keyComponent];
                        let subComponents = Object.keys(currentComponent);

                        let newSubComponentData = { 
                            component: keyComponent, 
                            subComponents: subComponents 
                        };

                        componentsArray.push(newSubComponentData);
                        return componentsArray;
                    }, []);

                let newComponentsData = { 
                    system: keySystem, 
                    components: componentsCollection 
                };

                collection.push(newComponentsData);
                return collection;
            }, []);
    }

    const descending = (a, b, key) => b[key].length - a[key].length;
    const alphabetical = (a, b, key) => a[key].toLowerCase().localeCompare(b[key].toLowerCase());

    let unsortedSystemComponentsData = collectionFrom(parseComponents(array));

    unsortedSystemComponentsData.sort((a, b) => descending(a, b, 'components') || alphabetical(a, b, 'system'));

    unsortedSystemComponentsData.forEach(system => {
        console.log(system['system']);
        let systemComponents = system['components'];
        systemComponents.sort((a, b) => descending(a, b, 'subComponents'));
        systemComponents.forEach(component => {
            console.log(`|||${component['component']}`);
            component['subComponents'].forEach(sub => console.log(`||||||${sub}`));
        });
    });
}

task ([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);