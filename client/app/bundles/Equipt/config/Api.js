import axios from 'axios';

import AuthStore from 'stores/AuthStore';
import NoticeStore from 'stores/NoticeStore';

import NoticeActions from 'actions/NoticeActions';
import AuthActions from 'actions/AuthActions';

export default {

	path: '/api',

	get: function(url) {
		return new Promise((resolve, reject) => {
			this.send(url, 'GET')
			.then((res, apiKey) => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
	},

	post: function(url, data, options) {
		return new Promise((resolve, reject) => {
			this.send(url, 'POST', data, options)
			.then((res, apiKey) => {
				resolve(res, apiKey);
			}, (err) => {
				reject(err);
			});
		});
	},

	put: function(url, data, options) {
		return new Promise((resolve, reject) => {
			this.send(url, 'PUT', data, options)
			.then((res, apiKey) => {
				resolve(res, apiKey);
			}, (err) => {
				reject(err);
			});
		});
	},

	delete: function(url) {
		return new Promise((resolve, reject) => {
			this.send(url, 'DELETE')
			.then((res, apiKey) => {
				resolve(res, apiKey);
			}, (err) => {
				reject(err);
			});
		});
	},

	send: function(url, method, data, options = {}) {

		return new Promise((resolve, reject) => {

			let ApiKey = AuthStore.getApiKey();

			var ajaxObj = {
				url: this.path + url,
				method: method,
				responseType: options.isMultipart ? false : 'application/json',
 				cache: false,
  				processData: false,
				data: options.data ? options.data : JSON.stringify(data),
				headers: { 'AUTHORIZATION': ApiKey || null }	
			};

			axios(ajaxObj)
			.then((res, status, xhr) => {
				if (res.errors) return NoticeActions.hasErrors(res.errors);
				else if (res.notice) NoticeActions.hasNotice(res.notice);
				resolve(res);
			})
			.catch((err) => {
				if (err.status === 500 || err.status === 401) {
					this.apiKey = null;
					AuthActions.unauthorizedUser();
				}
				reject(err);
			});

		});

	}

};

