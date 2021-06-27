const PostWallet = async(wallet) => {
    const res = await
    fetch('https://localhost:8080/wallet',
    {
        method:'POST',
        headers : {
            'Access-Control-Allow-Origin': "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Content-Type': 'application/json' ,
        },
        body: {
            "name" : "shubham",
            "balance" : 100
        }
        //body: JSON.stringify(user),
    })
    const data = await res.json()

    return data
}

export default PostWallet