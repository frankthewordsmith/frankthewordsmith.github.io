(function(){
  const measurementId='G-55SST9M73R';
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};
  window.gtag('js',new Date());
  window.gtag('config',measurementId);
  const tag=document.createElement('script');
  tag.async=true;
  tag.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(measurementId);
  document.head.appendChild(tag);
})();

document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('.menu');if(b){b.addEventListener('click',()=>{const n=document.querySelector('.nav');n.classList.toggle('open');b.setAttribute('aria-expanded',n.classList.contains('open'))})}});
