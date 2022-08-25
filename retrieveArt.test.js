const retrieveArt = require('./retrieveArt');

test('Toolbox art', () => {
  retrieveArt().then(data => {
    expect(data).not.toBe();
    expect(data.objectName).toBe('Tiered box');
    expect(data.culture).toBe('China');
    expect(data.department).toBe('Asian Art');
  });
})