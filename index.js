let nBalls = Math.max(3,Math.floor(window.innerWidth/180)); //enough balls to fill the width...or at least 3

for (var i=0; i<nBalls; i++) {
    let b = document.createElementNS("http://www.w3.org/2000/svg", "g"),
        g = document.createElementNS("http://www.w3.org/2000/svg", "g"),
        w = document.createElementNS("http://www.w3.org/2000/svg", "use"),
        c = document.createElementNS("http://www.w3.org/2000/svg", "circle"),        
        s = document.createElementNS("http://www.w3.org/2000/svg", "use")
    
    g.appendChild(c);
    g.appendChild(w);  
    g.appendChild(s);
    b.appendChild(g);
    document.getElementById('svg').appendChild(b);
  
    gsap.set(b, {x:i*180, attr:{class:'ball'+i}});
    gsap.set(g, {attr:{class:'b'+i}});
    gsap.set(c, {attr:{fill:'hsl('+(i/nBalls*360)+',100%,50%)', cx:67, cy:-40, r:33.5}});
    gsap.set(w, {rotation:180, y:-100, transformOrigin:'67px 61px', attr:{href:'#ball', class:'b'+i+'_wood'}});
    gsap.set(s, {attr:{href:'#shading'}});

  
    gsap.timeline({repeat:-1, defaults:{ease:'none'}, onRepeat:move, onRepeatParams:['.ball'+i]})
      .fromTo('.color', {y:120},{y:-80, scaleY:1.8, duration:0.6, repeat:6, ease:'sine.inOut'}, 0)
      .fromTo('.b'+i, {x:-18, y:300},{y:510, duration:0.8}, 0)
      .to('.b'+i, {motionPath:[{x:25, y:542}, {x:73, y:510}], duration:0.5}, 0.8)
      .to('.b'+i+'_wood', {rotation:0, duration:0.5, yoyo:true, repeat:1, repeatDelay:1.5, ease:'sine'}, 0.8)
      .to('.b'+i, {y:130, duration:1.6}, 1.3)
      .to('.b'+i, {motionPath:[{x:112, y:99}, {x:162, y:130}], duration:0.5}, 2.9)
      .to('.b'+i, {y:298, duration:0.8}, 3.4)
      .progress(gsap.utils.random(0.2,0.8))

}

function move(b){ 
  if (gsap.getProperty(b,'x')<window.innerWidth-180) gsap.set(b,{x:'+=180'});
  else gsap.set(b,{x:-180});
}

// gsap.set('.b1_color', {rotation:180, y:-100, transformOrigin:'67px 61px'})



/* Alt. 1 - follow an SVG path */
// gsap.timeline({repeat:-1, defaults:{duration:7, ease:'none'}})
//     .from('.b1', {motionPath: {path:'.pathLine', align:'.pathLine', alignOrigin: [0, 0], offsetX:-66, offsetY:-65 }}, 0)
//     .fromTo('.color', {y:120},{y:-60, duration:0.58, repeat:11}, 0)
//     .to('.b1_color', {rotation:180, duration:0.25}, 0)
//     .to('.b1_color', {rotation:0, duration:0.5, yoyo:true, repeat:2, repeatDelay:1.25}, 1.45)


/* Alt. 1.b (Failed because I couldn't get perfect alignment of separate color + shade while color auto-rotates) */

// gsap.timeline({repeat:-1, defaults:{duration:7, ease:'none'}})
//     .from('.b1_color', {motionPath: {path:'.pathLine', align:'.pathLine', autoRotate: true, alignOrigin: [0.4, 0.49] }}, 0)
//     .from('.b1_shade', {motionPath: {path:'.pathLine', align:'.pathLine', alignOrigin: [0, 0], offsetX:-66, offsetY:-65 }}, 0)
//     .fromTo('.color', {x:120},{x:-60, duration:1, repeat:6}, 0)

