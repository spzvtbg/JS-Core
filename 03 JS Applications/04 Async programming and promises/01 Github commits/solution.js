function loadCommits () {
    let ul = $('#commits');
    let username = $('#username').val();
    let repository = $('#repo').val();
    
    $.get(`https://api.github.com/repos/${username}/${repository}/commits`)
        .then(getRepositories)
        .catch(showError);

    function getRepositories (data) {
        data.map(repo => {
            let name = repo.commit.author.name;
            let message = repo.commit.message;

            ul.append($(`<li>${name}: ${message}</li>`));
        });
    }

    function showError (reason) {
        let name = reason.status;
        let message = reason.statusText;

        ul.append($(`<li>Error: ${name} (${message})</li>`));
    }
}