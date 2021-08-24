/* eslint-disable require-await */

'use strict';

setTimeout(() => {
    before(async() => {
        try {
            console.log('Setup run');
            // await requestService.login();
        } catch (err) {
            console.log('login hook ');
            console.log(err);
        }
    });
});

setTimeout(() => {
    after(async() => {
        try {
            // await requestService.logOut();
            console.log('try block logout');
        } catch (err) {
            console.log('catch block logout hook');
            console.log(err);
        }
    });
});
