//const val = document.getElementById('clave').value;

//const val = "asd(12*D";
const checkContrasena = (valor) => {
    if(valor != ""){
        //Validación usando expresiones regulares
        let validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(validation.test(valor)){
            console.log(valor + " valido");
            return true;
        }else{
            console.log(valor + " no valido");
            return false;
        }
    }else{
        console.log(valor + " no valido laksalks");
        return false;
    }  
};
checkContrasena(val);

module.exports = {checkContrasena};
