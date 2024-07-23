//Display registered businesses in a grid
function showbizInGrid () {
const bizGrid = JSON.parse(localStorage.getItem('businessObj'));
bizGrid.foreach (biz => {
    const bizcard = document.createElement('div')
    bizcard.innerHTML = `
    <h2>${bizGrid.businessname}<h2>
    <p>${bizGrid.description}</p>`
    showBizContainer.appendChild(bizcard)
});

}
window.onload = function () {
    showbizInGrid()
}