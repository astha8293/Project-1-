function allreq(){
    fetch('http://localhost:8080/expReimbursement/webapi/manager/gettable')
    .then((response)=>response.json())
    .then((json)=>displayProfile(json))
    .catch(err=>console.log('Request failed'));
    function displayProfile(response)
     {

        
        console.log(response);
      //  var req=new Date(d1.dob).toLocaleDateString("en-US");
        let output='';
              output=`<br><br><center><table class="table bg-white rounded shadow-sm  table-hover">
                  <thead><tr>
              <th scope="col" width="100" style="text-align: center;">Req No.</th>
              <th scope="col" style="text-align: center;">Email</th>
              <th scope="col" style="text-align: center;">Reason</th>
              <th scope="col" style="text-align: center;">Amount</th>
              <th scope="col" style="text-align: center;">Approve</th>
              <th scope="col" style="text-align: center;">Deny</th>
          
            </thead><tbody>`;
              for(var d1 of response){
                  if(d1.statusOfReq == "pending"){

                                
                     output+=`<tr>
                              
                              <td style="padding-top: 20px; text-align: center;">${d1.reqid}</td>
                              <td style="padding-top: 20px; text-align: center;">${d1.email}</td>
                              <td style="padding-top: 20px; text-align: center;">${d1.reason}</td>
                              <td style="padding-top: 20px; text-align: center;">${d1.amount}</td>
                              <td style="padding-top: 20px; text-align: center;"><button type="button" class="button" onclick="approve(${d1.reqid})" style = "background-color:#05c015;"><h4>Approve</h4></button></td>
                              <td style="padding-top: 20px; text-align: center; "><button type="button" class="button" onclick="#" style = "background-color:#f10404;"><h4>Deny</h4></button></td>
                              
                          
                          </tr>`;
                        }
              }
                          output+=`
                          </tbody></table></center>`;
              document.getElementById("all-requests").innerHTML=output;
          }    
         
      }
      function approve(mail){
        var obj1 = {sessid:mail};
  fetch("http://localhost:8080/expReimbursement/webapi/manager/reqapprove",{
      body: JSON.stringify(obj1),
      headers:{
          "Content-Type": "application/json",
      },
      method:"POST"
  })
  .then((response)=>response.json())
  .then((json)=>disp(json))
  .then((json)=>ses(json))
  .catch(err=>console.log('Request failed'));
  function disp(res){
          window.location.href = "viewrequests.html";
  } 
}

function reject(mail){
  var obj1 = {sessid:mail};
fetch("http://localhost:8080/expReimbursement/webapi/manager/reqapprove",{
body: JSON.stringify(obj1),
headers:{
    "Content-Type": "application/json",
},
method:"POST"
})
.then((response)=>response.json())
.then((json)=>disp(json))
.then((json)=>ses(json))
.catch(err=>console.log('Request failed'));
function disp(res){
    window.location.href = "viewrequests.html";
} 
}