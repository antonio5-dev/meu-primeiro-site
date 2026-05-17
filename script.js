const chatbotButton = document.getElementById("chatbot-button");
const chatbotContainer = document.getElementById("chatbot-container");
const closeChat = document.getElementById("close-chat");

chatbotButton.addEventListener("click", () => {
    chatbotContainer.style.display = "flex";
});

closeChat.addEventListener("click", () => {
    chatbotContainer.style.display = "none";
});

const sendChat = document.getElementById("send-chat");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chatbot-messages");

sendChat.addEventListener("click", () => {

    const mensagem = chatInput.value;

    if (mensagem === "") {
        return;
    }

    // cria mensagem do usuário
    const novaMensagem = document.createElement("div");

    novaMensagem.textContent = mensagem;

    novaMensagem.style.background = "#216c3b";
    novaMensagem.style.color = "white";
    novaMensagem.style.padding = "10px";
    novaMensagem.style.marginBottom = "10px";
    novaMensagem.style.borderRadius = "10px";
    novaMensagem.style.width = "fit-content";
    novaMensagem.style.marginLeft = "auto";

    chatMessages.appendChild(novaMensagem);

    // limpa input
    chatInput.value = "";

// resposta automática

setTimeout(() => {

    const respostaBot = document.createElement("div");

    respostaBot.textContent =
        "Olá! Obrigado pelo contato 😄 Em breve responderemos você.";

    respostaBot.style.background = "white";
    respostaBot.style.padding = "10px";
    respostaBot.style.marginBottom = "10px";
    respostaBot.style.borderRadius = "10px";
    respostaBot.style.width = "fit-content";

    chatMessages.appendChild(respostaBot);

}, 500);

});