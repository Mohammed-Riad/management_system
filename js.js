function employee(Employee_ID , Full_Name , Department , Level)
{
    Employee_ID=this.Employee_ID;
    Full_Name=this.Full_Name;
    Department=this.Department;
    Level=this.Level;


}

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


                
}
let Emp=new employe(555555,"mohammed khalel","it","junior","img","5555,llll")
// console.log(Emp.Full_Name +" "+Emp.Level1())
let Emp1=new employe(555555,"laith khalel","it","mid-senior","img","5555")
// console.log(Emp1.Full_Name +" "+Emp1.Level1())
let Emp2=new employe(555555,"khaled khalaf","it","senior","img","5555")
// console.log(Emp2.Full_Name +" "+Emp2.Level1())
let Emp3=new employe(555555,"khaled akrame","it","senior","img","5555")
// console.log(Emp3.Full_Name +" "+Emp3.Level1())
let Emp4=new employe(555555,"malek dasoke","it","junior","img","5555")
// console.log(Emp4.Full_Name +" "+Emp4.Level1())
let Emp5=new employe(555555,"mohammed abd alazez","it","junior","img","5555")
// console.log(Emp5.Full_Name +" "+Emp5.Level1())
let Emp6=new employe(555555,"hala mohammad","it","mid-senior","img","5555")
// console.log(Emp6.Full_Name +" "+Emp6.Level1())
let Emp7=new employe(555555,"rawan mohammad","it","junior","img","5555")
// console.log(Emp6.Full_Name +" "+Emp7.Level1())

arr=[Emp,Emp1,Emp2,Emp3,Emp4,Emp5,Emp6]
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i].Full_Name +" "+arr[i].Level1())
}
