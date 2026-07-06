// CONFIGURACIÓN DE TUS FOTOS REALES EN FORMATO .JPEG
const contenidoEstrellas = [
    { id: 'img1', tipo: 'foto', img: 'fotos/tradicional.jpeg', texto: 'Cada momento a tu lado es una aventura que atesoro profundamente en mi corazón.' },
    { id: 'img2', tipo: 'foto', img: 'fotos/pareja1.jpeg', texto: 'Me encanta cómo somos nosotros cuando estamos juntos. Completamente únicos.' },
    { id: 'img3', tipo: 'foto', img: 'fotos/pareja2.jpeg', texto: 'Tu sonrisa y tu mirada son mi parte favorita de todos los días.' },
    { id: 'img4', tipo: 'foto', img: 'fotos/pareja3.jpeg', texto: 'Gracias por ser mi paz, mi alegría constante y mi apoyo incondicional.' },
    { id: 'jack', tipo: 'foto', img: 'fotos/jack.jpeg', texto: 'Amor, quiero decirte lo orgullosa que me siento de ti. No solo eres el hombre de mi vida, sino que serás el padre más increíble del mundo. No puedo esperar a que nazca nuestro bebé en septiembre y verte con él en brazos. Te amo, futuro gran papá.' },
    { id: 'angela', tipo: 'foto', img: 'fotos/angela.jpeg', texto: 'Hoy me detengo a pensar y me siento la mujer más afortunada del universo por tenerte. Eres mi refugio, mi mejor decisión y la razón de mis suspiros. Mi vida no tendría sentido sin tu amor, eres mi todo poético y real. Te amo infinitamente.' }
];

const frasesAmor = [
    { texto: "Eres mi estrella favorita", visto: false },
    { texto: "Te amo más que ayer", visto: false },
    { texto: "Eres mi sueño hecho realidad", visto: false },
    { texto: "Por mil años más contigo", visto: false },
    { texto: "Mi lugar favorito es tu abrazo", visto: false },
    { texto: "Eres mi sol en días nublados", visto: false },
    { texto: "Te elegiría una y mil veces", visto: false },
    { texto: "Gracias por existir", visto: false },
    { texto: "Nuestro amor es infinito", visto: false },
    { texto: "Juntos somos el mejor equipo", visto: false },
    { texto: "Me haces muy feliz", visto: false },
    { texto: "Eres mi vida entera", visto: false }
];

let estrellasVistas = 0;
const totalEstrellasObjetivo = contenidoEstrellas.length + frasesAmor.length;

function validarLogin() {
    const usuario = document.getElementById('usuario').value.trim().toLowerCase();
    const clave = document.getElementById('contrasena').value.trim();
    
    if (usuario === "amor" && clave === "130725") {
        document.getElementById('pantalla-login').classList.add('oculto');
        document.getElementById('pantalla-galaxia').classList.remove('oculto');
        document.getElementById('musica').play().catch(e => console.log("Audio esperando interacción"));
        generarGalaxia();
    } else {
        document.getElementById('error').innerText = "Datos incorrectos, intenta de nuevo mi amor.";
    }
}

function generarGalaxia() {
    const galaxia = document.getElementById('espacio-galaxia');
    galaxia.innerHTML = ''; // Limpiar por seguridad
    
    // Generar estrellas grandes (Fotos)
    contenidoEstrellas.forEach((item) => {
        item.visto = false; // Resetear estado
        const star = document.createElement('div');
        star.className = 'estrella estrella-especial';
        star.innerHTML = '★⭑';
        star.style.top = (Math.random() * 85 + 5) + '%';
        star.style.left = (Math.random() * 85 + 5) + '%';
        
        star.onclick = () => {
            mostrarContenido(item);
            star.classList.add('apagada');
        };
        galaxia.appendChild(star);
    });

    // Generar estrellas pequeñas (Frases)
    frasesAmor.forEach((item) => {
        const star = document.createElement('div');
        star.className = 'estrella estrella-frase';
        star.innerHTML = '✦';
        star.style.top = (Math.random() * 85 + 5) + '%';
        star.style.left = (Math.random() * 85 + 5) + '%';
        
        star.onclick = () => {
            mostrarFrase(item);
            star.classList.add('apagada');
        };
        galaxia.appendChild(star);
    });
}

function mostrarContenido(item) {
    const cuerpo = document.getElementById('modal-cuerpo');
    cuerpo.innerHTML = `
        <div class="layout-contenido">
            <img src="${item.img}" class="foto-pareja">
            <div class="texto-carta"><p>${item.texto}</p></div>
        </div>
    `;
    document.getElementById('modal-contenido').classList.remove('oculto');
    
    if(!item.visto) {
        item.visto = true;
        estrellasVistas++;
        verificarFinal();
    }
}

function mostrarFrase(item) {
    const cuerpo = document.getElementById('modal-cuerpo');
    cuerpo.innerHTML = `
        <h2 style="color: #ff00ff; font-family: 'Poppins', sans-serif; font-size: 1.6em; margin: 20px 0; text-align: center;">
            "${item.texto}"
        </h2>
    `;
    document.getElementById('modal-contenido').classList.remove('oculto');

    if(!item.visto) {
        item.visto = true;
        estrellasVistas++;
        verificarFinal();
    }
}

function verificarFinal() {
    if (estrellasVistas >= totalEstrellasObjetivo) {
        setTimeout(() => {
            document.getElementById('final-mensaje').classList.remove('oculto');
        }, 1200);
    }
}

function cerrarModal() {
    document.getElementById('modal-contenido').classList.add('oculto');
}
