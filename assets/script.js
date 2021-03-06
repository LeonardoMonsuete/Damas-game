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


	$(document).on('click','.azuis',function(){
		var $this = $(this);
		$('.azuis').removeClass('azul_selecionada');
		$this.addClass('azul_selecionada');
	  });
	  
	  $('body').click(function() {
		$('.azuis').removeClass('azul_selecionada');
	  });

	  $(document).on('click','.vermelhas',function(){
		var $this = $(this);
		$('.vermelhas').removeClass('vermelha_selecionada');
		$this.addClass('vermelha_selecionada');
	  });
	  
	  $('body').click(function() {
		$('.vermelhas').removeClass('vermelha_selecionada');
	  });

