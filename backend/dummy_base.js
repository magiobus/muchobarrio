
//conn = new Mongo();

db = connect('mongodb://coffi:coffi@ds029745.mlab.com:29745/barrio')

//db = conn.getDB("templo");

db.users.insert({'name': 'Bety', type:'princeso', 'level': 1})
db.users.insert({'name': 'Rabbit', type:'papu', 'level': 2})
db.users.insert({'name': 'Robert', type:'te falta barrio', 'level': 3})
db.users.insert({'name': 'Magio', type:'lady barrio', 'level': 4})
db.users.insert({'name': 'Rebe', type:'tu barrio te respalda', 'level': 5})
db.users.insert({'name': 'Luna', type:'barrio pesado', 'level': 6})
db.users.insert({'name': 'Coffi', type:'mucho barrio', 'level': 7})


db.quests.insert({
  title: 'Pistear como Campeón',
  points: 90,
  description: 'Tómate 3 Mezcales en El Andara en menos de media hora',
  time: 200,
  place: {
    lat: 1,
    lon: 1
  }
})
db.quests.insert({
  title: '¡Virgencita Plis!',
  points: 100,
  description: 'Una Selfie, persignándote enfrente de la Catedral',
  time: 200,
  place: {
    lat: 1,
    lon: 1
  }
})
db.quests.insert({
  title: 'Sobredosis de Ternura',
  points: 200,
  description: 'Pide "Mátalas" a los Mariachis de Plaza Garibaldi',
  time: 200,
  place: {
    lat: 1,
    lon: 1
  }
})
db.quests.insert({
  title: 'A la Antigüita',
  points: 60,
  description: 'Compra antiguedades en la Lagunilla',
  time: 200,
  place: {
    lat: 1,
    lon: 1
  }
})
db.quests.insert({
  title: 'Tuvimo un Sirenito',
  points: 80,
  description: 'Tómate una Selfie con el Neptuno de la Alameda',
  time: 200,
  place: {
    lat: 1,
    lon: 1
  }
})
db.quests.insert({
  title: 'Corte Aerodinámico',
  points: 50,
  description: 'Córtate el cabello en Tepito',
  time: 200,
  place: {
    lat: 1,
    lon: 1
  }
})
db.quests.insert({
  title: 'Chairo Power',
  points: 80,
  description: 'Visita tres museos en un día',
  time: 200,
  place: {
    lat: 1,
    lon: 1
  }
})
