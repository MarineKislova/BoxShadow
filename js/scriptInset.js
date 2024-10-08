window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const shadowsInset = [
    {
      boxShadow: "0 20px 10px -20px rgba(0,0,0,0.45) inset",
      name: "Inset Top",
    },

    "rgba(149, 157, 165, 0.2) 0 8px 24px",

    {
      boxShadow: "20px 0 10px -20px rgba(0,0,0,0.45) inset",
      name: "Inset Right",
    },
    {
      boxShadow: "0 -20px 10px -20px rgba(0,0,0,0.45) inset",
      name: "Inset Bottom",
    },
    {
      boxShadow: "20px 0 10px -20px rgba(0,0,0,0.45) inset;",
      name: "Inset Left",
    },
    {
      boxShadow:
        "0 20px 10px -20px rgba(0,0,0,0.45) inset, -20px 0 10px -20px rgba(0,0,0,0.45) inset",
      name: "Inset Top Right",
    },
    {
      boxShadow:
        "0 20px 10px -20px rgba(0,0,0,0.45) inset, 0 -20px 10px -20px rgba(0,0,0,0.45) inset",
      name: "Inset Top Bottom",
    },
    {
      boxShadow:
        "0 20px 10px -20px rgba(0,0,0,0.45) inset, 20px 0 10px -20px rgba(0,0,0,0.45) inset",
      name: "Inset Top Left",
    },
    {
      boxShadow:
        "0 -20px 10px -20px rgba(0,0,0,0.45) inset, -20px 0 10px -20px rgba(0,0,0,0.45) inset",
      name: "Inset Bottom Right",
    },
    {
      boxShadow:
        "0 -20px 10px -20px rgba(0,0,0,0.45) inset, 20px 0 10px -20px rgba(0,0,0,0.45) inset",
      name: "Inset Bottom Left",
    },
    {
      boxShadow:
        "-20px 0 10px -20px rgba(0,0,0,0.45) inset, 20px 0 10px -20px rgba(0,0,0,0.45) inset",
      name: "Inset Right Left",
    },
    {
      boxShadow:
        "0 20px 10px -20px rgba(0,0,0,0.45) inset, 0 -20px 10px -20px rgba(0,0,0,0.45) inset, -20px 0 10px -20px rgba(0,0,0,0.45) inset",
      name: "Inset Top Bottom Right",
    },
    {
      boxShadow:
        "0 20px 10px -20px rgba(0,0,0,0.45) inset, 0 -20px 10px -20px rgba(0,0,0,0.45) inset, 20px 0 10px -20px rgba(0,0,0,0.45) inset",
      name: "Inset Top Bottom Left",
    },
    {
      boxShadow: "0 0 10px 0 rgba(0,0,0,0.45) inset",
      name: "Inset All Sides",
    },
    {
      boxShadow: "-12px -8px 40px rgba(70,70,70,0.12) inset",
      name: "Inset Soft",
    },
    {
      boxShadow:
        "0px -23px 25px 0px rgba(0, 0, 0, 0.17) inset, 0px -36px 30px 0px rgba(0, 0, 0, 0.15) inset, 0px -79px 40px 0px rgba(0, 0, 0, 0.1) inset, 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 4px 2px rgba(0, 0, 0, 0.09), 0px 8px 4px rgba(0, 0, 0, 0.09), 0px 16px 8px rgba(0, 0, 0, 0.09)",
      name: "Inset Smooth",
    },
    {
      boxShadow:
        "inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px rgba(0,0,0,0.25)",
      name: "Inset Modern",
    },
    {
      boxShadow:
        "-15px -15px 15px rgba(255,255,255,0.2), 15px 15px 15px rgba(0,0,0,0.1), inset -5px -5px 5px rgba(255,255,255,0.2), inset 5px 5px 5px rgba(0,0,0,0.1)",
      name: "Inset Raised",
    },
    {
      boxShadow:
        "0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)",
      name: "Inset Elevated",
    },
    {
      boxShadow:
        "inset 2px 2px 10px rgba(255,255,255,.1), inset -5px -8px 8px rgba(0,0,0,.2)",
      name: "Inset 3D",
    },
    {
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px, rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset",

      credits: "Stripe",
    },

    {
      boxShadow:
        "rgba(255, 255, 255, 0.1) 0 1px 1px 0 inset, rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px",
      credits: "Stripe",
    },

    {
      boxShadow:
        "0 0 0 2px rgba(6,24,44,.4), 0 4px 6px -1px rgba(6,24,44,.65), inset 0 1px 0 hsla(0,0%,100%,.08)",
      credits: "Stripe",
    },

    "inset 0 30px 60px -12px rgba(50,50,93,0.25),inset 0 18px 36px -18px rgba(0,0,0,0.3)",

    {
      boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      credits: "Tailwind CSS",
    },

    {
      boxShadow:
        "rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset",
      credits: "Github",
    },

    {
      boxShadow:
        "0 12px 28px 0 rgba(0, 0, 0, 0.2),0 2px 4px 0 rgba(0, 0, 0, 0.1),inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
      credits: "Facebook",
    },

    {
      boxShadow:
        "inset blue 0 0 0 2px, 10px -10px 0 -3px #fff, 10px -10px #1FC11B, 20px -20px 0 -3px #fff, 20px -20px #FFD913, 30px -30px 0 -3px #fff, 30px -30px #FF9C55, 40px -40px 0 -3px #fff, 40px -40px #FF5555",
      extra: {
        borderRadius: 0,
      },
      credits: "Fossheim",
    },

    {
      boxShadow:
        "3px 3px 6px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset",
      credits: "boxshadows.com",
    },

    {
      boxShadow:
        "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
      credits: "Mac",
    },

    {
      boxShadow:
        "inset 0px -23px 25px 0 rgba(0, 0, 0, .17), inset 0 -36px 30px 0px rgba(0, 0, 0, .15) ,inset 0 -79px 40px 0px rgba(0, 0, 0, .1), rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
      extra: {
        borderRadius: "35px",
      },
    },

    "0px 2px 4px rgba(0, 0, 0, .4), 0px 7px 13px -3px rgba(0, 0, 0, .3), inset 0px -3px 0px rgba(0, 0, 0, .2)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), inset rgb(209, 213, 219) 0 0 0 1px",
    "inset 0px -50px 36px -28px rgba(0,0,0,0.35)",

    // { boxShadow: "", name: "Inset" },
    // { boxShadow: "", name: "Inset" },
  ];

  const ul = document.querySelectorAll("ul");

  ul.forEach((ul) => {
    ul.style.display = "grid";
    ul.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 300px))";
    ul.style.gap = "10px";
    ul.style.gridAutoRows = "minmax(100px, auto)";
    ul.style.justifyContent = "space-around";
    ul.style.alignContent = "center";
  });

  function itemLiStyle(element) {
    element.style.width = 300 + "px";
    element.style.height = 150 + "px";
    element.style.margin = "0 auto";
    element.style.marginTop = 20 + "px";
    element.style.display = "flex";
    element.style.flexDirection = "column";
    element.style.alignItems = "center";
    element.style.justifyContent = "center";
    element.style.gap = 10 + "px";
    element.style.backgroundColor = "$backgroundColorSecondary";
  }

  //   //*copy to clipboard function*//
  function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.setAttribute("value", text);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  function addShadowInset(shadow) {
    const li = document.createElement("li");
    li.innerHTML = `<span>#${shadowsInset.indexOf(shadow)}</span>`;
    itemLiStyle(li);
    if (typeof shadow === "object") {
      li.style.boxShadow = shadow.boxShadow;

      if (shadow.extra) {
        for (let z = 0; z < Object.keys(shadow.extra).length; z++) {
          li.style[Object.keys(shadow.extra)[z]] =
            shadow.extra[Object.keys(shadow.extra)[z]];
        }
      }

      if (shadow.name) {
        li.innerHTML += `<span class="credits"> ${shadow.name}</span>`;
      }

      if (shadow.credits) {
        li.innerHTML += `<span class="credits">by ${shadow.credits}</span>`;

        li.querySelectorAll(".credits").forEach((credit) => {
          credit.style.fontFamily = "Raleway";
          credit.style.weight = "bolder";
          credit.style.fontStyle = "regular";
        });
      }
    } else {
      li.style.boxShadow = shadow;
    }
    li.dataset.tippyContent = `Click to copy box-shadow #${shadowsInset.indexOf(
      shadow
    )}`;
    document.getElementById("inset-ul").appendChild(li);

    li.addEventListener("click", function (e) {
      const previousHTML = li.innerHTML;
      li.classList.add("copied");
      copyToClipboard(`boxShadow: ${li.style.boxShadow};`);
      li.innerHTML = "Copied!";
      setTimeout(() => {
        li.innerHTML = previousHTML;
        li.classList.remove("copied");
      }, 1000);
    });
  }

  function processArray(array) {
    for (const item of shadowsInset) {
      addShadowInset(item);
    }
  }

  // Add shadows to the main list
  processArray(shadowsInset);
});
