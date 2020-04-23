mocha.setup('bdd');

    describe('_includes', () => {
        const incl = [55, '66', NaN,"str", true, 0.0101, undefined, Infinity, -Infinity, null, "object", Math];
        const test = [44, '66', NaN,"str", true, 0.001, undefined, Infinity, -Infinity, null, "object", Math];
            test.map(el=>{
                it(`[55, '66', NaN,"str", true, 0.0101, undefined, Infinity, -Infinity, null, "object", Math]._includes(${el}) == ${incl.includes(el)}`, () => {
                    chai.assert.equal(incl.includes(el), _includes(incl, el));
                });
            })    
    });
    
    describe('_join', () => {
        it("[111,222,333] == 111222333", () => {   
            chai.assert.equal([111,222,333].join(''),_join([111,222,333], ''));
        });
    
        it(`[1,"word",3,"letter",1] == 1word3letter1`, () => {    
            chai.assert.equal([1,'word',3,'letter',1].join(''),_join([1,'word',3,'letter',1], ''));
        });
    
        it(`[55,"",22] == 5522`, () => {    
            chai.assert.equal([55,"",22].join(''),_join([55,"",22], ''));
        });
         
         it(`[7,undefined,7] == 77`, () => {    
            chai.assert.equal([7,undefined,7].join(''),_join([7,undefined,7], ''));
        });
         
         it(`[7,null,7] == 77`, () => {   
            chai.assert.equal([7,null,7].join(''),_join([7,null,7], ''));
        });
         
        it(`[7,true,false,7] == 7truefalse7`, () => {  
            chai.assert.equal([7,true,false,7].join(''),_join([7,true,false,7], ''));
        });
        
        it(`[7,NaN,7] == 7NaN7`, () => {   
            chai.assert.equal([7,NaN,7].join(''),_join([7,NaN,7], ''));
        });
        
        it(`[7,[],7] == 77`, () => {  
            chai.assert.equal([7,[],7].join(''),_join([7,[],7], ''));
        });
        
        it(`[7,[...a],7] == 7a7`, () => {   
            chai.assert.equal([7,[...'a'],7].join(''),_join([7,[...'a'],7], ''));
        });

        it(`[7,6,7] == 7+6+7 (with separator +)`, () => {   
            chai.assert.equal([7,[...'a'],7].join('+'),_join([7,[...'a'],7], '+'));
        });

        it(`[7,6,7] == 7NaN6NaN7 (with separator NaN)`, () => {   
            chai.assert.equal([7,[...'a'],7].join(NaN),_join([7,[...'a'],7], NaN));
        });

        it(`[7] == 7 (with separator +)`, () => {   
            chai.assert.equal([7].join('+'),_join([7], '+'));
        });
    });

    mocha.run();