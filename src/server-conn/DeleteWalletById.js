const DeleteWalletById = async (id) => {
    const res = await
        fetch('http://localhost:8080/wallet?id=3',
        {
            method:'DELETE',
            headers : {
                'Access-Control-Allow-Origin': "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            'Content-Type': 'application/json' ,
            }
        })
    const data = await res.json()
    console.log(data)
}

export default DeleteWalletById
