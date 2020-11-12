const { green, red } = require('chalk');
const { db } = require('./server/db');

const seed = async () => {
  try {
    await db.sync({ force: true });

  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('An error has occured with seeing. Please see the error logs below.'));
      console.error(err);
      db.close();
    });
}
