const grid = document.querySelector(".gridlay");
const cart = document.querySelector(".smallercart");
const cart1 = document.querySelector(".smallercart1");
const confirm = document.querySelector(".orders1");
const confirm1 = document.querySelector(".orders2");
const confirmReal = document.querySelector(".confirm");
var totalSum = 0;
const h22 = document.createElement("h2");
const but = document.createElement("button");
const h23 = document.createElement("h2");
const newbutton = document.querySelector(".startnew");
const empty = document.querySelector(".empty");
const orderid = document.querySelector(".orderid");
const color = getComputedStyle(document.documentElement).getPropertyValue(
  "--Red"
);
const amount = document.querySelector(".amount");
var amountsum = 0;
flag = false;
document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        // the main division for putting in all lists
        // of items
        const div1 = document.createElement("div");
        if (item.category.includes(" ")) {
          var mywords = item.category.split(" ");
          div1.classList.add("item", mywords[0].toLowerCase());
        } else {
          div1.classList.add("item", item.category.toLowerCase());
        }
        // addtocart button and image combined div
        const div2 = document.createElement("div");
        div2.classList.add("imgcomb");
        const img1 = document.createElement("img");
        img1.classList.add("itemimg");
        img1.setAttribute("src", `${item.image.desktop}`);
        img1.setAttribute("alt", `${item.category} picture desktop`);
        const img12 = document.createElement("img");
        img12.classList.add("itemimgmob");
        img12.setAttribute("src", `${item.image.mobile}`);
        img12.setAttribute("alt", `${item.category} picture mobile`);

        // the addtocart button and the incdec button
        const div3 = document.createElement("div");
        const div31 = document.createElement("div");
        const name1 = item.name.replace(/ /g, "_");
        div3.classList.add("addtocart", name1);
        div31.classList.add("incdec", name1);
        const img2 = document.createElement("img");
        const img21 = document.createElement("img");
        const img22 = document.createElement("img");
        img2.setAttribute("src", "./assets/images/icon-add-to-cart.svg");
        const div33 = document.createElement("div");
        div33.classList.add("minusd", name1);
        img21.setAttribute(
          "src",
          "./assets/images/icon-decrement-quantity.svg"
        );
        img21.classList.add("minus");
        const div34 = document.createElement("div");
        div34.classList.add("plusd", name1);
        img22.setAttribute(
          "src",
          "./assets/images/icon-increment-quantity.svg"
        );
        img22.classList.add("plus");
        const p1 = document.createElement("p");
        const p12 = document.createElement("p");
        p1.textContent = "Add to Cart";
        p12.classList.add("numero", "numero" + name1);
        p12.textContent = "1";
        div3.appendChild(img2);
        div3.appendChild(p1);
        div33.appendChild(img21);
        div34.appendChild(img22);
        div31.appendChild(div33);
        div31.appendChild(p12);
        div31.appendChild(div34);

        // putting these into main imgcomb
        div2.appendChild(img1);
        div2.appendChild(img12);
        div2.appendChild(div3);
        div2.appendChild(div31);

        // the extra details of each food
        const p2 = document.createElement("p");
        p2.textContent = item.category;
        p2.classList.add("category");
        const h21 = document.createElement("h2");
        h21.textContent = item.name;
        const p3 = document.createElement("p");
        p3.classList.add("price");
        p3.innerHTML = `&dollar;${item.price.toFixed(2)}`;

        // appending them all to the main div
        div1.appendChild(div2);
        div1.appendChild(p2);
        div1.appendChild(h21);
        div1.appendChild(p3);

        // appending the main div to the gridlay div
        grid.appendChild(div1);

        // cart tabs that contain all the food added
        // to the card
        const div4 = document.createElement("div");
        div4.classList.add("carttab", name1);
        const div5 = document.createElement("div");
        div5.classList.add("smalltab");
        const strong = document.createElement("strong");
        strong.classList.add("nameof");

        // replacing the underscore character of each item
        // with a space to fit in desirable spaced name
        const name2 = name1.replace(/_/g, " ");
        strong.textContent = name2;
        const div6 = document.createElement("div");
        div6.classList.add("smaller");
        const strong1 = document.createElement("strong");
        strong1.innerHTML = `
                    <strong class="${name1}str1">0</strong>x
                `;
        const p4 = document.createElement("p");
        p4.innerHTML = `<span>@ </span>$${item.price.toFixed(2)}`;
        const strong2 = document.createElement("strong");
        strong2.classList.add(name1 + "str2");
        strong2.innerHTML = `$<strong>0</strong>`;

        div6.appendChild(strong1);
        div6.appendChild(p4);
        div6.appendChild(strong2);

        div5.appendChild(strong);
        div5.appendChild(div6);

        const img3 = document.createElement("img");
        img3.setAttribute("src", "./assets/images/icon-remove-item.svg");
        img3.classList.add("remove");

        div4.appendChild(div5);
        div4.appendChild(img3);

        cart.appendChild(div4);

        // now into the confirmed section
        // cart tabs that contain all the food added
        // to the card
        const div10 = document.createElement("div");
        div10.classList.add("carttab1", name1 + "cart1");
        const div11 = document.createElement("div");
        div11.classList.add("smalltab1");
        const strong3 = document.createElement("strong");
        strong3.classList.add("nameof1");

        // replacing the underscore character of each item
        // with a space to fit in desirable spaced name
        strong3.textContent = name2;
        const div12 = document.createElement("div");
        div12.classList.add("smaller1");
        const strong4 = document.createElement("strong");
        strong4.innerHTML = `
                    <strong class="${name1}str4">0</strong>x
                `;
        const p7 = document.createElement("p");
        p7.innerHTML = `<span>@ </span>$${item.price.toFixed(2)}`;
        const strong5 = document.createElement("strong");
        strong5.classList.add(name1 + "str5");
        strong5.innerHTML = `$<strong>0</strong>`;

        div12.appendChild(strong4);
        div12.appendChild(p7);

        div11.appendChild(strong3);
        div11.appendChild(div12);

        const img5 = document.createElement("img");
        img5.setAttribute("src", `${item.image.thumbnail}`);
        img5.setAttribute("alt", `${item.name} thumbnail`);

        div10.appendChild(img5);
        div10.appendChild(div11);

        const maindiv = document.createElement("div");
        maindiv.classList.add("maindiv");

        maindiv.appendChild(div10);
        maindiv.appendChild(strong5);

        confirm.appendChild(maindiv);

        div3.addEventListener("click", () => {
          div31.style.display = "flex";
          div4.style.display = "flex";
          cart1.style.display = "flex";
          empty.style.display = "none";
          let value = parseInt(p12.textContent);
          p12.textContent = value;
          amountsum += value;
          amount.textContent = amountsum;
          strong1.textContent = value + "x";
          strong2.textContent =
            "$" + (parseInt(p12.textContent) * item.price).toFixed(2);
          totalSum += item.price;
          h22.textContent = "$" + totalSum.toFixed(2);
          maindiv.style.display = "flex";
          strong4.textContent = strong1.textContent;
          strong5.textContent = strong2.textContent;
          h23.textContent = h22.textContent;
          img1.style.border = `3px solid ${color}`;
          img12.style.border = `3px solid ${color}`;
        });
        img3.addEventListener("click", () => {
          var children = cart.childNodes;
          var array = Array.prototype.slice.call(children);
          var localcounter = 0;
          array.forEach(function (nani) {
            if (nani.style.display == "flex") {
              localcounter++;
            }
          });
          if (localcounter == 1) {
            cart1.style.display = "none";
            empty.style.display = "block";
          }
          div4.style.display = "none";
          p12.textContent = 1;
          var strong2value = parseFloat(strong2.textContent.replace("$", ""));
          totalSum -= strong2value;
          var strong1value = parseInt(strong1.textContent.replace("x", ""));
          amountsum -= strong1value;
          amount.textContent = amountsum;
          strong1.textContent = 1 + "x";
          div31.style.display = "none";
          strong2.textContent = "$0";
          h22.textContent = "$" + totalSum.toFixed(2);
          maindiv.style.display = "none";
          strong4.textContent = strong1.textContent;
          strong5.textContent = strong2.textContent;
          h23.textContent = h22.textContent;
          img1.style.border = `none`;
          img12.style.border = `none`;
        });

        div34.addEventListener("click", () => {
          let value = parseInt(p12.textContent);
          value++;
          p12.textContent = value;
          strong1.textContent = value + "x";
          strong2.textContent =
            "$" + (parseInt(p12.textContent) * item.price).toFixed(2);
          totalSum += item.price;
          h22.textContent = "$" + totalSum.toFixed(2);
          maindiv.style.display = "flex";
          strong4.textContent = strong1.textContent;
          strong5.textContent = strong2.textContent;
          h23.textContent = h22.textContent;
          amountsum++;
          amount.textContent = amountsum;
        });

        div33.addEventListener("click", () => {
          let value = parseInt(p12.textContent);
          if (value > 0) {
            value--;
            p12.textContent = value;
            console.log(`Decremented value: ${value}`);
            strong1.textContent = value + "x";
            strong2.textContent =
              "$" + (parseInt(p12.textContent) * item.price).toFixed(2);
            totalSum -= item.price;
            h22.textContent = "$" + totalSum.toFixed(2);
            strong4.textContent = strong1.textContent;
            strong5.textContent = strong2.textContent;
            h23.textContent = h22.textContent;
            amountsum--;
            amount.textContent = amountsum;
          }
          if (value === 0) {
            var children = cart.childNodes;
            var array = Array.prototype.slice.call(children);
            var localcounter = 0;
            array.forEach(function (nani) {
              if (nani.style.display == "flex") {
                localcounter++;
              }
            });
            if (localcounter == 1) {
              cart1.style.display = "none";
              empty.style.display = "block";
            }
            div4.style.display = "none";
            p12.textContent = 1;
            var strong2value = parseFloat(strong2.textContent.replace("$", ""));
            totalSum -= strong2value;
            var strong1value = parseInt(strong1.textContent.replace("x", ""));
            amountsum -= strong1value;
            amount.textContent = amountsum;
            strong1.textContent = 1 + "x";
            div31.style.display = "none";
            strong2.textContent = "$0";
            h22.textContent = "$" + totalSum.toFixed(2);
            maindiv.style.display = "none";
            strong4.textContent = strong1.textContent;
            strong5.textContent = strong2.textContent;
            h23.textContent = h22.textContent;
            img1.style.border = `none`;
            img12.style.border = `none`;
          }
        });
        but.addEventListener("click", () => {
          confirmReal.style.display = "block";
          const id = Math.floor(Math.random() * 100000000);
          orderid.textContent = id;
        });
        newbutton.addEventListener("click", () => {
          confirmReal.style.display = "none";
          amount.textContent = 0;
          div4.style.display = "none";
          p12.textContent = 1;
          var strong2value = parseFloat(strong2.textContent.replace("$", ""));
          totalSum -= strong2value;
          strong1.textContent = 1 + "x";
          div31.style.display = "none";
          strong2.textContent = "$0";
          h22.textContent = "$" + totalSum.toFixed(2);
          maindiv.style.display = "none";
          strong4.textContent = strong1.textContent;
          strong5.textContent = strong2.textContent;
          h23.textContent = h22.textContent;
          img1.style.border = `none`;
          img12.style.border = `none`;
          cart1.style.display = "none";
          empty.style.display = "block";
        });
      });
    });
  const div8 = document.createElement("div");
  const div7 = document.createElement("div");
  div7.classList.add("new");
  div8.classList.add("order");
  const p5 = document.createElement("p");
  p5.textContent = "Order Total";
  h22.innerHTML = `$<span class="total">0</span>`;

  div8.appendChild(p5);
  div8.appendChild(h22);

  const div9 = document.createElement("div");
  const img4 = document.createElement("img");
  div9.classList.add("carbon");
  img4.setAttribute("src", "./assets/images/icon-carbon-neutral.svg");
  const p6 = document.createElement("p");
  p6.innerHTML = `This is a <strong>carbon-neutral</strong> delivery`;
  div9.appendChild(img4);
  div9.appendChild(p6);

  but.textContent = "Confirm Order";

  div7.appendChild(div8);
  div7.appendChild(div9);
  div7.appendChild(but);

  cart1.appendChild(div7);

  const div13 = document.createElement("div");
  div13.classList.add("order1");
  const p8 = document.createElement("p");
  p8.textContent = "Order Total";
  h23.innerHTML = `$<span class=total1>0</span>`;
  div13.appendChild(p8);
  div13.appendChild(h23);

  confirm1.appendChild(div13);
});
