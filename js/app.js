var value = 1500,
    clock = $('.clock').FlipClock({
    countdown: true,
    clockFace: 'MinuteCounter'
});

clock.setTime(value);

$(".start").click(function() {
    clock.setTime(value);
    clock.start();
});

$(".reset").click(function () {
    clock.stop();
    value = 1500;
    clock.setTime(value);
});

$(".plus").click(function () {
    value += 60;
    clock.setTime(value);
});

$(".minus").click(function () {
    value -= 60;
    clock.setTime(value);
});

    //var endGame = false;
    //var numOfPlays = 1;
    //var plays = [];
    //
    ////what happens when a player clicks a tile
    //$('.tile').on('click', DrawPlayer);
    //
    //function DrawPlayer(){
    //    if (!$(this).hasClass('locked')){
    //        $(this).addClass('locked');
    //
    //        $(this).html('<span>X</span>');
    //
    //        var id = $(this).attr('id');
    //        plays.push(id);
    //        console.log(plays);
    //
    //        numOfPlays += 1;
    //
    //        if (numOfPlays % 2 === 0 && endGame === false){
    //            RunComputer();
    //        }
    //
    //        if (numOfPlays === 6){
    //            console.log("Draw!!!!!!");
    //        }
    //
    //        CheckWin();
    //
    //    } else {
    //        alert("No No No")
    //    }
    //}
    //
    //function RunComputer(){
    //    $('#1').addClass('locked');
    //    $('#1').html('<span>O</span>');
    //
    //}
    //
    //function CheckWin(){
    //
    //    var winningMoves = [
    //        [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[1,5,9]
    //    ];
    //
    //    for (var i = 0; i < winningMoves.length; i++) {
    //        if( $('#' + winningMoves[i][0]).hasClass('locked') &&
    //            $('#' + winningMoves[i][1]).hasClass('locked') &&
    //            $('#' + winningMoves[i][2]).hasClass('locked')) {
    //            alert(" wins");
    //        }
    //    }
    //
    //
    //}


    //print board

    //check if a space is available - user-turn

    //now it's the computers turn

    //check if game is over

    //check who won


