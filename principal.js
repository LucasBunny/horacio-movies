var banners = ["Os melhores móveis de São Paulo!!", "Qualidade e preço muitoooo baixo!"];
var bannerAtual = 0;
function trocarBanner() {
bannerAtual = (bannerAtual + 1) % 2;
document.querySelector('h2#mensagem').textContent = 
banners[bannerAtual];
}
setInterval(trocarBanner, 1000);
