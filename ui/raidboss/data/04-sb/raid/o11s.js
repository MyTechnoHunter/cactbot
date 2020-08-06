'use strict';

// O11S - Alphascape 3.0 Savage
[{
  zoneId: ZoneId.AlphascapeV30Savage,
  timelineFile: 'o11s.txt',
  triggers: [
    {
      id: 'O11S Mustard Bomb',
      netRegex: NetRegexes.startsUsing({ id: '326D', source: 'Omega' }),
      netRegexDe: NetRegexes.startsUsing({ id: '326D', source: 'Omega' }),
      netRegexFr: NetRegexes.startsUsing({ id: '326D', source: 'Oméga' }),
      netRegexJa: NetRegexes.startsUsing({ id: '326D', source: 'オメガ' }),
      netRegexCn: NetRegexes.startsUsing({ id: '326D', source: '欧米茄' }),
      netRegexKo: NetRegexes.startsUsing({ id: '326D', source: '오메가' }),
      response: Responses.tankBuster('alarm'),
    },
    {
      // Ability IDs:
      // Starboard 1: 3262
      // Starboard 2: 3263
      // Larboard 1: 3264
      // Larboard 2: 3265
      // For the cannons, match #1 and #2 for the first one.  This is so
      // that if a log entry for the first is dropped for some reason, it
      // will at least say left/right for the second.
      id: 'O11S Cannon Cleanup',
      netRegex: NetRegexes.startsUsing({ id: '326[24]', source: 'Omega', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '326[24]', source: 'Omega', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '326[24]', source: 'Oméga', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '326[24]', source: 'オメガ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '326[24]', source: '欧米茄', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '326[24]', source: '오메가', capture: false }),
      delaySeconds: 15,
      run: function(data) {
        delete data.lastWasStarboard;
      },
    },
    {
      id: 'O11S Starboard Cannon 1',
      netRegex: NetRegexes.startsUsing({ id: '326[23]', source: 'Omega', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '326[23]', source: 'Omega', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '326[23]', source: 'Oméga', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '326[23]', source: 'オメガ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '326[23]', source: '欧米茄', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '326[23]', source: '오메가', capture: false }),
      condition: function(data) {
        return data.lastWasStarboard === undefined;
      },
      response: Responses.goLeft(),
      run: function(data) {
        data.lastWasStarboard = true;
      },
    },
    {
      id: 'O11S Larboard Cannon 1',
      netRegex: NetRegexes.startsUsing({ id: '326[45]', source: 'Omega', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '326[45]', source: 'Omega', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '326[45]', source: 'Oméga', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '326[45]', source: 'オメガ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '326[45]', source: '欧米茄', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '326[45]', source: '오메가', capture: false }),
      condition: function(data) {
        return data.lastWasStarboard === undefined;
      },
      response: Responses.goRight(),
      run: function(data) {
        data.lastWasStarboard = false;
      },
    },
    {
      id: 'O11S Starboard Cannon 2',
      netRegex: NetRegexes.startsUsing({ id: '3263', source: 'Omega', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3263', source: 'Omega', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3263', source: 'Oméga', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3263', source: 'オメガ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3263', source: '欧米茄', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3263', source: '오메가', capture: false }),
      condition: function(data) {
        return data.lastWasStarboard !== undefined;
      },
      alertText: function(data) {
        if (data.lastWasStarboard) {
          return {
            en: 'Move (Left)',
            de: 'Bewegen (Links)',
            fr: 'Bougez (Gauche)',
            ja: '反対へ (左)',
            cn: '移动 (左)',
            ko: '오른쪽으로',
          };
        }
        return {
          en: 'Stay (Left)',
          de: 'Stehenbleiben (Links)',
          fr: 'Restez ici (Gauche)',
          ja: 'そのまま (左)',
          cn: '不动 (左)',
          ko: '대기 (오른쪽)',
        };
      },
    },
    {
      id: 'O11S Larboard Cannon 2',
      netRegex: NetRegexes.startsUsing({ id: '3265', source: 'Omega', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3265', source: 'Omega', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3265', source: 'Oméga', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3265', source: 'オメガ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3265', source: '欧米茄', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3265', source: '오메가', capture: false }),
      condition: function(data) {
        return data.lastWasStarboard !== undefined;
      },
      alertText: function(data) {
        if (data.lastWasStarboard) {
          return {
            en: 'Stay (Right)',
            de: 'Stehenbleiben (Rechts)',
            fr: 'Restez ici (Droite)',
            ja: 'そのまま (右)',
            cn: '不动 (右)',
            ko: '대기 (왼쪽)',
          };
        }
        return {
          en: 'Move (Right)',
          de: 'Bewegen (Rechts)',
          fr: 'Bougez (Droite)',
          ja: '反対へ (右)',
          cn: '移动 (右)',
          ko: '왼쪽으로',
        };
      },
    },
    {
      id: 'O11S Starboard Surge 1',
      netRegex: NetRegexes.startsUsing({ id: '3266', source: 'Omega', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3266', source: 'Omega', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3266', source: 'Oméga', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3266', source: 'オメガ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3266', source: '欧米茄', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3266', source: '오메가', capture: false }),
      alertText: {
        en: 'Left (then opposite)',
        de: 'Links (dann umgekehrt)',
        fr: 'Gauche (puis Droite)',
        ja: '左 (零式)',
        cn: '左 (零式)',
        ko: '왼쪽으로 (바로 반대로)',
      },
    },
    {
      id: 'O11S Larboard Surge 1',
      netRegex: NetRegexes.startsUsing({ id: '3268', source: 'Omega', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3268', source: 'Omega', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3268', source: 'Oméga', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3268', source: 'オメガ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3268', source: '欧米茄', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3268', source: '오메가', capture: false }),
      alertText: {
        en: 'Right (then opposite)',
        de: 'Rechts (dann umgekehrt)',
        fr: 'Droite (puis Gauche)',
        ja: '右 (零式)',
        cn: '右 (零式)',
        ko: '오른쪽으로 (바로 반대로)',
      },
    },
    {
      id: 'O11S Starboard Surge 2',
      netRegex: NetRegexes.startsUsing({ id: '3266', source: 'Omega', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3266', source: 'Omega', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3266', source: 'Oméga', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3266', source: 'オメガ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3266', source: '欧米茄', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3266', source: '오메가', capture: false }),
      delaySeconds: 4,
      alertText: {
        en: 'Opposite (Left)',
        de: 'Umgekehrt (Links)',
        fr: 'Côté opposé (Gauche)',
        ja: '反対へ (左)',
        cn: '对面 (左)',
        ko: '오른쪽으로',
      },
    },
    {
      id: 'O11S Larboard Surge 2',
      netRegex: NetRegexes.startsUsing({ id: '3268', source: 'Omega', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3268', source: 'Omega', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3268', source: 'Oméga', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3268', source: 'オメガ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3268', source: '欧米茄', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3268', source: '오메가', capture: false }),
      delaySeconds: 4,
      alertText: {
        en: 'Opposite (Right)',
        de: 'Umgekehrt (Rechts)',
        fr: 'Côté opposé (Droite)',
        ja: '反対へ (右)',
        cn: '对面 (右)',
        ko: '왼쪽으로',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Level Checker': 'Monitor',
        'Omega': 'Omega',
        'Rocket Punch': 'Raketenschlag',
      },
      'replaceText': {
        'Afterburner': 'Nachbrenner',
        'Atomic Ray': 'Atomstrahlung',
        'Ballistic Impact': 'Ballistischer Einschlag',
        'Ballistic Missile': 'Ballistische Rakete',
        'Blaster': 'Blaster',
        'Charybdis': 'Charybdis',
        'Condensed Wave Cannon Kyrios': 'Hochleistungswellenkanone P',
        'Delta Attack': 'Delta-Attacke',
        'Diffuse Wave Cannon Kyrios': 'Streuende Wellenkanone P',
        'Dual Storage Violation': 'Speicherverletzung P',
        'Electric Slide': 'Elektrosturz',
        'Executable': 'Programmstart',
        'Ferrofluid': 'Ferrofluid',
        'Flamethrower': 'Flammenwerfer',
        'Force Quit': 'Erzwungenes Herunterfahren',
        'Guided Missile Kyrios': 'Lenkrakete P',
        'Long Needle Kyrios': 'Großes Kaliber P',
        '(?<! )Loop': 'Schleife',
        'Magnetism': 'Magnetismus',
        'Mustard Bomb': 'Senfbombe',
        'Pantokrator': 'Pantokrator',
        'Peripheral Synthesis': 'Ausdrucken',
        'Program Loop': 'Programmschleife',
        'Reformat': 'Optimierung',
        'Repel': 'Repulsion',
        'Reset': 'Zurücksetzen',
        'Rush': 'Stürmen',
        'Starboard/Larboard Cannon': 'Steuerbord/Backbord Kanone',
        'Starboard/Larboard Surge': 'Steuerbord/Backbord Strahl',
        '(?<! )Storage Violation': 'Speicherverletzung S',
        'Unmitigated Explosion': 'Detonation',
        'Update Program': 'Programmschleifen-Update',
        '(?<! )Wave Cannon Kyrios': 'Wellenkanone P',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Level Checker': 'vérifiniveau',
        'Omega': 'Oméga',
        'Rocket Punch': 'Astéropoing',
      },
      'replaceText': {
        'Afterburner': 'Postcombustion',
        'Atomic Ray': 'Rayon atomique',
        'Ballistic Impact': 'Impact de missile',
        'Ballistic Missile': 'Tir de missile',
        'Blaster': 'Électrochoc',
        'Charybdis': 'Charybde',
        'Condensed Wave Cannon Kyrios': 'Canon plasma surchargé P',
        'Delta Attack': 'Attaque Delta',
        'Diffuse Wave Cannon Kyrios': 'Canon plasma diffuseur P',
        'Dual Storage Violation': 'Corruption de données P',
        'Electric Slide': 'Glissement Oméga',
        'Executable': 'Exécution de programme',
        'Ferrofluid': 'Ferrofluide',
        'Flamethrower': 'Lance-flammes',
        'Force Quit': 'Interruption forcée',
        'Guided Missile Kyrios': 'Missile guidé P',
        'Long Needle Kyrios': 'Gros missile P',
        '(?<! )Loop': 'Boucle',
        'Magnetism': 'Magnétisme',
        'Mustard Bomb': 'Obus d\'ypérite',
        'Pantokrator': 'Pantokrator',
        'Peripheral Synthesis': 'Impression',
        'Program Loop': 'Boucle de programme',
        'Reformat': 'Optimisation',
        'Repel': 'Répulsion',
        'Reset': 'Réinitialisation',
        'Rush': 'Ruée',
        'Starboard/Larboard Cannon': 'Tribord/Bâbord',
        'Starboard/Larboard Surge': 'Tribord/Bâbord',
        '(?<! )Storage Violation': 'Corruption de données S',
        'Unmitigated Explosion': 'Grosse explosion',
        'Update Program': 'Boucle de programme : mise à jour',
        '(?<! )Wave Cannon Kyrios': 'Canon plasma P',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Level Checker': 'レベルチェッカー',
        'Omega': 'オメガ',
        'Rocket Punch': 'ロケットパンチ',
      },
      'replaceText': {
        'Afterburner': 'アフターバーナー',
        'Atomic Ray': 'アトミックレイ',
        'Ballistic Impact': 'ミサイル着弾',
        'Ballistic Missile': 'ミサイル発射',
        'Blaster': 'ブラスター',
        'Charybdis': 'ミールストーム',
        'Condensed Wave Cannon Kyrios': '高出力波動砲P',
        'Delta Attack': 'デルタアタック',
        'Diffuse Wave Cannon Kyrios': '拡散波動砲P',
        'Dual Storage Violation': '記憶汚染除去P',
        'Electric Slide': 'オメガスライド',
        'Executable': 'プログラム実行',
        'Ferrofluid': 'マグネット',
        'Flamethrower': '火炎放射',
        'Force Quit': '強制終了',
        'Guided Missile Kyrios': '誘導ミサイルP',
        'Long Needle Kyrios': '大型ミサイルP',
        '(?<! )Loop': 'サークル',
        'Magnetism': '磁力',
        'Mustard Bomb': 'マスタードボム',
        'Pantokrator': 'パントクラトル',
        'Peripheral Synthesis': 'プリントアウト',
        'Program Loop': 'サークルプログラム',
        'Reformat': '最適化',
        'Repel': '反発',
        'Reset': '初期化',
        'Rush': '突進',
        'Starboard/Larboard Cannon': '右舷/左舷・波動砲',
        'Starboard/Larboard Surge': '右舷/左舷・零式波動砲',
        '(?<! )Storage Violation': '記憶汚染除去S',
        'Unmitigated Explosion': '大爆発',
        'Update Program': 'サークルプログラム更新',
        '(?<! )Wave Cannon Kyrios': '波動砲P',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Level Checker': '等级检测仪',
        'Omega': '欧米茄',
        'Rocket Punch': '火箭飞拳',
      },
      'replaceText': {
        'Afterburner': '燃烧室排热',
        'Atomic Ray': '原子射线',
        'Ballistic Impact': '导弹命中',
        'Ballistic Missile': '导弹发射',
        'Blaster': '冲击波',
        'Charybdis': '大漩涡',
        'Condensed Wave Cannon Kyrios': '大功率波动炮P',
        'Delta Attack': '三角攻击',
        'Diffuse Wave Cannon Kyrios': '扩散波动炮P',
        'Dual Storage Violation': '清除记忆污染P',
        'Electric Slide': '欧米茄滑跃',
        'Executable': '运行程序',
        'Ferrofluid': '磁铁',
        'Flamethrower': '火炎放射',
        'Force Quit': '强制结束',
        'Guided Missile Kyrios': '跟踪导弹P',
        'Long Needle Kyrios': '大型导弹P',
        '(?<! )Loop': '空翻',
        'Magnetism': '磁力',
        'Mustard Bomb': '芥末爆弹',
        'Pantokrator': '全能之主',
        'Peripheral Synthesis': '生成外设',
        'Program Loop': '循环程序',
        'Reformat': '最优化',
        'Repel': '相斥',
        'Reset': '初始化',
        'Rush': '突进',
        'Starboard/Larboard Cannon': '右/左舷齐射·波动炮',
        'Starboard/Larboard Surge': '右/左舷齐射·零式波动炮',
        '(?<! )Storage Violation': '清除记忆污染S',
        'Unmitigated Explosion': '大爆炸',
        'Update Program': '更新循环程序',
        '(?<! )Wave Cannon Kyrios': '波动炮P',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Level Checker': '레벨 측정기',
        'Omega': '오메가',
        'Rocket Punch': '로켓 주먹',
      },
      'replaceText': {
        'Afterburner': '재연소 장치',
        'Atomic Ray': '원자 파동',
        'Ballistic Impact': '미사일 착탄',
        'Ballistic Missile': '미사일 발사',
        'Blaster': '블래스터',
        'Charybdis': '대소용돌이',
        'Condensed Wave Cannon Kyrios': '고출력 파동포 P',
        'Delta Attack': '델타 공격',
        'Diffuse Wave Cannon Kyrios': '확산 파동포 P',
        'Dual Storage Violation': '기억 오염 제거 P',
        'Electric Slide': '오메가 슬라이드',
        'Executable': '프로그램 실행',
        'Ferrofluid': '자석',
        'Flamethrower': '화염방사',
        'Force Quit': '강제 종료',
        'Guided Missile Kyrios': '유도 미사일 P',
        'Long Needle Kyrios': '대형 미사일 P',
        '(?<! )Loop': '순환',
        'Magnetism': '자력',
        'Mustard Bomb': '겨자 폭탄',
        'Pantokrator': '전지전능',
        'Peripheral Synthesis': '출력',
        'Program Loop': '순환 프로그램',
        'Reformat': '최적화',
        'Repel': '반발',
        'Reset': '초기화',
        'Rush': '돌진',
        'Starboard/Larboard Cannon': '좌/우현 파동포',
        'Starboard/Larboard Surge': '좌/우현 0식 파동포',
        '(?<! )Storage Violation': '기억 오염 제거 S',
        'Unmitigated Explosion': '대폭발',
        'Update Program': '프로그램 업데이트',
        '(?<! )Wave Cannon Kyrios': '파동포 P',
      },
    },
  ],
}];
