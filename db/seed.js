const Roaster = require('../models/Roasters')
const Coffee = require('../models/Coffee')

Roaster.find({}).remove(() => {
    //.find and .remove are all mongoose functions
    Coffee.find({}).remove(() => {
      //
      let roastHouse = Roaster.create({
        companyName: "RoastHouse",
        memberDate:" ",
        location: "Cleveland, OH",
        body: "We pride ourselves in the beauty of our process",
        numOrders: 17
      }).then((roaster) => {
        Promise.all([
          Coffee.create({
            coffeeName: "bolders delight",
            originDate: 2014,
          }).then((coffee) => {
            roaster.coffees.push(coffee);
          }),
        ]).then(() => {
          roaster.save();
        });
      });
    });
  });

  