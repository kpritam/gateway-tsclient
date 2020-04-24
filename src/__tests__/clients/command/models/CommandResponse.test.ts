import {
  CommandServiceHttpMessage,
  Observe,
  Oneway,
  Query,
  Setup,
  Submit,
  Validate
} from 'clients/command/models/PostCommand'
import * as Commands from '../../../jsons/commandModels.json'
import {
  CommandServiceWsMessage,
  QueryFinal,
  SubscribeCurrentState
} from '../../../../clients/command/models/WsCommand'

const setupCommand = Setup('CSW.ncc.trombone', 'move', [], ['obs001'])
const observeCommand = Observe('CSW.ncc.trombone', 'move', [], ['obs001'])

test('Submit command', () => {
  const observeSubmit: CommandServiceHttpMessage = Submit(observeCommand)

  expect(Commands.Submit).toEqual(observeSubmit)
})

test('Oneway command', () => {
  const setupOneway: CommandServiceHttpMessage = Oneway(setupCommand)

  expect(Commands.Oneway).toEqual(setupOneway)
})

test('Validate command', () => {
  const observeValidate: CommandServiceHttpMessage = Validate(observeCommand)

  expect(Commands.Validate).toEqual(observeValidate)
})

test('Query command', () => {
  const queryCommand: CommandServiceHttpMessage = Query('33b4515c-b226-491b-9626-898244490151')

  expect(Commands.Query).toEqual(queryCommand)
})

test('QueryFinal command', () => {
  const queryFinalCommand: CommandServiceWsMessage = QueryFinal(
    '382aec51-928d-4a8d-8f16-8880c3f35d31',
    10000
  )

  expect(Commands.QueryFinal).toEqual(queryFinalCommand)
})

test('SubscribeCurrentState command', () => {
  const subscribeCurrentState: CommandServiceWsMessage = SubscribeCurrentState(
    new Set(['temp', 'position'])
  )

  expect(Commands.SubscribeCurrentState).toEqual(subscribeCurrentState)
})