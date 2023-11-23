# Actividad 4.1. Proyecto: API. GitHub Search Users
<p>e-actividad 4.1: Aplicar conocimientos en ejercicio practico de JS.</p>
<br>
<h2> Colaboradores </h2><ul>
<li>Rosimar Barrios  <i>C.I: 30.976.217</i></li>
<li>Cristian Rangel  <i>C.I: 31.898.075</i></li>
<li>Javier Olivar  <i>C.I: 30.737.648</i></li>
<li>José Márquez  <i>C.I: 28.206.881</i></li>
</ul>
<br>

<h2>Introducción</h2>
<p><b>Link del video explicativo:</b>  </p>
<p>Esta aplicación consiste en un buscador de usuarios utilizando la API de GitHub. Donde debemos cumplir con:</p> 
<ul>
	<li>Diseño Responsive</li>
	<li>Cambiar entre tema Claro y Oscuro</li>
	<li>Buscar usuarios de GitHub por su nombre de usuario</li>
	<li>Ver información relevante del usuario basada en su búsqueda</li>
	<li>Establecer esquema de color en función de sus preferencias de computadora</li>
</ul>

<br>
<h2>Tecnologías y Herramientas empleadas </h2>
<p>Nuestra aplicación se compone de <b>HTML</b>, <b>CSS</b> y <b>JS</b></p>
<p>Estas herramientas empleadas son: la API de GitHub, que puedes encontrar aquí: <i>https://api.github.com/</i> ; también se usa Reactjs, el cual es una librería Javascript diseñada para crear interfaces de usuario.</p>
<p>En este punto lo dividiremos en dos partes: la primera con las herramientas empleadas el <b>Frontend</b> de la página web; y una segunda parte con esas herramientas empleadas para el <b>Backend</b> de la página web.</p>


<br>

<h2>Instalación y Arranque del Sistema</h2>
<p>Para iniciar el arranque <i>(teniendo en cuenta que posee la herramienta empleada instala en su escritorio)</i>, ha de realizar lo siguiente:
</p>
<ol><li>Entra a nuestro repositorio llamado <b><i>E-Actividad-FrontEnd-4.1</i></b> al cual tenemos acceso, presionando <i> "Code" </i>  donde nos dirigimos a <i>"Open With GitHub Desktop"</i>, y presionamos <i>"abrir"</i> a la ventana. Se abrirá GitHub de escritorio con el siguiente aviso <i>" Cant find E-Actividad-FrontEnd-4.1"</i>, presionamos <i>"Clone Again"</i> con esto se clonará el repositorio dentro de nuestro computador y así poder trabajar en él.</li>
<li>Abrimos nuestra carpeta del repositorio en Visual Studio Code, si nos aparece una opción que nos pregunta si confiamos en los autores del archivo presionamos <i>Sí</i>.</li></ol>

<h3>Arranque del Servidor</h3>
<ol>
	<li>En vista de que empleamos <i>.gitingnore</i> para ocultar archivos como la carpeta de <b>node_modules</b>, primero ha de instalar <i>npm</i> de manera que se descarguen todos los archivos necesarios para el funcionamiento de la app. Esto lo podrá hacer con <i><b>$ npm i</b></i>.</li>
	<li>En el momento en que se instale correctamente <i>npm</i> podemos iniciar la app con Reactjs con el comando <i><b>$ npm start</b></i> con el cual llamará a <i>react-scripts start</i> y comenzará a correr la aplicación,</li>
	<li> Por último este automáticamente abrirá nuestro navegador, pero si no es así dirigite a él y escribe en la URL <b><i>http://localhost:3000/</i></b>.</li>
</ol>

<h2>FIN</h2>
# Actividad 4.1. Proyecto: API. GitHub Search Users
<p>e-actividad 4.1: Aplicar conocimientos en ejercicio practico de JS.</p>
<br>
<h2> Colaboradores </h2><ul>
<li>Rosimar Barrios  <i>C.I: 30.976.217</i></li>
<li>Cristian Rangel  <i>C.I: 31.898.075</i></li>
<li>Javier Olivar  <i>C.I: 30.737.648</i></li>
<li>José Márquez  <i>C.I: 28.206.881</i></li>
</ul>
<br>

<h2>Introducción</h2>
<p><b>Link del video explicativo:</b>  </p>
<p>Esta aplicación consiste en un buscador de usuarios utilizando la API de GitHub. Donde debemos cumplir con:</p> 
<ul>
	<li>Diseño Responsive</li>
	<li>Cambiar entre tema Claro y Oscuro</li>
	<li>Buscar usuarios de GitHub por su nombre de usuario</li>
	<li>Ver información relevante del usuario basada en su búsqueda</li>
	<li>Establecer esquema de color en función de sus preferencias de computadora</li>
</ul>

<br>
<h2>Tecnologías y Herramientas empleadas </h2>
<p>Nuestra aplicación se compone de <b>HTML</b>, <b>CSS</b> y <b>JS</b></p>
<p>Estas herramientas empleadas son: la API de GitHub, que puedes encontrar aquí: <i>https://api.github.com/</i> ; también se usa Reactjs, el cual es una librería Javascript diseñada para crear interfaces de usuario.</p>
<p>En este punto lo dividiremos en dos partes: la primera con las herramientas empleadas el <b>Frontend</b> de la página web; y una segunda parte con esas herramientas empleadas para el <b>Backend</b> de la página web.</p>


<br>

<h2>Instalación y Arranque del Sistema</h2>
<p>Para iniciar el arranque <i>(teniendo en cuenta que posee la herramienta empleada instala en su escritorio)</i>, ha de realizar lo siguiente:
</p>
<ol><li>Entra a nuestro repositorio llamado <b><i>E-Actividad-FrontEnd-4.1</i></b> al cual tenemos acceso, presionando <i> "Code" </i>  donde nos dirigimos a <i>"Open With GitHub Desktop"</i>, y presionamos <i>"abrir"</i> a la ventana. Se abrirá GitHub de escritorio con el siguiente aviso <i>" Cant find E-Actividad-FrontEnd-4.1"</i>, presionamos <i>"Clone Again"</i> con esto se clonará el repositorio dentro de nuestro computador y así poder trabajar en él.</li>
<li>Abrimos nuestra carpeta del repositorio en Visual Studio Code, si nos aparece una opción que nos pregunta si confiamos en los autores del archivo presionamos <i>Sí</i>.</li></ol>

<h3>Arranque del Servidor</h3>
<ol>
	<li>En vista de que empleamos <i>.gitingnore</i> para ocultar archivos como la carpeta de <b>node_modules</b>, primero ha de instalar <i>npm</i> de manera que se descarguen todos los archivos necesarios para el funcionamiento de la app. Esto lo podrá hacer con <i><b>$ npm i</b></i>.</li>
	<li>En el momento en que se instale correctamente <i>npm</i> podemos iniciar la app con Reactjs con el comando <i><b>$ npm start</b></i> con el cual llamará a <i>react-scripts start</i> y comenzará a correr la aplicación,</li>
	<li> Por último este automáticamente abrirá nuestro navegador, pero si no es así dirigite a él y escribe en la URL <b><i>http://localhost:3000/</i></b>.</li>
</ol>

<h2>FIN</h2>
