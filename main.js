/*
	Functions
*/

 party = false; 
 partyTimer = -1;

function doAlert(){

}

function changeBack( color ){
	document.body.style.backgroundColor=color; 
}

function partyMode(){ 
	if( party == true ){
		clearInterval(partyTimer); 
		party = false;
	}else{
		partyTimer = setInterval( randomizeBack, 100 );
		party = true;
	}
}

function stopParty(){
	clearInterval( partyTimer );
	party = false; 
}

function randomizeBack(){
	colors = ["red", "green", "blue", "white"];
	randCol = colors[ Math.floor(Math.random() * colors.length ) ];
	changeBack(randCol);
}

/*
	Code
*/


