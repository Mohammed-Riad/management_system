
function employe(Employee_ID , Full_Name , Department , Level , URLmgurl, Salary)
{
    
    this.Employee_ID=Employee_ID;
    this.Full_Name=Full_Name;
    this.Department=Department;
    this.Level=Level;
    this.URLmgurl=URLmgurl;
    this.Salary=Salary;

    this.Level1=function(min,max) {
        if(this.Level =="senior")
        {
       
                min = Math.ceil(1000);
                max = Math.floor(2000);
                 this.Salary=Math.floor(Math.random() * (max - min) + min);
                 return this.Salary
            
        }else if(this.Level =="mid-senior")
        {
            min = Math.ceil(1000);
            max = Math.floor(1500);
            this.Salary=Math.floor(Math.random() * (max - min) + min);
            return this.Salary
            
        }else if (this.Level =="junior")
        {
            min = Math.ceil(500);
            max = Math.floor(1000);
            this.Salary=Math.floor(Math.random() * (max - min) + min);
            return this.Salary
        }
       
    }

    this. head=function()
    {
      
        
    
    
        let row2 =document.createElement("tr")
        tbody.appendChild(row2)
        arr1=[ this.Employee_ID,this.Full_Name,this.Department,this.Level, this.Level1()]
        for(let i=0;i<arr1.length;i++)
        {
            let td=document.createElement("td")
            td.innerHTML=arr1[i]
            row2.appendChild(td)
        }
    }

                
}

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
document.body.appendChild(table)
table.appendChild(thead)
table.appendChild(tbody)
table.className="taple1";




let row =document.createElement("tr")
    thead.appendChild(row)
    arr=["Employee_ID ","Full_Name","Department","Level","Salary"]
    for(let i=0;i<arr.length;i++)
    {
        let head=document.createElement("th")
        head.innerHTML=arr[i]
        row.appendChild(head)
}


let Emp=new employe(555555,"mohammed khalel","it","junior","img","5555")

let Emp1=new employe(555555,"laith khalel","it","mid-senior","img","5555")

let Emp2=new employe(555555,"hadi mohasen","it","mid-senior","img","5555")

let Emp3=new employe(555555,"khaled akrame","it","senior","img","5555")

let Emp4=new employe(555555,"malek dasoke","it","junior","img","5555")

let Emp5=new employe(555555,"mohammed abd alazez","it","junior","img","5555")

let Emp6=new employe(555555,"hala mohammad","it","mid-senior","img","5555")

let Emp7=new employe(555555,"rawan mohammad","it","junior","img","5555")


arr=[Emp,Emp1,Emp2,Emp3,Emp4,Emp5,Emp6]
for(let i=0;i<arr.length;i++)
{
    arr[i].head()
}
