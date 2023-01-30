    var tablinks = document.getElementsByClassName("tab-links"); 
    var tabcontents = document.getElementsByClassName("tab-contents"); 
    function openTab(tabname){ 
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        } 
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab"); 
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab") 
    }

    var sidemenu = document.getElementById("sidemenu"); 
    function openmenu(){
        sidemenu.style.right="0"; 
    } 
    function closemenu(){
        sidemenu.style.right="-200px"; 
    }
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzt4kHYsSyZW9h_2WCxmbeyzxp403Ba4XOdwplKe3QUf5oKOUUL94WIWoL9UCiJ8aiG2Q/exec'
    const form = document.forms['submit-to-google-sheet']
    var msg = document.getElementById('msg')
    var msgSend = "Message sent Successfully";

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
            console.log("Success!",response);
            msg.innerHTML = msgSend;
            setTimeout(function(){
                msg.innerHTML=''
            },5000)
            form.reset()})
        .catch(error => console.error('Error!', error.message))
    })


