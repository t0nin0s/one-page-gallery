function getData(){
  fetch(`http://www.appsme.com/InterviewChallenge`)
    .then(response => response.json())
    .then(json => createElements(json.gallery))
}

function createElements(json){
  json.forEach(function(item){
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class','thumbnail');

    var newImage = document.createElement('img');
    newImage.src = item.thumbnail_img_url
    newImage.addEventListener('click', (function(item){
      return function(){
        var modal = document.getElementById('modal-dialog');
        var modalImg = document.getElementById('fullsize-img');
        var captionText = document.getElementById('caption');
        modal.style.display = 'block';
        modalImg.src = item.fullsize_img_url;
        captionText.innerHTML = item.caption;
        console.log(item.caption);
      }
    })(item)
  )
    newDiv.appendChild(newImage)
    document.getElementById('content').appendChild(newDiv);
  })
}

window.onload = function(){
  getData();
}
