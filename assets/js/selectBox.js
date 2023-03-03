var selectBoxes;

selectBoxes = document.getElementsByClassName("selectBox");

for(var i = 0; i < selectBoxes.length; i++)
{
    selectBoxes[i].addEventListener("click", function()
    {
        /*Close all selectBoxes*/
        for(var i = 0; i < selectBoxes.length; i++)
        {
            if(selectBoxes[i] == this) continue;
            selectBoxes[i].getElementsByClassName("items")[0].classList.remove("active");
        }

        /*Open current selectBox*/
        var container_items = this.getElementsByClassName("items")[0];
        container_items.classList.toggle("active");
        container_items.classList.toggle("fadeIn");
        
        /*change the color of the selected item to selected color*/
        var items = container_items.getElementsByTagName("div");
        var currentSelectedItem = this.getElementsByClassName("item-selected")[0].innerHTML;
        for(var j = 0; j < items.length; j++)
        {
            if(items[j].innerHTML == currentSelectedItem) items[j].classList.add("same-as-selected");
            else items[j].classList.remove("same-as-selected");
        }
    });

    var items = selectBoxes[i].getElementsByClassName("items")[0].getElementsByTagName("div");

    for(var j = 0; j < items.length; j++)
    {
        items[j].addEventListener("click", function(){
            this.parentElement.previousElementSibling.innerHTML = this.innerHTML;
        });
    }
}