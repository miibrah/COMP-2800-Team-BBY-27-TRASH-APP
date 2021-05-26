const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    let username = "anonymous";
    $.ajax({
        //            url: "/getJSONThing",
                    url: "/testme",
                    dataType: "json",
                    type: "GET",
                    success: function(data) {
                        // $("#p1").text(data['msg']);
                        //$("#p1").text(data['firstName']);
                        //eval(data['greeting']);
                        console.log("SUCCESS:", data);
                        const score = {
                            score: mostRecentScore,
                            name: data['msg'],
                        };
                        highScores.push(score);
                        highScores.sort((a, b) => b.score - a.score);
                        highScores.splice(5);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        // $("#p1").text(jqXHR.statusText);
                        console.log("ERROR:", jqXHR, textStatus, errorThrown);
                    }
                });

    // const score = {
    //     score: mostRecentScore,
    //     name: username.value,
    // };
    // highScores.push(score);
    // highScores.sort((a, b) => b.score - a.score);
    // highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/landing.html');
};