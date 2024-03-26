let btn = document.getElementById('onOff');
let blb = document.querySelector('#bulb');
btn.addEventListener("click", function () {

      if (btn.innerHTML == "ON") {
            blb.style.backgroundColor = "yellow";
            blb.style.border = "1px solid black";
            btn.innerHTML = "OFF";
            document.body.style.backgroundColor = "rgb(245, 245, 176)";
      }
      else {
            blb.style.backgroundColor = "black";
            btn.innerHTML = "ON";
            document.body.style.backgroundColor = "black";
            blb.style.border = "1px solid  rgb(246, 246, 3)";
      }
}
)