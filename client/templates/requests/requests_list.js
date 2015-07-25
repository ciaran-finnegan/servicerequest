/**
 * Created by cfinnegan on 25/07/15.
 */
var postsData = [ {
    title: 'facebook',
    url: 'http://facebook.com'
},
    {
        title: 'google',
        url: 'http://google.com'
    },
    {
        title: 'csc',
        url: 'http://csc.com'
    }
];
Template.requestsList.helpers({
    requests: postsData
});