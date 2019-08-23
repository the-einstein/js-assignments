const utils = require("../index.js");

describe("MyJSUtilities", function() {
    const users = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true },
       /* { 'user': 'barney1', 'age': 36, 'active': true },
        { 'user': 'fred1',   'age': 40, 'active': false }*/  
      ];
    const arr = [
      1,
      2,
      3,
      4,
      "a",
      "b",
      "c",
      "d",
      ];
    
    describe("Array Utils", function() {
          it("Test for Chunk",function() {
            expect(utils.chunk).toBeDefined();
            expect(utils.chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
            expect(utils.chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
          });
          it("Test for Compact",function() {
            expect(utils.compact).toBeDefined();
            expect(utils.compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
          });
          it("Test for Drop",function() {
            expect(utils.drop).toBeDefined();
            expect(utils.drop([1, 2, 3])).toEqual([2, 3]);
            expect(utils.drop([1, 2, 3], 2)).toEqual([3]);
            expect(utils.drop([1, 2, 3], 5)).toEqual([]);
            expect(utils.drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
          });
          it("Test for DropWhile",function() {
            expect(utils.dropWhile).toBeDefined();
            expect(utils.dropWhile(users, function(o) { return !o.active; })).toEqual([users[2]]);
            expect(utils.dropWhile(users, { 'user': 'barney', 'active': false })).toEqual([users[1], users[2]]);
          });
          it("Test for Take",function() {
            expect(utils.take).toBeDefined();
            expect(utils.take([1,2,1,5,4,8,4],3)).toEqual([1,2,1]);
            expect(utils.take(["a",4, "adjbvgshdfv", 4,6,,8],4)).toEqual(["a",4, "adjbvgshdfv", 4]);
            expect(utils.take([2,3,5], 6)).toEqual([2,3,5]);
          });
          it("Test for Filter",function() {
            expect(utils.filter).toBeDefined();
            expect(utils.filter(users, function(o) { return !o.active; })).toEqual([users[0], users[1]]);
            expect(utils.filter(users, { 'age': 36, 'active': false })).toEqual();
            expect(utils.filter(users, ['active', false])).toEqual();
            expect(utils.filter(users, 'active')).toEqual();
          });
          it("Test for Find",function() {
            expect(utils.find).toBeDefined();
            expect(utils.find(users, function(o) { return o.age < 40; })).toEqual(1);
            expect(utils.find(users, { 'age': 1, 'active': true })).toEqual();
            expect(utils.find(users, ['active', false])).toEqual();
            expect(utils.find(users, 'active')).toEqual();
          });
          it("Test for Includes",function() {
            expect(utils.includes).toBeDefined();
            expect(utils.includes([1, 2, 3], 1)).toBeTruthy();
            expect(utils.includes([1, 2, 3], 1, 2)).toBeFalsy();
            expect(utils.includes({ 'a': 1, 'b': 2 }, 1)).toBeTruthy();
            expect(utils.includes('abcd', 'bc')).toBeTruthy();
          });
          function square(n) {
            return n * n;
          }
          const mapusers = [
            { 'user': 'barney' },
            { 'user': 'fred' }
          ];
          it("Test for Map",function() {
            expect(utils.map).toBeDefined();
            expect(utils.map([4, 8], square)).toEqual([16,64]);
            expect(utils.map({ 'a': 4, 'b': 8 }, square)).toEqual([16,64]);
            expect(utils.map(mapusers, 'user')).toEqual(["barney", "fred"]);
          });
          it("Test for Zip",function() {
            expect(utils.zip).toBeDefined();
            expect(utils.zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
          });
       });
       


       describe("Object Utils", function() {
        const object = {
          'a': [{ 'b': 2 }, { 'd': 4 }]
        };
         
        const other = {
          'a': [{ 'c': 3 }, { 'e': 5 }]
        };
        it("Test for Merge",function() {
            expect(utils.merge).toBeDefined();
            expect(utils.merge(object, other)).toEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
          });
          it("Test for Omit",function() {
            expect(utils.omit).toBeDefined();
            expect(utils.omit({ 'a': 1, 'b': '2', 'c': 3 },['a', 'c'])).toEqual({'b':'2'});
          });
          it("Test for OmitBy",function() {
            expect(utils.omitBy).toBeDefined();
            expect(utils.omitBy({ 'a': 1, 'b': '2', 'c': 3 }, _.isNumber)).toEqual({'b':'2'});
          });
          it("Test for Pick",function() {
            expect(utils.pick).toBeDefined();
            expect(utils.pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
          });
          it("Test for PickBy",function() {
            expect(utils.pickBy).toBeDefined();
            expect(utils.pickBy({ 'a': 1, 'b': '2', 'c': 3 }, _.isNumber)).toEqual({ 'a': 1, 'c': 3 });
          });
          function Foo() {
            this.a = 1;
            this.b = 2;
          }
           
          Foo.prototype.c = 3;
          it("Test for ToPairs",function() {
            expect(utils.toPairs).toBeDefined();
            expect(utils.toPairs(new Foo)).toEqual( [['a', 1], ['b', 2]]);
          });
          it("Test for Identity",function() {
            expect().nothing();
          });
          it("Test for Negate",function() {
            expect().nothing();
          });
          it("Test for SameValueZero",function() {
            expect().nothing();
          });
          it("Test for Matches",function() {
            expect().nothing();
          });
          it("Test for MatchesProperty",function() {
            expect().nothing();
          });
          it("Test for Iteratee",function() {
            expect().nothing();
          });
          it("Test for Property",function() {
            expect().nothing();
          });
          it("Test for Push",function() {
            expect().nothing();
          });
       });
       

   });
   