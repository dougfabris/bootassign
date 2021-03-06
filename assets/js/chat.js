var counter = 0;
var userName = "";
var typingSpeed = -25;

// All the HTML elements loaded?
document.addEventListener('DOMContentLoaded', function() {

  // Scroll to the top of the page when page refresh
  $("html, body").animate({scrollTop: 0}, 100);

  setTimeout(function() {

    // After some waiting scrolls to chat
    $('body').animate({ scrollTop: $('#p-hero')[0].scrollHeight }, 1200);

    generateLeftMessage(counter);
    Typed.new('#uniq-' + counter, {
      strings: ["Ola, qual o seu nome?"],
      typeSpeed: typingSpeed,
      showCursor: false,
     
          callback: function() {

            // Append Emoji
            $('#uniq-' + counter).append("<i class='em em-flushed'></i>...");

            generateLeftMessage(++counter);
            Typed.new('#uniq-' + counter, {
              strings: ["^500 Eu sou o Zen, ^500 seu robô assistente. ^500 E você? ^500 Como posso te chamar?"],
              typeSpeed: typingSpeed,
              showCursor: false,
              callback: function() {

                // Show input bar and name form to the user
                $('#input-bar').toggle();
                $('#form-name').toggleClass('show-form');
                $('#input-name').focus();
              }
            });
          }
      
    });
  }, 800);
});

$('#form-name').submit(function(event) {
  event.preventDefault();

  // Hide the input bar
  $('#input-bar').toggle();

  var name = $(this).serializeArray()[0].value;
  userName = name;

  generateRightMessage(++counter);
  $('#uniq-' + counter).text("Meu nome é " + name + '.');

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: ["Muito prazer " + name + "!" + "^500 Agora vou te fazer algumas perguntas para irmos montando seu perfil e a sua vocação profissional! OK?"],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      generateLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {
        strings: ["^500 Qual sua idade? ^500"],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          // Show input bar and age form to the user
          $('#input-bar').toggle();
          $('#form-age').toggleClass('show-form');
          $('#input-age').focus() ;

          // Hide name form
          $('#form-name').toggleClass('show-form');
        }
      });
    }
  });
});

$('#form-age').submit(function(event) {
  event.preventDefault();

  // Hide input bar
  $('#input-bar').toggle();

  var age = $(this).serializeArray()[0].value,
      emoji = "",
      message = "";

  if (age < 18) {
    message = "Saudade da minha época de balada!";
    emoji = "<i class='em em-grimacing'></i>";
  } else {
    message = "Ta na hora de começar a ralar, mas calma. Vou te ajudar! ";
    emoji = "<i class='em em-flushed'></i>";
  } 

  generateRightMessage(++counter);
  $('#uniq-' + counter).text("tenho " + age + ' anos.');

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: [message],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      // Append Emoji
      $('#uniq-' + counter).append(emoji);

      generateBreakableLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {
        strings: ["^500 Qual é a materia que você mais gosta? ^500 \n Matematica ^500 \n Portugues ^500 \n Quimica ^500 \n Fisica ^500  \n Biologia."],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          // Show input bar and reason form to the user
          $('#input-bar').toggle();
          $('#form-reason').toggleClass('show-form');
          $('#input-reason').focus();

          // Hide age form
          $('#form-age').toggleClass('show-form');
        }
      });
    }
  });
});

$('#form-reason').submit(function(event) {
  event.preventDefault();

  // Hide input bar and get the input value
  $('#input-bar').toggle();

  var reason = $(this).serializeArray()[0].value,
      upperReason = reason.toString().toUpperCase(),
      message = "",
      emoji = "";

  if (upperReason === "MATEMATICA") {
    message = "OPAA, gosta de contas ein?!! ";
    emoji = "<i class='em em-mortar_board'></i>";
  } else if (upperReason === "PORTUGUES" || upperReason === "PORTUGUÊS") {
    message = "Entao " + userName + " gosta de ler! ";
    emoji = "<i class='em em-flushed'></i>";
  } else if (upperReason === "QUIMICA" || upperReason === "CONFRATERNIZACAO") {
    message = "Confraternização??? Não esque da sua assistente pessoal aqui ta??? ";
    emoji = "<i class='em em-grimacing'></i>";
  } else {
    message = "Isso, vamos celebrar a VIDAA!!!! kkkkkk ";
    emoji = "<i class='em em-smile'></i>";
  }

  generateRightMessage(++counter);
  $('#uniq-' + counter).text(reason + '.');

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: [message],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      // Append Emoji
      $('#uniq-' + counter).append(emoji);

      generateLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {
        strings: ["^500 Qual a data você considera ideal para sua comemoração?"],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          // Show input bar and date form to the user
          $('#input-bar').toggle();
          $('#form-date').toggleClass('show-form');
          $('#input-date').focus();

          // Hide reason form
          $('#form-reason').toggleClass('show-form');
        }
      });
    }
  });
});

$('#form-date').submit(function(event) {
  event.preventDefault();

  // Hide input bar
  $('#input-bar').toggle();

  var date = new Date($(this).serializeArray()[0].value),
      currentDate = new Date(),
      days = Math.round(Math.abs((date.getTime() - currentDate.getTime()) / (24 * 60 * 60 * 1000))),
      month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  generateRightMessage(++counter);
  $('#uniq-' + counter).text("dia " + date.getDay() + ' de ' + month[date.getMonth() + 1] + ' de ' + date.getFullYear() + '.');

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: ["Hmmmm, ^500 temos " + days + " dias até a data da sua festa..."],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      generateLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {
        strings: ["Agora me diga, ^500 quantas pessoas você considera ideal para sua comemoração ser ideal?"],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          // Show input bar and date form to the user
          $('#input-bar').toggle();
          $('#form-amount').toggleClass('show-form');
          $('#input-amount').focus();

          // Hide date form
          $('#form-date').toggleClass('show-form');
        }
      });
    }
  });
});

$('#form-amount').submit(function(event) {
  event.preventDefault();

  // Hide input bar
  $('#input-bar').toggle();

  var amount = $(this).serializeArray()[0].value,
      message = "",
      emoji = "";

  if (amount < 30) {
    message  = "Uma coisa mais reservada né? ^500 Legal....";
  } else if (amount >= 30 && amount <= 50) {
    message = "Hmmmm... ^500 vai ser uma bagunça boa ein??? ";
    emoji = "<i class='em em-stuck_out_tongue'></i>";
  } else if (amount > 50 && amount <= 70) {
    message = "Uauu, ^500 baita festança ein?!?! ";
    emoji = "<i class='em em-fearful'></i>";
  } else {
    message = "É pra parar a cidade?!?! ^500 Kkkkkkk "
    emoji = "<i class='em em-smile'></i>";
  }

  generateRightMessage(++counter);
  $('#uniq-' + counter).text(amount + ' pessoas.');

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: [message],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      // Append Emoji
      $('#uniq-' + counter).append(emoji);

      generateLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {

        strings: ["Uma excelente forma de planejarmos tudo é estabelecer um valor mensal que você possa economizar e ir acumulando. ˆ500 Qual valor você imagina que consiga separar todo mês para sua festa?"],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          // Show input bar and money form to the user
          $('#input-bar').toggle();
          $('#form-money').toggleClass('show-form');
          $('#input-money').focus();

          // Hide amount form
          $('#form-amount').toggleClass('show-form');
        }
      });
    }
  });
});

$('#form-money').submit(function(event) {
  event.preventDefault();

  // Hide input bar
  $('#input-bar').toggle();

  var money = $(this).serializeArray()[0].value;

  generateRightMessage(++counter);
  $('#uniq-' + counter).text('R$' + money);

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: ["Pronto, ^500 já tenho as informações iniciais que preciso. ˆ500 Agora vou precisar de tempo para pensar em algumas sugestões! ^500 Vou te chamar daqui uns dias, ^500 pode ser? ^500 Qual seu email pessoal ou telefone? ^500 (Se quiser, pode me passar os dois...)"],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      // Show input bar and date form to the user
      $('#input-bar').toggle();
      $('#form-email').toggleClass('show-form');
      $('#input-email').focus();

      // Hide money form
      $('#form-money').toggleClass('show-form');
    }
  });
});

$('#form-email').submit(function(event) {
  event.preventDefault();

  // Hide input bar and email form
  $('#form-email').toggleClass('show-form');
  $('#input-bar').toggle();

  var email = $(this).serializeArray()[0].value;

  generateRightMessage(++counter);
  $('#uniq-' + counter).text(email);

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: ["Pronto, ^500 já vou fazer uma pesquisa com suas informações e logo logo entro em contato para começarmos a organizar tudo... ^500 Até logo..."],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      generateLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {
          
        strings: ["Festa e noticia boa a gente conta para os amigos, né? ^500 Conte para eles que você já está organizando sua comemoração!!!, ^500 Compartilhe essa noticia em sua pagina do Facebook clicando no link abaixo."],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          generateBreakableLeftMessage(++counter);
          Typed.new('#uniq-' + counter, {
            strings: ["FUII... \n"],
            typeSpeed: typingSpeed,
            showCursor: false,
            callback: function () {

              // Append Emoji
              $('#uniq-' + counter).append('<a class="chat-link" href="https://www.facebook.com/querocelebrar" target="_blank"><i class="fa fa-facebook-official facebook" aria-hidden="true"></i></a>');

              scrollScreen();

              var messages = $('#terminal').find(".chat-message").get().map(function(children) {
                return children.innerText;
              });

              var result = messages[3]
                + ' ' + messages[6]
                + ' O motivo da celebração é ' + messages[9]
                + ' Estou planejando no  ' + messages[12]
                + ' Por volta de ' + messages[15]
                + ' Planejo gastar ' + messages[18]
                + ' Meu email é ' + messages[20];

              // Send email with all the conversation history to the admin
              $.ajax({
                url: '//formspree.io/sac.querocelebrar@gmail.com',
                method: 'POST',
                data: { mensagem: result },
                dataType: 'json'
              });
            }
          });
        }
      });
    }
  });
});

function scrollScreen() {
  if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
    window.scrollTo(0, $(document).height());
  }else { $("html, body").animate({ scrollTop: $(document).height() }, 1000); }
}

function generateBreakableLeftMessage(counter) {
  var chatRow = document.createElement("div"),
      chatName = document.createElement("div"),
      img = document.createElement("img"),
      chatMessage = document.createElement("div");
  chatRow.className='chat-row chat-row-left';
  chatName.className = 'chat-name';
  img.className = 'chat-name-icon rotate-30';
  img.src = '../assets/imgs/exclamation-mark.svg';
  chatName.appendChild(img);
  chatMessage.className = 'chat-message breakable-string';
  chatMessage.id = "uniq-" + counter;
  chatRow.appendChild(chatName);
  chatRow.appendChild(chatMessage);
  document.getElementById('terminal').appendChild(chatRow);
}

function generateLeftMessage(counter) {
  var chatRow = document.createElement("div"),
      chatName = document.createElement("div"),
      img = document.createElement("img"),
      chatMessage = document.createElement("div");
  chatRow.className='chat-row chat-row-left';
  chatName.className = 'chat-name';
  img.className = 'chat-name-icon rotate-30';
  img.src = '../assets/imgs/exclamation-mark.svg';
  chatName.appendChild(img);
  chatMessage.className = 'chat-message';
  chatMessage.id = "uniq-" + counter;
  chatRow.appendChild(chatName);
  chatRow.appendChild(chatMessage);
  document.getElementById('terminal').appendChild(chatRow);
}

function generateRightMessage(counter) {
  var chatRow = document.createElement("div"),
      chatName = document.createElement("div"),
      span = document.createElement("span"),
      chatMessage = document.createElement("div");
  chatRow.className='chat-row chat-row-right';
  chatName.className = 'chat-name';
  span.className = 'initial';
  span.textContent = 'R';
  chatName.appendChild(span);
  chatMessage.className = 'chat-message';
  chatMessage.id = "uniq-" + counter;
  chatRow.appendChild(chatName);
  chatRow.appendChild(chatMessage);
  document.getElementById('terminal').appendChild(chatRow);
}
