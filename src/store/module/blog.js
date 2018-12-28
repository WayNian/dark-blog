import http from "../../http/";

const state = {
  blogList: [],
  hotBlogList: [],
  blogInfo: {}
};

const mutations = {
  setBlogList(state, data) {
    state.blogList = data;
  },
  setHotBlogList(state, data) {
    state.hotBlogList = data;
  },
  setBlogInfo(state, data) {
    state.blogInfo = data;
  }
};

const actions = {
  getBlogList({ commit }) {
    return new Promise(resolve => {
      http
        .post("blog/list", {})
        .then(res => {
          commit("setBlogList", res.data.blogList);
          resolve();
        })
        .catch(() => {});
    });
  },
  getHotBlogList({ commit }) {
    return new Promise(resolve => {
      http
        .post("blog/hot-list", {})
        .then(res => {
          commit("setHotBlogList", res.data.hotBlogList);
          resolve();
        })
        .catch(() => {});
    });
  },
  getBlogInfo({ commit }, id) {
    return new Promise(resolve => {
      http
        .post("blog/info", { id })
        .then(res => {
          commit("setBlogInfo", res.data.blogInfo);
          resolve();
        })
        .catch(() => {});
    });
  },
  createBlog({}, blogInfo) {
    return new Promise(resolve => {
      http
        .post("blog/write", { ...blogInfo })
        .then(() => {
          resolve();
        })
        .catch(() => {});
    });
  },
  //TODO 做函数防抖
  addReadNum({}, id) {
    return new Promise(resolve => {
      http
        .post("blog/count", { id })
        .then(() => {
          resolve();
        })
        .catch(() => {});
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
