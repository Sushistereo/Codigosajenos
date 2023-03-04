async function getPeople(){
    //ir a buscar los datos
    const response = fetch("https://randomuser.me/api/")
    //const results = Object.fromEntries(response.results)
    console.log(response)
    //const people = response.results.map(()=>{
    //    return {
    //        name:`${name.first} ${name.last}`,
    //        age: dob.age
    //         }
    //}) 
    //return people.json()
    //mapear los campos

}

window.onload = async()=>{
    console.log("el texto que quieras")
    const people = await getPeople()
    console.log(people)
}

