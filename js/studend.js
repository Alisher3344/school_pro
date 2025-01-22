let CardBox2 = document.querySelector(".card__box2");
let input = document.querySelector(".users_input");
let search= "";
const request=axios.create({
    baseURL:"https://678e0bd6a64c82aeb11ec2d8.mockapi.io/",
    Timeout:1000,
})

async function getDatasTudents() {
    try {

        let params= {
            page:1,
            limit:10,
            firstName:search,
        };
        let {data} =await request.get(`studends`,{ params }
        );
        console.log(data);
        CardBox2.innerHTML="";
        data.map((studends)=>{
            CardBox2.innerHTML+=getCard(studends );  
        })
        
    } catch (error) {
        console.log(error);
    }
    }
    getDatasTudents();


function getCard({firstName,lastName,img,birthday,isWork,phoneNumber,email,id}) {
    return`
<div class="card" style="width: 18rem;">
<img src="${img}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${firstName} ${lastName}</h5>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">PHONE :${phoneNumber}</li>
<li class="list-group-item">birthday :${birthday}</li>
<li class="list-group-item">email:${email}</li>
<li class="list-group-item">USER ID :${id}</li>
</ul>
</div>`
}
input.addEventListener("keyup",function(e) {
    search=this.value;
    getDatasTudents();
})