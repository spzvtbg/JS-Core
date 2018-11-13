function asign (args) {
    
    let obj = {};
    for (let index = 0; index < args.length; index += 2) {
        const key = args[index];
        const value = args[index + 1];
        
        obj[key] = value;
    }

    console.log(obj);
}

asign(['name', 'Pesho', 'age', '23', 'gender', 'male']);