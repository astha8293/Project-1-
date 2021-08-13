
function allreq(){
    var ls = sessionStorage.getItem("email");
      var obj2 = {email : ls};
      fetch("http://localhost:8080/expReimbursement/webapi/employee/gettable",{
        body: JSON.stringify(obj2),
        headers:{
            "Content-Type": "application/json",
        },
        method:"POST"
    })
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
                <th scope="col" style="text-align: center;">Name</th>
                <th scope="col" style="text-align: center;">Amount</th>
            
              </thead><tbody>`;
                for(var d1 of response){
                    if(d1.statusOfReq == "denied"){
  
                                  
                       output+=`<tr>
                                
                                <td style="padding-top: 20px; text-align: center;">${d1.reqid}</td>              
                                <td style="padding-top: 20px; text-align: center;">${d1.reason}</td>
                                <td style="padding-top: 20px; text-align: center;">${d1.amount}</td>
                                
                            
                            </tr>`;
                          }
                }
                            output+=`
                            </tbody></table></center>`;
                document.getElementById("all-requests").innerHTML=output;
            }    
            
        }
                