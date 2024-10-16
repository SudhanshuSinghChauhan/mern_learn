import express from 'express';
export const userController ={
    profile(request, response){
        const userName = request.params.userName;
        console.log("all params",userName);
        response.json({message:userName+' profile'});

    },
    login(request, response){
        const body = request.body;
        console.log("rwq body is",body);
        response.json({message:'login'});

    },
    register(req, res){
        res.json({message:'register'})

    }
}