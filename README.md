# Mensagem do Dia

Aplicação básica com Express e EJS. O servidor consulta uma API usando Axios e
renderiza a mensagem recebida no HTML.

## Como usar

1. Instale as dependências com `npm install`.
2. Inicie o servidor com `npm start`.
3. Acesse <http://localhost:3000>.

Por padrão, o app usa a API de citações do Ron Swanson. Para usar outro endpoint,
defina a variável de ambiente `API_URL` antes de iniciar o servidor. Cada visita
à página faz uma nova requisição `GET` para a API.
