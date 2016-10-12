/**
 * Created by Mark on 10/9/2016.
 */
var jumboText = ["Continuing Education For A Better World", "Learning Is The Heart of Life", "Education Is The Foundation For The Future"];

var datavar = 0;
function changeJumboText(){
    setInterval(function(){
        $('#jumbo-text').fadeOut(2000);
        if(datavar == 0){
            setTimeout(function(){
                $('#jumbo-text').html(jumboText[1]).fadeIn(2000);
                datavar = 1;
                /*console.log(datavar);*/
            },2000);
        }
        if(datavar == 1){
            setTimeout(function(){
                $('#jumbo-text').html(jumboText[2]).fadeIn(2000);
                datavar = 2;
                /*console.log(datavar);*/
            }, 2000);
        }
        if(datavar == 2){
            setTimeout(function(){
                $('#jumbo-text').html(jumboText[0]).fadeIn(2000);
                datavar = 0;
                /*console.log(datavar);*/
            },2000);
        }
    }, 10000);
}

changeJumboText();