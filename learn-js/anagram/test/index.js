'use strict';

QUnit.module('[Anargam] tests:',  () => {
    QUnit.test('find anagram', assert => {
        const input = [
            'стоп', 'ток', 'кошка',
            'пила', 'коробка', 'кот',
            'барокко', 'пост', 'липа'
        ];

        const output = [
            ['барокко', 'коробка'],
            ['кот', 'ток'],
            ['липа', 'пила'],
            ['пост', 'стоп']
        ];

        assert.deepEqual(anagram(input), output);
    });

    QUnit.test('empty result', assert => {
        assert.deepEqual(anagram(['кот']), []);
    });
});
