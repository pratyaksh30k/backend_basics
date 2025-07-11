const asyncHandler = (fn) => async(req,res,next) => {
  try{
    await fn(req,res,next);
  }catch(err){
    res.status(err.code || 500).json({
      message:err.message,
      success:false
    })
  }
}

export default asyncHandler;