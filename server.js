import express from 'express';
import path from 'path';

const app = new express();
const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/orgs', (req, res) => {
	res.sendFile(path.join(__dirname+'/org.html'));
});

router.get('/parties', (req, res) => {
	res.sendFile(path.join(__dirname+'/party.html'));
});

router.get('/events', (req, res) => {
	res.sendFile(path.join(__dirname+'/events.html'));
});

router.get('/restaurants', (req, res) => {
	res.sendFile(path.join(__dirname+'/restaurant.html'));
});

app.use('/', router);
app.listen(3000);
console.log('Running on port 3000');
