//Luas Persegi//
function jumlah() {
    var s = document.getElementById(`squareSide`).value;
    var a = " X "
    var Result =s + a + s
    var hasil = s*s
    document.getElementById("oke").innerHTML = Result;
    document.getElementById(`Luas`).innerHTML = hasil;
}

//reset
function resetBtn() {
    document.getElementById(`squareSide`).value = '';
}


//Keliling Persegi//

//Hitung//
function Result() {
    var s = document.getElementById(`Keliling`).value;
    var a = " X "
    var b = 4
    var Result = b + a + s 
    var hasil = 4*s
    document.getElementById(`oke1`).innerHTML = Result
    document.getElementById(`kel`).innerHTML = hasil;
}

//reset//
function buttonReset() {
    document.getElementById(`Keliling`).value = '';
}
