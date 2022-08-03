var coll = document.getElementsByClassName("container");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


function velmed(){ 
    var dist, hora;
    dist=document.getElementById('dist').value;
	hora=document.getElementById('hora').value;
	var vm=(dist/hora);
	var vmms=(vm/3.6);
    resposta.value = "A velocidade média foi de: "+(vm.toFixed(2))+" km/h ou "+(vmms.toFixed(2))+" m/s"
}

function limpar(){
    document.getElementById('dist').value = "";
    document.getElementById('hora').value = "";
    document.getElementById('resposta').value = "";
}

function arcir(){
    var raio=document.getElementById('raio').value;
    var area=(Math.PI*(Math.pow(raio, 2)));
    resposta2.value = "A área da circunferência é de "+area.toFixed(2)+" m²";
}

function limpar2(){
    document.getElementById('raio').value = "";
    document.getElementById('resposta2').value = "";
}

function arqua(){
    var area=document.getElementById('area').value;
    area=Math.pow(area, 2);
    resposta3.value = "A área do quadrado é de "+area.toFixed(2)+" m²";
}

function limpar3(){
    document.getElementById('area').value = "";
    document.getElementById('resposta3').value = "";
}

function arret(){
    var base=document.getElementById('base').value;
    var altura=document.getElementById('altura').value;
    var area=(base*altura);
    resposta4.value = "A área do retângulo é de "+area.toFixed(2)+" m²";
}

function limpar4(){
    document.getElementById('base').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('resposta4').value = "";
}


function valdesc(){
    var valor=document.getElementById('valor').value;
    var porc=document.getElementById('porc').value;
    porc=(porc/100);
    var desc=(valor*porc);
    var final=(valor-desc);
    resposta5.value = "Valor do desconto: "+desc.toFixed(2)+" reais.";
    resposta6.value = "Preço final: "+final.toFixed(2)+" reais.";

}

function limpar5(){
    document.getElementById('valor').value = "";
    document.getElementById('porc').value = "";
    document.getElementById('resposta5').value = "";
    document.getElementById('resposta6').value = "";
}
