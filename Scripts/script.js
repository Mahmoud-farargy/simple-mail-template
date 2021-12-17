// Fixtures
const gridList = Object.freeze([
    { name: "Marc John", date: "23-1-2021", isNew: true, isMarkedAsFavorite: false, subject: "New Envelope", attachment: "0e4d8f43a6bbff08ad4e2653b4b75568.png", id: "ofyw98bey8fohw" },
    { name: "Marc John", date: "23-1-2021", isNew: true, isMarkedAsFavorite: false, subject: "New Updates", attachment: "", id: "loifwnyfwiefwgf" },
    { name: "Bank", date: "22-1-2021", isNew: false, isMarkedAsFavorite: true, subject: "Receipt", attachment: "2655d6f83d7256bedbc1cf3e2c722cad.png", id: "pfwue90fuwegwr" },
    { name: "Emy Wilson", date: "21-1-2021", isNew: false, isMarkedAsFavorite: false, subject: "Upcoming Webinar", attachment: "", id: "p9uwbwyhigler" },
    { name: "David Walker", date: "20-1-2021", isNew: false, isMarkedAsFavorite: false, subject: "Resources to help reach your global aud...", attachment: "", id: "f98ebyfwilkgr" },
    { name: "Asana Smith", date: "20-1-2021", isNew: false, isMarkedAsFavorite: false, subject: "Daily work summary", attachment: "", id: "ijgwh8gwhiee" },
    { name: "Jennifer Doe", date: "19-1-2021", isNew: false, isMarkedAsFavorite: false, subject: "Daily work summary", attachment: "", id: "wf8oyfiwekfwr" },
    { name: "John Doe", date: "18-1-2021", isNew: false, isMarkedAsFavorite: true, subject: "Daily work summary", attachment: "", id: "fqufnfoifwefn" },
    { name: "Felix Smith", date: "17-1-2021", isNew: false, isMarkedAsFavorite: false, subject: "Daily work summary", attachment: "", id: "qp9ufboefhifw" },
    { name: "Charlotte Smith", date: "16-1-2021", isNew: false, isMarkedAsFavorite: false, subject: "Daily work summary", attachment: "", id: "wfeunfowifqoy" },
]);
// element targets
const gridEl = document.querySelector("#gridData .grid--body");
const categoriesCollapser = document.getElementById("categoriesCollapser");
const categoriesNestedList = document.querySelector(".categories--nested--list");
const categoriesIndicator = document.querySelector(".categories--expansion--indicator");

const gridType = gridEl.getAttribute("data-grid-type")
// triggers when page is loaded
document.addEventListener("DOMContentLoaded", () => {
    gridList?.length > 0 && gridList.forEach((rowItem, idx) => {
        const newElement = document.createElement("TR");
        newElement.setAttribute("class", "grid__item grid-row");
        newElement.innerHTML = `
            <td class="grid-td">  
                <div class="grid--td--inner">
                    <input type="checkbox" class="grid__check" name="grid--checkbox" />
                    ${gridType === "1" ? (rowItem.isMarkedAsFavorite ? '<i class="fas fa-star favoried"></i>' : '<i class="far fa-star"></i>') : ""}
                    <div class="new--email--container">${rowItem.isNew && gridType === "1" ? '<i class="new__email">' : ""}</i></div>
                    <span class="email--name">${rowItem.name}</span>
                </div>
            </td>
            <td class="grid-td" colspan="2">
                    <span>${rowItem.subject}</span>
            </td>
            <td class="grid-td"> 
                    <span>${rowItem.date}</span>
            </td>
            <td class="grid-td">
                ${rowItem.attachment ? `<img src=${gridType === "1" ? `./Assets/${rowItem.attachment}` : `../Assets/${rowItem.attachment}`} class="attachment__img" alt=${rowItem.name} loading="lazy"/>` : ""}
            </td>
        `;
        const gridCheckbox = newElement.querySelector(".grid__check");
        if (gridType === "2" && idx === 0) {
            gridCheckbox.setAttribute("checked", true);
            newElement.classList.add("checked__item");
        }
        gridCheckbox.addEventListener("change", (e) => {
            const isChecked = e.target.checked;
            isChecked ? newElement.classList.add("checked__item") : newElement.classList.remove("checked__item");
        });
        gridEl.appendChild(newElement);
    });
}, false);


// listeners
categoriesCollapser.addEventListener("click", () => {
    categoriesNestedList.classList.toggle("expanded");
    categoriesIndicator.style.transform = `${categoriesNestedList.classList.contains("expanded") ? 'rotate(180deg)' : "rotate(0deg)"}`;
})