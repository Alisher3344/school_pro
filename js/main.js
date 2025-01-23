let CardBox = document.querySelector(".card__box");
let Users_input =document.querySelector(".users_input");
let Pagination = document.querySelector(".pagination");
let LOAD =document.querySelector('.loading');
let search = "";
let LIMIT=10;


function getCard({firstname,imgs,email,phoneNumber,id}) {
return  ` <div class="card_in_box">
<div class="user_img"><img  src="${imgs}" alt="No img?"></div>
<div class="body_absalute">
<img src="${imgs}" alt="NO img?">
</div>
<div class="card_body_in_box">
<div class="text_align">
<h5>${firstname}</h5>
<p>${email}</p>
<p><b>Phone:</b>${phoneNumber}</p>
</div>
<div class="d-flex gap-3">
<a href="./pages/studnets.html?teacher/${id}/student=${id}"><button class="buttons_tools"> STUDENT</button></a>
<button class="buttons_tools"> DELETE</button>
<button class="buttons_tools"> EDID</button>
</div>
</div>
</div>`
}

const request=axios.create({
    baseURL:"https://678e0bd6a64c82aeb11ec2d8.mockapi.io/",
    Timeout:1000,
}) 

async function getData() {
    try {
        LOAD.setAttribute("style", " display: block;");
        let params= {
            page:1,
            limit:10,
            firstname:search,
        };
        let {data} =await request.get(`teachers`,{params},
        );
        CardBox.innerHTML="";
        data.map((teachers)=>{
            CardBox.innerHTML+=getCard(teachers );  
        })
        let pages =Math.ceil(data.length/LIMIT);
        console.log(pages);
        

        Pagination.innerHTML=` <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>`;
        Pagination.innerHTML+=`<li class="page-item"><button class="page-link" href="#">1</button></li>`;
        Pagination.innerHTML+=`    <li class="page-item">
      <button class="page-link" href="#">Next</button>
    </li>`;
    } catch (error) {
        console.log(error);
    }
    }
getData()
async function getDatasTudents() {
    try {
        let params= {
            _page:1,
            _limit:10,
        };
        let {data} =await request.get(`studends`,{params}
        );
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }

    }
    getDatasTudents();

            Users_input.addEventListener("keyup",function(e) {
                search=this.value;
                getData();
            })