const salary= document.querySelector('#salary');
const output= document.querySelector('.salary-output');
output.textContent= salary.value;
salary.addEventListener('input',function()
{
   output.textContent=salary.value;
});
let employeePayrollObject= new EmployeePayrollData();   
const name= document.querySelector('#name');
const nameError= document.querySelector(".name-error");
name.addEventListener('input',()=>
{
    try {
        if(name.value=="")
        {
            nameError.textContent='';
        }
        else
        {
        employeePayrollObject.name= name.value;
        nameError.textContent='';
        }
    } catch (e)
    {
        nameError.textContent=e;
    }
});