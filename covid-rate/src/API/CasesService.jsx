import axios from "axios";

export default class CasesService {

    static async getCountries(){
        const response = await axios.get("https://mahabub81.github.io/covid-19-api/api/v1/countries.json");
        var arr = []
        for(let i = 0; i < response.data.length; i++){
            arr.push({label: response.data[i].country_region, value: response.data[i].iso2});
        }
        return arr;
    }

    static async getCovidRateByCountry(datefrom, dateto, status, country){
        const response = await axios.get("https://mahabub81.github.io/covid-19-api/api/v1/countries/"+country+".json");
        if(Object.keys(response.data).length < 1){
            return 0;
        }
        var result = [];
        switch(status){
            case "active":
                response.data.filter((a)=>{if( a.last_updated_at >= datefrom && a.last_updated_at <= dateto){
                    result.push({"last_updated_at": a.last_updated_at, "cases": a.active})}});
                return result;
           case "confirmed":
                response.data.filter((a)=>{if( a.last_updated_at >= datefrom && a.last_updated_at <= dateto){
                result.push({"last_updated_at": a.last_updated_at, "cases": a.confirmed})}});
                return result;
            case "deaths":
                response.data.filter((a)=>{if( a.last_updated_at >= datefrom && a.last_updated_at <= dateto){
                result.push({"last_updated_at": a.last_updated_at, "cases": a.deaths})}});
                return result;
            case "recovered":
                response.data.filter((a)=>{if( a.last_updated_at >= datefrom && a.last_updated_at <= dateto){
                result.push({"last_updated_at": a.last_updated_at, "cases": a.recovered})}});
                return result;
            case "total":
                return response.data.filter((a)=>{if( a.last_updated_at >= datefrom && a.last_updated_at <= dateto){return a}});
        }
    }

    static async getCovidRateByWorld(){
        const response = await axios.get("https://mahabub81.github.io/covid-19-api/api/v1/world-summary-time-series.json");
        if(Object.keys(response.data).length < 1){
            return 0;
        }
        var result = [];
        response.data.filter((a)=>{result.push({"last_updated_at": a.date, "cases": a.confirmed})});
        return result;
    }
    
    static async getWorldSummaryCovidRate(){
        const response = await axios.get("https://mahabub81.github.io/covid-19-api/api/v1/world-summary.json");
        if(Object.keys(response.data).length < 1){
            return 0;
        };
        return response.data
    }

    static async getCountriesSummaryCovidRate(iso2){
        const response = await axios.get("https://mahabub81.github.io/covid-19-api/api/v1/countries.json");
        if(Object.keys(response.data).length < 1){
            return 0;
        };

        return response.data.find((country => ( country.iso2.toLowerCase() == iso2.toLowerCase())));
    }

    

}