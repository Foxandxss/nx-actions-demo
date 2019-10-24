module.exports = {
  name: 'actionsdemo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/actionsdemo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
