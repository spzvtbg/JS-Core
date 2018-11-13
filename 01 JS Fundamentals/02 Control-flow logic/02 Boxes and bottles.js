function execute (bottles, boxCapacity) {
    let boxes = bottles / boxCapacity;
    
    return bottles % boxCapacity != 0 ? parseInt(boxes) + 1 : boxes;
}

console.log(execute(20, 4));