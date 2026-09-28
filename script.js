const form = document.querySelector('form');
const msg_erro = document.querySelector('#erro-msg');

// Credenciais de DEMONSTRAÇÃO: este é um estudo de front-end, sem back-end.
// Num sistema de verdade a senha nunca fica no JavaScript: quem valida o login é o servidor.
const EMAIL_DEMO = 'usuario@exemplo.com';
const SENHA_DEMO = 'senha123';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg_erro.classList.remove('sucesso');

    const email = document.querySelector('#iusu').value.trim();
    const senha = document.querySelector('#isen').value;

    //Validação do formato do email (antes de conferir as credenciais)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg_erro.textContent = 'Por favor, insira um email válido.';
        return;
    }

    //Validação das credenciais de demonstração
    if (email !== EMAIL_DEMO || senha !== SENHA_DEMO) {
        msg_erro.textContent = 'Email ou senha incorretos. Tente novamente.';
        return;
    }

    //Se tudo estiver correto, mostra a confirmação. Não há servidor para receber o formulário,
    //e enviá-lo por GET colocaria a senha na URL.
    msg_erro.classList.add('sucesso');
    msg_erro.textContent = 'Login realizado com sucesso! (demonstração)';
});
