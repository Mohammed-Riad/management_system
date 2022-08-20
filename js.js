let allEmployees = [];

function employe(Employee_ID, Full_Name, Department, Level, URLmgurl) {
  this.Employee_ID = Employee_ID;
  this.Full_Name = Full_Name;
  this.Department = Department;
  this.Level = Level;
  this.URLmgurl = URLmgurl;
  this.salary = getSalary(Level);
}

getSalary = (level) => {
  switch (level) {
    case "Senior":
      return getRandomInt(1500, 2000);
    case "Mid-Senior":
      return getRandomInt(1000, 1500);
    case "Junior":
      return getRandomInt(500, 1000);
    default:
      return 100;
  }
}

getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// this. head=function()
// {

//     let row2 =document.createElement("tr")
//     tbody.appendChild(row2)
//     arr1=[ this.Employee_ID,this.Full_Name,this.Department,this.Level,salary]
//     for(let i=0;i<arr1.length;i++)
//     {
//         let td=document.createElement("td")
//         td.innerHTML=arr1[i]
//         row2.appendChild(td)
//     }
// }

// let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');
// document.body.appendChild(table)
// table.appendChild(thead)
// table.appendChild(tbody)
// table.className="taple1";

// let row =document.createElement("tr")
//     thead.appendChild(row)
//     arr=["Employee_ID ","Full_Name","Department","Level","Salary"]
//     for(let i=0;i<arr.length;i++)
//     {
//         let head=document.createElement("th")
//         head.innerHTML=arr[i]
//         row.appendChild(head)
// }

// let Emp=new employe(555555,"mohammed khalel","it","junior","img","5555")

// let Emp1=new employe(555555,"laith khalel","it","mid-senior","img","5555")

// let Emp2=new employe(555555,"hadi mohasen","it","mid-senior","img","5555")

// let Emp3=new employe(555555,"khaled akrame","it","senior","img","5555")

// let Emp4=new employe(555555,"malek dasoke","it","junior","img","5555")

// let Emp5=new employe(555555,"mohammed abd alazez","it","junior","img","5555")

// let Emp6=new employe(555555,"hala mohammad","it","mid-senior","img","5555") 
// let Emp7=new employe(555555,"rawan mohammad","it","junior","img","5555")

// arr=[Emp,Emp1,Emp2,Emp3,Emp4,Emp5,Emp6]
// for(let i=0;i<arr.length;i++)
// {
//     arr[i].head()
// }

let employee0 = new employe(
  1000,
  "Ghazi Samer",
  "Administration",
  "Senior",
  "https://randomuser.me/api/portraits/men/20.jpg"
);

creatcard(employee0)

document.getElementById("form").addEventListener('submit', function (e) {
  debugger
  e.preventDefault();

  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let select = document.getElementById('select').value;
  let select1 = document.getElementById('select1').value;
  let img = document.getElementById("image").value;

  const isExist = allEmployees.find((emp) => emp.Employee_ID === id);
  if (isExist) {
    return alert('Please Enter Another Id')
  }

  let Emp = new employe(id, name, select, select1, img);

  creatcard(Emp)
  console.log(allEmployees)
  allEmployees.push(Emp);
  saveToLocal()
  document.forms[0].reset();
})

function saveToLocal() {
  let strArr = JSON.stringify(allEmployees);
  localStorage.setItem("employees", strArr);
}

function getFromLocal() {
  debugger
  let jsonArr = localStorage.getItem("employees");
  let arr = JSON.parse(jsonArr) || [];
  allEmployees = arr;
  arr.forEach((ele) => {
    creatcard(ele);
  });
}

getFromLocal();

function creatcard(Emp) {
  let div = document.createElement("div");

  div.style.width = "200px"
  div.style.height = "auto";
  div.style.background = "#1976d2"
  div.style.color = "black";
  div.style.fontSize = "16.50px"
  div.style.border = "5px solid black"

  div.style.margin = "10px"
  document.body.appendChild(document.getElementById("form"))
  let img = document.createElement("img")
  img.src = Emp.URLmgurl
  img.style.width = "100%"
  img.style.height = "100px"
  div.appendChild(img)
  document.getElementById("container").appendChild(div)
  div.appendChild(img)

  let card = document.createElement("p");
  card.textContent = "Id_Number" + " : " + Emp.Employee_ID
  div.appendChild(card)
  card.style.paddingLeft = "5px"

  let card1 = document.createElement("p");
  card1.textContent = "Name" + " : " + Emp.Full_Name
  div.appendChild(card1)
  card1.style.paddingLeft = "5px"

  let card2 = document.createElement("p");
  card2.textContent = "Department" + " : " + Emp.Department
  div.appendChild(card2)
  card2.style.paddingLeft = "5px"

  let card3 = document.createElement("p");
  card3.textContent = "Level" + " : " + Emp.Level
  div.appendChild(card3)
  card3.style.paddingLeft = "5px"

  let card4 = document.createElement("p");
  card4.textContent = "Salary" + " : " + Emp.salary;
  div.appendChild(card4)
  card4.style.paddingLeft = "5px"

  let removeBtn = document.createElement('button');
  removeBtn.id = 'removeEmp-' + Emp.Employee_ID;
  removeBtn.textContent = 'Remove';
  div.appendChild(removeBtn);

  removeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const id = removeBtn.id.split('removeEmp-')[1];
    const index = allEmployees.findIndex((em) => em.Employee_ID === id);
    allEmployees.splice(index, 1);

    localStorage.removeItem('employees');
    const strAllEmployees = JSON.stringify(allEmployees);
    localStorage.setItem('employees', strAllEmployees);

    console.log(id);

    window.location.reload();
  })
}
