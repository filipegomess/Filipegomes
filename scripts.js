const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")



function convertValues() {

const inputCurrencyValue = document.querySelector(".input-currency").value
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConverted = document.querySelector(".currency-value")

console. log(currencySelect.value)

const dolarToday = 5.65
const euroToday = 6.13
const libraToday = 7.39
const bitcoinToday = 432.956



if(currencySelect.value == "dolar"){

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)



}

if(currencySelect.value == "euro"){

    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)

}

if(currencySelect.value == "libra"){

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue / libraToday)


}

if(currencySelect.value == "bitcoin"){

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-BT", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)



}
currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputCurrencyValue)

}
function changecurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./imagem/Dólar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./imagem/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./imagem/Libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./imagem/Bitcoin.png"
    }





    convertValues()
}





currencySelect.addEventListener("change", changecurrency )
convertButton.addEventListener("click", convertValues)

