import app from "./app";
require('dotenv');

const PORT = process.env.APP_PORT || 3001;

app.listen(PORT, () => { console.log(`Api rodando na porta ${PORT}`) })