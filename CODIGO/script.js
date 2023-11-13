
function menuShow(){
    var icon = document.getElementById('bars')
    var items = document.getElementById('barLiberar')
    var page = document.getElementById('pageItems')
    var card =document.querySelector('.card') 
    if(items.style.display =='block'){
        items.style.display = 'none'
        icon.style.background = 'none'
        page.style.display = 'flex'
        card.style.display = 'flex'
    }else{
        items.style.display = 'block'
        icon.style.background = '#8876ea'
        icon.style.padding = '0.5rem'
        icon.style.borderRadius = '50%'

        card.style.display = 'none'
        page.style.display = 'none'
    }
}