const express = require('express');
const mongoose = require('mongoose');
const boutiqueRoute = require('./routes/boutiqueRoute');

const app = express();

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/boutique', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(' Connexion réussie à MongoDB'))
.catch((error) => {
    console.error(' Connexion échouée à MongoDB :', error.message);
});


app.use('/boutique', boutiqueRoute);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(` Serveur démarré sur le port ${PORT}`);
});
