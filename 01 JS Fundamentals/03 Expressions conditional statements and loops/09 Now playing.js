function nowPlaying (parameters) {
    let titel = parameters[0];
    let name = parameters[1];
    let duration = parameters[2];

    console.log(`Now Playing: ${name} - ${titel} [${duration}]`);
}

nowPlaying(['Number One', 'Nelly', '4:09']);