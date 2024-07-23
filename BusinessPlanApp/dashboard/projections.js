                    const sales = document.getElementById('saless');
                    const profit = document.getElementById('profitt');
                    const expenses = document.getElementById('expensess');
                    
                    const compnameError = document.getElementById("sales-error");
                    const addressError = document.getElementById("profit-error");
                    const dirnameError = document.getElementById("expenses-error");
                   
                 
                    function saveProjection() {
                    //Save the input values in userObj object.
                    //Delay submission
                        const descriptionObj = {
                            'sales_forecast':sales.value,
                             'profit_projection': profit.value, 
                             'expenses_projection': expenses.value,
                            }
                    //Convert the object into a string.
                    localStorage.setItem('projectionObj', JSON.stringify(projectionObj));
                    }
                    //Retrieve the object.
                    const newProjectionObj = localStorage.getItem('projectionObj');
                    const projectionRehydrate = JSON.parse(newDescriptnObj);
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