let id,email,fname,lname,msg;
id = 0;
const submit = document.getElementById('submit').addEventListener('click', () =>{
   
    email = document.getElementById('email').value;
    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    msg = document.getElementById('msg').value;
    
    db.ref("users/"+id).set({
        ID:id,
        F_Name:fname,
        L_Name:lname,
        Email:email,
        Message:msg,
        
    }
    )
    
    id=id+1;   

}

)

let gid = 0;

const get = document.getElementById("get").addEventListener('click',()=>{

    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    email = document.getElementById('email').value;
    msg = document.getElementById('msg').value;

    db.ref("users/"+gid).on("value",snapshot => {
        document.getElementById('fname').value = snapshot.val().F_Name ;
        document.getElementById('lname').value = snapshot.val().L_Name;
        document.getElementById('email').value = snapshot.val().Email; 
        document.getElementById('msg').value = snapshot.val().Message; 
    })
})

const next = document.getElementById("next").addEventListener('click',()=>{

    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    email = document.getElementById('email').value;
    msg = document.getElementById('msg').value;
    if (gid<id+1)gid++;

    db.ref("users/"+gid).on("value",snapshot => {
        document.getElementById('fname').value = snapshot.val().F_Name ;
        document.getElementById('lname').value = snapshot.val().L_Name;
        document.getElementById('email').value = snapshot.val().Email; 
        document.getElementById('msg').value = snapshot.val().Message; 
    })
})

const prev = document.getElementById("prev").addEventListener('click',()=>{

    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    email = document.getElementById('email').value;
    msg = document.getElementById('msg').value;
    if(gid>0)gid--;


    db.ref("users/"+gid).on("value",snapshot => {
        document.getElementById('fname').value = snapshot.val().F_Name ;
        document.getElementById('lname').value = snapshot.val().L_Name;
        document.getElementById('email').value = snapshot.val().Email; 
        document.getElementById('msg').value = snapshot.val().Message; 
    })
})




