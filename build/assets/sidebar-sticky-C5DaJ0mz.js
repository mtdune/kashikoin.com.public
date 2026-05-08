document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`.js-sticky-sidebar`);if(!e)return;let t=document.createElement(`style`);t.textContent=`
        .js-sticky-sidebar {
            box-sizing: border-box;
            align-self: flex-start;
            will-change: top;
        }
    `,document.head.appendChild(t);let n=!1,r=()=>{e.style.position=``,e.style.top=``},i=()=>{if(n=!1,window.innerWidth<768){r();return}let t=window.innerHeight-e.offsetHeight-24;e.style.position=`sticky`,e.style.top=`${t}px`},a=()=>{n||=(window.requestAnimationFrame(i),!0)};window.addEventListener(`resize`,a,{passive:!0}),window.addEventListener(`orientationchange`,a,{passive:!0}),i()});