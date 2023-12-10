function getPilihanComputer() {
    const comp = Math.random();

    if (comp < 0.34) return "batu";
    if (comp >= 0.34 && comp < 0.67) return "gunting";
    return "kertas";
}

function getHasil(comp, player) {
    if (player == comp) return "SERI!";
    if (player == "batu") return comp == "gunting" ? "MENANG!" : "KALAH!";
    if (player == "gunting") return comp == "batu" ? "KALAH!" : "MENANG!";
    if (player == "kertas") return comp == "gunting" ? "KALAH!" : "MENANG!";
}

// const pBatu = document.querySelector(".batu");
// pBatu.addEventListener("click", function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pBatu.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src", pilihanComputer + ".png");

//     const hasil1 = document.querySelector(".info");
//     hasil1.innerHTML = hasil;
// });

// const pGunting = document.querySelector(".gunting");
// pGunting.addEventListener("click", function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGunting.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src", pilihanComputer + ".png");

//     const hasil1 = document.querySelector(".info");
//     hasil1.innerHTML = hasil;
// });

// const pKertas = document.querySelector(".kertas");
// pKertas.addEventListener("click", function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pKertas.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src", pilihanComputer + ".png");

//     const hasil1 = document.querySelector(".info");
//     hasil1.innerHTML = hasil;
// });

function putar() {
    const imgComputer = document.querySelector(".img-komputer");
    const gambar = ["gunting", "batu", "kertas"];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute("src", gambar[i++] + ".png");
        if(i == gambar.length) i = 0;

    }, 100)
}

const pil = document.querySelectorAll("li img");
pil.forEach(function (pil) {
    pil.addEventListener("click", function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function () {
            const imgComputer = document.querySelector(".img-komputer");
            imgComputer.setAttribute("src", pilihanComputer + ".png");

            const hasil1 = document.querySelector(".info");
            hasil1.innerHTML = hasil;
        }, 1100);
    });
});
