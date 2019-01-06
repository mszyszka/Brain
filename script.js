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
    carouselBoards : [$('.lightbulb'), $('.drum'), $('.laught')],

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

///////displaySmartphone()

function displaySmartphone() {
    let smartphoneDiv = $('.smartphone');
    smartphoneDiv.fadeIn(800);
}

////////////////////////

//////////////////counter

const counter = {
    counterContainer : $('.counterContainer'),
    actualNumber : 0,
    // myTimer : setTimeout('countForMe()', 10)
    
}

function countForMe(){

    let c = counter;
    
    if(c.actualNumber == 1400) {
        c.counterContainer.html('1400g');
        displaySmartphone();
        // $('.smartphone').css('display', 'block');
    } else {
        c.actualNumber += 10;
        c.counterContainer.html(c.actualNumber + '<span>g</span>');

        setTimeout('countForMe()', 0,5);
    } 



}

////function to detect is element in the viewport.

// .fn - to bound content with jQuery prototype object and get access to its methods
// in jQuety .fn is just an alias to the prototype property
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  
  $(window).on('resize scroll', function() {

    let fireCountForMe = $('.fireCountForMe');
    if(fireCountForMe.isInViewport()){
        countForMe();
    }

  });

  //////////////


  function spellIt() {

    let txt = 'stress anger fear tension aversion';
    
    for(let i = 0; i < txt.length; i++){

            /*Im using iffe to create dealay after each iteration of for loop*/
            (function(i) {

                setTimeout(function(){

                    let ul = document.getElementsByClassName('psychoList')[0];
                    let letter = txt[i];
                    let letterTxtNode = document.createTextNode(letter);
            
                    let span = document.createElement('span');
                    span.classList.add('.letterSpan');

                    let li = document.createElement('li');

            
                    span.appendChild(letterTxtNode);
                    // li.appendChild(span);
            
                    ul.appendChild(span);
        
                }, 60*i);
        
            })(i);
    }
}

// spellIt();  



$(window).on('resize scroll', function() {

    let fireSpellForMe = $('.fireSpellForMe');

    if(fireSpellForMe.isInViewport() ){
        spellIt();
        fireSpellForMe.css('display', 'none');
    }

  });



