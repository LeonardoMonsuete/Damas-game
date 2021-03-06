
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
	var selecionada = 0;
	var idCasaPeca = ''
	var idCasaAspirada = ''
	var clicks = 0
	let casas = document.querySelectorAll('td')

	casas.forEach(casa => casa.addEventListener('click', () =>{
		 	if(clicks == 1){
				idCasaAspirada = casa.id
				move(idCasaPeca,idCasaAspirada)
				clicks = 0
			 }
	}))

	$(document).on('click','.azuis',function(){
		var $this = $(this);
		$('.azuis').removeClass('azul_selecionada');
		idCasaPeca = this.parentNode.id
		clicks ++;
		$this.addClass('azul_selecionada');
	  });
	  
	  $('body').click(function() {
		$('.azuis').removeClass('azul_selecionada');
	  });

	  $(document).on('click','.vermelhas',function(){
		var $this = $(this);
		idCasaPeca = this.parentNode.id
		clicks ++;
		$('.vermelhas').removeClass('vermelha_selecionada');
		$this.addClass('vermelha_selecionada');
	  });
	  
	  $('body').click(function() {
		$('.vermelhas').removeClass('vermelha_selecionada');
	  });



function move(idAtual,idMovimento){
	let coordsAtual = splitCoords(idAtual);
	let coordsMovimento = splitCoords(idMovimento);
	
	console.log(coordsMovimento)
	console.log(coordsAtual)
	if(validateMoviment(coordsMovimento)){
		console.log("é um movimento valido !!")
	}else{
		console.log("não é um movimento valido !")
	}
}