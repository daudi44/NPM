//EXEMPLE IIFE
var user = (function (e = 'daudi@iesebre.com'){
    let email = e;
    var password = 'hola1234';
    
    function usuariCorreu(){
        console.log('Usuari: ' + email)
    }

    return{
        usuariCorreu : usuariCorreu,
        email : email,
        //Creo funció per poder establir un correu al usuari
        setEmail(com) {
            this.email = com;
        }
    }
})()