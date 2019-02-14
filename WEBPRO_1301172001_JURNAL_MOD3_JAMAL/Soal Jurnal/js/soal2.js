// write your code here
// tulis kodingan disini
function validasi(){
	var ambilnama = document.getElementById("nama").value;
	var ambilemail = document.getElementById("email").value;
	var ambilalamat = document.getElementById("alamat").value;
	if(ambilnama!="" && ambilemail!=""&&ambilalamat!=""){
		alert("Selamat datang " + ambilnama);
	}
	else{
		alert("Anda harus mengisi data dengan lengkap ! ");
	}
}

function ubahbackground(){
	document.body.style.background = "url('image.jpg')";
}

function ubahfont(){
	document.getElementById("telkom").style.fontFamily = "serif";

}

function ubahukuranfont(){
	document.getElementById("telkom").style.fontSize ="20";
}

function ubahwarnafont(){
	document.getElementById("telkom").style.color = "yellow";
}

function hapus(){
	document.getElementById("telkom").innerHTML = "" ;
}

