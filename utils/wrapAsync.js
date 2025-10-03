// function wrapAsync(fn){
//     return function(req, res, next){
//         fn(req,res,next).catch(next);
//     }
// }

module.exports = (fn) => {
  return (req, res, next) => {
    // console.log("Calling wrapped route for", req.method, req.url);
    fn(req, res, next).catch(next);
  };
};
