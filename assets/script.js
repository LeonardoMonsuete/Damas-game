
// var tabuleiro = document.getElementById("tabuleiro");
// var campo = tabuleiro.getContext("2d");
// var x = 0;
// var y = 0;

// for(var i = 0; i < 520; i = i + 65){
// 	if (i % 2 == 0) {
// 		x =  0;
// 	}else{
// 	 	x = 65;
// 	}

// 	for(var j = 0; j < 9; j++){
// 		campo.beginPath();
// 		campo.rect(0+x,0+i,65,65);
// 		campo.fill();
// 		campo.closePath();
// 		x = x +130;
// 	}
// }

	let tabuleiro = {
		pecas:[
			{
				coord:"11",
				is_dama:false,
				peca_cor:"vermelha"
			},
			{
				coord:"31",
				is_dama:false,
				peca_cor:"vermelha"
			},
			{
				coord:"22",
				is_dama:false,
				peca_cor:"vermelha"
			},
			{
				coord:"13",
				is_dama:false,
				peca_cor:"vermelha"
			},
			{
				coord:"33",
				is_dama:false,
				peca_cor:"vermelha"
			},
			{
				coord:"24",
				is_dama:false,
				peca_cor:"vermelha"
			},
			{
				coord:"15",
				is_dama:false,
				peca_cor:"vermelha"
			},
			{
				coord:"35",
				is_dama:false,
				peca_cor:"vermelha"
			},
			{
				coord:"26",
				is_dama:false,
				peca_cor:"vermelha"
			},
			{
				coord:"17",
				is_dama:false,
				peca_cor:"vermelha"
			},
			{
				coord:"37",
				is_dama:false,
				peca_cor:"vermelha"
			},
			{
				coord:"28",
				is_dama:false,
				peca_cor:"vermelha"
			},
			{
				coord:"71",
				is_dama:false,
				peca_cor:"azul"
			},
			{
				coord:"82",
				is_dama:false,
				peca_cor:"azul"
			},
			{
				coord:"62",
				is_dama:false,
				peca_cor:"azul"
			},
			{
				coord:"73",
				is_dama:false,
				peca_cor:"azul"
			},
			{
				coord:"84",
				is_dama:false,
				peca_cor:"azul"
			},
			{
				coord:"64",
				is_dama:false,
				peca_cor:"azul"
			},
			{
				coord:"75",
				is_dama:false,
				peca_cor:"azul"
			},
			{
				coord:"86",
				is_dama:false,
				peca_cor:"azul"
			},
			{
				coord:"66",
				is_dama:false,
				peca_cor:"azul"
			},
			{
				coord:"77",
				is_dama:false,
				peca_cor:"azul"
			},
			{
				coord:"88",
				is_dama:false,
				peca_cor:"azul"
			},
			{
				coord:"68",
				is_dama:false,
				peca_cor:"vermelha"
			}
	  ]
	}

	var selecionada = 0;
	var idCasaPeca = ''
	var idCasaAspirada = ''
	var clicks = 0
	var idPeca = ''
	let casas = document.querySelectorAll('td')

	casas.forEach(casa => casa.addEventListener('click', () =>{
		 	if(clicks == 1){
				idCasaAspirada = casa.id
				move(idCasaPeca,idCasaAspirada)
				clicks = 0
			 }
	}))

	casas.forEach(casa => casa.addEventListener('mouseenter', () =>{
		document.getElementById('show-td-id').innerText = casa.id;
	}))

	$(document).on('click','.azuis',function(){
		var $this = $(this);
		$('.azuis').removeClass('azul_selecionada');
		idCasaPeca = this.parentNode.id
		idPeca = this.id;
		
		clicks ++;
		$this.addClass('azul_selecionada');
	  });
	  
	  $('body').click(function() {
		$('.azuis').removeClass('azul_selecionada');
	  });

	  $(document).on('click','.vermelhas',function(){
		var $this = $(this);
		idCasaPeca = this.parentNode.id;
		var validMoveOne = parseInt(idCasaPeca) - 11;
		var validMoveOTwo = parseInt(idCasaPeca) - 9;
		// document.getElementById(validMoveOne).style.backgroundColor = 'green';
		// document.getElementById(validMoveOTwo).style.backgroundColor = 'green';
	
		idPeca = this.id;
		clicks ++;
		$('.vermelhas').removeClass('vermelha_selecionada');
		$this.addClass('vermelha_selecionada');
	  });
	  
	  $('body').click(function() {
		$('.vermelhas').removeClass('vermelha_selecionada');
		// document.getElementById(validMoveOne).style.backgroundColor = 'black';
		// document.getElementById(validMoveOTwo).style.backgroundColor = 'black';
	  });



function move(idAtual,idMovimento){
	let coordsAtual = splitCoords(idAtual);
	let coordsMovimento = splitCoords(idMovimento);
	
	console.log(idAtual)
	console.log(idMovimento)
	console.log(idPeca)
	if(validateMoviment(coordsMovimento)){
		console.log("é um movimento valido !!")
		document.getElementById(idMovimento).appendChild(document.getElementById(idPeca))
	}else{
		console.log("não é um movimento valido !")
		alert("Não é um movimento valido")
	}
}
