import {formatCurrency} from '../scripts/utils/money.js'

if(formatCurrency(2090) === '20.90')
    console.log('passed');

else
    console.log('failed');