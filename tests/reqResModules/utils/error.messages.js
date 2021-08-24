(() => {
    'use strict';

    const defaultErrorStatusMap = {
        400: 'INVALID_REQUEST',
        401: 'REQUEST_DENIED',
        402: 'PRODUCT_NOT_BOOKED',
        403: 'REQUEST_DENIED',
        404: 'NOT_FOUND',
        422: 'INVALID_REQUEST',
        500: 'ERROR'
    };

    module.exports = defaultErrorStatusMap;
})();
