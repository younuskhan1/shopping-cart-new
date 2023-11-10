let subMobileTotal = 0;

function getAndSetMobilePrice(mobielNumber) {
    document.getElementById("number-of-mobile").innerText = mobielNumber;
    subMobileTotal = mobielNumber * 1219;
    const justMobilePrice = document.getElementById("just-mobile-price");
    justMobilePrice.innerText = subMobileTotal;

}

let subCaseTotal = 0;

function getAndSetCasePrice(caseNumber) {
    document.getElementById("number-of-case").innerText = caseNumber;
    subCaseTotal = caseNumber * 59;
    const justCasePrice = document.getElementById("per-case-price")
    justCasePrice.innerText = subCaseTotal;
}

function getSubTotal() {
    const subTotal = subMobileTotal + subCaseTotal;
    // console.log(subTotal);
    document.getElementById("subtotal-amount").innerText = subTotal;
}

let taxAmountInNumber = 0;

function getTaxAmount() {
    const taxAmount = (subMobileTotal + subCaseTotal) * .20;
    const taxAmountDecimal = taxAmount.toFixed(2);
    taxAmountInNumber = parseFloat(taxAmountDecimal);
    // console.log(taxAmountInNumber);
    document.getElementById("tax-amount").innerText = taxAmountDecimal;
}

function getTotalWithTax() {
    const finalTotal = subMobileTotal + subCaseTotal + taxAmountInNumber;
    const finalTotalString = parseFloat(finalTotal);
    document.getElementById("final-total-amount").innerText = finalTotalString;
}


let numberOfMobile = 1;

document.getElementById("mobile-increase").addEventListener("click", function () {
    numberOfMobile++;
    getAndSetMobilePrice(numberOfMobile);
    getSubTotal();
    getTaxAmount();
    getTotalWithTax();
})

document.getElementById("mobile-decrease").addEventListener("click", function () {
    if (numberOfMobile < 2) {
        return;
    } else {
        numberOfMobile--;
        getAndSetMobilePrice(numberOfMobile);
        getSubTotal();
        getTaxAmount();
        getTotalWithTax();
    }
})

let numberOfCase = 1;

document.getElementById("case-increase").addEventListener("click", function () {
    numberOfCase++;
    getAndSetCasePrice(numberOfCase);
    getSubTotal();
    getTaxAmount();
    getTotalWithTax();
})

document.getElementById("case-decrease").addEventListener("click", function () {
    if (numberOfCase < 2) {
        return;
    } else {
        numberOfCase--;
        getAndSetCasePrice(numberOfCase);
        getSubTotal();
        getTaxAmount();
        getTotalWithTax();
    }
})