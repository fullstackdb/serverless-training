import serverless from 'serverless-http';

/**
 * @public
 * @function withServerless
 * @param {Function} app - koa app
 * @uses serverless
 * @returns {Function} - handler that helps invoke koa app as AWS Lamda properly
 */
const withServerless = app => {
    if (!app) {
        throw new Error("[withServerless] app hasn't been passed");
    }

    try {
        return serverless(app);
    } catch (error) {
        throw new Error(
            `[withServerless] unexpected error has occured ${JSON.stringify(error)}`
        );
    }
};

export default withServerless;
