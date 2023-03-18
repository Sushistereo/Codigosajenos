async function getPeople(){
    let people;

    await fetch("https://randomuser.me/api/?results=3")
    .then(serverResponse => serverResponse.json())
    .then(serverResponse => people = serverResponse)
      
    console.log(people.results)
    
    // Necesitamos 
    // {name,lastName,age,mail,profilePictureURL}
}

window.onload = async()=>{
    const people = await getPeople()
}

