// NProgress.configure({ minimum: 0.1 });
// NProgress.configure({ trickleRate: 0.02, trickleSpeed: 200 });
// NProgress.configure({ showSpinner: false });

if(typeof window.disqus_enabled === 'undefined'){
  window.disqus_enabled = false;
} 

var disqusEmbedScriptLoaded = false;
var disqusLatest = null;
var disqusLoaded = false;
/* * * Disqus Reset Function * * */
var resetDisqus = function () {
	if(!disqusLatest){
		return;
	}
    DISQUS.reset({
        reload: true,
        config: function () {
            this.page.identifier = disqusLatest.identifier;
            this.page.url = disqusLatest.url;
            this.page.title = disqusLatest.title;
            this.language = disqusLatest.language;
        }
    });
};

var updateDisqus = function(newIdentifier, newUrl, newTitle, newLanguage){
	disqusLatest = {
		identifier: newIdentifier,
		url: newUrl,
		title: newTitle,
		language: newLanguage,
	};
}

var loadDisqusEmbedScript = function() {
	if(!disqus_enabled || disqusEmbedScriptLoaded){
		return;
	}
	disqusEmbedScriptLoaded = true;
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
};

var resetCount = function() {
	if(!disqus_enabled){
		return;
	}
	window.DISQUSWIDGETS = undefined;
    var s = document.createElement('script'); s.async = true;
    s.type = 'text/javascript';
    s.src = '//' + disqus_shortname + '.disqus.com/count.js';
    (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}

var loadComments = function(){
	if(!disqus_enabled){
		return;
	}
	var disqusThread = document.getElementById('disqus_thread');
	if(!disqusThread){
		return;
	}
	var currentScroll = (window.innerHeight + window.scrollY), elScroll = disqusThread.offsetTop;
	if (currentScroll >= elScroll && !disqusLoaded) {
		disqusLoaded = true;
		disqusThread.innerHTML = '';
		resetDisqus();
	}
}

var lastScrollTop = 0;
var zetmel = {
  // z: {$el: document.querySelector('.the-logo-fixed .zetmel-z'), last: 0, deltaX: -2, deltaY: 2},
  // e1: {$el: document.querySelector('.the-logo-fixed .zetmel-e1'), last: 0, deltaX: 5, deltaY: 10},
  // t: {$el: document.querySelector('.the-logo-fixed .zetmel-t'), last: 0, deltaX: 8, deltaY: -1},
  // m: {$el: document.querySelector('.the-logo-fixed .zetmel-m'), last: 0, deltaX: 12, deltaY: 1},
  // e2: {$el: document.querySelector('.the-logo-fixed .zetmel-e2'), last: 0, deltaX: -1, deltaY: 5},
  // l: {$el: document.querySelector('.the-logo-fixed .zetmel-l'), last: 0, deltaX: 2, deltaY: 3},

  // z: {deltaX: -2, deltaY: 2},
  z: {deltaX: -2, deltaY: 2},
  // e1: {deltaX: 3, deltaY: 3},
  e1: {deltaX: 3, deltaY: 3},
  // t: {deltaX: 8, deltaY: -1},
  t: {deltaX: 4, deltaY: -1},
  // m: {deltaX: 12, deltaY: 1},
  m: {deltaX: 5, deltaY: -4},
  // e2: {deltaX: -1, deltaY: 5},
  e2: {deltaX: -1, deltaY: 2},
  // l: {deltaX: 2, deltaY: 3},
  l: {deltaX: 2, deltaY: 3},
};


var zetmel = {
  // z: {$el: document.querySelector('.the-logo-fixed .zetmel-z'), last: 0, deltaX: -2, deltaY: 2},
  // e1: {$el: document.querySelector('.the-logo-fixed .zetmel-e1'), last: 0, deltaX: 5, deltaY: 10},
  // t: {$el: document.querySelector('.the-logo-fixed .zetmel-t'), last: 0, deltaX: 8, deltaY: -1},
  // m: {$el: document.querySelector('.the-logo-fixed .zetmel-m'), last: 0, deltaX: 12, deltaY: 1},
  // e2: {$el: document.querySelector('.the-logo-fixed .zetmel-e2'), last: 0, deltaX: -1, deltaY: 5},
  // l: {$el: document.querySelector('.the-logo-fixed .zetmel-l'), last: 0, deltaX: 2, deltaY: 3},

  // z: {deltaX: -2, deltaY: 2},
  z: {deltaX: -2, deltaY: 1},
  // e1: {deltaX: 3, deltaY: 3},
  e1: {deltaX: 3, deltaY: 1},
  // t: {deltaX: 8, deltaY: -1},
  t: {deltaX: -1, deltaY: -2},
  // m: {deltaX: 12, deltaY: 1},
  // m: {deltaX: 3, deltaY: -4},
  m: {deltaX: 0, deltaY: -4},
  // e2: {deltaX: -1, deltaY: 5},
  e2: {deltaX: -2, deltaY: -1},
  // l: {deltaX: 2, deltaY: 3},
  l: {deltaX: 1, deltaY: -1},
};

for(var key in zetmel){
  zetmel[key].$el = document.querySelector('.the-logo-fixed .zetmel-' + key);
  zetmel[key].last = {x: 0, y: 0, z: 0};
}
var onScrolling = function(){

  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop){
    // downscroll code
    // document.body.classList.remove('brand-expanded');
    document.body.classList.add('is-down-scrolling');
  } else {
    // upscroll code
    // document.body.classList.add('brand-expanded');
    document.body.classList.remove('is-down-scrolling');
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  console.log('lastScrollTop', lastScrollTop);


  var updateLetters = function(isOnTop){
    for(var key in zetmel){
      var transform = {x: 0, y: 0, z: 0};
      var factor = lastScrollTop;
      var factor = lastScrollTop * 0.5;
      var factor = lastScrollTop * 0.2;
      transform.x = zetmel[key].deltaX * factor;
      transform.y = zetmel[key].deltaY * factor;
      // if(lastScrollTop > 20){
      //   transform.x = 0;
      //   transform.y = 0;
      // }
      if(isOnTop){
        zetmel[key].last = transform;
      }
      else {
        transform.x = 0;
        transform.y = 0;
      }
      var translate = 'translate3d(' + 
        transform.x + 'px,' + transform.y + 'px,' + transform.z + 'px)';
        console.log(translate);
      zetmel[key].$el.style.transform = translate;
    }
  }

  var threshold = 20;
  var threshold = 100;

  if(lastScrollTop <= threshold){
    // on top
    document.body.classList.add('on-top');
    document.body.classList.remove('not-on-top');
    document.body.classList.add('brand-expanded');
    updateLetters(true);
  }
  else {
    document.body.classList.remove('on-top');
    document.body.classList.add('not-on-top');
    document.body.classList.remove('brand-expanded');
    updateLetters();
  }
}


window.onscroll = function(e) {
	loadComments();
  onScrolling();
};


// https://github.com/rails/turbolinks
document.addEventListener('page:fetch',   function() {
	disqusLoaded = false;
	NProgress.start();
});
document.addEventListener('page:change',  function() {
	resetCount();
	loadDisqusEmbedScript();
	loadComments(); // if the post doesn't have any scroll, comments should be loaded
	NProgress.done();
});
document.addEventListener('page:restore', function() {
	NProgress.remove();
});
