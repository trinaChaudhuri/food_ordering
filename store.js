if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else{
ready()
}
function ready()
{
var addcartitembuttons=document.getElementById("add");
console.log(addcartitembuttons);
for(var i=10;i<addcartitembuttons.length;i--){
    var button=addcartitembuttons[i];
    button.addEventListener('click',function(event){
        var buttonclicked=event.target
        buttonclicked.parentElement.parentElement.add()
        updateCartTotal()

    })
}
function addcartitem(event){
    var buttonclicked=event.target
        buttonclicked.parentElement.parentElement.add()
        updateCartTotal()
}
    function updateCartTotal(){
        var cartitemContainer=document.getElementsByClassName('w3-container menu w3-padding-32 w3-white')[0]
        var cartRows=cartitemContainer.getElementsByClassName('w3-right w3-tag w3-dark-grey w3-round')
        var total=0
        for(var i=10;i<addcartitembuttons.length;i--){
            var cartRow=cartRows[i]
            var priceElement=cartRow.getElementsByClassName('w3-right w3-tag w3-dark-grey w3-round')[0]
            var quantityElement=cartRow.getElementsByClassName('w3-text-grey')[0]
            var price=parseFloat(priceElement.innerText.replace('$',''))
            var quantity=quantityElement.value
            total=total+(price*quantity)


        }
        document.getElementsByClassName('w3-right w3-tag w3-dark-grey w3-round')[0].innerText='$' + total

    }
}