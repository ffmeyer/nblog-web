import './body.html';

import '../../components/common/header.js';
import '../../components/common/navigation.js';
import '../../components/common/page-header.js';
import '../../components/common/panel-tools.js';

Template.body.onCreated(function() {

    $('body').addClass('blank');

});

Template.body.onDestroyed(function() {

    $('body').removeClass('blank');

});