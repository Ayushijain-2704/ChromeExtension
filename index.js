
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn=document.getElementById("tab-btn")

//console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
function render(leads){
    let listItems = ""
    for (let i = 0; i <leads.length; i++) {
        // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
        listItems += `<li>
        <a target ='_blank 'href='${leads[i]}'>${leads[i]}  </a>
        </li>`
        
    }
    // 3. Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems
    
    }

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value=""
    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

tabBtn.addEventListener("click",function(){
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
    })
})