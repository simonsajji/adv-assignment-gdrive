let sbar=document.getElementById("search_bar");

sbar.addEventListener('focusin',function(){

    let butn=document.getElementById('butn');
    butn.style.border="4px solid white";
    butn.style.borderLeft="0";
    butn.style.height="77%";
    butn.style.backgroundColor="white";
    sbar.style.border="4px solid white";
    sbar.style.borderRight="0";
    sbar.style.backgroundColor="white";
    butn.style.transition="border 0.3s";
    sbar.style.transition="border 0.3s";
    

});
sbar.addEventListener('focusout',function(){

    let butn=document.getElementById('butn');
    butn.style.border="0";
    butn.style.borderLeft="0";
    butn.style.height="67%";
    sbar.style.border="0";
    sbar.style.backgroundColor="rgba(185, 181, 181, 0.35)";
    butn.style.backgroundColor="rgba(185, 181, 181, 0.35)";
    sbar.style.borderRight="0";
    butn.style.transition="all 0.7s";
    sbar.style.transition="all 0.7s";
    

});


// Menu-item animation

function menu_animate(){
    var menu=document.getElementsByClassName("menu-item");
    for(i=0;i<menu.length;i++){
        let menu_item=document.getElementsByClassName("menu-item")[i];
        menu_item.addEventListener("click",function(){
            console.log("hi");
        });

    }
    
    



}

menu_animate();

var rand_val=1;

// changing the view from Grid-view to List and vice-versa

let view_changer=document.getElementById("change-view");

view_changer.addEventListener("click",function(){
    let changer=document.getElementById("changer").src;
    if(changer==="http://127.0.0.1:5500/Advanced-FE-Assignments/assignment-2/list_view.png"){
        changer="http://127.0.0.1:5500/Advanced-FE-Assignments/assignment-2/grid_view.png";
        document.getElementById("changer").src=changer;
        let cont=document.querySelector(".files");
        console.log(cont);
        cont.style.display="none";
       
        
        let main=document.getElementById("main");
        let table=document.createElement("table");
        if(main.querySelector("table") == null){

            main.appendChild(table);
        
            let headings=['Name',"Owner","Last Modified","File Size"]

            let files=document.getElementsByClassName("f");
            for(i=0;i<files.length;i++){
                console.log(files[i].innerHTML);
                let row=document.createElement('tr');
                table.appendChild(row);
                for(j=0;j<4;j++){
                    if(i==0){
                        let th=document.createElement('th');
                        row.appendChild(th);
                        th.innerHTML=headings[j];


                    }
                    else{
                        let td=document.createElement('td');
                        row.appendChild(td);
                        if(j==0){
                            td.innerHTML=files[i].innerHTML;
                        }
                        if(j==1){
                            td.innerText="me";
                        }
                        if(j==2){
                            let rand=Math.floor(Math.random() * 10)+1;
                            rand=rand*rand_val;
                            td.innerText=rand+"th Dec";

                        }
                        if(j==3){
                            let rand2=Math.floor(Math.random() * 50)+1;
                            td.innerHTML=rand2+" MB"



                        }
                    }
                    
                }
        


            }

        }
        
       

        
    
    }
    else{
        changer="http://127.0.0.1:5500/Advanced-FE-Assignments/assignment-2/list_view.png";
        document.getElementById("changer").src=changer;
        let cont=document.querySelector(".files");
        console.log(cont);
        cont.style.display="flex";
        table.style.display="none";
        
    }
});


