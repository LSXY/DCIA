(function(d) {
  function main_carousel_init() {
    var carousel = d.getElementById("main_carousel"),
      main = carousel.firstElementChild,
      control = carousel.lastElementChild,
      main_li = null,
      control_li = null,
      time_out = null,
      several = 0,
      time = 5000,
      data = [{
        url: "image/1.jpg",
        link: "image/1.jpg",
        title: "one"
      }, {
        url: "image/2.jpg",
        link: "image/2.jpg",
        title: "two"
      }, {
        url: "image/3.jpg",
        link: "image/3.jpg",
        title: "thrre"
      }, {
        url: "image/4.jpg",
        link: "image/4.jpg",
        title: "fuo"
      }, {
        url: "image/5.jpg",
        link: "image/5.jpg",
        title: "wu"
      }, {
        url: "image/6.jpg",
        link: "image/6.jpg",
        title: "liu"
      }, {
        url: "image/7.jpg",
        link: "image/7.jpg",
        title: "qi"
      }];

    function apply_data(o) {
      var t = "",
        i = 0,
        dl = o.length;
      for (; i < dl; i++) {
        t += "<li><a href=" + o[i].link + " title=" + o[i].title + "><img src=" + o[i].url + "></a></li>";
      }
      main.innerHTML = t;
      set_con_li(data);
    }

    function set_con_li(o) {
      var i = 0,
        dl = o.length;
      for (; i < dl; i++) {
        control.appendChild(create_con_li());
      }
    }

    function create_con_li() {
      return d.createElement("li");
    }

    function set_move_init(o) {
      var i = 0,
        ol = o.length;
      for (; i < ol; i++) o[i].removeAttribute("class");
    }

    function set_con_time_out(o) {
      o.addEventListener("mouseover", function() {
        clearTimeout(time_out);
      });
      o.addEventListener("mouseout", function() {
        set_time_out();
      });
    }

    function set_con_move(o) {
      var i = 0,
        ol = o.length;
      for (; i < ol; i++) {
        o[i].addEventListener("mouseover", (function(_i) {
          return function() {
            set_move_start(several = _i);
          }
        })(i));
      }
    }

    function set_move_start(i) {
      var m_li = main_li[i],
        c_li = control_li[i];
      set_move_init(main_li);
      set_move_init(control_li);
      m_li.className = "main_car_move";
      c_li.className = "main_car_con_hover";
    }

    function set_time_out() {
      time_out = setTimeout(function() {
        set_move_start((several >= data.length - 1) ? several = 0 : ++several);
        set_time_out();
      }, time);
    }

    apply_data(data);
    setTimeout(function() {
      main_li = main.children;
      control_li = control.children;
      set_con_move(control_li);
      set_con_time_out(carousel);
      set_move_start(several);
      // set_time_out();
    }, 0);
  }

  function main_right_init(){
  	var right = d.getElementById("main_right"),
  			first_div = right.children[0],
  			last_div = right.children[1],
  			sch = first_div.children[8];
  			dire = true;

  	function set_switch(){
  		if(!last_div)return;
  		sch.addEventListener("mouseup",function(){
  			if(dire)set_move_start();
  			else set_move_init();
  		});
  	}

  	function set_move_init(){
  		first_div.removeAttribute("class");
			last_div.removeAttribute("class");
			dire = true;
  	}

  	function set_move_start(){
  		first_div.className = "main_right_first_move";
			last_div.className = "main_right_last_move";
			dire = false;
  	}

  		set_switch();
  }

  // onload = function(){
  	main_carousel_init();
  	main_right_init();
  // }

})(document);