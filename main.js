var imagens =

["https://i.postimg.cc/d0z4YLp5/m-e-1.jpg",
"https://i.postimg.cc/j24jT3qZ/pai.jpg",
"https://i.postimg.cc/nhPhnDZb/irm-os.jpg",
"https://i.postimg.cc/kMvMBZ9y/av-s.jpg",
"https://i.postimg.cc/dVpwbcmJ/primos.jpg",
"https://i.postimg.cc/RhgzGkZ5/tios.jpg"];

var names = ["MÃE","PAI","IRMÃOS","AVÓS","PRIMOS","TIOS"]

var i = 0;
function atualizar()
{
    i++;
    var numbersOffFamilyMemberInArray = 5
    if(i > numbersOffFamilyMemberInArray )
{
    i = 0;
}
var atualizarImagens = imagens[i];
var atualizarNomes = names[i];
document.getElementById("familia").src = atualizarImagens;
document.getElementById("mae").innerHTML = atualizarNomes;
}