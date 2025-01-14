import test from 'ava';
import strGetContent from '../src/str-get-content';

test('it should return simple content', t => {
  const expected = {
    before: '',
    map: 'body:#fff,main-red:#c53831,link-blue:#0592fb',
    key: 'body',
    after: ''
  };

  const value = 'map-get((body:#fff,main-red:#c53831,link-blue:#0592fb),body)';

  t.deepEqual(strGetContent(value), expected);
});

test('it should return content with parenthesis', t => {
  const expected = {
    before: '(min-width:',
    map: 'xxs:0,xs:576px,sm:768px,md:992px,lg:1280px,xl:1360px,xxl:1600px',
    key: 'lg',
    after: ')'
  };

  const value = '(min-width:map-get((xxs:0,xs:576px,sm:768px,md:992px,lg:1280px,xl:1360px,xxl:1600px),lg))';

  t.deepEqual(strGetContent(value), expected);
});
