const data = [
    {
        "image": "./public/premium.png",
        "title": "Premium wine jigsaw puzzles",
        "text": "Our passion became our business: the world of wine and the search for serenity."
    },
    {
        "image": "./public/origami.png",
        "title": "Crafted with passion & attention to details",
        "text": "Each of our jigsaw puzzles is first drawn by hand and every piece is then carefully reviewed one by one."
    },
    {
        "image": "./public/smartphones.png",
        "title": "Play your way into the world of wine",
        "text": "Put your phone down for a while, relax and make a puzzle. Learn about regions, grapes, aromas, food pairing and so much more."
    },
    {
        "image": "./public/ecology.png",
        "title": "Sustainability is in our DNA",
        "text": "For every item sold we will plant one tree and make a donation to improve global access to safe drinking water."
    }
]
document.querySelector("#root").innerHTML = data.map(block => {
    return `<div class="block" >
                <img src=${block.image} />
                <p class="title">${block.title}</p>
                <p class="text">${block.text}</p>
            </div>`
})
