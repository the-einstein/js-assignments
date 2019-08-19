const utils = require("../index.js");

describe("MyJSUtilities", function() {
    const users = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
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
          });
          it("Test for Take",function() {
            expect().nothing();
          });
          it("Test for Filter",function() {
            expect().nothing();
          });
          it("Test for Find",function() {
            expect().nothing();
          });
          it("Test for Includes",function() {
            expect().nothing();
          });
          it("Test for Map",function() {
            expect().nothing();
          });
          it("Test for Zip",function() {
            expect().nothing();
          });
       });
       


       describe("Object Utils", function() {
        it("Test for Merge",function() {
            expect().nothing();
          });
          it("Test for Omit",function() {
            expect().nothing();
          });
          it("Test for OmitBy",function() {
            expect().nothing();
          });
          it("Test for Pick",function() {
            expect().nothing();
          });
          it("Test for PickBy",function() {
            expect().nothing();
          });
          it("Test for ToPairs",function() {
            expect().nothing();
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
   