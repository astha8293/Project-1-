function dashload(){
    var ls = sessionStorage.getItem("email");
    var obj2 = {email : ls};
  fetch("http://localhost:8080/expReimbursement/webapi/employee/getcount",{
      body: JSON.stringify(obj2),
      headers:{
          "Content-Type": "application/json",
      },
      method:"POST"
  })
  .then((response)=>response.json())
  .then((json)=>ses(json))
  .catch(_err1=>console.log('Request failed'));
  function ses(res){
      document.getElementById("treq").innerHTML = res.totalcount;
      document.getElementById("sreq").innerHTML = res.sucesscount;
      document.getElementById("preq").innerHTML = res.pendingcount;
      document.getElementById("dreq").innerHTML = res.deniedcount;

  }
}