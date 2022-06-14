require('../src');

describe('api.basic test', () => {
  test('test has method should get right value', function () {
    const someApiV1 = {
      deleted: false,
      set: function (value) {
        this.deleted = value;
      },
      setter: function (value) {
        console.warn('delete is deprecated, use set instead');
        this.del(value);
      }
    };

    expect(someApiV1.deleted).toBe(false);
    nx.tryExecute(someApiV1, [null], ['set', 'setter']);
    expect(someApiV1.deleted).toBe(null);
  });

  test('test no method should get nx.NO_METHOD', function () {
    const someApiV1 = {
      deleted: false,
      set: function (value) {
        this.deleted = value;
      },
      setter: function (value) {
        console.warn('delete is deprecated, use set instead');
        this.del(value);
      }
    };

    const res = nx.tryExecute(someApiV1, [null], ['get', 'getter']);
    expect(res).toBe(nx.NO_METHOD);
  });
});
