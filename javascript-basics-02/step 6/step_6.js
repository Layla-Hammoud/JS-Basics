let images = document.getElementsByTagName('img')
for(let i = 0 ; i < 5 ; i++){
    images[i].addEventListener('mouseover', function(){
        images[i].src=`images/image${i + 1}_2.jpg`
      })
}
for(let i = 0 ; i < 5 ; i++){
    images[i].addEventListener('mouseout', function(){
        images[i].src=`images/image${i + 1}.jpg`
      })
}