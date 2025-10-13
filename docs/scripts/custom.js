// Asegurarse de que el array exista
window.$docsify = window.$docsify || {};
window.$docsify.plugins = window.$docsify.plugins || [];

// Plugin para resaltar código con Highlight.js
window.$docsify.plugins.push(function(hook) {
  hook.doneEach(function() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
  });
});

// Plugin para insertar logo arriba del sidebar
window.$docsify.plugins.push(function(hook) {
  hook.doneEach(function() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar && !sidebar.querySelector('.custom-logo')) {
      var logo = document.createElement('div');
      logo.className = 'custom-logo';
      logo.innerHTML = `
        <a href="#/README">
          <img src="assets/banner.svg" alt="Logo" style="width:150px; margin:15px auto; display:block; cursor:pointer;">
        </a>
      `;
      sidebar.insertBefore(logo, sidebar.firstChild);
    }
  });
});



// Footer personalizado
window.$docsify.plugins.push(function(hook, vm) {
  hook.afterEach(function(html) {
    const footerHTML = `
      <hr class="footer-separator">
      <div class="custom-footer">
        <div>Geotrack Solutions International, SRL ® 2025</div>
        <div>ForceSOS ™</div>
        <div>Versión del documento: 1.11</div>
      </div>
    `;
    return html + footerHTML;
  });
});
 
 

//Modo oscuro
window.$docsify.plugins = [].concat(function (hook, vm) {
  hook.doneEach(function () {
    const nav = document.querySelector('.app-nav');

    if (nav && !document.querySelector('#dark-mode-toggle')) {
      const btn = document.createElement('button');
      btn.id = 'dark-mode-toggle';
      btn.textContent = '🌙';
      btn.style.marginLeft = '10px';
      btn.style.cursor = 'pointer';
      btn.style.border = 'none';
      btn.style.background = 'transparent';
      btn.style.fontSize = '18px';

      btn.onclick = () => {
        document.body.classList.toggle('dark-mode');
        btn.textContent = document.body.classList.contains('dark-mode') ? '🔅' : '🌙';
      };

      nav.appendChild(btn);
    }
  });
}, window.$docsify.plugins || []);
