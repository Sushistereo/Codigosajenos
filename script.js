async function getPeople(){
    let people;

    await fetch("https://randomuser.me/api/?results=3")
    .then(serverResponse => serverResponse.json())
    .then(serverResponse => people = serverResponse)
      
    return people
}
    /*armar una funcion que recibiendo fname y lname devuelva fullname, que es un string*/
    function getFullName (fname, lname){
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
    const sanitizePeople = valores.map(person => {
        return {
            name: getFullName(person.name.first,person.name.last),
            age: person.dob.age,
            mail: person.email,
            profilePictureURL: person.picture.thumbnail,
        }
    })
    return sanitizePeople        
    }

    function renderPeople(personData){
        console.log(personData)
        /*crear elemnto html que contenga la estructura de la tarjeta y poner 
        los literals a donde van los datos. 
        Función create

    }

window.onload = async()=>{
   const people = await getPeople()
    limpiarDatos(people.results).forEach(person => renderPeople(person))
}