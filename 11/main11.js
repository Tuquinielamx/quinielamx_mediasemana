var _0x45b009 = _0x3f51;
(function(_0x43f609, _0x3dbd36) {
    var _0x3ebe33 = _0x3f51
      , _0xb3b97b = _0x43f609();
    while (!![]) {
        try {
            var _0x45d2b7 = parseInt(_0x3ebe33(0x132)) / 0x1 * (parseInt(_0x3ebe33(0x143)) / 0x2) + parseInt(_0x3ebe33(0x111)) / 0x3 * (parseInt(_0x3ebe33(0x10e)) / 0x4) + -parseInt(_0x3ebe33(0x117)) / 0x5 + parseInt(_0x3ebe33(0x11c)) / 0x6 + -parseInt(_0x3ebe33(0x133)) / 0x7 + parseInt(_0x3ebe33(0x13c)) / 0x8 * (-parseInt(_0x3ebe33(0x14d)) / 0x9) + parseInt(_0x3ebe33(0x10c)) / 0xa;
            if (_0x45d2b7 === _0x3dbd36)
                break;
            else
                _0xb3b97b['push'](_0xb3b97b['shift']());
        } catch (_0x5cf468) {
            _0xb3b97b['push'](_0xb3b97b['shift']());
        }
    }
}(_0xce47, 0xd13ec));
var quantStorage = _0x45b009(0x120), resultStorage = _0x45b009(0xf4), aliasStorage = _0x45b009(0x116), price = 0x19, nPartidos = 0xb, quantity = localStorage[_0x45b009(0x13a)](quantStorage), name = localStorage[_0x45b009(0x13a)](aliasStorage), combinations = ![], aux, id = 0x0, touchIcon = !![], res = Array(nPartidos)['fill']('_');
function start() {
    var _0x3a532e = _0x45b009;
    recovername();
    if (localStorage[_0x3a532e(0x13a)]('tutorial')) {}
    for (var _0x2612f1 = 0x0; _0x2612f1 < suspIndex[_0x3a532e(0x142)]; _0x2612f1++) {
        if (suspIndex[_0x2612f1] <= res[_0x3a532e(0x142)])
            res[suspIndex[_0x2612f1]] = 'X';
    }
    var _0x40640e = document[_0x3a532e(0x107)](_0x3a532e(0x122))
      , _0x400a0a = document[_0x3a532e(0x107)](_0x3a532e(0x15c));
    _0x400a0a[_0x3a532e(0xf9)] = res[_0x3a532e(0x10d)]('\u00a0\u00a0');
    if (quantity)
        document['querySelector'](_0x3a532e(0xfc))[_0x3a532e(0x155)] = quantity;
    var _0x246a83 = localStorage['getItem'](resultStorage);
    if (_0x246a83) {
        _0x246a83 = _0x246a83[_0x3a532e(0x14c)]('*');
        for (var _0x43bdd3 = 0x0; _0x43bdd3 < quantity; _0x43bdd3++) {
            if (_0x246a83[_0x43bdd3] && _0x246a83[_0x43bdd3] != undefined) {
                var _0x3b81ee = _0x40640e['insertRow'](_0x43bdd3);
                if (_0x246a83[_0x43bdd3]['split']('\u00a0\u00a0')[0x0][0x0] != 'L' && _0x246a83[_0x43bdd3][_0x3a532e(0x14c)]('\u00a0\u00a0')[0x0][0x0] != 'E' && _0x246a83[_0x43bdd3][_0x3a532e(0x14c)]('\u00a0\u00a0')[0x0][0x0] != 'V')
                    _0x246a83[_0x43bdd3] = _0x246a83[_0x43bdd3]['slice'](0x1);
                for (var _0x1fa8ff = 0x0; _0x1fa8ff < nPartidos; _0x1fa8ff++) {
                    cell1 = _0x3b81ee[_0x3a532e(0x118)](_0x1fa8ff);
                    if (suspIndex['includes'](_0x1fa8ff))
                        cell1[_0x3a532e(0xf9)] += 'X';
                    else
                        cell1[_0x3a532e(0xf9)] += _0x246a83[_0x43bdd3][_0x3a532e(0x14c)]('\u00a0\u00a0')[_0x1fa8ff];
                    cell1[_0x3a532e(0xfa)][_0x3a532e(0x14a)] = _0x3a532e(0xfe);
                    if (_0x246a83[_0x43bdd3][_0x3a532e(0x14c)]('\u00a0\u00a0')[_0x1fa8ff][_0x3a532e(0x142)] == 0x2)
                        cell1[_0x3a532e(0xfa)][_0x3a532e(0x15a)] = _0x3a532e(0x105);
                    if (_0x246a83[_0x43bdd3][_0x3a532e(0x14c)]('\u00a0\u00a0')[_0x1fa8ff][_0x3a532e(0x142)] == 0x3)
                        cell1[_0x3a532e(0xfa)]['fontSize'] = _0x3a532e(0x13d);
                }
                var _0x124ac3 = _0x3b81ee[_0x3a532e(0x118)](nPartidos);
                _0x124ac3['innerHTML'] += _0x246a83[_0x43bdd3][_0x3a532e(0x14c)]('\u00a0\u00a0')[nPartidos],
                _0x124ac3[_0x3a532e(0xfa)][_0x3a532e(0x15a)] = _0x3a532e(0x105),
                _0x124ac3['style'][_0x3a532e(0x109)] = _0x3a532e(0x124),
                _0x124ac3[_0x3a532e(0xfa)][_0x3a532e(0x14f)] = _0x3a532e(0x124),
                _0x124ac3[_0x3a532e(0xfa)][_0x3a532e(0xf6)] = _0x3a532e(0x104),
                _0x124ac3[_0x3a532e(0x103)] = _0x3a532e(0x14b),
                _0x124ac3['scrollTo'](0x50, 0x0);
                if (_0x246a83[_0x43bdd3][_0x3a532e(0x14c)]('\u00a0\u00a0')[nPartidos]['length'] > 0xf)
                    _0x124ac3[_0x3a532e(0xfa)][_0x3a532e(0x15a)] = _0x3a532e(0x147);
                else {
                    if (_0x246a83[_0x43bdd3][_0x3a532e(0x14c)]('\u00a0\u00a0')[nPartidos][_0x3a532e(0x142)] > 0xb)
                        _0x124ac3[_0x3a532e(0xfa)][_0x3a532e(0x15a)] = 'x-small';
                }
                var _0x1c9435 = _0x3b81ee['insertCell'](nPartidos + 0x1);
                _0x1c9435[_0x3a532e(0xf9)] += '<ion-icon\x20name=\x22close-circle\x22\x20class=\x22deleteIcon\x22></ion-icon>',
                _0x1c9435[_0x3a532e(0xfa)][_0x3a532e(0x14a)] = _0x3a532e(0xfe),
                _0x1c9435['id'] = 'x' + _0x43bdd3,
                _0x1c9435[_0x3a532e(0x103)] = _0x3a532e(0x131),
                _0x1c9435[_0x3a532e(0x13e)](_0x3a532e(0x102), function() {
                    var _0x1afdd3 = _0x3a532e;
                    remove(this),
                    this[_0x1afdd3(0x15b)](this[_0x1afdd3(0x151)](!![]));
                });
            } else
                break;
        }
        id = _0x43bdd3,
        document['getElementById'](_0x3a532e(0x15d))['style']['filter'] = _0x3a532e(0x104),
        document[_0x3a532e(0x107)](_0x3a532e(0x125))[_0x3a532e(0xf9)] = _0x3a532e(0x150) + quantity * price + '\x0a';
    } else
        document['getElementById'](_0x3a532e(0x15d))[_0x3a532e(0xfa)][_0x3a532e(0x11d)] = _0x3a532e(0x14e);
}
function updatelista(_0x3019aa) {
    var _0x30f9c3 = _0x45b009
      , _0x1e2c55 = document[_0x30f9c3(0x107)]('lista')
      , _0x13e381 = _0x1e2c55[_0x30f9c3(0x138)]('tr')[_0x30f9c3(0x142)];
    if (_0x3019aa == 0x1) {
        if (aux == undefined)
            aux = 0x0;
        var _0x37f0ef = _0x1e2c55[_0x30f9c3(0x10a)](_0x13e381);
        for (var _0x8ae966 = 0x0; _0x8ae966 < nPartidos; _0x8ae966++) {
            cell1 = _0x37f0ef[_0x30f9c3(0x118)](_0x8ae966),
            cell1[_0x30f9c3(0xf9)] += res[_0x8ae966],
            cell1[_0x30f9c3(0xfa)][_0x30f9c3(0x14a)] = '7%';
            if (res[_0x8ae966][_0x30f9c3(0x142)] == 0x2)
                cell1[_0x30f9c3(0xfa)][_0x30f9c3(0x15a)] = _0x30f9c3(0x105);
            if (res[_0x8ae966][_0x30f9c3(0x142)] == 0x3)
                cell1[_0x30f9c3(0xfa)][_0x30f9c3(0x15a)] = _0x30f9c3(0x13d);
        }
        if (aux > 0x1) {
            var _0x2064e4 = _0x37f0ef[_0x30f9c3(0x118)](nPartidos);
            _0x2064e4[_0x30f9c3(0xf9)] += name + '\x20(' + aux + ')';
        } else {
            var _0x2064e4 = _0x37f0ef[_0x30f9c3(0x118)](nPartidos);
            _0x2064e4[_0x30f9c3(0xf9)] += name;
        }
        _0x2064e4['style'][_0x30f9c3(0x15a)] = _0x30f9c3(0x105),
        _0x2064e4[_0x30f9c3(0xfa)]['overflow'] = 'hidden',
        _0x2064e4[_0x30f9c3(0xfa)][_0x30f9c3(0x14f)] = _0x30f9c3(0x124),
        _0x2064e4[_0x30f9c3(0x103)] = 'cellname',
        _0x2064e4['scrollTo'](0x50, 0x0);
        if (name['length'] > 0xf)
            _0x2064e4['style'][_0x30f9c3(0x15a)] = _0x30f9c3(0x147);
        else {
            if (name[_0x30f9c3(0x142)] > nPartidos)
                _0x2064e4[_0x30f9c3(0xfa)]['fontSize'] = _0x30f9c3(0x13d);
        }
        var _0x413d8c = _0x37f0ef[_0x30f9c3(0x118)](nPartidos + 0x1);
        _0x413d8c[_0x30f9c3(0xf9)] += _0x30f9c3(0xff),
        _0x413d8c[_0x30f9c3(0xfa)]['width'] = _0x30f9c3(0xfe),
        _0x413d8c['id'] = 'x' + id,
        _0x413d8c[_0x30f9c3(0x103)] = _0x30f9c3(0x131),
        _0x413d8c['addEventListener'](_0x30f9c3(0x102), function() {
            var _0x3f0347 = _0x30f9c3;
            remove(this),
            this[_0x3f0347(0x15b)](this[_0x3f0347(0x151)](!![]));
        }),
        id++,
        aux = 0x1;
    } else {
        if (_0x3019aa == 0x2) {
            id = 0x0,
            deleters = _0x1e2c55[_0x30f9c3(0x129)](_0x30f9c3(0x131));
            for (var _0x467fa0 = 0x0; _0x467fa0 < _0x13e381; _0x467fa0++) {
                deleters[_0x467fa0]['id'] = 'x' + id,
                id++;
            }
        }
    }
    document['getElementById'](_0x30f9c3(0x125))['innerHTML'] = _0x30f9c3(0x150) + quantity * price;
}
function selection(_0x2ad244) {
    var _0x1cae5f = _0x45b009
      , _0x29532a = parseInt(_0x2ad244['id'][_0x1cae5f(0x158)](0x1)) - 0x1;
    if (suspIndex[_0x1cae5f(0x126)](_0x29532a))
        return;
    var _0x44f89f = document[_0x1cae5f(0x107)](_0x1cae5f(0x15c));
    if (_0x2ad244[_0x1cae5f(0x103)] != _0x1cae5f(0x108))
        !combinations ? (validation(_0x2ad244),
        res[_0x29532a] = _0x2ad244['id'][_0x1cae5f(0x158)](0x0, 0x1)) : (res[_0x29532a] += _0x2ad244['id'][_0x1cae5f(0x158)](0x0, 0x1),
        res[_0x29532a] = res[_0x29532a]['split']('_')[_0x1cae5f(0x10d)]('')),
        _0x2ad244['className'] = _0x1cae5f(0x108);
    else {
        if (combinations) {
            _0x2ad244[_0x1cae5f(0x103)] = 'opcion',
            console[_0x1cae5f(0x135)](res[_0x29532a][_0x1cae5f(0x142)]);
            if (res[_0x29532a] != '_' && res[_0x29532a][_0x1cae5f(0x142)] > 0x1)
                res[_0x29532a] = res[_0x29532a]['split'](_0x2ad244['id'][_0x1cae5f(0x158)](0x0, 0x1))[_0x1cae5f(0x10d)]('');
            else
                res[_0x29532a] = '_';
        }
    }
    costoactual(),
    _0x44f89f[_0x1cae5f(0xf9)] = res[_0x1cae5f(0x10d)]('\u00a0\u00a0');
    res[_0x1cae5f(0x10d)]('\u00a0\u00a0')[_0x1cae5f(0x142)] > 0x23 ? _0x44f89f['className'] = _0x1cae5f(0x11e) : _0x44f89f[_0x1cae5f(0x103)] = _0x1cae5f(0x15e);
    touchIcon && (touchIcon = ![],
    document[_0x1cae5f(0x107)](_0x1cae5f(0xfd))['style']['display'] = _0x1cae5f(0x104));
    if ((!quantity || quantity == 0x0) && !res[_0x1cae5f(0x126)]('_'))
        document['getElementById'](_0x1cae5f(0x134))['style'][_0x1cae5f(0x13f)] = _0x1cae5f(0x114);
    else
        document[_0x1cae5f(0x107)](_0x1cae5f(0x134))['style'][_0x1cae5f(0x13f)] = 'none';
}
function validation(_0x35ee2e) {
    var _0x16a213 = _0x45b009
      , _0x4acbc = parseInt(_0x35ee2e['id'][_0x16a213(0x158)](0x1));
    document['getElementById']('L' + _0x4acbc)[_0x16a213(0x103)] = _0x16a213(0x128),
    document[_0x16a213(0x107)]('E' + _0x4acbc)['className'] = _0x16a213(0x128),
    document[_0x16a213(0x107)]('V' + _0x4acbc)[_0x16a213(0x103)] = _0x16a213(0x128);
}
function number() {
    var _0x2d4918 = _0x45b009;
    quantity = localStorage[_0x2d4918(0x13a)](quantStorage);
    if (quantity)
        localStorage[_0x2d4918(0x101)](quantStorage, ++quantity);
    else
        localStorage[_0x2d4918(0x101)](quantStorage, 0x1),
        quantity = localStorage[_0x2d4918(0x13a)](quantStorage);
    document['querySelector'](_0x2d4918(0xfc))[_0x2d4918(0x155)] = quantity,
    localStorage['setItem'](aliasStorage, name);
    if (quantity == '' || !quantity || quantity == 0x0 || quantity == '0')
        document['getElementById'](_0x2d4918(0x153))[_0x2d4918(0xfa)][_0x2d4918(0x11d)] = _0x2d4918(0x14e);
    else
        document[_0x2d4918(0x107)](_0x2d4918(0x15d))[_0x2d4918(0xfa)][_0x2d4918(0x11d)] = _0x2d4918(0x104);
}
function result() {
    var _0x3f4704 = _0x45b009;
    results = localStorage[_0x3f4704(0x13a)](resultStorage),
    name = document['getElementById'](_0x3f4704(0x146))['value'],
    name = name[_0x3f4704(0x14c)]('*')[_0x3f4704(0x10d)]('');
    if (results) {
        if (aux > 0x1)
            localStorage['setItem'](resultStorage, results + '\x0a' + res[_0x3f4704(0x10d)]('\u00a0\u00a0') + '\u00a0\u00a0' + name + '\x20(' + aux + ')' + '*');
        else
            localStorage[_0x3f4704(0x101)](resultStorage, results + '\x0a' + res['join']('\u00a0\u00a0') + '\u00a0\u00a0' + name + '*');
    } else {
        if (aux > 0x1)
            localStorage['setItem'](resultStorage, res[_0x3f4704(0x10d)]('\u00a0\u00a0') + '\u00a0\u00a0' + name + '\x20(' + aux + ')' + '*');
        else
            localStorage[_0x3f4704(0x101)](resultStorage, res[_0x3f4704(0x10d)]('\u00a0\u00a0') + '\u00a0\u00a0' + name + '*');
    }
}
function save() {
    var _0x2db9a4 = _0x45b009;
    if (id < 0x96) {
        document[_0x2db9a4(0x107)](_0x2db9a4(0x134))[_0x2db9a4(0xfa)][_0x2db9a4(0x13f)] = _0x2db9a4(0x104),
        localStorage[_0x2db9a4(0x101)](_0x2db9a4(0x12e), !![]),
        name = document[_0x2db9a4(0x107)](_0x2db9a4(0x146))['value'];
        if (res[_0x2db9a4(0x10d)]('\u00a0\u00a0')[_0x2db9a4(0x126)]('_'))
            alert(_0x2db9a4(0xf5));
        else {
            if (!name)
                return alert(_0x2db9a4(0x127)),
                document[_0x2db9a4(0x107)]('nombre')[_0x2db9a4(0x106)](),
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
        alert(_0x2db9a4(0x141));
}
function clean() {
    var _0x4fb0f5 = _0x45b009;
    document[_0x4fb0f5(0x107)](_0x4fb0f5(0x134))['style']['display'] = 'none',
    res = Array(nPartidos)[_0x4fb0f5(0x148)]('_');
    for (var _0x208257 = 0x0; _0x208257 < suspIndex[_0x4fb0f5(0x142)]; _0x208257++) {
        if (suspIndex[_0x208257] <= res[_0x4fb0f5(0x142)])
            res[suspIndex[_0x208257]] = 'X';
    }
    var _0x58de28 = document['getElementById'](_0x4fb0f5(0x15c));
    _0x58de28[_0x4fb0f5(0xf9)] = res['join']('\u00a0\u00a0'),
    spans = document[_0x4fb0f5(0xf8)](_0x4fb0f5(0x11b));
    for (var _0x6bd891 = 0x0; _0x6bd891 < nPartidos * 0x3; _0x6bd891++)
        spans[_0x6bd891]['className'] = 'opcion';
    document[_0x4fb0f5(0x107)]('costo')[_0x4fb0f5(0xf9)] = _0x4fb0f5(0x119),
    document['getElementById'](_0x4fb0f5(0x123))['innerHTML'] = '0\x20Quiniela(s)',
    _0x58de28['className'] = 'text-lg';
}
function _0xce47() {
    var _0x19a7bf = ['alias', '2995215DOJOeB', 'insertCell', 'Costo:\x20$0', 'null', '.quiniela\x20span', '5808084wdwMjU', 'filter', 'text-sm', 'floor', 'quantity11', 'La\x20lista\x20está\x20vacía\x0d\x0aPresiona\x20[AGREGAR]\x20para\x20añadir\x20una\x20quiniela', 'lista', 'numquinielas', 'hidden', 'total', 'includes', 'Debes\x20elegir\x20un\x20nombre', 'opcion', 'getElementsByClassName', 'La\x20participación\x20mínima\x20es\x20de\x202\x20Quinielas.', 'random', 'value', 'checkcombinaciones', 'tutorial', 'lastIndexOf', 'boton\x20allowcomb-active', 'deleter', '1eOSWlQ', '1324316DZXYqs', 'touchIconDiv2', 'log', '5213314457066', 'span', 'getElementsByTagName', '%20%20', 'getItem', '?text=', '8ACsICs', 'x-small', 'addEventListener', 'display', 'load', 'Envía\x20tus\x20quinielas\x20guardadas\x20antes\x20de\x20agregar\x20más', 'length', '124782JmOFoM', 'splice', 'ceil', 'nombre', 'xx-small', 'fill', 'Se\x20borrará\x20todo', 'width', 'cellname', 'split', '4909869EjvkSQ', 'grayscale(0)', 'overflowY', 'Total:\x20$', 'cloneNode', 'boton\x20allowcomb', 'imgwsp', 'quantity', 'textContent', 'substring', 'querySelector', 'slice', '5213317816346', 'fontSize', 'replaceWith', 'text', 'botonenviar', 'text-lg', 'results11', 'Debes\x20llenar\x20todos\x20los\x20partidos', 'border', '5213310893705', 'querySelectorAll', 'innerHTML', 'style', 'location', '#botonenviar\x20span', 'touchIconDiv', '6.3%', '<ion-icon\x20name=\x22close-circle\x22\x20class=\x22deleteIcon\x22></ion-icon>', '%0D', 'setItem', 'click', 'className', 'none', 'small', 'focus', 'getElementById', 'opcion-active', 'overflow', 'insertRow', 'costo', '9194630RcCBlf', 'join', '160648kOSxQk', 'results', 'href', '18osWLmU', '\x20Quiniela(s)', 'deleteRow', 'block', 'reload'];
    _0xce47 = function() {
        return _0x19a7bf;
    }
    ;
    return _0xce47();
}
function recovername() {
    var _0x309a59 = _0x45b009;
    name = localStorage['getItem'](aliasStorage);
    if (name != null && name != _0x309a59(0x11a))
        document[_0x309a59(0x107)](_0x309a59(0x146))['value'] = name;
}
function clearname() {
    var _0x1ee1f7 = _0x45b009;
    document['getElementById'](_0x1ee1f7(0x146))[_0x1ee1f7(0x12c)] = '';
}
function allowcombination() {
    var _0x4d4ff0 = _0x45b009;
    !combinations ? (combinations = !![],
    document[_0x4d4ff0(0x107)]('checkcombinaciones')['className'] = _0x4d4ff0(0x130)) : (combinations = ![],
    document[_0x4d4ff0(0x107)](_0x4d4ff0(0x12d))[_0x4d4ff0(0x103)] = _0x4d4ff0(0x152),
    clean());
}
function _0x3f51(_0x44012d, _0x1b19a4) {
    var _0xce473e = _0xce47();
    return _0x3f51 = function(_0x3f51f1, _0x1c1194) {
        _0x3f51f1 = _0x3f51f1 - 0xf4;
        var _0x408551 = _0xce473e[_0x3f51f1];
        return _0x408551;
    }
    ,
    _0x3f51(_0x44012d, _0x1b19a4);
}
function calculate() {
    var _0x49885e = _0x45b009;
    aux = 0x1;
    for (var _0xbbc32b = 0x0; _0xbbc32b < nPartidos; _0xbbc32b++) {
        aux *= res[_0xbbc32b][_0x49885e(0x142)];
    }
    quantity = localStorage[_0x49885e(0x13a)](quantStorage);
    quantity ? (localStorage['setItem'](quantStorage, parseInt(quantity) + aux),
    quantity = localStorage['getItem'](quantStorage)) : (localStorage[_0x49885e(0x101)](quantStorage, aux),
    quantity = localStorage[_0x49885e(0x13a)](quantStorage));
    document[_0x49885e(0x157)]('#botonenviar\x20span')['textContent'] = quantity;
    if (quantity == '' || !quantity || quantity == 0x0 || quantity == '0')
        document[_0x49885e(0x107)](_0x49885e(0x153))['style'][_0x49885e(0x11d)] = _0x49885e(0x14e);
    else
        document[_0x49885e(0x107)]('botonenviar')[_0x49885e(0xfa)]['filter'] = _0x49885e(0x104);
    localStorage[_0x49885e(0x101)](aliasStorage, name);
}
function random() {
    var _0x18eab7 = _0x45b009;
    clean();
    touchIcon && (touchIcon = ![],
    document[_0x18eab7(0x107)]('touchIconDiv')[_0x18eab7(0xfa)][_0x18eab7(0x13f)] = _0x18eab7(0x104));
    if (!quantity || quantity == 0x0)
        document[_0x18eab7(0x107)](_0x18eab7(0x134))[_0x18eab7(0xfa)][_0x18eab7(0x13f)] = _0x18eab7(0x114);
    var _0x276973 = document['getElementById']('text')
      , _0x3a02e0 = document[_0x18eab7(0x129)]('partido');
    for (var _0x286a96 = 0x0; _0x286a96 < nPartidos; _0x286a96++) {
        if (suspIndex[_0x18eab7(0x126)](_0x286a96))
            continue;
        var _0x20bad6 = getRandomInt(0x0, 0x2);
        _0x3a02e0[_0x286a96][_0x18eab7(0x138)](_0x18eab7(0x137))[_0x20bad6][_0x18eab7(0x103)] = _0x18eab7(0x108),
        res[_0x286a96] = ['L', 'E', 'V'][_0x20bad6];
    }
    _0x276973[_0x18eab7(0xf9)] = res[_0x18eab7(0x10d)]('\u00a0\u00a0'),
    costoactual();
}
function getRandomInt(_0xdb9ec7, _0x34399e) {
    var _0x824bbd = _0x45b009;
    return _0xdb9ec7 = Math[_0x824bbd(0x145)](_0xdb9ec7),
    _0x34399e = Math[_0x824bbd(0x11f)](_0x34399e),
    Math[_0x824bbd(0x11f)](Math[_0x824bbd(0x12b)]() * (_0x34399e - _0xdb9ec7 + 0x1)) + _0xdb9ec7;
}
function costoactual() {
    var _0x49ebde = _0x45b009;
    if (!![]) {
        var _0x2fc9a2 = 0x1;
        for (var _0x2032d2 = 0x0; _0x2032d2 < nPartidos; _0x2032d2++) {
            _0x2fc9a2 *= res[_0x2032d2][_0x49ebde(0x142)];
        }
        document['getElementById'](_0x49ebde(0x10b))[_0x49ebde(0xf9)] = 'Costo:\x20$' + _0x2fc9a2 * price,
        document[_0x49ebde(0x107)](_0x49ebde(0x123))['innerHTML'] = _0x2fc9a2 + _0x49ebde(0x112);
    }
}
function remove(_0x2e3da9) {
    var _0x3c19b4 = _0x45b009;
    lista = document[_0x3c19b4(0x107)](_0x3c19b4(0x122)),
    eindex = _0x2e3da9['id'][_0x3c19b4(0x158)](0x1),
    tr = lista[_0x3c19b4(0x138)]('tr')[eindex],
    lista[_0x3c19b4(0x113)](eindex),
    results = localStorage[_0x3c19b4(0x13a)](resultStorage),
    results = results[_0x3c19b4(0x14c)]('*'),
    removing = results[eindex][_0x3c19b4(0x14c)]('\u00a0\u00a0');
    if (removing[0x0][0x0] != 'L' && removing[0x0][0x0] != 'E' && removing[0x0][0x0] != 'V')
        removing[0x0] = removing[0x0]['slice'](0x1);
    var _0x902781 = 0x1;
    for (var _0x26abd2 = 0x0; _0x26abd2 < nPartidos; _0x26abd2++)
        _0x902781 *= removing[_0x26abd2][_0x3c19b4(0x142)];
    quantity -= _0x902781,
    localStorage[_0x3c19b4(0x101)](quantStorage, quantity),
    results[_0x3c19b4(0x144)](eindex, 0x1),
    results = results[_0x3c19b4(0x10d)]('*'),
    localStorage['setItem'](resultStorage, results),
    document[_0x3c19b4(0x157)]('#botonenviar\x20span')['textContent'] = quantity,
    document[_0x3c19b4(0x107)](_0x3c19b4(0x125))['innerHTML'] = _0x3c19b4(0x150) + quantity * price + '\x0a';
    !quantity && (document[_0x3c19b4(0x107)](_0x3c19b4(0x15d))[_0x3c19b4(0xfa)][_0x3c19b4(0x11d)] = _0x3c19b4(0x14e));
    if ((!quantity || quantity == 0x0) && !res['includes']('_'))
        document[_0x3c19b4(0x107)](_0x3c19b4(0x134))[_0x3c19b4(0xfa)][_0x3c19b4(0x13f)] = _0x3c19b4(0x114);
    else
        document[_0x3c19b4(0x107)](_0x3c19b4(0x134))[_0x3c19b4(0xfa)][_0x3c19b4(0x13f)] = _0x3c19b4(0x104);
    updatelista(0x2);
}
function removeLastLine() {
    var _0x1d631a = _0x45b009;
    return resultsx[_0x1d631a(0x12f)]('\x0a') > 0x0 ? resultsx[_0x1d631a(0x156)](0x0, resultsx['lastIndexOf']('\x0a')) : resultsx;
}
function deleteall() {
    var _0x744a55 = _0x45b009;
    confirm(_0x744a55(0x149)) && (localStorage['setItem'](_0x744a55(0x154), ''),
    localStorage[_0x744a55(0x101)](_0x744a55(0x10f), ''),
    localStorage['setItem']('tutorial', ''),
    localStorage[_0x744a55(0x101)](quantStorage, ''),
    localStorage['setItem'](resultStorage, ''),
    location[_0x744a55(0x115)]());
}
function send() {
    var _0x42ceee = _0x45b009;
    if (!quantity || quantity < 0x1) {
        alert(_0x42ceee(0x121)),
        document[_0x42ceee(0x107)]('touchIconDiv2')['style'][_0x42ceee(0x13f)] = 'block';
        return;
    }
    if (quantity < 0x2 && [_0x42ceee(0x159), _0x42ceee(0x136), _0x42ceee(0xf7)]['includes'](tel)) {
        alert(_0x42ceee(0x12a));
        return;
    }
    if (quantity > 0x0) {
        var _0x34e6a8 = res[_0x42ceee(0x10d)](_0x42ceee(0x139));
        _0x34e6a8 = encodeURI(localStorage['getItem'](resultStorage)),
        _0x34e6a8 = _0x34e6a8[_0x42ceee(0x14c)]('*')[_0x42ceee(0x10d)](_0x42ceee(0x100))['replace'](/#/g, ''),
        window[_0x42ceee(0xfb)][_0x42ceee(0x110)] = 'https://wa.me/' + tel + _0x42ceee(0x13b) + _0x34e6a8;
    }
}
window[_0x45b009(0x13e)](_0x45b009(0x140), start, ![]);
