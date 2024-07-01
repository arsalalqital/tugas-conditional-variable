
//conditional variable//
const tinggiBadan = 155;

const ketentuan = tinggiBadan >= 165 ? "selamat anda lolos ke tahap selanjutnya" : "maaf anda belum lolos dan coba tahun depan";
console.log(ketentuan); 

//assign variable//

const infutNilai = 65

const kondisiAnd = infutNilai >=65 && "nilai yang baik"
console.log(kondisiAnd);


const jumlahMobil = 7

const kondisiOr = jumlahMobil >=4|| "kategori orang biasa aja"
console.log(kondisiOr);


//map and filter 

const sepatuBola =[
    {
        merk: "adidas",
        harga: 400000
    },
    
    {
        merk: "puma",
        harga: 500000
    },

    {
        merk: "specs",
        harga: 300000
    },

    {
        merk: "nike",
        harga: 700000,
    }
        
];

const listHarga = sepatuBola.map((value)=>value.merk);
console.log(listHarga)


const hargaSepatu =[
    {
        merk: "adidas",
        harga: 400000
    },
    
    {
        merk: "puma",
        harga: 500000
    },

    {
        merk: "specs",
        harga: 300000
    },

    {
        merk: "nike",
        harga: 700000,
    }
        
];

const hargaTerbaik = hargaSepatu.filter((value)=>value.harga >= 400000);
console.log(hargaTerbaik)