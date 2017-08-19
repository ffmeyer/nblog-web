import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/admin/posts/list.js';
import '../../ui/pages/admin/posts/add.js'
import '../../ui/pages/admin/posts/update.js'
import '../../ui/pages/not-found/not-found.js';

FlowRouter.notFound = {
    action() {
        BlazeLayout.render('App_body', { content: 'App_notFound' });
    },
};

FlowRouter.route('/', {
    name: 'App.home',
    action() {
        BlazeLayout.render('App_body', { content: 'Adm_postList' });
    },
});

FlowRouter.route('/admin/posts', {
    action: function() {
        BlazeLayout.render("App_body", { content: "Adm_postList" });
    }
});

FlowRouter.route('/admin/posts/add', {
    action: function() {
        BlazeLayout.render("App_body", { content: "Adm_postAdd" });
    }
});

FlowRouter.route('/admin/posts/update/:_id', {
    action: function() {
        BlazeLayout.render("App_body", { content: "Adm_postUpdate" });
    }
});