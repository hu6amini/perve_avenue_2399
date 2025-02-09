//Youtube iframe 
function replaceYouTubeFrames(){document.querySelectorAll('iframe[src*="youtube.com/embed/"]').forEach((function(e){var t=e.src.split("/").pop().split("?")[0],a=e.src.match(/[?&]start=([^&]*)/),l=a?a[1]:null;fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+t+"&key=AIzaSyCFhniclB06-OF1kOeL6t0g-KF7_qYVslI").then((e=>e.json())).then((a=>{var r=a.items[0].snippet.title,o=a.items[0].snippet.thumbnails,s=o.maxres?o.maxres.url:o.standard?o.standard.url:o.medium?o.medium.url:"",i=document.createElement("img");i.src=s,i.width="560",i.height="315",i.alt="YouTube Video Thumbnail";var n=document.createElement("span");n.textContent=r;var c=document.createElement("button");c.className="ytp-button",c.setAttribute("aria-label","Play"),c.setAttribute("title","Play"),c.style.width="68px",c.style.height="48px",c.style.background="none",c.style.border="none",c.style.position="absolute",c.style.top="50%",c.style.left="50%",c.style.transform="translate(-50%, -50%)",c.innerHTML='<svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>';var p=document.createElement("div");p.className="res_tmb",p.appendChild(i),p.appendChild(n),p.appendChild(c),p.onclick=function(){var e=document.createElement("iframe");e.width="560",e.height="315",e.src="https://www.youtube.com/embed/"+t+"?autoplay=1",e.title="YouTube video player",e.frameborder="0",e.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",e.allowFullscreen="true",l&&(e.src+="&start="+l),p.parentNode.replaceChild(e,p)},e.parentNode.replaceChild(p,e)})).catch((e=>console.error(e)))}))}replaceYouTubeFrames();
//Pamedia 
const videoPlatforms=["anchor.fm","bitchute.com","dailymotion.com","gfycat.com","drive.google.com","imgur.com","archive.org","sendvid.com","store.steampowered.com","streamable.com","tiktok.com","tumblr.com","vimeo.com","vk.com","youtube.com"];function isVideoIframe(e){if(!e.src)return!1;const a=videoPlatforms.some((a=>e.src.includes(a))),o=e.hasAttribute("allowfullscreen");return a||o}function wrapIframe(e){let a=e.parentElement;if(!(a&&a.classList&&a.classList.contains("pamedia")))if(a&&"DIV"===a.tagName){const e=document.createElement("div");e.className="pamedia",a.replaceWith(e),e.appendChild(a)}else{const a=document.createElement("div");a.className="pamedia",e.replaceWith(a),a.appendChild(e)}}function processIframes(){document.querySelectorAll("iframe").forEach((e=>{isVideoIframe(e)&&!e.closest(".pamedia")&&wrapIframe(e)}))}let lastMutationTime=0;const videoIframeObserver=new MutationObserver((e=>{const a=Date.now();a-lastMutationTime<100||(lastMutationTime=a,e.forEach((e=>{e.addedNodes.forEach((e=>{if("IFRAME"===e.tagName&&isVideoIframe(e))wrapIframe(e);else if(e.querySelectorAll){e.querySelectorAll("iframe").forEach((e=>{isVideoIframe(e)&&!e.closest(".pamedia")&&wrapIframe(e)}))}}))})))}));videoIframeObserver.observe(document.body,{childList:!0,subtree:!0}),processIframes();
