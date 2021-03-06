import { Meteor } from 'meteor/meteor';
import mapToAcl from '/imports/startup/mapToAcl';
import userLogout from './methods/userLogout';
import validateAuthToken from './methods/validateAuthToken';
import setEmojiStatus from './methods/setEmojiStatus';
import assignPresenter from './methods/assignPresenter';
import changeRole from './methods/changeRole';

Meteor.methods(mapToAcl(['methods.userLogout', 'methods.setEmojiStatus', 'methods.assignPresenter', 'methods.changeRole',
], {
  userLogout,
  setEmojiStatus,
  assignPresenter,
  changeRole,
}));

Meteor.methods({ validateAuthToken2x: validateAuthToken });
