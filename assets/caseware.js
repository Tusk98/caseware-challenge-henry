function order_generate(doc) {
  doc.getElementById("output").innerHTML = Math.trunc(Math.random() * 10000000);
};

function onHoverBack() {
  document.getElementById("back_img").src="assets/images/payment/back_hover.png";
};
function offHoverBack(obj) {
  obj.src="assets/images/payment/back.png";
};


<script>
    var clicked = false;
    function onHoverBack() {
    if(!clicked)
        document.getElementById("back_img").src="assets/images/payment/back_hover.png";
    }
    function offHoverBack(obj) {
      if(!clicked)
      obj.src="assets/images/payment/back.png";
    }
</script>
