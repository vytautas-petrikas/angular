/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

const u = undefined;

function plural(n: number): number {
  if (n === 1) return 1;
  return 5;
}

export default [
  'ky', [['тң', 'тк'], u, ['таңкы', 'түштөн кийинки']], u,
  [
    ['Ж', 'Д', 'Ш', 'Ш', 'Б', 'Ж', 'И'],
    ['жек.', 'дүй.', 'шейш.', 'шарш.', 'бейш.', 'жума', 'ишм.'],
    [
      'жекшемби', 'дүйшөмбү', 'шейшемби', 'шаршемби',
      'бейшемби', 'жума', 'ишемби'
    ],
    ['жш.', 'дш.', 'шш.', 'шр.', 'бш.', 'жм.', 'иш.']
  ],
  u,
  [
    ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
    [
      'янв.', 'фев.', 'мар.', 'апр.', 'май', 'июн.', 'июл.', 'авг.',
      'сен.', 'окт.', 'ноя.', 'дек.'
    ],
    [
      'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
      'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь',
      'декабрь'
    ]
  ],
  [
    ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
    [
      'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен',
      'Окт', 'Ноя', 'Дек'
    ],
    [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь',
      'Декабрь'
    ]
  ],
  [
    ['б.з.ч.', 'б.з.'], u,
    ['биздин заманга чейин', 'биздин заман']
  ],
  1, [6, 0], ['d/M/yy', 'y-\'ж\'., d-MMM', 'y-\'ж\'., d-MMMM', 'y-\'ж\'., d-MMMM, EEEE'],
  ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1} {0}', u, u, u],
  [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'сан эмес', ':'],
  ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'], 'сом', 'Кыргызстан сому', {
    'AUD': [u, '$'],
    'BMD': [u, 'BD$'],
    'BRL': [u, 'R$'],
    'BSD': [u, 'B$'],
    'BZD': [u, 'BZ$'],
    'CAD': [u, 'C$'],
    'DOP': [u, 'RD$'],
    'EGP': [u, 'LE'],
    'GBP': [u, '£'],
    'HKD': [u, 'HK$'],
    'HRK': [u, 'Kn'],
    'ILS': [u, '₪'],
    'INR': [u, '₹'],
    'JMD': [u, 'J$'],
    'JPY': ['JP¥', '¥'],
    'KGS': ['сом'],
    'KRW': [u, '₩'],
    'MXN': [u, '$'],
    'NZD': [u, '$'],
    'THB': ['฿'],
    'TTD': [u, 'TT$'],
    'TWD': [u, 'NT$'],
    'USD': [u, '$'],
    'XCD': [u, '$']
  },
  plural
];
