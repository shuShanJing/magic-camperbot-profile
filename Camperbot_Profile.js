// 替换上面的代码为：
document.body.addEventListener("click", function () {
  var bgColors = ["#FFE5EC", "#E5F9FF", "#F0FFE5", "#FFF5E5", "#F5E5FF"];
  var textColors = ["#D81B60", "#1E88E5", "#43A047", "#FB8C00", "#8E24AA"];

  var index = Math.floor(Math.random() * bgColors.length);

  // 改变背景色
  this.style.backgroundColor = bgColors[index];

  // 改变所有文字颜色
  document.querySelectorAll("h1, h2, h3, p").forEach(function (element) {
    element.style.color = textColors[index];
  });
});