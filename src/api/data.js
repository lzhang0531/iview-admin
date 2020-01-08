import axios from '@/libs/api.request'
import axiosOrigin from 'axios'
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

axiosOrigin.defaults.baseURL = baseUrl

export const getCategoryPage = (access) => {
  return axios.request({
    url: '/api/category/page',
    method: 'get',
    params: access
  })
}
export const getCategoryList = () => {
  return axios.request({
    url: '/api/category/list',
    method: 'get'
  })
}

export const addCategory = (access) => {
  return axiosOrigin.post('/api/category/add', access)
}

export const updateCategory = (access) => {
  return axiosOrigin.put('/api/category/update', access)
}

export const deleteCategory = (id) => {
  return axios.request({
    url: '/api/category/' + id,
    method: 'DELETE'
  })
}

export const getVideoPage = (access) => {
  return axios.request({
    url: '/api/video/page',
    method: 'get',
    params: access
  })
}

export const addVideo = (access) => {
  return axiosOrigin.post('/api/video/save', access)
}

export const updateVideo = (access) => {
  return axiosOrigin.put('/api/video/update', access)
}

export const stickyVideo = (access) => {
  return axiosOrigin.put('/api/video/sticky', access)
}
export const cancelStickyVideo = (access) => {
  return axiosOrigin.put('/api/video/cancel-sticky', access)
}

export const deleteVideo = (id) => {
  return axios.request({
    url: '/api/video/' + id,
    method: 'DELETE'
  })
}

export const getUserPage = (access) => {
  return axios.request({
    url: '/api/user/page',
    method: 'get',
    params: access
  })
}
export const setSale = (access) => {
  return axiosOrigin.put('/api/user/set-sale', access)
}
export const cancelSale = (access) => {
  return axiosOrigin.put('/api/user/cancel-sale', access)
}
export const openMember = (access) => {
  return axiosOrigin.put('/api/user/open-member', access)
}
export const closeMember = (access) => {
  return axiosOrigin.put('/api/user/close-member', access)
}
export const deleteUser = (id) => {
  return axios.request({
    url: '/api/user/' + id,
    method: 'DELETE'
  })
}
export const getOrderPage = (access) => {
  return axios.request({
    url: '/api/order/page',
    method: 'get',
    params: access
  })
}
export const setPaymentAmount = (access) => {
  return axiosOrigin.post('/api/order/set-payment-amount', access)
}
export const getPaymentAmount = (access) => {
  return axios.request({
    url: '/api/order/get-payment-amount',
    method: 'get'
  })
}
export const getFeedbackPage = (access) => {
  return axios.request({
    url: '/api/feedback/page',
    method: 'get',
    params: access
  })
}
export const dealFeedback = (access) => {
  return axiosOrigin.put('/api/feedback/deal', access)
}
export const getInvitePage = (access) => {
  return axios.request({
    url: '/api/user/page-invite',
    method: 'get',
    params: access
  })
}
export const getUserstatistics = (access) => {
  return axios.request({
    url: '/api/user/statistics',
    method: 'get',
    params: access
  })
}

export const getDragList = () => {
  return axios.request({
    url: '/mock/get_drag_list',
    method: 'get'
  })
}

export const errorReq = () => {
  return axios.request({
    url: '/mock/error_url',
    method: 'post'
  })
}

export const saveErrorLogger = info => {
  return axios.request({
    url: '/mock/save_error_logger',
    data: info,
    method: 'post'
  })
}

export const uploadImg = formData => {
  return axios.request({
    url: 'image/upload',
    data: formData
  })
}

export const getOrgData = () => {
  return axios.request({
    url: '/mock/get_org_data',
    method: 'get'
  })
}

export const getTreeSelectData = () => {
  return axios.request({
    url: '/mock/get_tree_select_data',
    method: 'get'
  })
}

export const getTableData = () => {
  return axios.request({
    url: 'get_table_data',
    method: 'get'
  })
}
