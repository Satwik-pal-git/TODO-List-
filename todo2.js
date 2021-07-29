document.querySelector("#add").onclick = function(){
    if(document.querySelector("#title").value.length==0)
    {
        alert("Enter a task to do...");
    }
    else {
        document.querySelector("#tasks").innerHTML+=`
        <div class="task">
            <span id="taskname">
                ${document.querySelector("#title").value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;

        var currnet_task=document.querySelectorAll(".delete");
        for(var i=0;i<currnet_task.length;i++)
        {
            currnet_task[i].onclick=function(){
                this.parentNode.remove();
            }
        }

        var tas=document.querySelectorAll(".task");
        for(var i=0;i<tas.length;i++)
        {
            tas[i].onclick=function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#title").value="";

    }
}