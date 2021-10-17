carregaCF();
function carregaCF(){
	var url = "https://constituicao.stf.jus.br";
	var tagSTF = document.getElementsByClassName("cstf");
	
	for (var i = 0; i < tagSTF.length; i++) {
                
        var artigo = tagSTF[i].getAttribute("name");
        //artigo = artigo.replace(/[^\d]+/g,'');

		urlSTF = url+"/dispositivo/"+artigo;
		
		//Atribui o endereco do link 
		tagSTF[i].setAttribute("href", urlSTF);
		tagSTF[i].setAttribute("target", "_blank");
		tagSTF[i].setAttribute("alt", "Visualizar dispositivos do STF");
		tagSTF[i].setAttribute("title", "Visualizar dispositivos do STF");
		tagSTF[i].innerHTML = '<i class="fa fa-balance-scale"></i>';
	}
	
}