function jumpTo(id){
  var el = document.getElementById(id);
  if(!el) return;
  el.scrollIntoView({behavior:'smooth', block:'center'});
  el.classList.remove('jump-highlight');
  void el.offsetWidth; // force reflow so the animation can restart
  el.classList.add('jump-highlight');
}
function jumpToState(id){ jumpTo(id); }
function jumpFromSelect(selectEl){
  if(selectEl.value) jumpTo(selectEl.value);
}

function printRecipe(id){
  var card = document.getElementById(id);
  if(!card) return;
  document.body.classList.add('printing-single');
  card.classList.add('print-target');

  var marked = [];
  var el = card.parentElement;
  while(el && el !== document.body){
    el.classList.add('print-ancestor');
    marked.push(el);
    el = el.parentElement;
  }

  function cleanup(){
    document.body.classList.remove('printing-single');
    card.classList.remove('print-target');
    marked.forEach(function(m){ m.classList.remove('print-ancestor'); });
    window.removeEventListener('afterprint', cleanup);
  }
  window.addEventListener('afterprint', cleanup);
  window.print();
  setTimeout(cleanup, 4000);
}

document.addEventListener('DOMContentLoaded', function(){
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
});
