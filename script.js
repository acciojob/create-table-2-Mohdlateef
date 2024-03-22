let table=document.getElementById("table");

let rowss=prompt("Input number of Rows")
let colus=prompt("Input number of columns")

let rows=+rowss
let colum=+colus;
functio createTable() {
	

for(let i=0;i<rows;i++)
{
    let rows=document.createElement("tr");
    table.appendChild(rows)
    for(let j=0;j<colum;j++)
    {
    let col=document.createElement("td");
    rows.appendChild(col);
    col.innerText=`Row-${i}Column-${j}`
    }
}
}
