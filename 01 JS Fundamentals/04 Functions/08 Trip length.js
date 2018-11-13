function route (pointArgs) {
    const points = {
        first: {
            n: 1,
            x: +pointArgs[0],
            y: +pointArgs[1],
            d: 0,
            "123": 0,
            "132": 0
        },
        second: {
            n: 2,
            x: +pointArgs[2],
            y: +pointArgs[3],
            d: 0,
            "231": 0,
            "213": 0
        },
        third: {
            n: 3,
            d: 0,
            x: +pointArgs[4],
            y: +pointArgs[5],
            "312": 0,
            "321": 0
        },
        distance: (p1, p2) => {
            return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
        }
    }

    points.first.d = points.distance(points.first, points.second);
    points.second.d = points.distance(points.second, points.third);
    points.third.d = points.distance(points.third, points.first);

    points.first[123] = points.first.d + points.second.d;
    points.first[132] = points.third.d + points.second.d;
    points.second[213] = points.first.d + points.third.d;
    points.second[231] = points.second.d + points.third.d;
    points.third[312] = points.third.d + points.first.d;
    points.third[321] = points.second.d + points.first.d;

    let route = {
        key: "123",
        value: points.first[123]
    }

    if (route.value > points.first[132])  {
        route.value = points.first[132];
        route.key = "132";
    }
    if (route.value > points.second[213]) {
        route.value = points.second[213];
        route.key = "213";
    }
    if (route.value > points.second[231]) {
        route.value = points.second[231];
        route.key = "231";
    }
    if (route.value > points.third[312]) {
        route.value = points.third[312];
        route.key = "312";
    }
    if (route.value > points.third[321])  {
        route.value = points.third[321];
        route.key = "321";
    }

    console.log(Array.from(route.key).join('->') + ': ' + route.value);
}

route([-1, -2, 3.5, 0, 0, 2]);