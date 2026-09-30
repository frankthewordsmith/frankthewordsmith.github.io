document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.menu').forEach(b=>{const n=b.closest('.nav');if(!n)return;const setOpen=open=>{n.classList.toggle('open',open);b.setAttribute('aria-expanded',String(open));const bn=document.documentElement.lang==='bn';b.setAttribute('aria-label',open?(bn?'ন্যাভিগেশন বন্ধ করুন':'Close navigation'):(bn?'ন্যাভিগেশন খুলুন':'Open navigation'));};b.addEventListener('click',()=>setOpen(!n.classList.contains('open')));n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));n.addEventListener('keydown',e=>{if(e.key==='Escape'&&n.classList.contains('open')){setOpen(false);b.focus()}});});});

(function(){
  const m=location.pathname.match(/^\/sources\/([^/]+)\\.html$/);
  if(!m)return;
  const id=decodeURIComponent(m[1]);
  const canonical=location.origin+'/source.html?id='+encodeURIComponent(id);
  let link=document.querySelector('link[rel="canonical"]');
  if(!link){link=document.createElement('link');link.rel='canonical';document.head.appendChild(link);}
  link.href=canonical;
})();

(function(){
  const GA_ID='G-55SST9M73R';
  if(window.gtag)return;
  window.dataLayer=window.dataLayer||[];
  window.gtag=function(){window.dataLayer.push(arguments);};
  window.gtag('js',new Date());
  window.gtag('config',GA_ID);
  const s=document.createElement('script');
  s.async=true;
  s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(GA_ID);
  document.head.appendChild(s);
})();
