

var slideshow = {
  photoList: ['image1', 'image2', 'image3', 'image4'],
  currentPhotoIndex: 0,
  nextPhoto: function() {
      if(this.currentPhotoIndex < this.photolist.length - 1) {
        this.currentPhotoIndex++;
        console.log(this.photoList[this.currentPhotoIndex]);
      } else {
        console.log("End of slideshow");
      }
  },
  prevPhoto: function() {
    if(this.currentPhotoIndex > 0){
      this.currentPhotoIndex--;
      console.console.log(this.photoList[this.currentPhotoIndex]);
    } else {
      console.log("Beggining of slideshow");
    }
  },
  getCurrentPhoto: function() {
      return this.photoList[this.currentPhotoIndex];
  }
};
