var userScore = 0;
var systemScore = 0;

// List of possible choices
const choices = ['rock', 'paper', 'scissors'];

// Function to get random choice for System Preference
function getChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine winner
function getWinner(uesrChoice, computerChoice) {
    var resArr = [];
    const user = ' (user)'.fontsize(3).sup();
    const comp = ' (comp)'.fontsize(3).sup();

    if (uesrChoice === computerChoice) {
        resArr['status'] = 'tie';
        resArr['msg'] = `It was a Draw!. You both chose ${changeUppercase(uesrChoice)}`;
        return resArr;
    } else if ((uesrChoice === 'rock' && computerChoice === 'scissors') || (uesrChoice === 'paper' && computerChoice === 'rock') || (uesrChoice === 'scissors' && computerChoice === 'paper')) {
        resArr['status'] = 'player';
        resArr['msg'] = `${changeUppercase(uesrChoice)}${user} beats ${changeUppercase(computerChoice)}${comp} . You Win!`;
        return resArr;
    } else {
        resArr['status'] = 'computer';
        resArr['msg'] = `${changeUppercase(computerChoice)}${comp} beats ${changeUppercase(uesrChoice)}${user} . You Lose!`;
        return resArr;
    }
}

// Update data to display
function updateGame(uesrChoice, computerChoice, result) {
    if (result.status == 'player') {
        console.log('userScore', userScore);
        $('#user-score').html(++userScore);
    } else if (result.status == 'computer') {
        console.log('systemScore', systemScore);
        $('#computer-score').html(++systemScore);
    }
    $('.Result').html(result.msg);
    $('ul').append(`<li class="history">${result.msg}</li>`);
}

// From choice from user
$('.Choice').click(function () {
    const uesrChoice = this.id;
    const computerChoice = getChoice();
    const result = getWinner(uesrChoice, computerChoice);
    console.log(uesrChoice, computerChoice, result);
    updateGame(uesrChoice, computerChoice, result);
})

$('#reset').click(function () {
    location.reload();
})

function changeUppercase(string) {
    return string.replace(/^./, function(str) {
        return str.toUpperCase();
    });
}

$(function() {
    $('#user-score').html(userScore);
    $('#computer-score').html(systemScore);
})