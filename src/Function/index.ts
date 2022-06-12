const formatNumber = (number:string | number)=>{
    return Number(number).toLocaleString('en',{ minimumFractionDigits: 2,maximumFractionDigits: 2 })

}

export {formatNumber}