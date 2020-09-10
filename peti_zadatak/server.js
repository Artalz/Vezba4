let artikli = [
    {
        "id": 1,
        "naziv": Jogurt,
        "cena": 120,
        "imeKompanije": Imlek
    },
    {
        "id": 2,
        "naziv": Mleko,
        "cena": 115,
        "imeKompanije": SokoStark
    }
]

function dodajArtikal(id, naziv, cena, imeKompanije){
    let novi = {
        "id": id,
        "naziv": naziv,
        "cena": cena,
        "imeKompanije": imeKompanije
    };
    artikli.push(novi);
}

function sviArtikli(imeKopmanije){
    let temp = [];
    for(let i = 0; i < artikli.length; i++){
        if (artikli[i].imeKompanije == imeKopmanije){
            temp.push(artikli[i]);
            return temp;
        }else{
            return artikli;
        }
    }
}

function obrisiArtikal(id){
    let tmp = [];
    for (let i = 0; i < artikli.length; i++){
        if (artikli[i].id != id){
            tmp.push(artikli[i]);
        }
    }
    artikli = tmp
    return artikli
}

function izmeniArtikal(id, naziv, cena, imeKompanije){
    for (let i = 0; i < artikli.length; i++){
        if (artikli[i].id == id){
            artikli[i].naziv = naziv;
            artikli[i].cena = cena;
            artikli[i].imeKompanije = imeKompanije;
        }
    }
}