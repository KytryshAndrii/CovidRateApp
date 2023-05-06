export default function Key (divider){
    const d = new Date();
    let  c = Math.floor((Math.random() * 10000)+1);
    return ((d.getMilliseconds() / d.getUTCHours()) * 3.141592 * c) / divider * c;

}