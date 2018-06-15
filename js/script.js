dynamic();
gen_pass();
сhoise();
startpage();
paint_on();
paint_off();
copy_pass();

function copy_pass(){
	document.getElementById('pass_place').select();
	document.execCommand('copy');
	
}

function paint_on(x){
	document.getElementById(x).style.backgroundColor = "#78D2FF";	
}

function paint_off(x){
	if(mode==x){
	document.getElementById(x).style.backgroundColor = "#4781FF";
	}
	else{
	document.getElementById(x).style.backgroundColor = "#B2D2FF";	
	}
}

function startpage(){
	сhoise('vk');
	gen_pass();
}

function сhoise(x){
	mode=x; 
	document.getElementById('vk').style.backgroundColor = "#B2D2FF"; //что-то getElementsbyClassName не хочет работать
	document.getElementById('gu').style.backgroundColor = "#B2D2FF";
	document.getElementById('ph').style.backgroundColor = "#B2D2FF";
	document.getElementById('my').style.backgroundColor = "#B2D2FF";
	document.getElementById('options').style.display = "none";
	
	document.getElementById(x).style.backgroundColor = "#4781FF";
	
	if(x=='my'){
		document.getElementById('options').style.display = "block";	
	};
	
	gen_pass();
}

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
 }
 

function dynamic(){
	document.getElementById('range_value').innerHTML = document.getElementById('ranger_line').value;
	
	gen_pass();
} 


function gen_pass() {

	var a_big = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var a_small = 'abcdefghijklmnopqrstuvwxyz';
	var a_number = '0123456789';
	var a_symbol = '!#$%&:;[]^_`~';
	var a_avail ='';
	
	
	switch (mode){
		case 'vk':
			var sum_pass=10;
			var big=true;
			var small=true;
			var number=true;
			var symbols=false;
		break;
		case 'gu':
			var sum_pass=8;
			var big=true;
			var small=true;
			var number=true;
			var symbols=false;
		break;
		case 'ph':
			var sum_pass=6;
			var big=false;
			var small=true;
			var number=false;
			var symbols=false;
		break;
		case 'my':
			var sum_pass = document.getElementById('range_value').innerHTML;
			var big = document.getElementById("check_big").checked;
			var small = document.getElementById("check_small").checked;
			var number = document.getElementById("check_number").checked;
			var symbol = document.getElementById("check_symbol").checked;
		break;
	}
	
	
	var password = '';

	if (big==true){
		password+=a_big[randomInteger(0, a_big.length-1)];
		a_avail+=a_big;
	};

	if (small==true){
		password+=a_small[randomInteger(0, a_small.length-1)];
		a_avail+=a_small;
	};

	if (number==true){
		password+=a_number[randomInteger(0, a_number.length-1)];
		a_avail+=a_number;
	};

	if (symbol==true){
		password+=a_symbol[randomInteger(0, a_symbol.length-1)];
		a_avail+=a_symbol;
	};

	if ((big==false)&&(small==false)&&(number==false)&&(symbol==false)){
		password='Укажите требуемые символы';
	}
    else{ 
		for (i = password.length; i < sum_pass; i++){
			password+=a_avail[randomInteger(0, a_avail.length-1)];
		}
    }

    document.getElementById('pass_place').innerHTML = password;

}