const notFoundMiddleware = (req,res)=> res.status(400).send('Route doesnot exist');

export default notFoundMiddleware;