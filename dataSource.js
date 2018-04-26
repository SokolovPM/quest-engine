const { lstatSync, readdirSync, readFileSync } = require('fs')
const { join } = require('path')
const { forEach } =  require('lodash');

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

module.exports = {
  getListOfQuest: function () {
    const listOfDirectories = getDirectories('./quests');

    const result = []
    forEach(listOfDirectories, path => {
      var info = JSON.parse(readFileSync(`${path}/info.json`, 'utf8'));
      result.push(info);
    })

    return result;
  }
}
