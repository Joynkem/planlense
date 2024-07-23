const compnm = document.getElementById('compnm');
const directnm = document.getElementById('dirnm');
const compaddress = document.getElementById('comadd');
const comoverview = document.getElementById('cooverview');
const industryview = document.getElementById('industry');


const compnameError = document.getElementById("companyname-error");
const addressError = document.getElementById("companyaddress-error");
const dirnameError = document.getElementById("nameofdirector-error");
const overviewError = document.getElementById("cooverview-error");
const industryError = document.getElementById("industry-error");

function saveDescription() {
//Save the input values in userObj object.
//Delay submission
    const descriptionObj = {
        'company_name':compnm.value,
         'director': directnm.value, 
         'company_address': compaddress.value,
         'company_overview': comoverview.value,
         'industry_view': industryview.value
        }
//Convert the object into a string.
localStorage.setItem('descriptionObj', JSON.stringify(descriptionObj));
}
//Retrieve the object.
const newDescriptnObj = localStorage.getItem('descriptionObj');
const descriptionRehydrate = JSON.parse(newDescriptnObj);
console.log("NEWDESCRIPTIONOBJECT", descriptionRehydrate);
console.log(newDescriptnObj);
console.log("COMPANYNAME", descriptionRehydrate.company_name);

function validateDescriptn () {
    compnameError.textContent = "";
    addressError.textContent = "";
    dirnameError.textContent = "";
    overviewError.textContent = "";
    industryError.textContent = "";

    let isValid = true;
    if (industryview.value === "" ) {
        industryError.textContent =
            "Please enter the industry your company belongs.";
        isValid = false;
    }
    if (compnm.value === "" ) {
        compnameError.textContent =
            "Please enter your company name.";
        isValid = false;
    }
    if (directnm.value === "" ) {
        addressError.textContent =
            "Please enter your director's name.";
        isValid = false;
    }
    if (compaddress.value === "" ) {
        addressError.textContent =
            "Please enter your company's addreaa.";
        isValid = false;
    }

    if (comoverview.value === "" ) {
        overviewError.textContent =
            "Please enter your business overview.";
        isValid = false;
    }
    return isValid;
}