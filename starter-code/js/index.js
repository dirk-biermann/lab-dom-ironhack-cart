var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $inp = document.querySelector('#cart tbody .qty input');
$inp.onchange = updateSubtot;

// ----------------------------------------------------

function updateSubtot($product) {
  // Iteration 1.1
  let quantity = parseFloat( document.querySelector('.qty input').value );
  let priceUnit = parseFloat( document.querySelector('.pu span').innerText );

  let subTotal = ( quantity * priceUnit );
  document.querySelector('.subtot span').innerText = subTotal.toFixed(2);
  
  return subTotal;
}

function getSubtotals() {
  // Iteration 1.1
  let totalPrice = 0.00;

  let carts = document.querySelectorAll('tbody tr' );
  carts.forEach(element => {
    totalPrice += updateSubtot( element );
  });
  console.log( "Total:", totalPrice);
}

function calcAll() {
  // Iteration 1.2
  getSubtotals();
}


$calc.onclick = calcAll;