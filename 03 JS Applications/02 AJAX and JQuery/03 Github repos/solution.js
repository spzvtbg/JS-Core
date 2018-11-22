function loadRepos () {
    $("#repos").empty();
    
    const user = $("#username").val(); //"k1r1L"; //
    const reposList = $('#repos');

    const request = {
        url: `https://api.github.com/users/${user}/repos`,
        success: display,
        error: showError,
    };

    $.ajax(request);

    function display (response) {
        const repos = Object
            .entries(response)
            .map(entry => {
                const repo = entry[1];
                return $(`<li><a href="${repo.html_url}">${repo.full_name}</a></li>`);
            });

        reposList.append(repos);
    }

    function showError () {
        reposList.append($(`<li>Error</li>`));
    }
}