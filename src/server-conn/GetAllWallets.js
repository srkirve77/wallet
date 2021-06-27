import HOST_URL from "./HostInfo"

const GetAllWallets = async(pageNo) => {


  let headers1 = new Headers();

  headers1.append('Content-Type', 'application/json');
  headers1.append('Accept', 'application/json');
  headers1.append('Access-Control-Allow-Credentials', 'true');

    console.log(HOST_URL)
    const res = await fetch(HOST_URL +'/wallets', {
            headers :headers1
        })
    const data = await res.json()
    return data
}

export default GetAllWallets