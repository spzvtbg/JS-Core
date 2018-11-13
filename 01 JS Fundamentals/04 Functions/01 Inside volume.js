function print (cordinates) {

    const volume = { x1: 10, x2: 50, y1: 20, y2: 80, z1: 15, z2: 50 };

    const isInside = (x, y, z, volume) => {
        return x >= volume.x1 && x <= volume.x2 && y >= volume.y1 && y <= volume.y2 && z >= volume.z1 && z <= volume.z2 
        ? true  
        : false;
    };

    for (let i = 0; i < cordinates.length; i += 3) {
        console.log(isInside(cordinates[i], cordinates[i +1], cordinates[i + 2], volume) 
        ? 'inside' 
        : 'outside');
    }
}

print([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);