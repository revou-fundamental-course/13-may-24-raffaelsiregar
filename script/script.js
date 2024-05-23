function hitungLuas() {
    let alas = document.getElementById('alas').value;
    let tinggi = document.getElementById('tinggi').value;
    parseInt(document.getElementById('result-luas').value = alas*tinggi/2);
}
function clearLuas() {
    alas.value = "" ;
    tinggi.value = "";
    document.getElementById('result-luas').value = "";
}

function hitungKeliling() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);
    parseInt(document.getElementById('result-keliling').value = a+b+c);
}
function clearKeliling() {
    a.value = "";
    b.value = "";
    c.value = "";
    document.getElementById('result-keliling').value = "";
}