
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locomotive()

function cursor(){

document.querySelector('body').addEventListener('mousemove',(dets)=>{
  gsap.to('#cursor',{
    x:dets.x,
    y:dets.y
  })
})
}

cursor()

function cursorImg(){
  let cursor = document.querySelector('#cursor')
  let box = document.querySelectorAll('.box-container')

  box.forEach((elem)=>{
    elem.addEventListener('mouseenter',()=>{
         cursor.style.display = 'initial'
        
         let img = elem.getAttribute('img-data')
        cursor.style.backgroundImage = `url(${img})`
    })

    elem.addEventListener('mouseleave',()=>{
      cursor.style.display = 'none'
      
      cursor.style.backgroundImage = ""
    })
  
  })

}

cursorImg()

function loader(){
tl = gsap.timeline();

tl.to('#top',{
    y:-750,
    duration:1,
    delay:8,
},"loader")
tl.to('#top > h1',{
    y:50,
    duration:1,
    delay:8,
},"loader")
tl.to('#bottom > h1',{
    y:-50,
    duration:1,
    delay:8,
},"loader")
tl.to('#bottom',{
    y:700,
    duration:1,
    delay:8,
},"loader")
tl.to('#loader',{
    display:"none",
})
}
loader()
function Letter_design(){
  let text=document.querySelectorAll('#page2 > h2')
 function sppliting(){
  text.forEach((elem)=>{
    let update = ""
    let sppliting = elem.textContent.split("")
    sppliting.forEach((char)=>{
      update+=`<span class="char">${char}</span>`
      elem.innerHTML = update
    })
    
  })
 }
 
 sppliting()
}
Letter_design()

function smallGola(){
  const text = document.querySelector('.circle .text h1')
  let charArr = text.textContent.split('')
  let update = ''
  charArr.forEach((char,i)=>{
    update += `<span style="transform:rotate(${i*8.3}deg)">${char}</span>`
    text.innerHTML = update
  })
}
smallGola()

// function menu(){
//   var menuOpen = document.querySelector('#open-menu');
//   var menuClose = document.querySelector('#close-menu');

//   tl = gsap.timeline();

//   tl.from('#menu',{
//     background:"#2F23E8",
//   },"anime1")
//   tl.to('#menu',{
//     right:"0%",
//     duration:0.4
//   },"anime1")
//   tl.from('#menu i',{
//      opacity:0,
//      scale:0,
//   },'anime')
//   tl.from('#menu h1',{
//     color:"#fff",
//     x:10000,
//     stagger:0.2,
//     duration:0.4
//   },'anime')

//   tl.pause()

//   menuOpen.addEventListener('click',()=>{
//   tl.play()
//   })
//   menuClose.addEventListener('click',()=>{
//     tl.reverse()
//     })
// }

// menu()


///animations-items

  gsap.to("#page2 h2 span",{
      color:"#000",
      stagger:1,
      duration:1,
      scrollTrigger: {
        scroller:"#main",
        trigger:"#page2",
        start:'top -2%',
        end:'end -250%',
        scrub:1,
        // markers:true,
        pin:true
    }
   })

   gsap.from('#line',{
    y:-800,
    duration:1.5,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page7",
      // markers:true,
      start:"top 50%",
      end:"top -5%",
      scrub:1
    }
  })
  gsap.to('.Text-Skill h3',{
    filter:"blur(0px)",
    duration:1.2,
    stagger:0.5,
    scrollTrigger:{
      scroller:"#main",
      trigger:".Text-Skill h3",
      // markers:true,
      start:"top 50%",
      end:"top 30%",
      scrub:1.5
    }
  })

  gsap.from('.images-devlopment img',{
    y:100,
    opacity:0,
    duration:0.3,
    stagger:0.2,
    scrollTrigger:{
      // markers:true,
      scroller:"#main",
      trigger:".images-devlopment img",
      start:"top 80%",
      end:"top 60%"
    }
  })

  gsap.from('#page9 h1',{
    y:250,
    rotate:"-20deg",
    x:-10,
    opacity:0,
    stagger:1,
    duration:1,
    scrollTrigger:{
      // markers:true,
      scroller:"#main",
      trigger:"#page9 h1",
      start:"top 70%",
      end:"top 35%",
      scrub:1
    }
  })





