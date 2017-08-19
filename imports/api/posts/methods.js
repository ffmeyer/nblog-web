// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';

Meteor.methods({
    getPosts: function () {
        var url = `${apiUrl}/api/posts`;
        var response = HTTP.get(url).data;
        // console.log(response);
        return response;
    },
    savePost: function (post) {
        var url = `${apiUrl}/api/posts`;

        HTTP.post(url, {
            data: post
        }, (error, result) => {
            if (!error) {
                return !error;
            }
        });
    },
    getPost: function (id) {
        var url = `${apiUrl}/api/posts/${id}`;
        var response = HTTP.get(url).data;
        // console.log(response);
        return response;
    },
    deletePost: function (id) {
        var url = `${apiUrl}/api/posts/${id}`;
        console.log(apiUrl)
        var results = HTTP.del(url, function (error, result) {
            if (error) {
                return error.response.status;
            }
        });
    },
    updatePost: function (id, post) {
        Posts.update({ _id: id }, post);
    }
});

