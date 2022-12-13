import { store } from 'quasar/wrappers';
import {
  createStore,
  Module,
  createComposable,
  Getters,
  Mutations,
} from 'vuex-smart-module';

class RootState {
  count = 1
}

class RootGetters extends Getters<RootState> {
  // @ts-ignore
  get count() {
    return this.state.count;
  }

  multiply(multiplier: number) {
    return this.state.count * multiplier;
  }
}

class RootMutations extends Mutations<RootState> {
  add(payload: number) {
    this.state.count += payload;
  }
}

const rootConfig = {
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  modules: {
    //
  },
};

export const root = new Module(rootConfig);

export default store(function (/* { ssrContext } */) {
  const rootStore = createStore(root, {
    strict: !!process.env.DEBUGGING,
    // plugins: []
    // and other options, normally passed to Vuex `createStore`
  });

  return rootStore;
});

export const useStore = createComposable(root);
