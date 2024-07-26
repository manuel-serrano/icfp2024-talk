/*=====================================================================*/
/*    serrano/diffusion/talk/icfp21/icfp21-client.js                   */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri Jul 16 15:27:10 2021                          */
/*    Last change :  Wed Aug 18 17:28:12 2021 (serrano)                */
/*    Copyright   :  2021 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    ICFP21 client slide code                                         */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    services ...                                                     */
/*---------------------------------------------------------------------*/
let speakSVC = undefined;
let srtInitSVC = undefined;
let logSVG = undefined;

let mode = "noauto";
let silent = false;
let omode;
let osilent;
let syncnow;

/*---------------------------------------------------------------------*/
/*    speechInit ...                                                   */
/*---------------------------------------------------------------------*/
function speechInit(i, s, l) {
   srtInitSVC = i;
   speakSVC = s;
   logSVC = l;
}
   
/*---------------------------------------------------------------------*/
/*    play ...                                                         */
/*---------------------------------------------------------------------*/
function play(animation) {
   const slide = impress.current();
   slide.animation = animation;
   
   console.log("play mode=", mode, "silent=", silent, " animation=", animation);
   if (mode !== "noauto") {
      function loop(i) {
	 if (i < animation.length) {
	    if (animation[i].disable) {
	       loop(i + 1);
	    } else {
	       setTimeout(() => execute(slide, animation[i], () => loop(i +1)), 
	       	  animation[i].time ?? 0);
	    }
	 }
      }
      loop(0, 0);
   }
}

/*---------------------------------------------------------------------*/
/*    execute ...                                                      */
/*---------------------------------------------------------------------*/
function execute(slide, action, k) { 
   console.log(slide.id, "action=" + action.action, action.time, slide === impress.current());
   if (slide === impress.current()) {
      switch (action.action) {
      	 case "srtInit": 
	    srtInitSVC()
	       .post(k, { anim: false });
	    return;
	    
      	 case "speak":
	    if (!silent) {
	       speakSVC(action.text, action.file, true, action.voice)
		  .post(k, { anim: false });
	    }
	    return;
	    
      	 case "speakAsync":
	    if (!silent) {
	       speakSVC(action.text, action.file, false, action.voice)
		  .post( d => { syncnow = (Date.now() + d); k() }, { anim: false });
	    }
	    return;
	    
	 case "speakSync":
	    if (!silent) {
	       const delay = syncnow - Date.now();
	       console.log( "sync delay=", delay, syncnow, Date.now() );
	       syncnow = 0;
	       if (delay > 0) {
	       	  setTimeout(k, delay);
	       } else {
		  k();
	       }
	    }
	    return;
	    
      	 case "next":
	    if (mode === "full") {
	       impress.next();
	       k();
	    } else {
	       mode = omode;
	       silent = osilent;
	    }
	    return;
	    
      	 case "step":
	    impress.step();
	    k();
	    return;
	    
	 default:
	    alert(`Unknown action ${action.action}`);
	    return;
      }
   }
}

/*---------------------------------------------------------------------*/
/*    playSlide ...                                                    */
/*---------------------------------------------------------------------*/
function playSlide(animation) {
   omode = mode;
   osilent = silent;

   
   play(animation);
}

/*---------------------------------------------------------------------*/
/*    global binding                                                   */
/*---------------------------------------------------------------------*/
window.onload = function() {
   document.body.addEventListener("keypress", e => {
   	 switch (e.key) {
      	    case "1": 
	       mode = "noauto"; silent = false; break;
      	    case "2":
 	       mode = "slide"; silent = false; break;
      	    case "3": 
	       mode = "full"; silent = false; break;
      	    case "4": 
	       mode = "slide"; silent = true; break;
      	    case "5":
 	       mode = "slide"; silent = false;
	       playSlide(impress.current().animation); break;
      	    case "6": 
	       mode = "full"; silent = false;
	       play(impress.current().animation); break;
   	 }

	 console.log("1: noauto, 2: slide, 3: full, 4: slide-mute, 5: slide-anim, 6: play-from");
   	 console.log(`play mode set to "${mode}"`);
	 if (mode === "full") {
	    logSVC(`play mode set to "${mode}, press [space] to start..."`).post();
	 } else {
	    logSVC(`play mode set to "${mode}"`).post();
	 }
      });

   console.log(`play mode set to "${mode}"`);
}
