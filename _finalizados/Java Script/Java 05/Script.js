let banners = ["banner1.jpg", "banner2.jpg", "banner3.jpg", "banner4.jpg", "banner5.jpg", "banner6.jpg"];
let current = 0;

function rotateBanner() {
    current = (current + 1) % banners.length;
    document.getElementById("bannerImage").src = banners[current];
}

setInterval(rotateBanner, 9000)