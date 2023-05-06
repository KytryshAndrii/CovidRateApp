export default function preparedata (filter){
    var dateto;
    var datefrom;
    if(filter.data_from.getMonth() === 0){
        datefrom = filter.data_from.getFullYear() + "-" + "1" + "-" + filter.data_from.getDate();
        dateto = filter.data_to.getFullYear() + "-" + filter.data_to.getMonth() + "-" + filter.data_to.getDate();
    }else if(filter.data_to.getMonth() === 0){
        datefrom = filter.data_from.getFullYear() + "-" + filter.data_from.getMonth() + "-" + filter.data_from.getDate()
        dateto = filter.data_to.getFullYear() + "-" + "1" + "-" + filter.data_to.getDate()

    }else{
        datefrom = filter.data_from.getFullYear() + "-" + filter.data_from.getMonth() + "-" + filter.data_from.getDate()
        dateto = filter.data_to.getFullYear() + "-" + filter.data_to.getMonth() + "-" + filter.data_to.getDate()
    }
    return [datefrom, dateto]
}