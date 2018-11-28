function solution (argument) {
    const commandPattern = { 
        upvote: () => {
            this.upvotes++;
        }, 
        downvote: () => {
            this.downvotes++;
        }, 
        score: () => {
            let rating = 'new';
            let ups = this.upvotes;
            let downs = this.downvotes;
            let score = ups - downs;
            let votes = ups + downs;

            if (votes < 10) {
                rating = 'new';
            }

            else if (ups / votes > 0.66) {
                rating = 'hot';
            }
            else if (score >= 0 && (ups > 100 || downs > 100)) {
                rating = 'controversial';
            }
            else if (score < 0) {
                rating = 'unpopular';
            }

            if (votes > 50) {
                let moreVotes = Math.max(ups, downs);
                let inflacion = Math.ceil(moreVotes * 0.25);
                ups += inflacion;
                downs += inflacion;
            }
            
            return [ups, downs, score, rating];
        }
    };

    return commandPattern[argument]();
}

var post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
console.log(solution.call(post, 'score'));
