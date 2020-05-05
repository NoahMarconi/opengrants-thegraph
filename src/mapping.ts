import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  LogSignal,
  LogFundingComplete,
  LogGrantCancellation,
  LogFunding,
  LogRefund,
  LogPayment,
  LogPaymentApproval,
  LogRefundApproval
} from "../generated/Contract/Contract"
import { Fund, Payment } from "../generated/schema"

export function handleLogSignal(event: LogSignal): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  // let entity = ExampleEntity.load(event.transaction.from.toHex())

  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (entity == null) {
  //   entity = new ExampleEntity(event.transaction.from.toHex())

  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }

  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // // Entity fields can be set based on event parameters
  // entity.support = event.params.support
  // entity.signaler = event.params.signaler

  // // Entities can be written to the store with `.save()`
  // entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.fundingExpiration(...)
  // - contract.manager(...)
  // - contract.grantCancelled(...)
  // - contract.grantees(...)
  // - contract.contractExpiration(...)
  // - contract.totalPayed(...)
  // - contract.donors(...)
  // - contract.totalRefunded(...)
  // - contract.currency(...)
  // - contract.targetFunding(...)
  // - contract.pendingPayments(...)
  // - contract.totalFunding(...)
  // - contract.isManager(...)
  // - contract.availableBalance(...)
  // - contract.canFund(...)
  // - contract.remainingAllocation(...)
  // - contract.fund(...)
  // - contract.approvePayout(...)
  // - contract.withdrawRefund(...)
}

export function handleLogFundingComplete(event: LogFundingComplete): void { }

export function handleLogGrantCancellation(event: LogGrantCancellation): void { }

export function handleLogFunding(event: LogFunding): void {
  let fund = new Fund(event.params.donor.toHex());
  fund.contract = event.address
  fund.donor = event.params.donor
  fund.amount = event.params.value
  fund.save()
}

export function handleLogRefund(event: LogRefund): void { }

export function handleLogPayment(event: LogPayment): void {
  let payment = new Payment(event.params.grantee.toHex());
  payment.grantee = event.params.grantee
  payment.contract = event.address
  payment.amount = event.params.value
  payment.save()
}

export function handleLogPaymentApproval(event: LogPaymentApproval): void { }

export function handleLogRefundApproval(event: LogRefundApproval): void { }
