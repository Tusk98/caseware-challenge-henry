function order_generate() {
  document.getElementById("num").innerHTML = Math.trunc(Math.random() * 10000000);
}

var cleave = new Cleave('.input-credit-card', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        // update UI ...
    }
});
