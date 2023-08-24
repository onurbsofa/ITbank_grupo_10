document.getElementById("titulo").addEventListener("click", () => {
    location.reload();  
});


document.getElementById("sobre").addEventListener("click", () => {
    document.getElementById("content").innerHTML = `
        
    <h2>Sobre ITBANK</h2>
        <p>ITBANK es mucho más que un banco tradicional;
        somos una institución financiera innovadora que combina
        la experiencia bancaria tradicional con las ventajas de
        la tecnología de vanguardia. Nuestro enfoque se basa en
        tres pilares fundamentales: Tecnología, Innovación y Servicio al Cliente.</p>
        <p>Nuestros servicios van más allá de lo convencional, brindando a nuestros 
        clientes una experiencia bancaria sin igual. Desde cuentas de ahorro y tarjetas 
        de crédito hasta préstamos para vivienda y servicios de inversión, en itbank te 
        acompañamos en cada paso de tu vida financiera. Nuestros asesores altamente capacitados 
        están listos para brindarte orientación personalizada para ayudarte a tomar decisiones
        informadas sobre tu dinero.</p>
        <p>En ITBank, entendemos la importancia de la tecnología en el mundo actual. Por eso,
         ofrecemos una plataforma bancaria en línea intuitiva y segura que te permite gestionar tus finanzas
          con facilidad desde cualquier lugar. Nuestra aplicación móvil está diseñada pensando en la simplicidad
           y la accesibilidad, para que puedas realizar operaciones bancarias con un par de toques.</p>
           <p>Creemos en devolver a la comunidad que nos ha apoyado. Participamos activamente en proyectos sociales y ambientales,
            contribuyendo a un mundo mejor para las generaciones futuras. Cada vez que eliges ITBank, estás eligiendo un banco que
             se preocupa por más que solo los números.</p>
    `;
});


document.getElementById("contacto").addEventListener("click", () => {
    document.getElementById("content").innerHTML = `
        <h2>Contacto</h2>
        <p>Si tienes preguntas, comentarios o inquietudes, no dudes en ponerte en contacto con nosotros.</p>
        <p> Estamos aquí para ayudarte en lo que necesites.</p>
        <h2>Información de Contacto</h2>
        <p>Correo Electrónico: <a href="mailto:info@itbank.com">info@itbank.com</a></p>
        <p>Teléfono: +123 456 789</p>
        <h2>Horario de Atención</h2>
        <p>Nuestro equipo de atención al cliente está disponible de lunes a viernes, de 9:00 a.m. a 6:00 p.m. </p>
       <p> Si nos contactas fuera de este horario, te responderemos tan pronto como sea posible en el siguiente día hábil.</p>
        <h2>Ubicación</h2>
        <p>Estamos ubicados en Avenida Siemprevida 742.</p>
        <p>¡Esperamos con interés poder asistirte!</p>
    `;
});


document.getElementById("preguntas-frecuentes").addEventListener("click", () => {
    document.getElementById("content").innerHTML = `
        <h2>Preguntas Frecuentes</h2>
        <h2>1.¿Cómo puedo abrir una cuenta bancaria?</h2>
       <p>Puedes visitar nuestra sucursal más cercana o iniciar el proceso en línea a través de nuestro sitio web.</p></br>
        
       <h2>2.¿Qué tipos de cuentas bancarias ofrecen y cuáles son sus características?</h2>
       <p>Tenemos una variedad de cuentas, desde cuentas de ahorro para hacer crecer tu dinero,
        hasta cuentas corrientes para el día a día. Cada una tiene características específicas para satisfacer tus necesidades.</p></br>
        
        <h2>3.¿Cuáles son los requisitos para solicitar un préstamo?</h2>
        <p>Los requisitos dependen del tipo de préstamo que estés buscando.
        En general, evaluamos tus ingresos, historial crediticio y capacidad de
        pago para asegurarnos de encontrar la opción adecuada para ti.</p>
         
    `;
});


document.getElementById("privacidad").addEventListener("click", () => {
    document.getElementById("content").innerHTML = `
        <h2>Política de Privacidad</h2>
        <p>En itbank, valoramos y respetamos tu privacidad.
         Esta política de privacidad describe cómo recopilamos, usamos, protegemos y compartimos tu información personal.
         Al confiar en nosotros con tus datos, queremos asegurarte que los trataremos con el máximo cuidado y responsabilidad.</p>
        <h2>Recopilación de Información:</h2>
        <p>Recopilamos información personal que nos proporcionas directamente al abrir una cuenta, solicitar un producto o servicio,
         o interactuar con nuestros canales digitales. Esto puede incluir tu nombre, dirección, número de teléfono, dirección de correo electrónico, 
         fecha de nacimiento, información financiera y otra información necesaria para brindarte nuestros servicios.</p>
        <h2> Uso de la Información:</h2>
         <p> Utilizamos la información recopilada para administrar tus cuentas, procesar transacciones, brindarte servicios personalizados 
        y mejorar tu experiencia general con itbank. Además, podemos utilizar tu información para fines de marketing y comunicación, 
        siempre brindándote la opción de optar por no recibir estas comunicaciones.</p>
        <h2>Protección de Datos:</h2>
        <p> Tu seguridad es nuestra prioridad. Implementamos medidas técnicas y organizativas para proteger tus datos contra accesos no autorizados, 
        pérdida o robo. Utilizamos tecnologías de cifrado y autenticación para garantizar la confidencialidad de tu información.</p>
    `;
});


document.getElementById("terminos").addEventListener("click", () => {
    document.getElementById("content").innerHTML = `
        <h2>Términos y Condiciones</h2>
        <p>Estos Términos y Condiciones (en adelante "Términos") regulan el uso de los servicios ofrecidos por itbank (en adelante "el Banco") a través de su plataforma en línea y aplicaciones móviles. Al acceder y utilizar los servicios del Banco, aceptas cumplir con estos Términos en su totalidad. Si no estás de acuerdo con estos Términos, te recomendamos que no utilices nuestros servicios.</p>
        <h2>Registro y Uso de la Cuenta</h2>
        <p>Debes proporcionar información precisa y actualizada al registrarte y utilizar nuestros servicios. Tienes la responsabilidad de mantener 
        la seguridad de tu información de cuenta, como contraseñas y códigos de acceso.
        Los servicios del Banco están destinados a usuarios mayores de edad. Si eres menor de edad, debes contar con el consentimiento de tus padres
         o tutores para utilizar nuestros servicios.</p>
         <h2>Privacidad y Seguridad</h2>
         <p>El Banco se compromete a proteger tu privacidad y datos personales de acuerdo con nuestra Política de Privacidad. Al utilizar nuestros 
         servicios, aceptas el procesamiento de tus datos personales de acuerdo con esta política.</p>
         <h2>Uso Adecuado de los Servicios</h2>
         <p>Debes utilizar nuestros servicios de manera legal y ética. Queda prohibido realizar actividades fraudulentas, ilegales o que infrinjan losderechos de terceros.
         No debes intentar acceder a áreas restringidas de nuestros sistemas ni utilizar técnicas de hacking o cualquier otro método para comprometer la seguridad de nuestros servicios.</p>

    `;
});