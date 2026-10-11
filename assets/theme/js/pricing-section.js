(function(){
var $=function(i){return document.getElementById(i)};
if(!$('cout'))return;
var usd=function(n){return '$'+Math.round(n).toLocaleString('en-US')};
function calc(){
 var t=+$('trucks').value,r=Math.max(0,+$('rev').value||0),po=document.querySelector('[name=kind]:checked').value==='po';
 var plans=po?[{n:'Hybrid Model (Power Only)',s:'$49/week/truck + 4% of Weekly Revenue',c:49*t+.04*r*t}]
 :[{n:'Hybrid Model',s:'$49/week/truck + 3% of Weekly Revenue',c:49*t+.03*r*t},{n:'Fixed Model',s:'5% of Weekly Revenue',c:.05*r*t}];
 var min=Math.min.apply(null,plans.map(function(p){return p.c}));
 var h=plans.map(function(p){var b=plans.length>1&&p.c===min;return '<div class="res'+(b?' best':'')+'"><h4>'+p.n+(b?'<i>Lower for you</i>':'')+'</h4><div class="amt">'+usd(p.c)+'<small>per week</small></div><p>'+p.s+'</p></div>'}).join('');
 h+=po?'<p class="cnote">About '+usd(plans[0].c*52)+' a year for '+t+' truck'+(t>1?'s':'')+'.</p>'
 :'<p class="cnote">Hybrid costs less once a truck earns more than $2,450 a week. The lower plan is about '+usd(min*52)+' a year for '+t+' truck'+(t>1?'s':'')+'.</p>';
 $('cout').innerHTML=h;
}
['trucks','rev'].forEach(function(i){$(i).addEventListener('input',calc)});
Array.prototype.forEach.call(document.querySelectorAll('[name=kind]'),function(e){e.addEventListener('change',calc)});
calc();
})();
