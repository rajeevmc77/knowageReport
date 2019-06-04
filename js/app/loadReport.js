var user = 'biuser';
var password = 'user@itschool';

Sbi.sdk.services.setBaseUrl({
    protocol: 'http',
    host: 'localhost',
    port: '80',
    contextPath: 'knowage',
    controllerPath: 'servlet/AdapterHTTP'
});

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

execTest2 = function() {
    var html = Sbi.sdk.api.getDocumentHtml({
        documentLabel: 'BB_UA_DATA_TREND_RPT',
        executionRole: '/user',
        parameters: { pSchoolId: 11075 },
        displayToolbar: false,
        canResetParameters: false,
        iframe: {
            height: '500px',
            width: '100%',
            style: 'border: 0px;'
        }
    });
    // var node = htmlToElement(html);
    // var srcUrl = node.getAttribute('src');
    // console.log(html);
    // console.log(srcUrl);
    // var newNode = '<object data="' + srcUrl + '" width="400" height="300" type="text/html">' +
    //     '</object>';
    // console.log(newNode);
    // document.getElementById('knowageArea').innerHTML = newNode;
    document.getElementById('knowageArea').innerHTML = html;
};



var cb = function(result, args, success) {

    if (success === true) {
        console.log("authentication passed");
        execTest2();
    } else {
        alert('ERROR: Wrong username or password');
    }
};

doLoginAndExecute = function() {
    Sbi.sdk.api.authenticate({
        params: {
            user: user,
            password: password
        },
        callback: {
            fn: cb,
            scope: this
        }
    });
};