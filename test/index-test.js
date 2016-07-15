import Header from '../src/js/vanilla_conmponents/vanilla-header.js';

describe("A suite of tests for your OpenFin app", function(){
    it("Should say true is true", ()=>{
        expect(true).toEqual(true);
    });
});

describe("The Vanilla Header component should render", ()=>{
    let _header1 = Header.create();
    let _header2 = Header.create();

    _header1.setText("text 1");
    _header2.setText("text 2");

    it("Header should exist", ()=>{
        expect(_header1).not.toBe(null);
    });

    it("_header1 get text should return 'text 1'", ()=>{
        expect(_header1.getText()).toEqual("text 1");
    });

    it("_header2 get text should return 'text 2'", ()=>{
        expect(_header2.getText()).toEqual("text 2");
    });

    it("Header should have a render method", ()=>{
        expect(typeof _header1.render).toBe("function")
    });
});


describe("Passing a config should pass those properties to the created Object", ()=>{
    let _header3 = Header.create({text:"Config text"});

    let _target = document.createElement('div');
    _header3.render(_target);
    it("Should have properties set via the config", ()=>{
        expect(_header3.getText()).toEqual("Config text");
    })
});

