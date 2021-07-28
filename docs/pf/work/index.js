$(function () {

  function Intro_AnimationInit() {
    $(document).ready(function(){
      $(".D-main_introwrite > img").fadeIn(1500);
    });
  }

  function Alarm_AnimationInit() {

    gsap.fromTo('.D-alarm', {
      opacity: 0,
      scale: 0,
    }, {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: '.D-h5',
        start: '0% 0%',
        end: '100% 30%'
      },
      duration: 0.5
    });

    gsap.fromTo('.D-story', {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.star-5',
        start: '-10% 0%',
        end: '100% 30%'
      },
      duration: 1.2
    });

    gsap.fromTo('.D-story-1', {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.star-6',
        start: '0% 0%',
        end: '100% 30%'
      },
      duration: 1.2
    });


    // 와이어프레임
    gsap.fromTo('.wf-img_1', {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.D-h1',
        start: '0% 0%',
        end: '100% 30%'
      },
      duration: 1.4
    });

    gsap.fromTo('.wf-img_2', {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.wf-img_1',
        start: '0% 0%',
        end: '100% 30%'
      },
      duration: 1.4
    });

    gsap.fromTo('.wf-img_3', {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.wf-img_2',
        start: '0% 0%',
        end: '100% 30%'
      },
      duration: 1.4
    });

    gsap.fromTo('.D-simple', {
      opacity: 0,
      y: -30,
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.D-h6',
        start: '0% 0%',
        end: '100% 30%'
      },
      duration: 1
    });

    gsap.fromTo('.D-diary-2', {
      opacity: 0,
      x: -200,
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: '.D-h2',
        start: '0% 0%',
        end: '100% 30%'
      },
      duration: 1.8
    });

    gsap.fromTo('.D-main-2', {
      opacity: 0,
      x: 50,
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: '.D-h3',
        start: '0% 0%',
        end: '100% 30%'
      },
      duration: 1
    });

    // gsap.fromTo('.D-explain', {
    //   opacity: 0,
    //   x: 50,
    // }, {
    //   opacity: 1,
    //   x: 0,
    //   scrollTrigger: {
    //     trigger: '.star-8',
    //     start: '0% 0%',
    //     end: '100% 30%'
    //   },
    //   duration: 1
    // });

    gsap.fromTo('.D-sharing', {
      opacity: 0,
      x: 100,
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: '.D-h4',
        start: '0% 0%',
        end: '100% 30%'
      },
      duration: 1.3
    });

    gsap.fromTo('.D-sharingmain-1', {
      opacity: 0,
      x: -100,
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: '.D-h4',
        start: '0% 0%',
        end: '100% 30%'
      },
      duration: 1.3
    });

    gsap.fromTo('.D-sharingmain-2', {
      opacity: 0,
      x: -200,
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: '.D-h4',
        start: '0% 0%',
        end: '100% 30%'
      },
      duration: 1.3
    });

    gsap.fromTo('.D-footwrite', {
      opacity: 0,
      y:-50
    }, {
      opacity: 1,
      y:0,
      scrollTrigger: {
        trigger: '.D-h7',
        start: '0% 0%',
        end: '100% 30%'
      },
      duration: 1
    });

  }


  function EvenStars_RotateInit(index) {
    gsap.from(".star-"+ index +" > img", {
      ease:"none",
      duration: 11,
      rotate: 720,
      repeat:-1
    });
  }

  function OddStars_RotateInit(index) {
    gsap.from(".star-"+ index +" > img", {
      ease:"none",
      duration: 10,
      rotate: -720,
      repeat:-1
    });
  }

  for (var i = 0; i < 17; i++)
  {
    if(i%2==0) {
      EvenStars_RotateInit(i);
    }
    else {
      OddStars_RotateInit(i);
    }
  }


  Intro_AnimationInit()
  Alarm_AnimationInit()
});