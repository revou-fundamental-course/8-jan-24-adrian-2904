//Luas Persegi//
function jumlah() {
    var s = document.getElementById(`squareSide`).value;
    var hasil = s*s
    document.getElementById(`Luas`).innerHTML = hasil;
}

//Keliling Persegi//
function Result() {
    var s = document.getElementById(`Keliling`).value;
    var hasil = 4*s
    document.getElementById(`kel`).innerHTML = hasil;
}