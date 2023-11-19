import ListFits from "@/Assets/Api/fit.json";

const GetAllFits = () => {
    return ListFits;
}


const GetOneFits = async (id) => {
    const OneFit = await ListFits.find(fit => fit.id === id)
    return OneFit
}

export const FitService = {
    GetAllFits, GetOneFits
}

export default FitService