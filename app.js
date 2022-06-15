function drawDiamond(n) {
    let diamond = "";
    for (let i = 1; i <= 2 * n - 1; i++) {
      diamond +=
        " ".repeat(Math.abs(n - i)) +
        "*" +
        (" ".repeat((n - Math.abs(i - n)) * 2 - 2) + "*").slice(1) +
        "\n";
    }
    return diamond;
  }
  
  let input = document.getElementById("number");
  let diamond = document.getElementById("diamond");
  
  diamond.innerHTML = drawDiamond(input.value);
  
  input.onchange = function () {
    n = input.value;
    diamond.value = drawDiamond(n);
  };