	// Global Variables
var character = [
	{ id: 'yoda', name: 'Yoda', hp: 110, attack: 10 },
	{ id: 'luke', name: 'Luke', hp: 120, attack: 10 },
	{ id: 'vadar', name: 'Darth Vadar', hp: 150, attack: 10 },
	{ id: 'kylo', name: 'Kylo Ren', hp: 130, attack: 10 }
];

// Character Variables

var $selectedHero;
var $selectedEnemy;

//Audio Function
function audioPlay(){
	var audio = document.getElementById('player');
	if(audio.pause){
		audio.play();
	} else{
		audio.pause();
	}
}

function audioPlay2(){
	var audio = document.getElementById('player2');
	if(audio.pause){
		audio.play();
	} else{
		audio.pause();
	}
}

function audioPlay3(){
	var audio = document.getElementById('player3');
	if(audio.pause){
		audio.play();
	}
}

	// Processes Clicks on players
function addClickListeners(){
	$('.character').click(assignCharacter);
	$('#attack').click(performAttack);
}

	// Basic Character Options
function buildCharacter() {
	for (var i = 0; i < character.length; i++) {
		var currentCharacter = character[i];
		console.log(currentCharacter);
		$('#characters').append('<div id=' + currentCharacter.id + ' class="character"></div');
	}
}

	// Player Chooses Character & Character Moves
function assignCharacter() {
	if ($selectedHero && $selectedEnemy) return;

	if ($selectedHero){
		$selectedEnemy = $(this);
		$(this).appendTo('#enemy');
		//console.log("Enemy is " + enemy);

	} else {
		$selectedHero = $(this);
		$(this).appendTo('#hero');
		//console.log("selectedHero is " + selectedHero);
	}
}

function getCharacterById(id) {
	for (var i = 0; i < character.length; i++) {
		if (id === character[i].id){
			return character[i];
		}
	}
	// for loop over charactes
	// if id === currentCharacter.id
	// return currentCharater
}

	// Fighting System processes hits & lowers HP
function performAttack() {	
	// get selectedHero id from html > for loop ????
	// find that id in my chracter array > for loop
	//var attackPower = [2, 4, 5, 6];
	//var attackHit = attackPower[Math.floor(Math.random()*attackPower.length)];
audioPlay2();

	var enemyObject = getCharacterById($selectedEnemy.attr('id'));
	var heroObject = getCharacterById($selectedHero.attr('id'));

	console.log(enemyObject, heroObject);

		// Attack Stats
		heroObject.attack = heroObject.attack;

		enemyObject.attack = enemyObject.attack;

	// HP Stats
	enemyObject.hp = enemyObject.hp - heroObject.attack;

	heroObject.hp = heroObject.hp - enemyObject.attack;

// Writes Out Enemy & Hero Stats
	document.getElementById("HeroHP").innerHTML = "Hero" + '<br>' + "HP " + heroObject.hp;
		document.getElementById("HeroAttack").innerHTML = "Attack " + heroObject.attack;
		//Enemy
			document.getElementById("EnemyHP").innerHTML = "Enemy" +'<br>' + "HP " + enemyObject.hp;
		document.getElementById("EnemyAttack").innerHTML = "Attack " + enemyObject.attack;


	if (enemyObject.hp = 0){
		console.log("you lost");
		audioPlay3();
	$($selectedEnemy).css('display', 'none');
	}

	if (heroObject.hp = 0){
	document.getElementById("messages").innerHTML = "You Lost.";
		audioPlay();
	}

}

buildCharacter();
addClickListeners();

