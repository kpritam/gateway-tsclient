import { CommandServiceHttpMessage } from 'clients/command/models/PostCommand'
import { CommandServiceWsMessage } from 'clients/command/models/WsCommand'
import { SequencerPostRequest } from 'clients/sequencer/models/PostCommand'
import { SequencerWebsocketRequest } from 'clients/sequencer/models/WsCommand'
import { ComponentId } from 'models/ComponentId'

export class GatewayComponentCommand {
  readonly _type: 'ComponentCommand' = 'ComponentCommand'
  constructor(
    readonly componentId: ComponentId,
    readonly command: CommandServiceHttpMessage | CommandServiceWsMessage
  ) {}
}

export class GatewaySequencerCommand {
  readonly _type: 'SequencerCommand' = 'SequencerCommand'
  constructor(
    readonly componentId: ComponentId,
    readonly sequencerCommand: SequencerPostRequest | SequencerWebsocketRequest
  ) {}
}
