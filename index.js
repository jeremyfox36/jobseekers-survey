const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000
const { Pool } = require("pg");

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({extended:true}));//support parsing of application/x-www-form-urlencoded post data 

app.get('/api/respondents', (req, res) => {
    const respondents = [{"id":1,"first_name":"Marshall","last_name":"Schimoni","email":"mschimoni0@blogs.com","gender":"Male","ethnicity":"Yaqui","cycled_in_last_7_days":true,"walked_in_last_7_days":true},
    {"id":2,"first_name":"Tom","last_name":"Wantling","email":"twantling1@simplemachines.org","gender":"Male","ethnicity":"Yuman","cycled_in_last_7_days":true,"walked_in_last_7_days":false},
    {"id":3,"first_name":"Madalena","last_name":"Kennea","email":"mkennea2@disqus.com","gender":"Female","ethnicity":"Chinese","cycled_in_last_7_days":false,"walked_in_last_7_days":true},
    {"id":4,"first_name":"Leslie","last_name":"Potes","email":"lpotes3@blogger.com","gender":"Female","ethnicity":"Kiowa","cycled_in_last_7_days":true,"walked_in_last_7_days":true},
    {"id":5,"first_name":"Aluino","last_name":"Franey","email":"afraney4@omniture.com","gender":"Male","ethnicity":"Cree","cycled_in_last_7_days":false,"walked_in_last_7_days":true},
    {"id":6,"first_name":"Sascha","last_name":"Yushin","email":"syushin5@xrea.com","gender":"Male","ethnicity":"Latin American Indian","cycled_in_last_7_days":true,"walked_in_last_7_days":false},
    {"id":7,"first_name":"Granthem","last_name":"O'Suaird","email":"gosuaird6@sciencedaily.com","gender":"Male","ethnicity":"Eskimo","cycled_in_last_7_days":false,"walked_in_last_7_days":false},
    {"id":8,"first_name":"Freda","last_name":"Ivashin","email":"fivashin7@ow.ly","gender":"Female","ethnicity":"Puerto Rican","cycled_in_last_7_days":true,"walked_in_last_7_days":false},
    {"id":9,"first_name":"Ignace","last_name":"Nottingham","email":"inottingham8@so-net.ne.jp","gender":"Male","ethnicity":"Mexican","cycled_in_last_7_days":false,"walked_in_last_7_days":true},
    {"id":10,"first_name":"Yoko","last_name":"Cicconetti","email":"ycicconetti9@woothemes.com","gender":"Female","ethnicity":"Ecuadorian","cycled_in_last_7_days":true,"walked_in_last_7_days":true},
    {"id":11,"first_name":"Freeland","last_name":"Balle","email":"fballea@free.fr","gender":"Male","ethnicity":"Panamanian","cycled_in_last_7_days":false,"walked_in_last_7_days":true},
    {"id":12,"first_name":"Herman","last_name":"Bratch","email":"hbratchb@shutterfly.com","gender":"Male","ethnicity":"American Indian and Alaska Native (AIAN)","cycled_in_last_7_days":true,"walked_in_last_7_days":false},
    {"id":13,"first_name":"Andreana","last_name":"Gladstone","email":"agladstonec@weather.com","gender":"Female","ethnicity":"Navajo","cycled_in_last_7_days":false,"walked_in_last_7_days":false},
    {"id":14,"first_name":"Fitz","last_name":"Elkins","email":"felkinsd@ox.ac.uk","gender":"Male","ethnicity":"Lumbee","cycled_in_last_7_days":false,"walked_in_last_7_days":false},
    {"id":15,"first_name":"Wren","last_name":"Czaja","email":"wczajae@latimes.com","gender":"Female","ethnicity":"Pueblo","cycled_in_last_7_days":true,"walked_in_last_7_days":true},
    {"id":16,"first_name":"Nelson","last_name":"Guidera","email":"nguideraf@t-online.de","gender":"Male","ethnicity":"Yaqui","cycled_in_last_7_days":false,"walked_in_last_7_days":true},
    {"id":17,"first_name":"Aloysius","last_name":"Ikins","email":"aikinsg@arstechnica.com","gender":"Male","ethnicity":"Ute","cycled_in_last_7_days":true,"walked_in_last_7_days":true},
    {"id":18,"first_name":"Cher","last_name":"Megroff","email":"cmegroffh@craigslist.org","gender":"Female","ethnicity":"Korean","cycled_in_last_7_days":false,"walked_in_last_7_days":false},
    {"id":19,"first_name":"Berri","last_name":"Shackleford","email":"bshacklefordi@apache.org","gender":"Female","ethnicity":"Osage","cycled_in_last_7_days":false,"walked_in_last_7_days":false},
    {"id":20,"first_name":"Kristofer","last_name":"Habbert","email":"khabbertj@reuters.com","gender":"Male","ethnicity":"Sri Lankan","cycled_in_last_7_days":true,"walked_in_last_7_days":true}]

    res.json(respondents);
    console.log(`Returned ${respondents.length} respondents`)

});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build.index.html'));
});

app.listen(port);

console.log(`App listening on port ${port}`);