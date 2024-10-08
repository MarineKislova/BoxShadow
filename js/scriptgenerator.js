window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const hOffset = document.getElementById("hOffset");
  const vOffset = document.getElementById("vOffset");
  const blurRadius = document.getElementById("blurRadius");
  const spreadRadius = document.getElementById("spreadRadius");
  const shadowColor = document.getElementById("shadowColor");

  const hOffsetValue = document.getElementById("hOffsetValue");
  const vOffsetValue = document.getElementById("vOffsetValue");
  const blurRadiusValue = document.getElementById("blurRadiusValue");
  const spreadRadiusValue = document.getElementById("spreadRadiusValue");

  const box = document.getElementById("box");
  const cssOutput = document.getElementById("cssOutput");

  function updateBoxShadow() {
    const h = hOffset.value;
    const v = vOffset.value;
    const blur = blurRadius.value;
    const spread = spreadRadius.value;
    const color = shadowColor.value;

    // Обновляем тень у блока
    const boxShadow = `${h}px ${v}px ${blur}px ${spread}px ${color}`;
    box.style.boxShadow = boxShadow;

    // Обновляем текст с CSS-кодом
    cssOutput.value = `box-shadow: ${boxShadow};`;

    // Обновляем отображение текущих значений
    hOffsetValue.textContent = `${h}px`;
    vOffsetValue.textContent = `${v}px`;
    blurRadiusValue.textContent = `${blur}px`;
    spreadRadiusValue.textContent = `${spread}px`;
  }

  // Слушаем изменения на ползунках и цвете
  hOffset.addEventListener("input", updateBoxShadow);
  vOffset.addEventListener("input", updateBoxShadow);
  blurRadius.addEventListener("input", updateBoxShadow);
  spreadRadius.addEventListener("input", updateBoxShadow);
  shadowColor.addEventListener("input", updateBoxShadow);

  // Инициализация начальных значений
  updateBoxShadow();
});
