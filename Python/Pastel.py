
costoporcion=2000
Porciones= 7
dinerodisponible=20000

def caculardevuelta(costoporcion,Porciones,  dinerodisponible):
    Cambio= dinerodisponible - (Porciones * costoporcion )
    return Cambio
print('devuelta: ',caculardevuelta(costoporcion,Porciones,dinerodisponible ))