function calculartotaldeleche(vacasholstein,cantlechexvacaholstein, cantidadtotalvacas,cantlechexvacacriolla){
    lechetotalholstein=vacasholstein* cantlechexvacaholstein
    cantvacascriollas= cantidadtotalvacas - vacasholstein
    lechetotalcriolla= cantvacascriollas * cantlechexvacacriolla
    totalleche=lechetotalcriolla+lechetotalholstein
    return totalleche

}

vacasholstein= 50
cantlechexvacaholstein=20 //litros
cantidadtotalvacas=150
cantlechexvacacriolla=12 //litros

console.log("total de leche: "+calculartotaldeleche(vacasholstein,cantlechexvacaholstein, cantidadtotalvacas,cantlechexvacacriolla))
