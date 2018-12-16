// // I'm using iife to fire the function at the time.


const leftCarousel = {
    number : Math.floor(Math.random()*3),
    leftCarouselContainer : $('.left-semisphere'),
    carouselBoards : [$('.chess'), $('.chess'), $('.chess')]
}


function switchBoard() {
    let lc = leftCarousel;
    let number = lc.number++;
    if (lc.time > 3) lc.time = 1;

    let board = lc.carouselBoards[number];

    lc.leftCarouselContainer.append(board);
    board.css('display', 'block');

    // setTimeout(function(){
    //     board.css('display', 'none');
    // },5000);

    setTimeout('switchBoard()', 5000);

};

switchBoard();

// const leftCarousel = {
//      container : $('.left-semisphere'),
//      time1 : 1000,
//      time2 : 1000,

//      chess : $('.chess'),
//      hand : $('.hand'),
//      eye : $('.eye'),
//      carouselItems : [this.chess, this.hand, this.eye],

     
//      carouselItem0 : function(){
//         console.log('first log: ' + this);
//         this.container.append(this.carouselItems[0]);
//         this.chess.css('display', 'block');
//     },
    
//     carouselItem1 : function(){
//         console.log('second log' + this);
//         this.container.remove(this.carouselItems[0]);
//         this.container.append(this.carouselItems[1]);
//         this.hand.css('display', 'block');
//     },

//     carouselItem2 : function(){
//         console.log('third log' + this);
//         this.container.remove(this.carouselItems[1]);
//         this.container.append(this.carouselItems[2]);
//         this.eye.css('display', 'block');
//     }
// }

// leftCarousel.carouselItem0();
// // const function0 = leftCarousel.carouselItem0;
// // const function0bound = function0.bind(leftCarousel);

// leftCarousel.carouselItem1();
// // const function1 = leftCarousel.carouselItem1;
// // const function1bound = function1.bind(leftCarousel);

// leftCarousel.carouselItem2();
// // const function2 = leftCarousel.carouselItem2;
// // const function2bound = function2.bind(leftCarousel);

// // const function0bound = function0.bind(leftCarousel);
// // function0bound();

// // setTimeout(
// //     function(){
// //         const method1 = leftCarousel.carouselItem1();
// //         const method1bound = method1.bind(leftCarousel);
// //         method0bound();
// //     },3000
// // );


// // const method2 = leftCarousel.carouselItem2();
// // const method2bound = method2.bind(leftCarousel);
// // method0bound();





// ///////////////////////////////////////////

// // (function() {
// //     const time = 1000;
// //     const container = $('.left-semisphere');
// //     let pozition = 0;


// //     const chess = $('.chess');
// //     const hand = $('.hand');
// //     const eye = $('.eye');

// //     let sliderItems = [ chess, hand, eye];

// //     let carousel = setInterval(function(){

// //         if(pozition == 3){

// //             pozition = 0;

// //         } else {

// //             container.append(sliderItems[pozition]);
// //             sliderItems[pozition].css('display', 'block');
// //         }

// //         pozition++;

// //     },time,pozition);


//     // // for(let i = 0; i <= sliderIlength -1; i++){

//     // //     (function (i){
//     // //         setTimeout(function(){
//     // //             container.append(sliderItems[i]);
//     // //             sliderItems[i].css('display', 'block');

//     // //         },time*i);
//     // //     })(i)

//     // };
    
// // })();