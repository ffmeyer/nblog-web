// import { Posts } from '/imports/api/posts/posts.js';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import './add.html';

Template.Adm_postAdd.onRendered(function () {

    $('#form-add').validate({
        messages: {
            title: { required: 'o titulo do artigo é obrigatório.' },
            body: { required: 'o conteúdo do artigo é obrigatório.' },
            image: { required: 'o link da imagem é obrigatório.' },
        }
    });

    toastr.options = {
        "closeButton": true,
        "progressBar": true
    };
});

Template.Adm_postAdd.helpers({

})

Template.Adm_postAdd.events({
    'submit #form-add': function (event, template) {
        event.preventDefault();

        const form = '#form-add';
        let post = $(form).serializeJSON();

        Meteor.call('savePost', post, function (err) {
            if (err) {
                toastr.error('Ops. ' + error.error);
            } else {
                toastr.success('Artigo cadastrado com sucesso.');
                template.find(form).reset();
            }
        });
    }
})
