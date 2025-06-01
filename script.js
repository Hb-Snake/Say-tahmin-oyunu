var maxsayı = 10;
var tuttuğumSayı;
var tahminSayısı;
var skor = 0;
var highScore = null;
var kalanHak;
var hak;


function başla(){
    maxsayı = document.getElementById("aralık").value;
    hak = parseInt(document.getElementById("hak").value);
    kalanHak = hak
    tuttuğumSayı = Math.floor(Math.random() * maxsayı) + 1;
    tahminSayısı = 0

    document.getElementById("maxSayı").textContent = maxsayı;
    document.getElementById("tahminSayısı").textContent = "Tahmin Sayınız " + tahminSayısı;
    document.getElementById("sonuç").textContent = "";
    document.getElementById("sayı").value = "";

    document.getElementById("aralıkSeçimi").style.display = "none";
    document.getElementById("oyun").style.display = "block";

    let key = "highScore_" + maxsayı;
    let kayitliSkor = localStorage.getItem(key);
    if(kayitliSkor !== null){
        highScore = parseInt(kayitliSkor);
        document.getElementById("highScore").textContent = "En İyi Skorunuz: " + highScore;
    } else {
        highScore = null;
        document.getElementById("highScore").textContent = "En İyi Skorunuz: Yok";
    }

        let kayıtlıSkor = localStorage.getItem("skor_" + maxsayı);
        if(kayıtlıSkor !== null){
            skor = parseInt(kayıtlıSkor);
        } else {
    skor = 0;
}

document.getElementById("skor").textContent = "Skorunuz: " + skor;

    document.getElementById("kalanHak").textContent = "Kalan Hakkınız " + kalanHak;
    document.getElementById("skor").textContent = "Skorunuz: " + skor;
};

function skorKaydet() {
    let a = localStorage.setItem("skor_" + maxsayı, skor);
}

function güncelle(){
    let key = "highScore_" + maxsayı;

    let kayitliSkor = localStorage.getItem(key);
    let mevcutHighScore = kayitliSkor ? parseInt(kayitliSkor) : null;

    if(mevcutHighScore === null || tahminSayısı < mevcutHighScore){
        localStorage.setItem(key, tahminSayısı);
        document.getElementById("highScore").textContent = "En İyi Skorunuz: " + tahminSayısı;
    } else {
        document.getElementById("highScore").textContent = "En İyi Skorunuz: " + mevcutHighScore;
    }
    
}

window.onload = function() {
    maxsayı = parseInt(document.getElementById("aralık").value) || 10;

    let key = "highScore_" + maxsayı;
    let kayitliSkor = localStorage.getItem(key);

    if(kayitliSkor !== null){
        highScore = parseInt(kayitliSkor);
        document.getElementById("highScore").textContent = "En İyi Skorunuz: " + highScore;
    } else {
        document.getElementById("highScore").textContent = "En İyi Skorunuz: Yok";
    }
}

function tahminEt(){
    kalanHak = hak
    var isim = document.getElementById("isim").value
    let sayı = parseInt(document.getElementById("sayı").value);
    tahminSayısı++
    document.getElementById("tahminSayısı").textContent = "Tahmin Sayınız " + tahminSayısı;

    if(sayı < 1 || sayı > maxsayı){
        alert(`Lütfen 1 ile ${maxsayı} arasında bir sayı tutun`);
    }else{
        if(sayı == tuttuğumSayı){
            document.getElementById("sonuç").textContent = "Tebrikler Tekte Bildiniz " + isim;
            document.getElementById("dogru").play();
            güncelle()
            document.getElementById("sayı").style.display = "none";
            document.getElementById("yeniden").style.display = "none";
            document.getElementById("tahmin").style.display = "none";
            document.getElementById("tekrar").style.display = "inline";
            document.getElementById("ipucu").textContent = " ";
            document.getElementById("uyarı").textContent = " ";
            document.getElementById("kalanHak").textContent = " ";
            document.getElementById("tahminSayısı").textContent = " ";
            tuttuğumSayı = Math.floor(Math.random() * maxsayı) + 1;
            document.getElementById("sayı").value = "";
            skor= skor + 20 + hak * 3
            skorKaydet()
            document.getElementById("skor").textContent = "Skorunuz: " + skor
            document.body.style.backgroundColor = "green";
            document.getElementById("kalanHak").textContent = "Kalan Hakkınız" + hak
        }else{
            document.getElementById("yanlis").play();
            kalanHak--
            document.getElementById("kalanHak").textContent = "Kalan Hakkınız " + kalanHak
            if(skor < 2){
                skor = 0
                skorKaydet()
            }else{
                skor = skor - 2
                skorKaydet()
                document.getElementById("skor").textContent = "Skorunuz: " + skor
            }
            if(sayı < tuttuğumSayı){
                document.getElementById("ipucu").textContent = "Tekrar Deneyiniz ve Daha Büyük Bir Sayı Girin";
            }else{
                document.getElementById("ipucu").textContent = "Tekrar Deneyiniz ve Daha Küçük Bir Sayı Girin";
            };
            document.getElementById("tahmin").style.display = "none";
            document.getElementById("yeniden").style.display = "inline";
            document.getElementById("sayı").value = "";
            document.body.style.backgroundColor = "red";
        };
    };
};

function yenidenDene(){
    var isim = document.getElementById("isim").value
    let sayı = parseInt(document.getElementById("sayı").value);
    if(sayı < 1 || sayı > maxsayı){
        alert(`Lütfen 1 ile ${maxsayı} arasında bir sayı tutun`);
    }else{
        if(sayı == tuttuğumSayı){
            document.getElementById("sonuç").textContent = "Tebrikler Bildiniz " + isim;
            document.getElementById("dogru").play();
            güncelle()
            document.getElementById("tekrar").style.display = "inline";
            document.getElementById("sayı").style.display = "none";
            document.getElementById("yeniden").style.display = "none";
            document.getElementById("ipucu").textContent = " ";
            document.getElementById("uyarı").textContent = " ";
            document.getElementById("kalanHak").textContent = " ";
            document.getElementById("tahminSayısı").textContent = " ";
            document.getElementById("sayı").value = "";
            tahminSayısı = 0
            document.getElementById("tahminSayısı").textContent = "Tahmin Sayınız " + tahminSayısı;
            skor = skor + 10 + kalanHak
            skorKaydet()
            document.getElementById("skor").textContent = "Skorunuz: " + skor
            document.body.style.backgroundColor = "green";
            document.getElementById(kalanHak).textContent = "Kalan Hakkınız" + hak
        }else{
            document.getElementById("yanlis").play();
            kalanHak--
            document.getElementById("kalanHak").textContent = "Kalan Hakkınız " + kalanHak
            if (kalanHak == 0){
                document.getElementById("sonuç").textContent = `Kaybettiniz. Tuttuğum Sayı ${tuttuğumSayı} idi`;
                document.getElementById("uyarı").textContent = " ";
                document.getElementById("sayı").style.display = "none";
                document.getElementById("yeniden").style.display = "none";
                document.getElementById("tekrar").style.display = "inline";
                if(skor<5){
                    skor = 0
                    skorKaydet
                }else{
                    skor = skor - 5
                    skorKaydet()
                    document.getElementById("skor").textContent = "Skorunuz: " + skor
                }
            }else{
                if(maxsayı == 10){
                    if(kalanHak == 1){
                        document.getElementById("uyarı").textContent = "Son 1 Hakkın Kaldı";
                    }
                    if(sayı > tuttuğumSayı){
                        document.getElementById("ipucu").textContent = " Daha Küçük Bir Sayı Girin ⬇️"
                    }else{
                        document.getElementById("ipucu").textContent = " Daha Büyük Bir Sayı Girin ⬆️"
                    }
                    if(Math.abs(tuttuğumSayı-sayı)>=5){
                        document.getElementById("sonuç").textContent = "Çok uzaktasın! Tekrar dene 💪";
                    }else if(Math.abs(tuttuğumSayı-sayı) < 5 && Math.abs(tuttuğumSayı-sayı) >= 3){
                        document.getElementById("sonuç").textContent = "Yaklaştın, biraz daha dikkat! 👀";
                    }else{
                        document.getElementById("sonuç").textContent = "Neredeyse bildin! 🔥";
                    }
                }
                if(maxsayı == 50){
                    if(kalanHak < 4){
                        document.getElementById("uyarı").textContent = `${kalanHak} Hakkın Kaldı`;
                    }
                    if(sayı > tuttuğumSayı){
                        document.getElementById("ipucu").textContent = " Daha Küçük Bir Sayı Girin ⬇️"
                    }else{
                        document.getElementById("ipucu").textContent = " Daha Büyük Bir Sayı Girin ⬆️"
                    }
                    if(Math.abs(tuttuğumSayı-sayı)>= 25){
                        document.getElementById("sonuç").textContent = "Tahminin dağları aşmış 😅";
                    }else if(Math.abs(tuttuğumSayı-sayı) < 25 && Math.abs(tuttuğumSayı-sayı) >= 10){
                        document.getElementById("sonuç").textContent = "Biraz uzaktasın, deneyebilirsin! 🌄";
                    }else if(Math.abs(tuttuğumSayı-sayı) < 10 && Math.abs(tuttuğumSayı-sayı) >= 5){
                        document.getElementById("sonuç").textContent = "Oldukça yakınsın! Devam et 🔍";
                    }else{
                        document.getElementById("sonuç").textContent = "Çok çok yakın! Az kaldı! 🎯";
                    }
                }
                if(maxsayı == 100){
                    if(kalanHak < 6){
                        document.getElementById("uyarı").textContent = `${kalanHak} Hakkın Kaldı`;
                    }
                    if(sayı > tuttuğumSayı){
                        document.getElementById("ipucu").textContent = " Daha Küçük Bir Sayı Girin ⬇️"
                    }else{
                        document.getElementById("ipucu").textContent = " Daha Büyük Bir Sayı Girin ⬆️"
                    }
                    if(Math.abs(tuttuğumSayı-sayı)>= 50){
                        document.getElementById("sonuç").textContent = "Çok uzaktasın! Sayılarla aran iyi değil mi? 😅";
                    }else if(Math.abs(tuttuğumSayı-sayı) < 50 && Math.abs(tuttuğumSayı-sayı) >= 25){
                        document.getElementById("sonuç").textContent = "Hâlâ uzaktasın, ama umut var! 🌟";
                    }else if(Math.abs(tuttuğumSayı-sayı) < 25 && Math.abs(tuttuğumSayı-sayı) >= 10){
                        document.getElementById("sonuç").textContent = "Yakınsın, güzel gidiyorsun! 👍";
                    }else if(Math.abs(tuttuğumSayı-sayı) < 10 && Math.abs(tuttuğumSayı-sayı) >= 5){
                        document.getElementById("sonuç").textContent = "ÇÇok yakın! Kalp atışları hızlandı! 💓";
                    }else{
                        document.getElementById("sonuç").textContent = "Acayip yakınsın! Hadi bir tane daha 🚀";
                    }
                }
                document.getElementById("sayı").value = "";
                tahminSayısı++
                document.getElementById("tahminSayısı").textContent = "Tahmin Sayınız " + tahminSayısı;
                if(skor<2){
                    skor = 0
                    skorKaydet()
                }else{
                    skor = skor - 2
                    skorKaydet()
                    document.getElementById("skor").textContent = "Skorunuz: " + skor
                }
                document.body.style.backgroundColor = "red";
            }
        };
    };
};

function yenidenBaşla(){
    document.getElementById("sayı").style.display = "inline";
    document.getElementById("tekrar").style.display = "none";
    document.getElementById("tahmin").style.display = "inline";
    document.getElementById("yeniden").style.display = "none";
    document.getElementById("sayı").value = "";
    document.getElementById("sonuç").textContent = "";
    document.getElementById("uyarı").textContent = "";
    document.getElementById("ipucu").textContent = "";
    document.body.style.backgroundColor = "rgb(1, 1, 81)";
    tahminSayısı = 0
    document.getElementById("tahminSayısı").textContent = "Tahmin Sayınız " + tahminSayısı;

    tuttuğumSayı = Math.floor(Math.random() * maxsayı) + 1;
    document.getElementById("kalanHak").textContent = "Kalan Hakkınız" + hak
};

function başaDön(){
    document.getElementById("aralıkSeçimi").style.display = "block";
    document.getElementById("tahmin").style.display = "inline";
    document.getElementById("yeniden").style.display = "none";
    document.getElementById("tekrar").style.display = "none";
    document.getElementById("sayı").style.display = "inline";
    document.getElementById("oyun").style.display = "none";
    document.body.style.backgroundColor = "rgb(1, 1, 81)";
}

document.getElementById("sayı").addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                if (document.getElementById("tahmin").style.display !== "none") {
                    tahminEt();
                } else {
                    yenidenDene();
                }
            }
        });