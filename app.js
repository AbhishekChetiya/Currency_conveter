
let url = "https://flagsapi.com/"
let sel = document.querySelectorAll(".divid select");
let cururl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
let btn = document.querySelector("button");
let ans = document.querySelector(".answer");
var from = document.getElementById("fromsel");
let to = document.querySelector("#tosel");

for (let se of sel) {
    console.log(se);
    for (curr in countryList) {
        let opt = document.createElement("option");
        opt.innerText = curr;
        opt.value = curr;
        se.append(opt);
        if (se.name === "from" && curr == "USD") {
            opt.selected = "selected";
        }
        else if (se.name === "to" && curr === "INR") {
            opt.selected = "selected";
        }
    }
    se.addEventListener("change", (event) => {
        let want = countryList[event.target.value];
        console.log(want)
        let finalurl = url + `${want}/flat/64.png`;
        let par = se.parentElement;
        let img = par.querySelector("img");
        img.src = finalurl;
        let f = from.value.toLowerCase();
        let t = to.value.toLowerCase();
        let url1 = cururl + `${f}/${t}.json`;
        async function fetcher() {
            let get = await fetch(url1);
            let val = await get.json();
            ans.innerText = "1" + `${from.value} = ` + `${val[t]} ${to.value}`;
        }
        fetcher();
    });
    let url1 = cururl + `usd/inr.json`;
    async function fetcher() {
            let get = await fetch(url1);
            let val = await get.json();
            ans.innerText = "1" + `USD = ` + `${val["inr"]} INR`;
    }
    fetcher();
}





let inp = document.querySelector(".inp");
btn.addEventListener('click', (event) => {
    event.preventDefault();
    let f = from.value.toLowerCase();
    let t = to.value.toLowerCase();
    let url = cururl + `${f}/${t}.json`;
    async function fetcher() {
        let get = await fetch(url);
        let val = await get.json();
        let answ =inp.value*val[t];
        inp.value = answ;
        console.log(answ);
    }
    fetcher();
});