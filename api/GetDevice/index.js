module.exports = async function (context, req) {
    context.log('Read page links from Cosmos');
  
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: context.bindings.devices
    };
    
};