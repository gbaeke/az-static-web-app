module.exports = async function (context, req) {
    context.log('Send devices from Cosmos');
  
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: context.bindings.devices
    };
    
};