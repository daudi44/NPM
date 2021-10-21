export default function (e = 'daudi@iesebre.com'){
    let email = e;
    var password = 'hola1234';

    return{
        usuariCorreu : function usuariCorreu(){
            console.log('Usuari: ' + email)
        },
        email : email,
        setEmail : function setEmail(com){
            this.email = com;
        }
    }
}