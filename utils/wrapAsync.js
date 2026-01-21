module.exports = (fn) =>{      //Async Wrap-helper function
  return (req, res, next) =>{
    fn(req, res, next).catch(next);
  };
} 
