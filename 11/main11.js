var _0x47742f = _0x5923;
(function(_0x404d0c, _0x17d785) {
    var _0x51ef7d = _0x5923
      , _0x2419cd = _0x404d0c();
    while (!![]) {
        try {
            var _0x179b85 = -parseInt(_0x51ef7d(0x1ae)) / 0x1 * (parseInt(_0x51ef7d(0x1ca)) / 0x2) + -parseInt(_0x51ef7d(0x192)) / 0x3 * (parseInt(_0x51ef7d(0x17c)) / 0x4) + -parseInt(_0x51ef7d(0x1b2)) / 0x5 + parseInt(_0x51ef7d(0x1a1)) / 0x6 + -parseInt(_0x51ef7d(0x1bd)) / 0x7 * (-parseInt(_0x51ef7d(0x17d)) / 0x8) + parseInt(_0x51ef7d(0x1c6)) / 0x9 * (-parseInt(_0x51ef7d(0x1c1)) / 0xa) + parseInt(_0x51ef7d(0x18a)) / 0xb;
            if (_0x179b85 === _0x17d785)
                break;
            else
                _0x2419cd['push'](_0x2419cd['shift']());
        } catch (_0x18297d) {
            _0x2419cd['push'](_0x2419cd['shift']());
        }
    }
}(_0x907f, 0x40c89));
var quantStorage = _0x47742f(0x197), resultStorage = _0x47742f(0x1d3), aliasStorage = _0x47742f(0x1b8), pricem = 0x14, nPartidos = 0xa, quantity = localStorage[_0x47742f(0x18e)](quantStorage), name = localStorage[_0x47742f(0x18e)](aliasStorage), combinations = ![], aux, id = 0x0, touchIcon = !![], res = Array(nPartidos)[_0x47742f(0x1b9)]('_');
function start() {
    var _0x53cec7 = _0x47742f;
    recovername();
    if (localStorage[_0x53cec7(0x18e)](_0x53cec7(0x196))) {}
    for (var _0x149853 = 0x0; _0x149853 < suspIndex[_0x53cec7(0x1c5)]; _0x149853++) {
        if (suspIndex[_0x149853] <= res['length'])
            res[suspIndex[_0x149853]] = 'X';
    }
    var _0x4f26b8 = document['getElementById'](_0x53cec7(0x193))
      , _0x17b6a2 = document[_0x53cec7(0x19a)](_0x53cec7(0x1be));
    _0x17b6a2[_0x53cec7(0x1ad)] = res[_0x53cec7(0x18b)]('\u00a0\u00a0');
    if (quantity)
        document[_0x53cec7(0x1c4)](_0x53cec7(0x1d9))[_0x53cec7(0x1b5)] = quantity;
    var _0x15a056 = localStorage[_0x53cec7(0x18e)](resultStorage);
    if (_0x15a056) {
        _0x15a056 = _0x15a056[_0x53cec7(0x17b)]('*');
        for (var _0x5ba545 = 0x0; _0x5ba545 < quantity; _0x5ba545++) {
            if (_0x15a056[_0x5ba545] && _0x15a056[_0x5ba545] != undefined) {
                var _0x2e2ef7 = _0x4f26b8[_0x53cec7(0x198)](_0x5ba545);
                if (_0x15a056[_0x5ba545][_0x53cec7(0x17b)]('\u00a0\u00a0')[0x0][0x0] != 'L' && _0x15a056[_0x5ba545][_0x53cec7(0x17b)]('\u00a0\u00a0')[0x0][0x0] != 'E' && _0x15a056[_0x5ba545][_0x53cec7(0x17b)]('\u00a0\u00a0')[0x0][0x0] != 'V')
                    _0x15a056[_0x5ba545] = _0x15a056[_0x5ba545]['slice'](0x1);
                for (var _0x482d37 = 0x0; _0x482d37 < nPartidos; _0x482d37++) {
                    cell1 = _0x2e2ef7[_0x53cec7(0x1a7)](_0x482d37);
                    if (suspIndex[_0x53cec7(0x185)](_0x482d37))
                        cell1['innerHTML'] += 'X';
                    else
                        cell1[_0x53cec7(0x1ad)] += _0x15a056[_0x5ba545][_0x53cec7(0x17b)]('\u00a0\u00a0')[_0x482d37];
                    cell1[_0x53cec7(0x18d)][_0x53cec7(0x180)] = _0x53cec7(0x184);
                    if (_0x15a056[_0x5ba545][_0x53cec7(0x17b)]('\u00a0\u00a0')[_0x482d37][_0x53cec7(0x1c5)] == 0x2)
                        cell1[_0x53cec7(0x18d)][_0x53cec7(0x1d0)] = _0x53cec7(0x189);
                    if (_0x15a056[_0x5ba545][_0x53cec7(0x17b)]('\u00a0\u00a0')[_0x482d37][_0x53cec7(0x1c5)] == 0x3)
                        cell1[_0x53cec7(0x18d)][_0x53cec7(0x1d0)] = 'x-small';
                }
                var _0x32f9eb = _0x2e2ef7[_0x53cec7(0x1a7)](nPartidos);
                _0x32f9eb['innerHTML'] += _0x15a056[_0x5ba545][_0x53cec7(0x17b)]('\u00a0\u00a0')[nPartidos],
                _0x32f9eb[_0x53cec7(0x18d)][_0x53cec7(0x1d0)] = _0x53cec7(0x189),
                _0x32f9eb[_0x53cec7(0x18d)][_0x53cec7(0x1bc)] = _0x53cec7(0x19c),
                _0x32f9eb[_0x53cec7(0x18d)]['overflowY'] = _0x53cec7(0x19c),
                _0x32f9eb['style']['border'] = _0x53cec7(0x1d7),
                _0x32f9eb[_0x53cec7(0x1ce)] = _0x53cec7(0x1bb),
                _0x32f9eb[_0x53cec7(0x199)](0x50, 0x0);
                if (_0x15a056[_0x5ba545][_0x53cec7(0x17b)]('\u00a0\u00a0')[nPartidos][_0x53cec7(0x1c5)] > 0xf)
                    _0x32f9eb['style'][_0x53cec7(0x1d0)] = _0x53cec7(0x1b0);
                else {
                    if (_0x15a056[_0x5ba545][_0x53cec7(0x17b)]('\u00a0\u00a0')[nPartidos][_0x53cec7(0x1c5)] > 0xb)
                        _0x32f9eb[_0x53cec7(0x18d)][_0x53cec7(0x1d0)] = _0x53cec7(0x1cc);
                }
                var _0x4a8b8a = _0x2e2ef7[_0x53cec7(0x1a7)](nPartidos + 0x1);
                _0x4a8b8a[_0x53cec7(0x1ad)] += '<ion-icon\x20name=\x22close-circle\x22\x20class=\x22deleteIcon\x22></ion-icon>',
                _0x4a8b8a[_0x53cec7(0x18d)][_0x53cec7(0x180)] = _0x53cec7(0x184),
                _0x4a8b8a['id'] = 'x' + _0x5ba545,
                _0x4a8b8a[_0x53cec7(0x1ce)] = 'deleter',
                _0x4a8b8a['addEventListener'](_0x53cec7(0x186), function() {
                    var _0x28cb82 = _0x53cec7;
                    remove(this),
                    this[_0x28cb82(0x19d)](this[_0x28cb82(0x182)](!![]));
                });
            } else
                break;
        }
        id = _0x5ba545,
        document['getElementById'](_0x53cec7(0x1c2))[_0x53cec7(0x18d)][_0x53cec7(0x1b1)] = _0x53cec7(0x1d7),
        document[_0x53cec7(0x19a)](_0x53cec7(0x1c7))[_0x53cec7(0x1ad)] = 'Total:\x20$' + quantity * pricem + '\x0a';
    } else
        document['getElementById'](_0x53cec7(0x1c2))['style']['filter'] = _0x53cec7(0x19e);
}
function updatelista(_0x58da30) {
    var _0x140abb = _0x47742f
      , _0x63fb0 = document['getElementById'](_0x140abb(0x193))
      , _0x3893e6 = _0x63fb0[_0x140abb(0x1ab)]('tr')[_0x140abb(0x1c5)];
    if (_0x58da30 == 0x1) {
        if (aux == undefined)
            aux = 0x0;
        var _0x2be9db = _0x63fb0[_0x140abb(0x198)](_0x3893e6);
        for (var _0x36a8f7 = 0x0; _0x36a8f7 < nPartidos; _0x36a8f7++) {
            cell1 = _0x2be9db[_0x140abb(0x1a7)](_0x36a8f7),
            cell1['innerHTML'] += res[_0x36a8f7],
            cell1[_0x140abb(0x18d)][_0x140abb(0x180)] = '7%';
            if (res[_0x36a8f7][_0x140abb(0x1c5)] == 0x2)
                cell1[_0x140abb(0x18d)][_0x140abb(0x1d0)] = _0x140abb(0x189);
            if (res[_0x36a8f7][_0x140abb(0x1c5)] == 0x3)
                cell1[_0x140abb(0x18d)][_0x140abb(0x1d0)] = _0x140abb(0x1cc);
        }
        if (aux > 0x1) {
            var _0x369540 = _0x2be9db[_0x140abb(0x1a7)](nPartidos);
            _0x369540[_0x140abb(0x1ad)] += name + '\x20(' + aux + ')';
        } else {
            var _0x369540 = _0x2be9db['insertCell'](nPartidos);
            _0x369540[_0x140abb(0x1ad)] += name;
        }
        _0x369540['style'][_0x140abb(0x1d0)] = _0x140abb(0x189),
        _0x369540['style'][_0x140abb(0x1bc)] = _0x140abb(0x19c),
        _0x369540[_0x140abb(0x18d)][_0x140abb(0x1a6)] = _0x140abb(0x19c),
        _0x369540[_0x140abb(0x1ce)] = _0x140abb(0x1bb),
        _0x369540['scrollTo'](0x50, 0x0);
        if (name[_0x140abb(0x1c5)] > 0xf)
            _0x369540[_0x140abb(0x18d)][_0x140abb(0x1d0)] = _0x140abb(0x1b0);
        else {
            if (name[_0x140abb(0x1c5)] > nPartidos)
                _0x369540[_0x140abb(0x18d)]['fontSize'] = _0x140abb(0x1cc);
        }
        var _0x1ea17d = _0x2be9db['insertCell'](nPartidos + 0x1);
        _0x1ea17d[_0x140abb(0x1ad)] += _0x140abb(0x191),
        _0x1ea17d[_0x140abb(0x18d)][_0x140abb(0x180)] = _0x140abb(0x184),
        _0x1ea17d['id'] = 'x' + id,
        _0x1ea17d[_0x140abb(0x1ce)] = _0x140abb(0x195),
        _0x1ea17d[_0x140abb(0x178)](_0x140abb(0x186), function() {
            var _0x314279 = _0x140abb;
            remove(this),
            this[_0x314279(0x19d)](this[_0x314279(0x182)](!![]));
        }),
        id++,
        aux = 0x1;
    } else {
        if (_0x58da30 == 0x2) {
            id = 0x0,
            deleters = _0x63fb0['getElementsByClassName'](_0x140abb(0x195));
            for (var _0x1adcdc = 0x0; _0x1adcdc < _0x3893e6; _0x1adcdc++) {
                deleters[_0x1adcdc]['id'] = 'x' + id,
                id++;
            }
        }
    }
    document[_0x140abb(0x19a)](_0x140abb(0x1c7))[_0x140abb(0x1ad)] = _0x140abb(0x1cd) + quantity * pricem;
}
function selection(_0x272968) {
    var _0xd9a435 = _0x47742f
      , _0x45f3c0 = parseInt(_0x272968['id']['slice'](0x1)) - 0x1;
    if (suspIndex[_0xd9a435(0x185)](_0x45f3c0))
        return;
    var _0x5b8228 = document[_0xd9a435(0x19a)](_0xd9a435(0x1be));
    if (_0x272968['className'] != _0xd9a435(0x1cb))
        !combinations ? (validation(_0x272968),
        res[_0x45f3c0] = _0x272968['id'][_0xd9a435(0x1c0)](0x0, 0x1)) : (res[_0x45f3c0] += _0x272968['id'][_0xd9a435(0x1c0)](0x0, 0x1),
        res[_0x45f3c0] = res[_0x45f3c0][_0xd9a435(0x17b)]('_')['join']('')),
        _0x272968[_0xd9a435(0x1ce)] = _0xd9a435(0x1cb);
    else {
        if (combinations) {
            _0x272968[_0xd9a435(0x1ce)] = _0xd9a435(0x1d2),
            console['log'](res[_0x45f3c0][_0xd9a435(0x1c5)]);
            if (res[_0x45f3c0] != '_' && res[_0x45f3c0][_0xd9a435(0x1c5)] > 0x1)
                res[_0x45f3c0] = res[_0x45f3c0][_0xd9a435(0x17b)](_0x272968['id'][_0xd9a435(0x1c0)](0x0, 0x1))['join']('');
            else
                res[_0x45f3c0] = '_';
        }
    }
    costoactual(),
    _0x5b8228['innerHTML'] = res[_0xd9a435(0x18b)]('\u00a0\u00a0');
    res['join']('\u00a0\u00a0')[_0xd9a435(0x1c5)] > 0x23 ? _0x5b8228['className'] = _0xd9a435(0x1c3) : _0x5b8228[_0xd9a435(0x1ce)] = _0xd9a435(0x1d4);
    touchIcon && (touchIcon = ![],
    document[_0xd9a435(0x19a)]('touchIconDiv')[_0xd9a435(0x18d)][_0xd9a435(0x1c8)] = _0xd9a435(0x1d7));
    if ((!quantity || quantity == 0x0) && !res['includes']('_'))
        document[_0xd9a435(0x19a)]('touchIconDiv2')[_0xd9a435(0x18d)][_0xd9a435(0x1c8)] = _0xd9a435(0x1ba);
    else
        document['getElementById'](_0xd9a435(0x1cf))['style'][_0xd9a435(0x1c8)] = _0xd9a435(0x1d7);
}
function validation(_0x2a7094) {
    var _0x1285ec = _0x47742f
      , _0x2ece0b = parseInt(_0x2a7094['id'][_0x1285ec(0x1c0)](0x1));
    document[_0x1285ec(0x19a)]('L' + _0x2ece0b)[_0x1285ec(0x1ce)] = _0x1285ec(0x1d2),
    document[_0x1285ec(0x19a)]('E' + _0x2ece0b)['className'] = 'opcion',
    document[_0x1285ec(0x19a)]('V' + _0x2ece0b)[_0x1285ec(0x1ce)] = 'opcion';
}
function number() {
    var _0x18b5f3 = _0x47742f;
    quantity = localStorage[_0x18b5f3(0x18e)](quantStorage);
    if (quantity)
        localStorage[_0x18b5f3(0x194)](quantStorage, ++quantity);
    else
        localStorage[_0x18b5f3(0x194)](quantStorage, 0x1),
        quantity = localStorage['getItem'](quantStorage);
    document[_0x18b5f3(0x1c4)](_0x18b5f3(0x1d9))[_0x18b5f3(0x1b5)] = quantity,
    localStorage['setItem'](aliasStorage, name);
    if (quantity == '' || !quantity || quantity == 0x0 || quantity == '0')
        document[_0x18b5f3(0x19a)](_0x18b5f3(0x1a8))['style'][_0x18b5f3(0x1b1)] = _0x18b5f3(0x19e);
    else
        document[_0x18b5f3(0x19a)](_0x18b5f3(0x1c2))[_0x18b5f3(0x18d)][_0x18b5f3(0x1b1)] = _0x18b5f3(0x1d7);
}
function result() {
    var _0x71692a = _0x47742f;
    results = localStorage['getItem'](resultStorage),
    name = document[_0x71692a(0x19a)]('nombre')['value'],
    name = name[_0x71692a(0x17b)]('*')['join']('');
    if (results) {
        if (aux > 0x1)
            localStorage[_0x71692a(0x194)](resultStorage, results + '\x0a' + res[_0x71692a(0x18b)]('\u00a0\u00a0') + '\u00a0\u00a0' + name + '\x20(' + aux + ')' + '*');
        else
            localStorage[_0x71692a(0x194)](resultStorage, results + '\x0a' + res['join']('\u00a0\u00a0') + '\u00a0\u00a0' + name + '*');
    } else {
        if (aux > 0x1)
            localStorage[_0x71692a(0x194)](resultStorage, res[_0x71692a(0x18b)]('\u00a0\u00a0') + '\u00a0\u00a0' + name + '\x20(' + aux + ')' + '*');
        else
            localStorage['setItem'](resultStorage, res['join']('\u00a0\u00a0') + '\u00a0\u00a0' + name + '*');
    }
}
function save() {
    var _0x526027 = _0x47742f;
    if (id < 0x96) {
        document['getElementById']('touchIconDiv2')[_0x526027(0x18d)][_0x526027(0x1c8)] = _0x526027(0x1d7),
        localStorage['setItem'](_0x526027(0x196), !![]),
        name = document[_0x526027(0x19a)](_0x526027(0x1a9))[_0x526027(0x1b4)];
        if (res[_0x526027(0x18b)]('\u00a0\u00a0')[_0x526027(0x185)]('_'))
            alert(_0x526027(0x181));
        else {
            if (!name)
                return alert(_0x526027(0x17a)),
                document[_0x526027(0x19a)](_0x526027(0x1a9))[_0x526027(0x19b)](),
                0x0;
            else {
                if (combinations)
                    calculate();
                else
                    number();
                result(),
                updatelista(0x1),
                clean();
            }
        }
    } else
        alert(_0x526027(0x18f));
}
function clean() {
    var _0xa0d544 = _0x47742f;
    document[_0xa0d544(0x19a)](_0xa0d544(0x1cf))['style']['display'] = _0xa0d544(0x1d7),
    res = Array(nPartidos)[_0xa0d544(0x1b9)]('_');
    for (var _0x2893cc = 0x0; _0x2893cc < suspIndex[_0xa0d544(0x1c5)]; _0x2893cc++) {
        if (suspIndex[_0x2893cc] <= res[_0xa0d544(0x1c5)])
            res[suspIndex[_0x2893cc]] = 'X';
    }
    var _0x2b70ed = document[_0xa0d544(0x19a)](_0xa0d544(0x1be));
    _0x2b70ed[_0xa0d544(0x1ad)] = res[_0xa0d544(0x18b)]('\u00a0\u00a0'),
    spans = document[_0xa0d544(0x1b6)](_0xa0d544(0x1b3));
    for (var _0x4c9121 = 0x0; _0x4c9121 < nPartidos * 0x3; _0x4c9121++)
        spans[_0x4c9121][_0xa0d544(0x1ce)] = _0xa0d544(0x1d2);
    document[_0xa0d544(0x19a)](_0xa0d544(0x17f))['innerHTML'] = _0xa0d544(0x1a0),
    document[_0xa0d544(0x19a)](_0xa0d544(0x1a2))[_0xa0d544(0x1ad)] = _0xa0d544(0x188),
    _0x2b70ed['className'] = 'text-lg';
}
function recovername() {
    var _0x38d0d6 = _0x47742f;
    name = localStorage[_0x38d0d6(0x18e)](aliasStorage);
    if (name != null && name != 'null')
        document[_0x38d0d6(0x19a)](_0x38d0d6(0x1a9))[_0x38d0d6(0x1b4)] = name;
}
function clearname() {
    var _0x1c519f = _0x47742f;
    document[_0x1c519f(0x19a)](_0x1c519f(0x1a9))['value'] = '';
}
function allowcombination() {
    var _0x3b49d0 = _0x47742f;
    !combinations ? (combinations = !![],
    document[_0x3b49d0(0x19a)](_0x3b49d0(0x18c))[_0x3b49d0(0x1ce)] = 'boton\x20allowcomb-active') : (combinations = ![],
    document[_0x3b49d0(0x19a)](_0x3b49d0(0x18c))[_0x3b49d0(0x1ce)] = _0x3b49d0(0x1a4),
    clean());
}
function calculate() {
    var _0x29959b = _0x47742f;
    aux = 0x1;
    for (var _0x315f7d = 0x0; _0x315f7d < nPartidos; _0x315f7d++) {
        aux *= res[_0x315f7d][_0x29959b(0x1c5)];
    }
    quantity = localStorage[_0x29959b(0x18e)](quantStorage);
    quantity ? (localStorage[_0x29959b(0x194)](quantStorage, parseInt(quantity) + aux),
    quantity = localStorage[_0x29959b(0x18e)](quantStorage)) : (localStorage['setItem'](quantStorage, aux),
    quantity = localStorage[_0x29959b(0x18e)](quantStorage));
    document[_0x29959b(0x1c4)]('#botonenviar\x20span')[_0x29959b(0x1b5)] = quantity;
    if (quantity == '' || !quantity || quantity == 0x0 || quantity == '0')
        document[_0x29959b(0x19a)](_0x29959b(0x1a8))['style'][_0x29959b(0x1b1)] = _0x29959b(0x19e);
    else
        document['getElementById']('botonenviar')[_0x29959b(0x18d)][_0x29959b(0x1b1)] = 'none';
    localStorage['setItem'](aliasStorage, name);
}
function _0x907f() {
    var _0xc6c0b3 = ['splice', 'Costo:\x20$', 'none', 'La\x20lista\x20está\x20vacía\x0d\x0aPresiona\x20[AGREGAR]\x20para\x20añadir\x20una\x20quiniela', '#botonenviar\x20span', 'touchIconDiv', 'addEventListener', '\x20Quiniela(s)', 'Debes\x20elegir\x20un\x20nombre', 'split', '20SrmZsL', '24wQXBzd', 'href', 'costo', 'width', 'Debes\x20llenar\x20todos\x20los\x20partidos', 'cloneNode', 'lastIndexOf', '6.3%', 'includes', 'click', 'substring', '0\x20Quiniela(s)', 'small', '4210305ADTwOU', 'join', 'checkcombinaciones', 'style', 'getItem', 'Envía\x20tus\x20quinielas\x20guardadas\x20antes\x20de\x20agregar\x20más', '5213319128966', '<ion-icon\x20name=\x22close-circle\x22\x20class=\x22deleteIcon\x22></ion-icon>', '67698JYFrjG', 'lista', 'setItem', 'deleter', 'tutorial', 'quantity10m', 'insertRow', 'scrollTo', 'getElementById', 'focus', 'hidden', 'replaceWith', 'grayscale(0)', 'https://wa.me/', 'Costo:\x20$0', '2401878fXqdXj', 'numquinielas', '5213317917329', 'boton\x20allowcomb', 'ceil', 'overflowY', 'insertCell', 'imgwsp', 'nombre', 'span', 'getElementsByTagName', 'reload', 'innerHTML', '170633McQrFH', 'deleteRow', 'xx-small', 'filter', '727325KtQMfd', '.quiniela\x20span', 'value', 'textContent', 'querySelectorAll', '%20%20', 'aliasM', 'fill', 'block', 'cellname', 'overflow', '740481PUAplJ', 'text', '5213325365796', 'slice', '12330RmtfcP', 'botonenviar', 'text-sm', 'querySelector', 'length', '1719YgpkHA', 'total', 'display', 'Se\x20borrará\x20todo', '4AJKEbe', 'opcion-active', 'x-small', 'Total:\x20$', 'className', 'touchIconDiv2', 'fontSize', 'getElementsByClassName', 'opcion', 'results10m', 'text-lg'];
    _0x907f = function() {
        return _0xc6c0b3;
    }
    ;
    return _0x907f();
}
function random() {
    var _0x129f6b = _0x47742f;
    clean();
    touchIcon && (touchIcon = ![],
    document[_0x129f6b(0x19a)](_0x129f6b(0x1da))[_0x129f6b(0x18d)][_0x129f6b(0x1c8)] = _0x129f6b(0x1d7));
    if (!quantity || quantity == 0x0)
        document[_0x129f6b(0x19a)](_0x129f6b(0x1cf))[_0x129f6b(0x18d)][_0x129f6b(0x1c8)] = _0x129f6b(0x1ba);
    var _0x35b63b = document[_0x129f6b(0x19a)](_0x129f6b(0x1be))
      , _0x31c1e7 = document[_0x129f6b(0x1d1)]('partido');
    for (var _0xe0f710 = 0x0; _0xe0f710 < nPartidos; _0xe0f710++) {
        if (suspIndex[_0x129f6b(0x185)](_0xe0f710))
            continue;
        var _0x3489d5 = getRandomInt(0x0, 0x2);
        _0x31c1e7[_0xe0f710][_0x129f6b(0x1ab)](_0x129f6b(0x1aa))[_0x3489d5][_0x129f6b(0x1ce)] = 'opcion-active',
        res[_0xe0f710] = ['L', 'E', 'V'][_0x3489d5];
    }
    _0x35b63b[_0x129f6b(0x1ad)] = res['join']('\u00a0\u00a0'),
    costoactual();
}
function getRandomInt(_0x5e2a6d, _0x583860) {
    var _0x4e88e0 = _0x47742f;
    return _0x5e2a6d = Math[_0x4e88e0(0x1a5)](_0x5e2a6d),
    _0x583860 = Math['floor'](_0x583860),
    Math['floor'](Math['random']() * (_0x583860 - _0x5e2a6d + 0x1)) + _0x5e2a6d;
}
function costoactual() {
    var _0x5556d6 = _0x47742f;
    if (!![]) {
        var _0x3624ca = 0x1;
        for (var _0x12aec9 = 0x0; _0x12aec9 < nPartidos; _0x12aec9++) {
            _0x3624ca *= res[_0x12aec9]['length'];
        }
        document[_0x5556d6(0x19a)]('costo')[_0x5556d6(0x1ad)] = _0x5556d6(0x1d6) + _0x3624ca * pricem,
        document[_0x5556d6(0x19a)]('numquinielas')[_0x5556d6(0x1ad)] = _0x3624ca + _0x5556d6(0x179);
    }
}
function _0x5923(_0x2878d3, _0x229976) {
    var _0x907fd2 = _0x907f();
    return _0x5923 = function(_0x5923bf, _0x1b7370) {
        _0x5923bf = _0x5923bf - 0x178;
        var _0x1634c8 = _0x907fd2[_0x5923bf];
        return _0x1634c8;
    }
    ,
    _0x5923(_0x2878d3, _0x229976);
}
function remove(_0x3bfb7a) {
    var _0xd2b9d2 = _0x47742f;
    lista = document[_0xd2b9d2(0x19a)](_0xd2b9d2(0x193)),
    eindex = _0x3bfb7a['id'][_0xd2b9d2(0x1c0)](0x1),
    tr = lista['getElementsByTagName']('tr')[eindex],
    lista[_0xd2b9d2(0x1af)](eindex),
    results = localStorage[_0xd2b9d2(0x18e)](resultStorage),
    results = results[_0xd2b9d2(0x17b)]('*'),
    removing = results[eindex][_0xd2b9d2(0x17b)]('\u00a0\u00a0');
    if (removing[0x0][0x0] != 'L' && removing[0x0][0x0] != 'E' && removing[0x0][0x0] != 'V')
        removing[0x0] = removing[0x0]['slice'](0x1);
    var _0x326bfe = 0x1;
    for (var _0x2b2451 = 0x0; _0x2b2451 < nPartidos; _0x2b2451++)
        _0x326bfe *= removing[_0x2b2451]['length'];
    quantity -= _0x326bfe,
    localStorage[_0xd2b9d2(0x194)](quantStorage, quantity),
    results[_0xd2b9d2(0x1d5)](eindex, 0x1),
    results = results[_0xd2b9d2(0x18b)]('*'),
    localStorage[_0xd2b9d2(0x194)](resultStorage, results),
    document[_0xd2b9d2(0x1c4)]('#botonenviar\x20span')['textContent'] = quantity,
    document[_0xd2b9d2(0x19a)](_0xd2b9d2(0x1c7))['innerHTML'] = _0xd2b9d2(0x1cd) + quantity * pricem + '\x0a';
    !quantity && (document[_0xd2b9d2(0x19a)](_0xd2b9d2(0x1c2))[_0xd2b9d2(0x18d)][_0xd2b9d2(0x1b1)] = _0xd2b9d2(0x19e));
    if ((!quantity || quantity == 0x0) && !res[_0xd2b9d2(0x185)]('_'))
        document[_0xd2b9d2(0x19a)](_0xd2b9d2(0x1cf))[_0xd2b9d2(0x18d)][_0xd2b9d2(0x1c8)] = 'block';
    else
        document[_0xd2b9d2(0x19a)](_0xd2b9d2(0x1cf))['style'][_0xd2b9d2(0x1c8)] = _0xd2b9d2(0x1d7);
    updatelista(0x2);
}
function removeLastLine() {
    var _0x1cf6df = _0x47742f;
    return resultsx['lastIndexOf']('\x0a') > 0x0 ? resultsx[_0x1cf6df(0x187)](0x0, resultsx[_0x1cf6df(0x183)]('\x0a')) : resultsx;
}
function deleteall() {
    var _0x387f19 = _0x47742f;
    confirm(_0x387f19(0x1c9)) && (localStorage[_0x387f19(0x194)](_0x387f19(0x196), ''),
    localStorage[_0x387f19(0x194)](quantStorage, ''),
    localStorage['setItem'](resultStorage, ''),
    location[_0x387f19(0x1ac)]());
}
function send() {
    var _0x4c0abf = _0x47742f;
    if (!quantity || quantity < 0x1) {
        alert(_0x4c0abf(0x1d8)),
        document[_0x4c0abf(0x19a)](_0x4c0abf(0x1cf))['style'][_0x4c0abf(0x1c8)] = 'block';
        return;
    }
    if (quantity < 0x2 && [_0x4c0abf(0x1bf), _0x4c0abf(0x1a3), _0x4c0abf(0x190)][_0x4c0abf(0x185)](telm)) {
        alert('La\x20participación\x20mínima\x20es\x20de\x202\x20Quinielas.');
        return;
    }
    if (quantity > 0x0) {
        var _0x4962af = res['join'](_0x4c0abf(0x1b7));
        _0x4962af = encodeURI(localStorage[_0x4c0abf(0x18e)](resultStorage)),
        _0x4962af = _0x4962af[_0x4c0abf(0x17b)]('*')['join']('%0D')['replace'](/#/g, ''),
        window['location'][_0x4c0abf(0x17e)] = _0x4c0abf(0x19f) + telm + '?text=' + _0x4962af;
    }
}
window['addEventListener']('load', start, ![]);
