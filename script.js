async function getPeople(){
    let people;

    await fetch("https://randomuser.me/api/?results=3")
    .then(serverResponse => serverResponse.json())
    .then(serverResponse => people = serverResponse)
      
    return people
}
    /*armar una funcion que recibiendo fname y lname devuelva fullname, que es un string*/
    function getFullName (fname, lname){
        /* otra opción
        const fullName = `${fname.charAt(0).toUpperCase() + fname.slice(1)} ${lname.charAt(0).toUpperCase() + lname.slice(1)}`*/
        const fullName = fname[0].toUpperCase()+fname.substring(1).toLowerCase()+" "+lname.at(0).toUpperCase()+lname.substring(1).toLowerCase()
        
        return fullName
        
    }

console.log(getFullName("fran","lacha"))    


    // Necesitamos 
    // {name,lastName,age,mail,profilePictureURL}
    /*En base al resultado de la llamada FETCH
     a la API de Random Users, tenemos que armar
      una función que nos devuelva N objetos dentro de un array, cada uno con una estructura similar a la siguiente: 
{ fullName : "",  age: 0, mail: "", profilePictureURL: ""}*/
    
    function limpiarDatos (valores){
    //empieza la función
    valores.forEach(persona => {
        console.log(persona.name)
       //mapear cada persona
        
    });
    
    }

window.onload = async()=>{
   const people = await getPeople()
    limpiarDatos(people.results)
}