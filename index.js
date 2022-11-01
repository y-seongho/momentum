$(document).ready(function () {
    renderTime()
    renderQuote()
});

//현재 시간
function renderTime() {
    let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`
    fetch(url)
        .then(res => res.json()).then((data) => {
            let datetime = data['datetime'].substr(11,8)
            $('#time').text(datetime)
        })
}

// 명언
function renderQuote() {
    let url = `https://api.quotable.io/random`
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `"${data['content']}"`
            let author = `- ${data['author']}- `
            $('#content').text(content)
            $('#author').text(author)
        })
}