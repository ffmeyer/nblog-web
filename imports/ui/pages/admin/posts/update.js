// import { Posts } from '/imports/api/posts/posts.js';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import './update.html';

Template.Adm_postUpdate.onCreated(function () {
    Meteor.subscribe('posts.all');
});

Template.Adm_postUpdate.onRendered(function () {
    $(".select-categorie").select2({
        placeholder: "  Selecione uma categoria",
        allowClear: true
    });
    $(".select-coach").select2({
        placeholder: "  Selecione um instrutor",
        allowClear: true
    });

    $('#form-update').validate({
        messages: {
            name: { required: 'o nome do curso é obrigatório.' },
            description: { required: 'a descrição é obrigatória.' },
            preConditions: { required: 'a pré-condição é obrigatória.' },
            alias: { required: 'o alias é obrigatório.' },
        }
    });

    toastr.options = {
        "closeButton": true,
        "progressBar": true
    };

});

Template.Adm_postUpdate.helpers({
    post() {
        return Posts.findOne({ '_id': FlowRouter.getParam('_id') });
    },
    isSelectedList: function (arr, opt) {
        if (arr) {
            return arr.includes(opt) ? 'selected' : '';
        }
    },
    categorieList: function () {
        Meteor.call('getCategories', function (err, res) {
            if (err) {
                toastr.error('Ops. ' + error.error);
            } else {
                Session.set('categories', res);
                return;
            }
        });
        return Session.get('categories');
    },
    coachList: function () {
        Meteor.call('getCoaches', function (err, res) {
            if (err) {
                toastr.error('Ops. ' + error.error);
            } else {
                Session.set('coaches', res);
                return;
            }
        });
        return Session.get('coaches');
    }
})

Template.Adm_postUpdate.events({
    'click #status': function (event, template) {
        var t = event.currentTarget.getAttribute('checked');
        if (t === 'true') {
            event.currentTarget.setAttribute("checked", "false")
        }
        if (t === 'false') {
            event.currentTarget.setAttribute("checked", "true")
        }
    },
    'submit #form-update': function (event, template) {
        event.preventDefault();

        const form = '#form-update';
        let post = $(form).serializeJSON();
        post.status = document.querySelector('#status').checked

        Meteor.call('updatePost', FlowRouter.getParam('_id'), post, function (err) {
            if (err) {
                toastr.error('Ops. ' + error.error);
            } else {
                toastr.success('Curso atualizado com sucesso.');
            }
        });
    }
})
