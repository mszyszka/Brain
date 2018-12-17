//left semisphere carousel

const leftCarousel = {
    number : Math.floor(Math.random()*3),
    leftCarouselContainer : $('.left-semisphere'),
    carouselBoards : [$('.chess'), $('.hand'), $('.eye')],

}

function switchBoard() {
    let lc = leftCarousel;
    let number = lc.number++;

    if (lc.number > 2) lc.number = 0;

    let board = lc.carouselBoards[number];

    lc.leftCarouselContainer.append(board);

    board.fadeIn(500);
    // board.css('display', 'block');

    setTimeout(function(){
        board.fadeOut(5000);
    }, 4500);
    
    setTimeout(function(){
        board.css('display', 'none');
    }, 4900)
    
    setTimeout('switchBoard()', 4900);

};

switchBoard();

////////////////////////