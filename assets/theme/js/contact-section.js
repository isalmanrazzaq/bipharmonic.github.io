
document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{
 const t=b.textContent;
 try{await navigator.clipboard.writeText(b.dataset.copy)}catch(e){const i=document.createElement('input');i.value=b.dataset.copy;document.body.appendChild(i);i.select();try{document.execCommand('copy')}catch(_){}i.remove()}
 b.textContent='Copied';setTimeout(()=>b.textContent=t,1500);
}));
