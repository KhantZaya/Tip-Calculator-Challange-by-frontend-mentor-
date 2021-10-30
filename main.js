const tipBtn = document.querySelectorAll('.tip-btn')
const customTip = document.querySelector('.custom-tip')
const bill = document.querySelector('.bill-input')
const people = document.querySelector('.people')
const tipResult = document.querySelector('.tip-amount-result')
const totalResult = document.querySelector('.total-amount-result')
const resetBtn = document.querySelector('.reset-btn')

let amount = 0, tip = 0, ppl = 1

bill.addEventListener('input', () => {
    amount = Number(bill.value)
    calculate()
})

tipBtn.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active')
            tip = 0
        }else {
            removeActive()
            btn.classList.add('active')
        }
        tip = btn.value
        console.log(tip);
        calculate()
    })
})

customTip.addEventListener('input', () => {
    removeActive()
    tip = Number(customTip.value)
    calculate()
})

people.addEventListener('input', (e) => {
//    ppl = people.value
    ppl = Number(e.target.value)
    calculate()
})

resetBtn.addEventListener('click', () => {
    console.log("click reset");
    start()
})

function calculate () {
    if (amount >= 0 && amount != "") {
        let totalTip = (amount * tip / 100) / ppl
        let totalAmount = (amount + Number(tip)) / ppl
    
        tipResult.innerHTML = `$${totalTip.toFixed(2)}`
        totalResult.innerHTML = `$${totalAmount.toFixed(2)}`
    }
    else {
        tipResult.innerHTML = "$00.00"
        totalResult.innerHTML = "$00.00"
    }
}

function removeActive () {
    tipBtn.forEach( (button) => {
        button.classList.remove('active') 
     })
}

function start () {
    amount = 0, tip = 0, ppl = 1
    bill.value = ""
    people.value = ""
    removeActive()
    calculate()
}
