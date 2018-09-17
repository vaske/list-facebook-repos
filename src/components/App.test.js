import React from 'react';
import { Provider } from 'react-redux';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import configureMockStore from 'redux-mock-store';
import ConnectedApp, {App} from './App';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
    details: {
        repos: [],
        selectedRepository: undefined,
        contributors: [],
        loadingContributors: undefined
    }
  };

const mockStore = configureMockStore();
const store = mockStore(initialState);

describe("Test App {age Component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = Enzyme.mount(<Provider store={store}><ConnectedApp /></Provider>);
    });

    it("should confirm that App component is present", () => {
        expect(wrapper.find(ConnectedApp).length).toEqual(1)
    });
});
