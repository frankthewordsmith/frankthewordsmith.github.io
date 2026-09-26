(async()=>{
const grid=document.querySelector('#source-grid'), input=document.querySelector('[data-search]');
if(!grid)return;
const d=await fetch('research-data.json').then(r=>r.json());
const sources=d.sources||[];
const params=new URLSearchParams(location.search);
const activeBook=params.get('book')||'book-1';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(q=''){
 const bn=window.FTW_I18N?.isBangla?.()===true;
 const x=q.toLowerCase().trim();
 const rows=sources.filter(s=>(s.book||'book-1')===activeBook).filter(s=>!x||[
  s.title,s.bn_title,s.source_id,s.civilization,s.region,s.original_term,
  s.historical_claim,s.bn_historical_claim,s.context,s.bn_context,
  s.interpretation,s.bn_interpretation,s.notes,s.bn_notes,
  s.evidence_grade,s.publication_status,s.bn_verification_status
 ].join(' ').toLowerCase().includes(x));
 grid.innerHTML=rows.map(s=>'<article class="card"><div><span class="grade grade-'+esc(s.evidence_grade)+'">'+esc(s.evidence_grade)+'</span> <span class="muted small">'+esc(s.date_label||'')+'</span></div><h3><a href="source.html?id='+encodeURIComponent(s.source_id)+'">'+esc(bn&&s.bn_title?s.bn_title:s.title)+'</a></h3><p>'+esc(bn&&s.bn_historical_claim?s.bn_historical_claim:(s.historical_claim||''))+'</p><div class="meta small muted">'+esc(s.civilization||'')+' · '+esc(s.region||'')+'</div></article>').join('')||'<div class="callout"><strong>'+ (bn?'এই বইয়ের জন্য কোনো মিল থাকা রেকর্ড নেই।':'No matching records for this book.') +'</strong><p>'+ (bn?'অন্য বই বেছে নিন বা আরও বিস্তৃত কোনো শব্দ দিয়ে চেষ্টা করুন।':'Choose another book or try a broader search term.') +'</p></div>';
}
render();
window.FTW_I18N?.apply?.(localStorage.getItem('ftw-language')||'en');
input?.addEventListener('input',e=>{render(e.target.value);window.FTW_I18N?.apply?.(localStorage.getItem('ftw-language')||'en');});
window.addEventListener('ftw:language-change',()=>{render(input?.value||'');});
})();