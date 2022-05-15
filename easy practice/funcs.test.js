describe("easy tests for practice", function(){
    it('should add two numbers together', function(){
        expect(addValues(2, 2)).toEqual(4);
        expect(addValues(0, 0)).toEqual(0);
        expect(addValues('l', 0)).toEqual('l0');
    })

    it('should add an item to the end of an existing array', function(){
        expect(addToArray([8, 5, true, 'lizard'], 'beyonce'),).toEqual([8, 5, true, 'lizard', 'beyonce']);
        expect(addToArray([], '')).toEqual([''])
        expect(addToArray([])).toEqual([undefined])
    })

    it('should input a comment and add 3 exclamation makrs', function(){
        expect(greet('I like chocolate')).toEqual('I like chocolate!!!');
        expect(greet(33)).toEqual('33!!!');
    })
})