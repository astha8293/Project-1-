function dashload(){
    fetch("http://localhost:8080/expReimbursement/webapi/manager/getcount")
       
    .then((response)=>response.json())
    .then((json)=>ses(json))
    .catch(_err1=>console.log('Request failed'));
    function ses(res){
        document.getElementById("treq").innerHTML = res.totalcount;
        document.getElementById("sreq").innerHTML = res.sucesscount;
        document.getElementById("preq").innerHTML = res.pendingcount;
        document.getElementById("totalprofilesid").innerHTML = res.profilecount;
    }