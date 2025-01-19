class ExpressError extends Error{
    constructor(ststusCode,message){
        super()
        this.statusCode=this.statusCode;
        this.message=message;
    }
}

module.exports=ExpressError;