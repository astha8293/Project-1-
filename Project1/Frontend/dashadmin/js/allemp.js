function allemp(){
    fetch('http://localhost:8080/expReimbursement/webapi/manager/getallemp')
    .then((response)=>response.json())
    .then((json)=>displayProfile(json))
    .catch(err=>console.log('Request failed'));
    function displayProfile(response)
     {

        
        console.log(response);
      //  var req=new Date(d1.dob).toLocaleDateString("en-US");
        let output='';
        output=`<br><br><center><table class="table bg-white rounded shadow-sm  table-hover">
                  <tbody>`;

        for(var e1 of response){
        output+=`
        <tr>
        <td>
    <section>
        <div class="rt-container">
              <div class="col-rt-12">
                  <div class="Scriptcontent">
                  
    <!-- Student Profile -->
    <div class="student-profile py-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card shadow-sm">
              <div class="card-header bg-transparent text-center">
                <!-- <img class="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp"> -->
                <h3>${e1.firstName} ${e1.lastName}</h3>
              
              </div>
              <div class="card-body">
                <p class="mb-0"><strong class="pr-1">Employee ID:</strong><p>${e1.id}</p>
               
            </p>
                
                <p  class="mb-0"><strong class="pr-1">Email:</strong><p>${e1.email}</p>
               
            </p>
                <p  class="mb-0"><strong class="pr-1">Mobile no:</strong><p>${e1.phno}</p>
                
            </p>
              </div>
            </div>
          </div>
          
    <!-- partial -->
               
                </div>
            </div>
        </div>
    </section>
                </div>
                
                </td>
                </tr>`

        }
        output+=`
        </tbody></table></center>`;
        document.getElementById("allemphere").innerHTML=output;
     }
    }