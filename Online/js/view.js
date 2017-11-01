(function(w, D) {

  function view() {
    this.dom = D.getElementById("view")
    this.get = new get(this);
  }

  function get(d){
  	// this.dom = d s;
  }

  get.prototype = {
    constructor: get,
    child : function(cn){
	  	var ele = [],i = 0, d = this.children, dl = d.length;
	  	for(; i < dl; i++){
	  		if(d[i].localName === cn)ele.push(d[i]);
	  	}
	  	return ele;
		},
		id_class: function() {
			console.log(this);
    	var ele = {},
    			dom = this.dom.children;

			ele.__proto__.child = this.child;

    	erg();

      function erg(e){
      	var i = 0,d = e || dom,dl = d.length;
      	for(; i < dl; i++)fter(d[i]);
      }

      function fter(o){
        var key = o.id || o.className;
				key && !ele[key] && (ele[key] = o);
      	if(o.children)erg(o.children);
				else return;
      }

      return ele;
    }
  }

  view.prototype = {
    constructor: view,
    get : new get(view.dom)
  }

  var s = new view();
  w["get"] = new get();

  // var ele = view.get.id_class(),like = ele.view_join_form_like;

  console.log(s.get.id_class());

})(window, document);