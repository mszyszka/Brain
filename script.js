//left semisphere carousel

const leftCarousel = {
    number : Math.floor(Math.random()*3),
    leftCarouselContainer : $('.left-semisphere'),
    carouselBoards : [$('.chess'), $('.hand'), $('.eye')],

}

function switchBoardLeft() {
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
    
    setTimeout('switchBoardLeft()', 4900);

};

switchBoardLeft();

////////////////////////

//right semisphere carousel

const rightCarousel = {
    number : Math.floor(Math.random()*3),
    rightCarouselContainer : $('.right-semisphere'),
    carouselBoards : [$('.chess'), $('.hand'), $('.eye')],

}

function switchBoardRight() {
    let rc = rightCarousel;
    let number = rc.number++;

    if (rc.number > 2) rc.number = 0;

    let board = rc.carouselBoards[number];

    rc.rightCarouselContainer.append(board);

    board.fadeIn(500);
    // board.css('display', 'block');

    setTimeout(function(){
        board.fadeOut(5000);
    }, 4500);
    
    setTimeout(function(){
        board.css('display', 'none');
    }, 4900)
    
    setTimeout('switchBoardRight()', 4900);

};

switchBoardRight();

////////////////////////