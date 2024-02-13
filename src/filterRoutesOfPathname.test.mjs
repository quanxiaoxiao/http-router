import test from 'node:test';
import assert from 'node:assert';
import generateRouteList from './generateRouteList.mjs';
import filterRoutesOfPathname from './filterRoutesOfPathname.mjs';

test('filterRoutesOfPathname', () => {
  assert.throws(() => {
    filterRoutesOfPathname([], 'aaa');
  });
  assert.equal(
    filterRoutesOfPathname(generateRouteList({}), '/').length,
    0,
  );
  assert.equal(
    filterRoutesOfPathname(generateRouteList({
      '/rice': {},
      '/quan': {},
    }), '/quan').length,
    1,
  );
  assert.equal(
    filterRoutesOfPathname(generateRouteList({
      '/rice': {},
      '/quan/(foo|bar)': {},
    }), '/quan').length,
    0,
  );
  assert.equal(
    filterRoutesOfPathname(generateRouteList({
      '/quan/(foo|bar)': {},
    }), '/quan').length,
    0,
  );
  assert.equal(
    filterRoutesOfPathname(generateRouteList({
      '/quan/(foo|bar)': {},
    }), '/quan/big').length,
    0,
  );
  assert.equal(
    filterRoutesOfPathname(generateRouteList({
      '/quan/(foo|bar)': {},
    }), '/quan/foo').length,
    1,
  );
});
