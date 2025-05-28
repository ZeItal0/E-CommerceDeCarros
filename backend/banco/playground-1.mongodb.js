// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("EcommerceVeiculos");

// busca no banco sem filtros
db.Automoveis.find();

// busca no banco com filtro
//db.Automoveis.find({marca: "Toyota"});

// busca no banco com filtro ignorando Letras Maiusculas e Minusculas
//db.Automoveis.find({ marca: { $regex: "toyota", $options: "i" } });

// db.Automoveis.updateOne(
//   { _id: ObjectId("6820d9ed230d4148a5b50f7d") },
//   {
//     $set: {
//       cor: "Silver",
//       categoria: "Popular",
//       imagem: "/ImagensVeiculos/Hilux-Prata.png",
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("682108913d9396f8773350a2") },
//   {
//     $set: {
//       cor: "White",
//       categoria: "Popular",
//       imagem: "/ImagensVeiculos/OnixLT-Branco.png",
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("682108913d9396f8773350a3") },
//   {
//     $set: {
//       cor: "Red",
//       categoria: "Popular",
//       imagem: "/ImagensVeiculos/GolG6-Vermelho.png",
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("682108913d9396f8773350a4") },
//   {
//     $set: {
//       cor: "Gray",
//       categoria: "Popular",
//       imagem: "/ImagensVeiculos/FiatStrada-Cinza.png",
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("6824fb3c5dd8b6192d947e17") },
//   {
//     $set: {
//       cor: "Black",
//       categoria: "Popular",
//       imagem: "/ImagensVeiculos/JeepCompass-Preto.png",
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("6824fc755dd8b6192d947e19") },
//   {
//     $set: {
//       cor: "Gray",
//       categoria: "Popular",
//       imagem: "/ImagensVeiculos/FiatUno-Cinza.png",
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("6824fd0c5dd8b6192d947e1b") },
//   {
//     $set: {
//       cor: "Red",
//       categoria: "Popular",
//       imagem: "/ImagensVeiculos/PalioAttractive-Vermelho.png",
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("6824fde65dd8b6192d947e1c") },
//   {
//     $set: {
//       cor: "Blue",
//       categoria: "Esportivo",
//       imagem: "/ImagensVeiculos/Bmw320I-Azul.png",
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("6824fa4d5dd8b6192d947e15") },
//   {
//     $set: {
//       cor: "Black",
//       categoria: "Esportivo",
//       imagem: "/ImagensVeiculos/Corolla-Preto.png",
//     },
//   }
// );

// db.Usuarios.updateOne(
//     { _id: ObjectId("6820db30230d4148a5b50f80") },
// {$set: {tipoUsuario: "Gerente"}});

// db.Automoveis.updateOne(
//   { _id: ObjectId("6820d9ed230d4148a5b50f7d") },
//   {
//     $set: {
//       detalhesTecicos: {
//         motorizacao: "2.0 230hp",
//         peso: 1700,
//         combustivel: "Diesel S10",
//         velociadeMaxima: "230 km/h",
//       },
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("682108913d9396f8773350a2") },
//   {
//     $set: {
//       detalhesTecicos: {
//         motorizacao: "1.0 79hp",
//         peso: 900,
//         combustivel: "Gasolina, Alcool",
//         velociadeMaxima: "180 km/h",
//       },
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("682108913d9396f8773350a3") },
//   {
//     $set: {
//       detalhesTecicos: {
//         motorizacao: "1.5 110hp",
//         peso: 1000,
//         combustivel: "Gasolina",
//         velociadeMaxima: "200 km/h",
//       },
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("682108913d9396f8773350a4") },
//   {
//     $set: {
//       detalhesTecicos: {
//         motorizacao: "1.8 179hp",
//         peso: 1150,
//         combustivel: "Gasolina",
//         velociadeMaxima: "200 km/h",
//       },
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("6824fb3c5dd8b6192d947e17") },
//   {
//     $set: {
//       detalhesTecicos: {
//         motorizacao: "2.0 160hp",
//         peso: 1300,
//         combustivel: "Gasolina",
//         velociadeMaxima: "220 km/h",
//       },
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("6824fc755dd8b6192d947e19") },
//   {
//     $set: {
//       detalhesTecicos: {
//         motorizacao: "1.0 89hp",
//         peso: 800,
//         combustivel: "Gasolina",
//         velociadeMaxima: "180 km/h",
//       },
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("6824fd0c5dd8b6192d947e1b") },
//   {
//     $set: {
//       detalhesTecicos: {
//         motorizacao: "1.6 115hp",
//         peso: 1500,
//         combustivel: "Gasolina",
//         velociadeMaxima: "190 km/h",
//       },
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("6824fde65dd8b6192d947e1c") },
//   {
//     $set: {
//       detalhesTecicos: {
//         motorizacao: "3.2 360hp",
//         peso: 1200,
//         combustivel: "Gasolina",
//         velociadeMaxima: "320 km/h",
//       },
//     },
//   }
// );

// db.Automoveis.updateOne(
//   { _id: ObjectId("6824fa4d5dd8b6192d947e15") },
//   {
//     $set: {
//       detalhesTecicos: {
//         motorizacao: "2.0 230hp",
//         peso: 1350,
//         combustivel: "Gasolina",
//         velociadeMaxima: "260 km/h",
//       },
//     },
//   }
// );
// db.Automoveis.insertOne({
//   marca: "Byd",
//   modelo: "Song Plus",
//   cor: "Blue",
//   valor: 230000,
//   descricao: "Eletrico, 4 portas, Automatico",
//   status: "Novo",
//   ano: 2024,
//   quilometragem: 0,
//   categoria: "Esportivo",
//   imagem: "/ImagensVeiculos/BydSong-Azul.png",
//   detalhesTecicos: {
//     motorizacao: "230hp",
//     peso: 2300,
//     combustivel: "Eletrico",
//     velociadeMaxima: "240 km/h",
//   },
// });

// db.Usuario.insertOne({
//   nome: "Italo Martinez",
//   email: "Italo@gmail.com",
//   senha: "12345",
//   tipoUsuario: "Gerente",
//   endereco: {
//     rua: "avenida jose bonifacio",
//     bairro: "são cristovão",
//     numero: 9856,
//     cep: "56503-010",
//   },
// });

// db.Usuario.insertOne({
//   nome: "Richades Matheus",
//   email: "PrincipeChales@gmail.com",
//   senha: "12345",
//   tipoUsuario: "Funcionario",
//   endereco: {
//     rua: "rua nova",
//     bairro: "bairro do assalto",
//     numero: 171,
//     cep: "55270-000",
//   },
// });

// db.Usuario.insertOne({
//   nome: "Caiu Fernando",
//   email: "Ferdinando@gmail.com",
//   senha: "12345",
//   tipoUsuario: "Funcionario",
//   endereco: {
//     rua: "coabe 2",
//     bairro: "São cristovão",
//     numero: 69,
//     cep: "56503-155",
//   },
// });

// db.Usuario.insertOne({
//   nome: "Jerfesson Melo",
//   email: "Jerfina@gmail.com",
//   senha: "12345",
//   tipoUsuario: "Funcionario",
//   endereco: {
//     rua: "Frei damião",
//     bairro: "novo horizonte",
//     numero: 59,
//     cep: "56540-000",
//   },
// });

// db.Usuario.insertOne({
//   nome: "Pedro igor ",
//   email: "Pedrinho@gmail.com",
//   senha: "12345",
//   tipoUsuario: "Funcionario",
//   endereco: {
//     rua: "Sucupira",
//     bairro: "Caipora",
//     numero: 75,
//     cep: "56503-145",
//   },
// });

// db.Automoveis.insertOne({
//   marca: "Volvo",
//   modelo: "Volvo FH",
//   cor: "silver",
//   valor: 450000,
//   descricao: "E um Caminhão!",
//   status: "Novo",
//   ano: 2024,
//   quilometragem: 0,
//   categoria: "popular",
//   imagem: "/ImagensVeiculos/VolvoFH-Cinza.png",
//   detalhesTecicos: {
//     motorizacao: "G13 500hp",
//     peso: 9080,
//     combustivel: "Diesel",
//     velociadeMaxima: "160 km/h",
//   },
// });

// db.Automoveis.insertOne({
//   marca: "Scania",
//   modelo: "Scania R Line",
//   cor: "grenw",
//   valor: 430000,
//   descricao: "E um Caminhão!",
//   status: "Novo",
//   ano: 2024,
//   quilometragem: 0,
//   categoria: "popular",
//   imagem: "/ImagensVeiculos/ScaniaRLine-verde.png",
//   detalhesTecicos: {
//     motorizacao: "16L 700hp",
//     peso: 9850,
//     combustivel: "Diesel",
//     velociadeMaxima: "180 km/h",
//   },
// });
