(function(){
  const addBtn = document.getElementById('addWidgetBtn');
  const dialog = document.getElementById('addWidgetDialog');
  const cancel = document.getElementById('cancelAdd');
  const widgets = document.getElementById('widgets');
  const template = document.getElementById('widget-template');

  function showDialog(){dialog.classList.remove('hidden')}
  function hideDialog(){dialog.classList.add('hidden')}

  addBtn.addEventListener('click', showDialog);
  cancel.addEventListener('click', hideDialog);

  document.querySelectorAll('.widget-option').forEach(btn=>{
    btn.addEventListener('click', function(){
      const type = this.dataset.type;
      addWidget(type);
      hideDialog();
    })
  });

  function addWidget(type){
    const node = template.content.cloneNode(true);
    const widget = node.querySelector('.widget');
    const title = node.querySelector('.widget-title');
    const body = node.querySelector('.widget-body');
    const remove = node.querySelector('.widget-remove');

    if(type==='clock'){
      title.textContent='Clock';
      const timeEl = document.createElement('div');
      timeEl.style.fontSize='20px';
      timeEl.style.fontWeight='600';
      function tick(){
        const now = new Date();
        timeEl.textContent = now.toLocaleTimeString();
      }
      tick();
      setInterval(tick,1000);
      body.appendChild(timeEl);
    } else if(type==='quicklinks'){
      title.textContent='Quick Links';
      const list = document.createElement('div');
      list.innerHTML = '<ul style="padding-left:18px;margin:0"><li><a href="#">Example 1</a></li><li><a href="#">Example 2</a></li></ul>';
      body.appendChild(list);
    } else if(type==='weather'){
      title.textContent='Weather';
      body.textContent='Weather widget (placeholder)';
    }

    remove.addEventListener('click', ()=>widget.remove());
    widgets.appendChild(widget);
  }

})();
