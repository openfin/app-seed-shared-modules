/**
 * Created by grahamclapham on 19/07/16.
 */
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils.js';
import ReactHeader from '../src/js/components/common-header.js';

beforeEach(()=>{

});

describe('ReactHeader', function () {
    it('renders without problems', function () {
        var header = TestUtils.renderIntoDocument(<ReactHeader/>);
        expect(header).toBeTruthy();
    });

    it('renders displays the correct header text', function () {

        var headerText = TestUtils.renderIntoDocument(<ReactHeader
            headline={"Testing header"}
            subHeadline={"testing subHeadline"}/>);

        var mainHeader = TestUtils.findRenderedDOMComponentWithClass(headerText, "main-header");
        var subHeader = TestUtils.findRenderedDOMComponentWithClass(headerText, "sub-header");

        expect(mainHeader).toBeTruthy();
        expect(subHeader).toBeTruthy();
        expect(mainHeader.textContent).toEqual('Testing header');
        expect(subHeader.textContent).toEqual('testing subHeadline');
    });

});




