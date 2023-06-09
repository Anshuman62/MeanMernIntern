const takenemail=document.getElementById("email");
const takenpassword=document.getElementById("password");
function submitData(){
    if(takenemail.vale !== "" && takenpassword.value !== ""){
        const obj ={
            id:Date.now(),
            email:takenemail.value,
            password:takenpassword.value,
        };
        fetch("http://localhost:8080/myData",{
    method:"POST",
    headers :{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(obj),
})
.then((res)=>res.json())
.then((data) => {console.log(data);
    alert("Created Account");
})
    .catch((err) => console.log(err));
    
}
else{
    alert("Fill in all the fields");
}
}