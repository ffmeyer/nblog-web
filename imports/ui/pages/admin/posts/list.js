import { Meteor } from 'meteor/meteor';
import './list.html';

Template.Adm_postList.onCreated(function () {

    Meteor.call('getPosts', function(err, res) {
        Session.set('posts_api', res);
    });

});

Template.Adm_postList.onRendered(function () {
    toastr.options = {
        "closeButton": true,
        "progressBar": true
    };
});

Template.Adm_postList.helpers({

    postsApi: function() {
        return Session.get('posts_api');
    }

});

Template.Adm_postList.events({

    'click #delete' () {
        Meteor.call('deletePost', this.id, function (err) {
            if (err) {
                toastr.error('Ops. ' + err);
            } else {
                toastr.success('Artigo removido com sucesso.');

                setTimeout(function () {
                    document.location.reload(true);
                }, 3000);

            }
        });
    },

    'click #update' () {
        FlowRouter.go('/admin/posts/update/' + this.id)
    }

})