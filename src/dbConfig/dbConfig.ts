import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.NEXT_PUBLIC_CONNECTION_STRING!).then(()=>
        {
            console.log("database connected")
        }).catch((e)=>
        {
            console.log(e)
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}