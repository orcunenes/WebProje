var x;
var y ;

function kaydol() {
	x=document.getElementById("user2");
	y=document.getElementById("pass2");
	localStorage.setItem("kadi",x.value);
	localStorage.setItem("sifre",y.value);
	alert("kaydolma başarılı lütfen giriş yapın");

}
function login() {
var kadi=localStorage.getItem("kadi");
	var sifre=localStorage.getItem("sifre");
	
	if(kadi==document.getElementById("user").value&& sifre==document.getElementById("pass").value)
		{
			alert("giriş başarılı! yönlendiriliyor...");
			location.href="../index.html";
		}
	else{
		alert("giriş başarısız lütfen tekrar deneyin...");
	}
}
function yazdir2(){
	//alert (x);
}
