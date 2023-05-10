import store from '../store'

export default function (to,from, next){
    //console.log('to:', to,'from:', from);
    if (to.params.room !== undefined && to.params.room.length > 1){
        next()
    }else{
        next('/')
    }
}
