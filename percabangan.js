const password = '12345'
const validPassword = '123456'
var retry = 0;

if(password==validPassword){
    console.log("Selamat datang bos!")
} else {
    console.log("Password Salah, coba lagi!")
}


if(password==validPassword){
    console.log("Selamat datang bos!")
} else if(retry<3) {
    console.log("Ulangi!")
    retry=retry++
} else {
    console.log("Batas pengisian")
}