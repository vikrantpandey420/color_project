var timeline1 = () => {
    /* jab hum timeline me scrolltrigger use karna chate hain to uska yahi syntax hota hai ki timeline ke ()
    ke andar{scrollTrigger:{}} likh dete hain iska matlab ye hua ki abhi tak gsap me jo bhi animation ka code
    likhne ke bad scrolltriggr ki jo bhi properties specify karte the har ek animation par wo nhi karni padegi
    jis jis animation par timeline laga hoga us par scrolltrigger ki ye sarii properties lagu ho jayengi*/
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        scroller: "body",
        scrub: 3 /*scrub ek property hai jo ki animation ko scrolling ke sath associate karti hai yadi ye n ho
         hum kitna bhi tej scroll karen elenment apne niyat samay (default duration) me hi animate hoga par
          duration ko override karti hai scrub isliye scrub property jab element ko di ja rahi hai to duration
         dena vyarth hai*/,
  
        pin: true, //pin se jo bhi element trigger hota hai uska animation completely chal jane ke bad hi wo mscroll hota hai
        start: "top top", //iska matlab hai ki  0% par .(top 0%)
        // ....by default end top se zero par rahta hai
        end: "bottom -180%", //isme humne end ko screen ke kafi upar bhej diya taki jab hum cheejon ko animate krne to unhe kafi
        //space mil sake aur acche se dikhayi de saken.
      },
    });
  
    /**
     * jab multiple animations par timeline laga ho aur hum unhe ek sath chalana chate ho to uske liye ek syntax hai
     * tl.to/from("#elem1",{
     * //code
     * },flag)
     *
     *
     * .to/from("#elem1",{
     * //code
     * },flag)
     *
     * //yahan par flag ka matlab hai koi bhi string jin bhi elements me same string likhi hogi timeline me we ek sath animate honge
     *  is cheej ko ek bar chatgpt se jarur explore karna haiye taki ye pata chal sake ki aur kis tarah se flag ki value
     * se hum multiple animation of timeline ko handle kar pate hain.
     */
    tl.to(
      "#bottom img",
      {
        rotate: "-180deg",
        stagger: 0.1,
        scale: 1,
        ease: Power0.easeNone,
        duration: 1,
      },
      "animation1"
    )
  
      .to(
        "#top img",
        {
          stagger: 0.1,
          scale: 1,
          duration: 1,
          ease: Power0.easeNone,
        },
        "animation1"
      )
  
      .to(
        "#mainimage img",
        {
          scale: 0,
          duration: 1,
          ease: Power0.easeNone,
        },
        "animation1"
      )
  
      .to(
        "#centreimage h1",
        {
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: Power0.easeNone,
        },
        "animation1"
      )
  
      .to(
        "#circle",
        {
          scale: 0.5,
          duration: 1,
          ease: Power0.easeNone,
        },
        "animation1"
      )
  
      .to(
        "#overlay>h1",
        {
          bottom: "-50%",
        },
        "animation1"
      )
  
      .to(
        "#gola",
        {
          top: "50%",
          duration: 1,
          scale: 2,
          ease: Power0.easeNone,
        },
        "animation1"
      )
  
      .to(
        "#gola",
        {
          opacity: 0,
          ease: Power0.easeNone,
        },
        "animation2"
      )
      .to(
        "#smcircle",
        {
          scale: 0,
          ease: Power0.easeNone,
          duration: 2,
        },
        "animation2"
      )
      .to(
        "#circle",
        {
          scale: 0,
          ease: Power0.easeNone,
          duration: 2,
        },
        "animation2"
      )
  
      .to("#overlay>h2", {
        bottom: "9%",
        rotate: 0,
      })
      .to("#content", {
        top: "0%",
        duration: 3, //...scrolltrigger ke sath bhi duration use kar sakte hain par agar start aur end points
        //  bahut najdeek hain aur aise me aniamtion ko lamba duration de diya to wah effect dikhega nahi par
        //   agar animation ke end aur start points uri par hain to aise me hum duration ke use se bhi animation
        //    me impact dekh payenge
      })
      .to("#content", {
        top: "-100%",
        duration: 2,
      });
  };
  timeline1();
  
  var timeline2 = () => {
    var tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#second",
  
        scrub: 3,
        start: "top top",
        end: "bottom -150%",
        pin: true,
        scroller: "body",
      },
    });
  
    tl1
      .to(".innercircle", {
        top: 50 + "%",
        ease: Power0.easeNone,
        stagger: 0.1,
        duration: 5,
      })
      .to(".innercircle", {
        left: "50%",
        duration: 10,
        ease: Power0.easeNone,
      })
      .to(".innercircle:nth-child(2)", {
        scale: 10,
        duration: 10,
        ease: Power0.easeNone,
      })
      .to(".innercircle:nth-child(2)", {
        background: "linear-gradient(to right,#d5a7b4,#B4AAD5)",
        ease: Power0.easeNone,
      })
      .to("#one1",{
         top:"-100%",
         duration:5,
      })
      .to("#one1",{
        opacity:0,
    })
      .to("#two2",{
        display:"initial",
        top:"0%",
        duration:5,
      })
      .to("#stop h2", {
        left: -200 + "%",
        ease: Power0.easeNone,
        duration: 20,
      })
      .to("#two2",{
         top:"-100%",
         duration:5,
      })
      .to("#two2",{
        opacity:0,
     })
      .to("#three3",{
        display:"initial",
        top:"0%",
        duration:5,
     })
      .to(
        "#sbtm p:nth-child(1)",
        {
          opacity: 0,
          ease: Power0.easeNone,
          duration: 2,
        },
        "animation3"
      )
      .to(
        "#sbtm p:nth-child(2)",
        {
          opacity: 1,
          duration: 2,
          delay: 2,
          ease: Power0.easeNone,
        },
        "animation3"
      )
      .to("#line1 .lines", {
        top: "0%",
        duration: 5,
        ease: Power0.easeNone,
        stagger: 0.5,
      })
      .to(
        "#line2",
        {
          position: "absolute",
          zIndex: "9999",
          bottom: "35%",
          duration: 13,
        },
        "animation4"
      )
      .to(
        "#line3",
        {
          position: "absolute",
          zIndex: "99999",
          bottom: "16%",
          duration: 13,
        },
        "animation4"
      )
      .to(
        "#line2",
        {
          left: "-10%",
          duration: 13,
        },
        "animation5"
      )
  
      .to(
        "#line3",
        {
          left: "-10%",
          duration: 13,
        },
        "animation5"
      )
      .to("#line3", {
        left: "-15%",
        duration: 13,
      });
  };
  timeline2();
  