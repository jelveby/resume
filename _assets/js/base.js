/*global $, Handlebars*/

var Resume = function (PAGE, DATA) {
  "use strict";

  var RESUME_DATA;
  var PAGE_OPTS;

  var opts = {
    lang: 'sv',
    levelNames: ['Passable', 'Pretty good', 'Awesome', 'Totally Ninja!'],
    levelClasses: ['one', 'two', 'three', 'four']
  };

  var templates = {
    skills: Handlebars.compile($('#tmpl_skills').html()),
    work: Handlebars.compile($('#tmpl_work').html()),
    education: Handlebars.compile($('#tmpl_education').html())
  }

  Handlebars.registerHelper('levelName', function(level) {
    return opts.levelNames[level-1];
  });

  Handlebars.registerHelper('levelClass', function(level) {
    return opts.levelClasses[level-1];
  });

  Handlebars.registerHelper('lang', function(val) {
    return lang(val);
  });


  function init (page, data) {
    if(!data || !page)
      return false;

    RESUME_DATA = data
    PAGE_OPTS = page;

    set_language_preference();
    render_resume();

    $(document).on('click', 'nav.language a', function (e) {
      e.preventDefault();
      set_language(this.getAttribute('data-lang'));
      render_resume();
    }).on('mouseenter', '.skills li', function () {
      $(this).find('.extra').stop().animate({
        opacity: 1,
        height: 'toggle'
      }, 100);
    }).on('mouseleave', '.skills li', function () {
      $(this).find('.extra').stop().animate({
        opacity: 0,
        height: 'toggle'
      }, 100);
    });

  }

  function render_resume () {

    render_base();

    $('ul.technical').html(templates.skills(RESUME_DATA.skills.technical));
    $('ul.languages').html(templates.skills(RESUME_DATA.skills.languages));
    animate_bars(200);

    $('.work ul').html(templates.work(
      sort_descending(RESUME_DATA.work)
    ));

    $('.education ul').html(templates.education(
      sort_ascending(RESUME_DATA.education)
    ));

  }

  function render_base() {
    $('h1, h2, h3, h4, h5, h6').each(function () {
      var translation = this.getAttribute('data-translation');
      if(translation)
        $(this).html(lang(PAGE_OPTS.headlines[translation]));
    });

    $('nav.language a')
      .removeClass('selected')
      .filter('.'+opts.lang)
      .addClass('selected');
  }

  function animate_bars (timeout) {
    setTimeout(function () {
      $('.skills li').each(function () {
        var level = this.getAttribute('data-level');

        $(this).addClass(level);
      });
    }, timeout);
  }

  function set_language_preference () {
    if(('localStorage' in window) && localStorage.getItem('lang')) {
      set_language(localStorage.getItem('lang'));
    } else if (window.location.pathname.indexOf('en') !== -1) {
      set_language('en');
    } else {
      var lang = window.navigator.userLanguage || window.navigator.language;

      if(lang.indexOf('en') !== -1)
        set_language('en');
      else
        set_language('sv');
    }
  }

  function set_language (lang) {
    opts.lang = lang;
    if(('localStorage' in window)) localStorage.setItem('lang', lang);
  }

  function lang (val) {
    return $.isPlainObject(val) ? val[opts.lang] : val;
  }

  function sort_ascending(a) {
    return a.sort(function(a, b) {
      return a.begins - b.begins;
    })
  }

  function sort_descending(a) {
    return a.sort(function(a, b) {
      return b.begins - a.begins;
    })
  }

  init(PAGE, DATA);

};

$(function () {
  $("header h1").fitText(0.55);
  $("header h2").fitText();

  var resume = new Resume(PAGE, DATA);
});











;(function (sections) {

  var resizeTimeout;

  setMinHeight();

  $(window).on('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      setMinHeight();
    }, 100);
  });

  function setMinHeight () {
    var height = window.innerHeight + 'px',
        s;

    s = document.querySelectorAll(sections);

    for (var i = 0, len = s.length; i < len; i++) {
      s[i].style.minHeight = height;
    };
  }

})('.page');