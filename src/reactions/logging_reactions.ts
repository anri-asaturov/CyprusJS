import { autorun } from 'mobx';
import App from '../app';
import { disposableReaction } from '../helpers/reaction';

export default class LoggingReactions {
  constructor(private app: App) {}
}
