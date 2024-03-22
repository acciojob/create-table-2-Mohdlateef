

function createTable() {
	let table=document.getElementById("myTable");

let rowss=prompt("Input number of rows")
let colus=prompt("Input number of columns")

let rows=+rowss
let  colum=+colus
// let rows=2;
// let colum=2;

	
for(let i=0;i<rows;i++)
{
    let rows=document.createElement("tr");
    table.appendChild(rows)
    for(let j=0;j<colum;j++)
    {
    let col=document.createElement("td");
    rows.appendChild(col);
    col.innerText=`Row-${i} Column-${j}`
    }
}
}
