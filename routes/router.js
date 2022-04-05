const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
router.use(express.static('public'));

const hotCoffeeRoute = require('./api/hotCoffeeRoute');
const icedCoffeeRoute = require('./api/icedCoffeeRoute');

router.use('/hotCoffee', hotCoffeeRoute);
router.use('/icedCoffee', icedCoffeeRoute);

router.get('/', (req, res) => {
    const url = 'https://api.sampleapis.com/coffee/hot';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/home', {
                title: 'Coffee Time',
                name: 'Come get ya coffee!',
                data
            });
        })
        .catch(error => {
            console.log('Error', error)
        });
});

router.get('/', (req, res) => {
    const url = 'https://api.sampleapis.com/coffee/hot';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/hotCoffee', {
                title: 'Coffee, but hot',
                name: 'Hot Joe',
                data
            });
        })
        .catch(error => {
            console.log('Error', error)
        });
});

router.get('/', (req, res) => {
    const url = 'https://api.sampleapis.com/coffee/iced';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/icedCoffee', {
                title: 'Chilled coffee',
                name: 'Cold Joe',
                data
            });
        })
        .catch(error => {
            console.log('Error', error)
        });
});

router.get('*', (req, res) => {
    if(req.url == '/favico/ico') {
        res.end();
    } else {
        res.render('pages/errorPage', {
            title: 404,
            name: 404,
        })
    }
})

module.exports = router;