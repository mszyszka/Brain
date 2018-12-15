// I'm using iife to fire the function at the time.


const leftCarousel = {
     container : $('.left-semisphere'),
     time1 : 1000,
     time2 : 1000,

     chess : $('.chess'),
     hand : $('.hand'),
     eye : $('.eye'),
     carouselItems : [this.chess, this.hand, this.eye],

    display : function(){
        setTimeout(
            function carouselItem0(){
                container.bind(leftCarousel).append(this.carouselItems[0]);
                container.bind(chess).css('display', 'block');
            },0);
        setTimeout(
            function(){
                container.bind(leftCarousel).remove(this.carouselItems[0]);
                container.bind(leftCarousel).append(this.carouselItems[1]);
                hand.bind.bind(leftCarousel).css('display', 'block');
            },3000);
        setTimeout(
            function(){
                this.container.remove(this.carouselItems[1]);
                this.container.append(this.carouselItems[2]);
                this.eye.css('display', 'block');
            },9000);
    }

}

setInterval(leftCarousel.display(), 9000);


///////////////////////////////////////////

// (function() {
//     const time = 1000;
//     const container = $('.left-semisphere');
//     let pozition = 0;


//     const chess = $('.chess');
//     const hand = $('.hand');
//     const eye = $('.eye');

//     let sliderItems = [ chess, hand, eye];

//     let carousel = setInterval(function(){

//         if(pozition == 3){

//             pozition = 0;

//         } else {

//             container.append(sliderItems[pozition]);
//             sliderItems[pozition].css('display', 'block');
//         }

//         pozition++;

//     },time,pozition);


    // // for(let i = 0; i <= sliderIlength -1; i++){

    // //     (function (i){
    // //         setTimeout(function(){
    // //             container.append(sliderItems[i]);
    // //             sliderItems[i].css('display', 'block');

    // //         },time*i);
    // //     })(i)

    // };
    
// })();