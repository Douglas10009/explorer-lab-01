import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const logo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  console.log(type)

  const colors = {
    visa: ["#436D99", "#2D57F211"],
    mastercard: ["#DF6F29", "#C69347"],
    default: ["black", "grey"]
  }

  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])

  // const logos  ={
  //   "visa":["cc-visa.svg"],
  //   "mastercard":["cc-mastercard.svg"]
  // }

  logo.setAttribute("src", `cc-${type}.svg`)

}

//setCardType("mastercard")

globalThis.setCardType = setCardType



//logo.setAttribute("src", "")