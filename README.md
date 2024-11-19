<h1>Trabajo Final - Sistemas Distribuidos</h1>
    <p>Este repositorio contiene las entregas correspondientes al trabajo final del curso.</p>
    <h2>Acceso Rápido</h2>
    <p>Puedes ver la página directamente en GitHub Pages: 
        <a href="https://sabbinat.github.io/IFNews/" target="_blank">Acceder a IFNews</a>
    </p>
    <h2>Tarea 1: Página en Docker</h2>
    <h3>Descripción</h3>
    <p>Se desarrolló un prototipo de página de noticias para IFSul utilizando:</p>
    <ul>
        <li><strong>Lenguaje de programación:</strong> HTML, CSS y JavaScrip</li>
    </ul>
    <p>La página está disponible como una imagen en Docker Hub para su fácil acceso y ejecución.</p>
    <h3>Cómo ejecutar</h3>
   <ol>
        <li>Asegúrate de tener Docker instalado en tu máquina.</li>
        <li>Descarga la imagen desde Docker Hub:  <i>https://hub.docker.com/r/sabbinat/ifnews</i>
            <pre><code>docker pull sabbinat/ifnews</code></pre>
        </li>
        <li>Ejecuta la página:
            <pre><code>docker run -p 8080:8080 sabbinat/ifnews</code></pre>
        </li>
        <li>Accede a la página en tu navegador:
            <pre><code>http://localhost:8080/IFNews/page.html</code></pre>
        </li>
    </ol>
    <h2>Tarea 2: Artículo sobre Computación en la Nube</h2>
    <h3>Descripción</h3>
    <p>Incluye un artículo sobre:</p>
    <ul>
        <li><strong>IaaS (Infraestructura como Servicio):</strong> Conceptos y ejemplos, como AWS.</li>
        <li><strong>PaaS (Plataforma como Servicio):</strong> Conceptos y ejemplos, como Heroku.</li>
        <li><strong>SaaS (Software como Servicio):</strong> Conceptos y ejemplos, como Google Workspace.</li>
    </ul>
    <h2>Autor</h2>
    <p><strong>Natalie Fernández</strong><br>
