import express from 'express';
import path from 'path';

const app = new express();
const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/public/index.html'));
});

router.get('/orgs', (req, res) => {
	res.sendFile(path.join(__dirname+'/public/org.html'));
});

router.get('/parties', (req, res) => {
	res.sendFile(path.join(__dirname+'/public/party.html'));
});

router.get('/events', (req, res) => {
	res.sendFile(path.join(__dirname+'/public/events.html'));
});

router.get('/restaurants', (req, res) => {
	res.sendFile(path.join(__dirname+'/public/restaurant.html'));
});

router.get('/createnew', (req, res) => {
	res.sendFile(path.join(__dirname+'/public/create-new-restaurant.html'));
});

app.use('/', router);
app.use(express.static('src'));
app.use(express.static('public'));
app.listen(3000);
console.log('Running on port 3000');
