// wait for document load
document.addEventListener("DOMContentLoaded", function(event) {


  // fetch .gallery element
  var gallery = document.querySelector('.gallery');

  // if .gallery element exist in document, execute gallery code
  if(document.contains(gallery)){
    // create all necessary modal elements
    var gallerySection = document.getElementById('gallery');

    var modal = document.createElement('div');
    modal.id = 'galleryModal';

    var modalClose = document.createElement('span');
    modalClose.innerHTML = "&#215";

    var galleryImage = document.createElement('img');

    modal.appendChild(galleryImage);
    modal.appendChild(modalClose);

    // append modal elements to document
    gallery.parentNode.insertBefore(modal, gallery);

    // fetch all gallery links
    var galleryLinks = document.querySelectorAll('.gallery a');

    // behavior for clicking a gallery link
    function galleryAction(e){
      e.preventDefault();
      gallerySection.setAttribute('class', 'modal-active');
      var imagePath = this.getAttribute('href');
      galleryImage.setAttribute('src', imagePath);
    }

    // behaviour for closing modal
    function closeModal(e){
      gallerySection.removeAttribute('class');
    }

    // associate clicking a gallery link to its behavior
    for(var i = 0; i < galleryLinks.length; i++){
      galleryLinks.item(i).addEventListener('click', galleryAction, false);
    }

    // associate clicking the close modal to its behavior
    modalClose.addEventListener('click', closeModal, false);
  }


}, false);
