const getData = async (api) => {
    const req = await fetch(api)

    if(!req.ok){
        throw new Error("Something Blabla bla")
    }

    const data = req.json()
    return data
}




export default getData