'use strict';

QUnit.module('[Tree] tests:',  () => {
    QUnit.test('test1', function (assert) {
        assert.strictEqual(sort('яяя'), 'Яяя', 'Работает с русским алфавитом');
        assert.strictEqual(sort('Бббббб'), 'Бббббб');
        assert.strictEqual(sort('zzzzzz'), 'Zzzzzz', 'Работает с английским алфавитом');
        assert.strictEqual(sort('Rrrrrrrr'), 'Rrrrrrrr');
    });

    QUnit.test('test2', function (assert) {
        assert.strictEqual(sort('ЯЯЯЯ'), 'Яяяя', 'Работает с русским алфавитом');
        assert.strictEqual(sort('zZzZZzzZZZ'), 'Zzzzzzzzzz', 'Работает с английским алфавитом');
    });

    QUnit.test('test3', function (assert) {
        assert.strictEqual(sort('ЯЯЯ яяя яяя яяя'), 'Яяя Яяя Яяя Яяя');
        assert.strictEqual(sort('яяя яяяяя ЯЯЯЯ ЯяяяЯЯЯяя'), 'Яяя Яяяя Яяяяя Яяяяяяяяя');
    });

    QUnit.test('test4', function (assert) {
        assert.strictEqual(sort('fedcba'), 'Abcdef', 'Работает с английским алфавитом');
        assert.strictEqual(sort('zyxwvu'), 'Uvwxyz');
        assert.strictEqual(sort('жёедгвба'), 'Абвгдеёж', 'Работает с русским алфавитом');
        assert.strictEqual(sort('вбава'), 'Аабвв');
    });

    QUnit.test('test5', function (assert) {
        assert.strictEqual(sort('f e d c b a'), 'A B C D E F', 'Работает с английским алфавитом');
        assert.strictEqual(sort('z y x w v u'), 'U V W X Y Z');
        assert.strictEqual(sort('ж ё е д г в б а'), 'А Б В Г Д Е Ё Ж', 'Работает с русским алфавитом');
        assert.strictEqual(sort('в б а в а'), 'А А Б В В');
    });

    QUnit.test('test6', function (assert) {
        assert.strictEqual(sort('мама мыла раму'), 'Аамм Алмы Амру');
        assert.strictEqual(sort('космический корабль летит на марс'), 'Абклорь Амрс Ан Еиийккмоссч Еилтт');
        assert.strictEqual(sort('i love frontend'), 'Defnnort Elov I');
        assert.strictEqual(sort('hello world'), 'Dlorw Ehllo');
    });
});
