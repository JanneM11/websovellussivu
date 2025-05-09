const btc_span = document.querySelector('#btc')
const eth_span = document.querySelector('#eth')

const url = 'https://api.coinlore.net/api/ticker/?id=90,80'


const getValues = () => {
    axios.get(url)
    .then(response =>{
        const json = response.data
        console.log(json)
        btc_span.innerHTML = json[0].price_usd
        eth_span.innerHTML = json[1].price_usd
    }).catch(error =>{
        alert(error)
    })
}
 getValues()