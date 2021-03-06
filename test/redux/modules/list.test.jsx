/* global describe it */

import expect from 'expect';

import reducer, {
    GET,
    FAILED
} from 'redux/modules/list';

describe('Modules::List', () => {

    it('should return default state if did not match any action type', () => {
        const stateBefore = undefined;
        const action = {};
        const stateAfter = [];
        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
    it('should return correct state if match GET type', () => {
        const stateBefore = [];
        const action = {
            type: GET,
            data: [{
                id: 1,
                title: 'Title A',
                body: 'Body A',
            }],
        };
        expect(reducer(stateBefore, action)[0]).toIncludeKeys([
            'id', 'title', 'link', 'desc', 'img',
        ]);
    });
    it('should return correct state if match FAILED type', () => {
        const stateBefore = [];
        const action = {
            type: FAILED,
        };
        expect(reducer(stateBefore, action)[0]).toIncludeKeys([
            'id', 'title', 'link', 'desc', 'img',
        ]);
    });
});
