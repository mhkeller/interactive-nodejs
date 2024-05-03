import { readDataSync } from 'indian-ocean';
import notify from '@mhkeller/notify';
import * as aq from 'arquero';
import * as vl from 'vega-lite-api';
import { plotVega } from '@mhkeller/plot';

/**
 * Read in the data file and view it
 */
notify({ m: 'Reading data...', d: 'header' });
const data = readDataSync('./data/athletes.json');

console.log(data);
debugger;

/**
 * Calc average number of golds per country
 */
const goldsPerCountry = aq.from(data)
	.groupby('nationality')
	.rollup({ total_golds: aq.op.sum('gold') })
	.orderby(aq.desc('total_golds'))
	.print();
debugger

/**
 * Plot top the 10 countries
 */
const topCountries = goldsPerCountry.objects()
	.slice(0, 10);

const chart = vl
	.markBar()
	.description('Top ten gold medalist countries.')
	.data(topCountries)
	.encode(
		vl.x().fieldO('nationality'),
		vl.y().fieldQ('total_golds')
	);

await plotVega(chart, {
	outPath: './output/top-10-countries.png',
});
debugger
