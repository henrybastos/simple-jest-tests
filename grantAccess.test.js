const grantAccess = require('./grantAccess');

test('Check if police has access.', () => {
  expect(grantAccess('police')).toBe(true);
})

test('Check if firefighter has NO access.', () => {
  expect(grantAccess('firefighter')).toBe(false);
})

test('Check if butcher has NO access.', () => {
  expect(grantAccess('butcher')).not.toBeTruthy();
})

test('Check if baker has NO access.', () => {
  expect(grantAccess('baker')).toBeFalsy();
})
