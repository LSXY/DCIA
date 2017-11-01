;(function(w,d){
   function route_init(){
  	var hash = w.location.hash.replace("#","");

  }

  w.onload = function (){
     this.addEventListener("hashchange",route_init);
  }
})(window,document);