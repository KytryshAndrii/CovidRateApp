import axios from "axios";

export default class CasesService {

    static async getCountries(){
        const response = await axios.get("https://api.covid19api.com/countries", {
            headers: {"Access-Control-Allow-Origin": "*"}
        });
        var arr = []
        for(let i = 0; i < response.data.length; i++){
            arr.push({label: response.data[i].Country, value: response.data[i].ISO2});
        }
        return arr;
    }

    static async getCovidRateByCountry(datefrom, dateto, status, country){
        const response = await axios.get("https://api.covid19api.com/country/"+country+"/status/"+status+"?from="+datefrom+"T00:00:00Z"+"&to="+dateto+"T00:00:00Z", {
            headers: {"Access-Control-Allow-Origin": "*"}
        });
        if(Object.keys(response.data).length < 1){
            return 0;
        }
        return response.data
    }
    
    static async getWorldSummaryCovidRate(){
        const response = await axios.get("https://api.covid19api.com/summary", {
            headers: {"Access-Control-Allow-Origin": "*"}
        });
        if(Object.keys(response.data.Global).length < 1){
            return 0;
        };
        return [response.data.Global, response.data.Countries]
    }

}