/*  Tabellerna innehåller STH (Största tillåtna hastighet) i km/h
    förutom de negativa värdena som är enligt nedan.
    -1 = Ej tillåtet
    -2 = Sth fastställs av operativ arbetsledning (enl. bromsprocenttabell L)
    -3 = Förekommer ej 
*/
const MAX_LENGTH_COLUMNS = [100,200,300,400,500,600,730];
const A17 = {
    0:  [ -1, -1, -1, -1, -1, -1, -1],
    22: [ -2, -2, -2, -1, -1, -1, -1],
    61: [ 70, 70, 70, 70, 70, 70, 70],
    67: [ 80, 80, 80, 70, 70, 70, 70],
    70: [ 80, 80, 80, 80, 80, 70, 70],
    73: [ 80, 80, 80, 80, 80, 80, 70],
    76: [ 80, 80, 80, 80, 80, 80, 80],
    83: [100,100,100,100,100, 80, 80],
    86: [100,100,100,100,100, 90, 80],
    88: [100,100,100,100,100,100, 80],
    91: [100,100,100,100,100,100, 90],
    94: [100,100,100,100,100,100,100],
    100:[110,110,110,100,100,100,100],
    103:[110,110,110,110,110,100,100],
    114:[110,110,110,110,110,110,110],
    122:[120,120,120,110,110, -3, -3],
    125:[120,120,120,120,120, -3, -3],
    130:[130,130,130,130,130, -3, -3],
    150:[200,160,160,160,160, -3, -3],
    sth: function(bromsprocent,length) {
        return specialValues(this[getRowKey(bromsprocent,Object.keys(this))][getColumn(length)]);
    }
};
const A10 = {
    0:  [ -1, -1, -1, -1, -1, -1, -1],
    22: [ -2, -2, -2, -1, -1, -1, -1],
    61: [ 70, 70, 70, 70, 70, 70, 70],
    65: [ 80, 80, 70, 70, 70, 70, 70],
    67: [ 80, 80, 80, 70, 70, 70, 70],
    70: [ 80, 80, 80, 80, 80, 70, 70],
    73: [ 90, 90, 90, 80, 80, 80, 70],
    75: [100,100,100, 80, 80, 80, 80],
    76: [100,100,100,100,100, 80, 80],
    80: [100,100,100,100,100,100, 80],
    83: [100,100,100,100,100,100, 90],
    86: [110,110,110,100,100,100, 90],
    88: [110,110,110,110,110,100,100],
    94: [110,110,110,110,110,110,100],
    98: [110,110,110,110,110,110,110],
    110:[120,120,120,120,120,110,110],
    119:[120,120,120,120,120,120,110],
    122:[120,120,120,120,120, -3, -3],
    130:[130,130,130,130,130, -3, -3],
    150:[200,160,160,160,160, -3, -3],
    sth: function(bromsprocent,length) {
        return specialValues(this[getRowKey(bromsprocent,Object.keys(this))][getColumn(length)]);
    }
};
const B = {
    0:  [ -1, -1, -1, -1, -1, -1, -1],
    22: [ -2, -2, -2, -1, -1, -1, -1],
    61: [ 70, 70, 70, 70, 70, 70, 70],
    65: [ 80, 80, 70, 70, 70, 70, 70],
    67: [ 80, 80, 80, 70, 70, 70, 70],
    70: [ 80, 80, 80, 80, 80, 70, 70],
    73: [ 90, 90, 90, 80, 80, 80, 70],
    75: [100,100,100, 80, 80, 80, 80],
    76: [100,100,100,100,100, 80, 80],
    80: [100,100,100,100,100,100, 80],
    83: [100,100,100,100,100,100, 90],
    86: [110,110,110,100,100,100, 90],
    88: [110,110,110,110,110,100,100],
    94: [110,110,110,110,110,110,100],
    98: [110,110,110,110,110,110,110],
    110:[120,120,120,120,120,110,110],
    119:[120,120,120,120,120,120,110],
    122:[120,120,120,120,120, -3, -3],
    130:[160,160,150,140,140, -3, -3],
    135:[170,160,160,160,140, -3, -3],
    144:[200,160,160,160,160, -3, -3],
    sth: function(bromsprocent,length) {
        return specialValues(this[getRowKey(bromsprocent,Object.keys(this))][getColumn(length)]);
    }
};
const C = {
    0:  [ -1, -1, -1, -1, -1, -1, -1],
    22: [ -2, -2, -2, -1, -1, -1, -1],
    61: [ 70, 70, 70, 70, 70, 70, 70],
    65: [ 80, 80, 70, 70, 70, 70, 70],
    67: [ 80, 80, 80, 70, 70, 70, 70],
    70: [ 80, 80, 80, 80, 80, 70, 70],
    73: [ 90, 90, 90, 80, 80, 80, 70],
    75: [100,100,100, 80, 80, 80, 80],
    76: [100,100,100,100,100, 80, 80],
    80: [100,100,100,100,100,100, 80],
    83: [120,120,120,120,120,100, 90],
    88: [120,120,120,120,120,100,100],
    91: [120,120,120,120,120,110,100],
    95: [120,120,120,120,120,120,110],
    98: [130,120,120,120,120,120,120],
    107:[130,130,130,130,130,120,120],
    122:[150,140,140,140,130, -3, -3],
    129:[160,160,150,140,140, -3, -3],
    135:[170,160,160,160,150, -3, -3],
    138:[170,160,160,160,160, -3, -3],
    144:[200,160,160,160,160, -3, -3],
    sth: function(bromsprocent,length) {
        return specialValues(this[getRowKey(bromsprocent,Object.keys(this))][getColumn(length)]);
    }
};
const CITYBANAN = {
    0:  [ -1, -1, -1, -1, -1, -1, -1],
    80: [ 50, 50, 50, 40, -1, -1, -1],
    82: [ 50, 50, 50, 50, 50, -1, -1],
    85: [ 50, 50, 50, 50, 50, 40, -1],
    88: [ 60, 60, 60, 50, 50, 40, -1],
    90: [ 60, 60, 60, 60, 50, 50, -1],
    91: [ 60, 60, 60, 60, 60, 50, -1],
    92: [ 70, 70, 70, 60, 60, 50, -1],
    94: [ 70, 70, 70, 70, 60, 50, -1],
    95: [ 70, 70, 70, 70, 70, 60, 40],
    98: [ 70, 70, 70, 70, 70, 70, 40],
    101:[110,110,110, 70, 70, 70, 40],
    104:[110,110,110,110, 70, 70, 40],
    105:[110,110,110,110,110, 70, 40],
    110:[120,120,120,120,120, 70, 40],
    112:[120,120,120,120,120,110, 40],
    116:[120,120,120,120,120,110, 50],
    117:[120,120,120,120,120,110,110],
    119:[120,120,120,120,120,120,110],
    122:[120,120,120,120,120, -1, -1],
    130:[160,160,150,140,140, -1, -1],
    135:[170,160,160,160,140, -1, -1],
    144:[200,160,160,160,160, -1, -1],
    sth: function(bromsprocent,length) {
        return specialValues(this[getRowKey(bromsprocent,Object.keys(this))][getColumn(length)]);
    }
};

function specialValues(value) {
    switch (value) {
        case -1:
            return 'Ej tillåtet';
            break;
        case -2:
            return 'Sth fastställs av operativ arbetsledning (bromsprocenttabell L)';
            break;
        case -3:
            return 'Förekommer ej';
            break;
        case undefined:
            return 'Felaktigt värde';
            break;
    }
    return value + ' km/h';
}

function getColumn(length) {
    if (document.getElementById('ep').checked) {
        length = 100;
    }
    for (let i = 0; i < MAX_LENGTH_COLUMNS.length; i++) {
        if (length <= MAX_LENGTH_COLUMNS[i]) {
            return i;
        }
    }
    return -1;
}

function getRowKey(bromsprocent,limits) {
    let row = 0;
    for (let i = 0; i < limits.length-1; i++) {
        if (bromsprocent >= limits[i]) {
            row = limits[i];
        }
    }
    return row;
}

function getSth(broms,length) {
    return {
        a17: A17.sth(broms,length),
        a10: A10.sth(broms,length),
        b: B.sth(broms,length),
        c: C.sth(broms,length),
        city: CITYBANAN.sth(broms,length)
    }
}

function printSth(broms,length) {
    const sth = getSth(broms,length);
    document.getElementById('a17').innerHTML = sth.a17;
    document.getElementById('a10').innerHTML = sth.a10;
    document.getElementById('b').innerHTML = sth.b;
    document.getElementById('c').innerHTML = sth.c;
    document.getElementById('city').innerHTML = sth.city;
}

function validate() {
    let broms = document.getElementById('brake').value;
    let length = document.getElementById('length').value;
    printSth(Number(broms),Number(length));
}

/*  Tabell för konvertering från bromsprocent till retardationstal för ATC2.
    Värdena hämtade från tabell 4.1.6 i SJF 333.60-4, 2017-05-18.
    Bromsprocent sammanfaller med de index-värden som används.
    -1 är utanför tabellen
*/
const retardationstal = [
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,21,22,
    23,23,24,25,25,26,27,27,28,29,
    29,30,31,32,32,33,34,34,35,35,
    36,37,38,38,39,40,40,41,42,42,
    43,44,44,45,46,47,47,48,49,50,
    50,51,51,52,52,53,54,55,55,56,
    57,57,58,59,59,60,61,61,62,63,
    64,64,65,66,66,67,68,68,69,69,
    70,71,72,72,73,74,74,75,76,76,
    77,78,78,79,80,81,81,82,83,83,
    84,84,85,86,87,87,88,89,89,90,
    91,91,92,93,93,94,95,96,96,97,
    98,98,99,100,100,101,101,102,103,104,
    104,105,106,106,107,108,108,109,110,110,
    111,112,113,113,114,115,115,116,116,117,
    118,119,119,120,121,121,122,123,123,124,
    125];

function getRetardation(bromsprocent) {
    let out = retardationstal[bromsprocent];
    if (out == undefined || out == -1) {
        out = '-';
    }
    return out;
}

function getBromsprocent(ret) {
    let out = retardationstal.indexOf(Number(ret));
    if (out == undefined || out == -1) {
        out = '-';
    }
    return out;
}

function convBp(value) {
    document.getElementById('ret').value = getRetardation(value);
}

function convRet(value) {
    document.getElementById('bp').value = getBromsprocent(value);
}