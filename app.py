from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

OLLAMA_URL = "http://localhost:11434/api/generate"

@app.route("/chat", methods=["POST"])
def chat():

    data = request.json
    mensagem = data["mensagem"]

    prompt = f"""
    Você é um atendente da DevStudio.

    Serviços:
    - criação de sites
    - landing pages
    - chatbots com IA

    Responda de forma profissional e curta.

    Cliente: {mensagem}
    """

    response = requests.post(
        OLLAMA_URL,
        json={
            "model": "gpt-oss:120b-cloud",
            "prompt": prompt,
            "stream": False
        }
    )

    resposta_ia = response.json()["response"]

    return jsonify({
        "resposta": resposta_ia
    })

@app.route("/")
def home():
    return "Servidor Flask funcionando 😄"

if __name__ == "__main__":
    app.run(debug=True)
